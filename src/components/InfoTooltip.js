import successTip from '../images/Union.svg';
import failTip from '../images/Fail.svg';

function InfoTooltip() {
  return (
    <div className={`popup`}>
      <div className='popup__container popup__container_reg-response'>
        <img src={successTip} alt={'success'} className='popup__reg-image' />
        <h2 className='popup__title popup__reg-title'>
          Вы успешно зарегистрировались!
        </h2>
        <button className='popup__close' type='button'></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
