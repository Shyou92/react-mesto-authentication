import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/currentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  const onEditAvatar = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const onEditProfile = () => {
    setIsEditProfilePopupOpen(true);
  };

  const onAddPlace = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  const handleCurrentUser = (data) => {
    setCurrentUser(data);
  };

  const handleLikeCard = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .setLike(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((error) => console.log(error));
  };

  const handleCardDelete = (card) => {
    api
      .deleteCard(card._id)
      .then((deletedCard) => {
        const rerenderInitialCards = cards.filter((c) => c._id !== card._id);
        setCards(rerenderInitialCards);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((newUserInfo) => {
        setCurrentUser(newUserInfo);
        setIsEditProfilePopupOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateAvatar = (data) => {
    api
      .setAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const handleAddPlaceSubmit = (data, link) => {
    api
      .addCard(data, link)
      .then((res) => {
        setCards([res, ...cards]);
        setIsAddPlacePopupOpen(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([res, data]) => {
        handleCurrentUser(res);
        setCards(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <CurrentUserContext.Provider value={currentUser}>
          <div className='page'>
            <Header />
            <Route path='/sign-in' component={Login} />
            <Route path='/sign-up' component={Register} />
            <Route exact path='/' loggedIn={loggedIn} userData={userData}>
              <Main
                onEditAvatar={onEditAvatar}
                onEditProfile={onEditProfile}
                onAddPlace={onAddPlace}
                onCardClick={handleCardClick}
                сards={cards}
                onCardLike={handleLikeCard}
                onCardDelete={handleCardDelete}
              />
              <Footer />
            </Route>
            <EditAvatarPopup
              isOpened={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
            <EditProfilePopup
              isOpened={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
            <AddPlacePopup
              isOpened={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlaceSubmit}
            />
            <ImagePopup
              card={selectedCard || {}}
              isOpened={selectedCard && 'popup_is-opened'}
              onCardClick={handleCardClick}
              onClose={closeAllPopups}
            />
          </div>
        </CurrentUserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
