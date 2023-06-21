import React from 'react';
import group from '../../../assets/images/Home/Start/group 1.svg'
import battery from '../../../assets/images/Home/Start/battery 1.svg'
import info from '../../../assets/images/Home/Start/information 1.svg'
import car from '../../../assets/images/Home/Start/BMW-i3 1.png'


const Start = () => {
    return (
        <section className="start">
            <div className="container">
                <div className="start__content">
                    <div className="start__left">
                        <h1 className="start__title">Электромобили в Липецке в наличии</h1>
                        <p className="start__text">Узнайте, как использовать самый экологичный автомобиль в повседневной жизни</p>
                        <div className="start__btns">
                            <button className="start__btn-left btn__green">Тест драйв</button>
                            <button className="start__btn-right btn__red">Аренда электромобиля</button>
                        </div>
                    </div>
                    <ul className="start__list">
                        <li className="start__item">
                            <i className="start__item-icon">
                                <img src={group} alt=""/>
                            </i>
                            <span className="start__item-desc">Приобщись к сообществу любителей современных экологичных  автомобилей</span>
                        </li>
                        <li className="start__item">
                            <i className="start__item-icon">
                                <img src={info} alt=""/>
                            </i>
                            <span className="start__item-desc">Полезная информация об электромобилях</span>
                        </li>
                        <li className="start__item">
                            <i className="start__item-icon">
                                <img src={battery} alt=""/>
                            </i>
                            <span className="start__item-desc">Развитая сеть зарядных устройств</span>
                        </li>
                    </ul>
                </div>
                <img src={car} alt="" className="start__car"/>
            </div>
        </section>
    );
};

export default Start;