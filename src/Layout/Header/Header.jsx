import React, {useState} from 'react';
import logo from '../../assets/images/header/header_logo.png'
import whatsapp from '../../assets/images/header/whatsapp (1).svg'
import whatsappG from '../../assets/images/header/whatsapp_g.svg'
import telegramG from '../../assets/images/header/telegram_g.svg'
import viberG from '../../assets/images/header/viber_g.svg'
import telegram from '../../assets/images/header/telegram.svg'
import viber from '../../assets/images/header/viber.svg'
import call from '../../assets/images/header/call 1.svg'

const Header = () => {

    const [tg, setTg] = useState(false);
    const [wb, setWb] = useState(false);
    const [vb, setVb] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h1 className="header__title">
                        <img src={logo} alt=""/>
                    </h1>
                    <nav className="header__nav">
                        <ul className="header__icons">
                            <li onPointerLeave={()=>setTg(prev => !prev)} onPointerEnter={()=>setTg(prev => !prev)} className="header__icon">
                                <img src={tg===false ? telegram : telegramG} alt=""/>
                            </li>
                            <li onPointerLeave={()=>setWb(prev => !prev)} onPointerEnter={()=>setWb(prev => !prev)} className="header__icon">
                                <img src={wb===false ? whatsapp : whatsappG} alt=""/>
                            </li>
                            <li onPointerLeave={()=>setVb(prev => !prev)} onPointerEnter={()=>setVb(prev => !prev)} className="header__icon">
                                <img src={vb===false ? viber : viberG} alt=""/>
                            </li>
                        </ul>
                        <div className="header__call">
                            <i className="header__call-icon">
                                <img src={call} alt=""/>
                            </i>
                            <span className="header__call-number">
                            +7 4742 90 90 90
                        </span>
                        </div>
                        <button className="header__btn btn__green">
                            Заказать звонок
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;