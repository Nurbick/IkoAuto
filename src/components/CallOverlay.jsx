import React from 'react'
import callOverlay from '../assets/images/overlay.png'

const CallOverlay = () => {
    return (
        <div className='callOverlay'>
            <div className='callOverlay__content'>
                <div className="callOverlay__left">
                    <img src={callOverlay} alt="" className="callOverlay__img" />
                </div>
                <div className="callOverlay__right">
                <div className="callOveray__exit">X</div>
                    <div className="callOverlay__form">
                        <h1 className="callOverlay__title">Заказать обратный звонок</h1>
                        <p className="callOverlay__desc">Отправьте нам свой номер телефона и мы Вам позвоним!</p>
                        <input placeholder='Имя' className='callOverlay__input' type="text" />
                        <input placeholder='Телефон' className='callOverlay__input' type="text" />
                        <div className="callOverlay__select">
                            <input type="checkbox" className="callOverlay__checkbox" />
                            <span className='callOverlay__select-desc'>Я принимаю пользовательское соглашение</span>
                        </div>
                        <button className="callOverlay__btn">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallOverlay