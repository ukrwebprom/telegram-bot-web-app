import './home.css';
import { Link } from "react-router-dom";
import { useTelegram } from '../../hooks/useTelegram';
import {ReactComponent as CloseIcon} from '../../images/close.svg';

export const Home = () => {
    const {close} = useTelegram();
    return(
        <div className="home-container">
            <button type="button" className='close-btn' onClick={close}><CloseIcon className='close-icon'/></button>
            <header>
            <h1 className='main-title'>Yurii Pochtiennykh</h1>
            <ul className='expertise-list'>
                <li>Junior Full-Stack Developer</li>
                <li>Designer</li>
            </ul>
            </header>
            <section className='section section-one'>
                <div className='section-contant'>
                    <p className='section-text'>I'm always looking for opportunities to enhance my skills and knowledge, and my last win is Front End developments expertise...</p>
                    <Link className='read-more'>Read more</Link>
                </div>
            </section>
            <section className='section section-two'>
            <p className='section-text'>I have experience in various areas of design. Years ago I started out as a outdoor advertising designer...</p>
            <Link className='read-more'>Read more</Link>
            </section>
        </div>
    )
}