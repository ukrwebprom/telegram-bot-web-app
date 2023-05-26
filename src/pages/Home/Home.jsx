import './home.css';
import { Link } from "react-router-dom";
export const Home = () => {
    return(
        <div className="home-container">
            <button type="button" className='close-btn'></button>
            <header>
            <h1 className='main-title'>Yurii Pochtiennykh</h1>
            <ul className='expertise-list'>
                <li>Junior Full-Stack Developer</li>
                <li>Designer</li>
            </ul>
            </header>
            <section className='section-one'>
            <p className='section-text'>I'm always looking for opportunities to enhance my skills and knowledge, and my last win is Front End developments expertise...</p>
            <Link className='read-more'>Read more</Link>
            </section>
            <section className='section-one'>
            <p className='section-text'>I'm always looking for opportunities to enhance my skills and knowledge, and my last win is Front End developments expertise...</p>
            <Link className='read-more'>Read more</Link>
            </section>
        </div>
    )
}