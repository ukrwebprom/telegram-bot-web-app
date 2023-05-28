import "./home.scss";
import { Link } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import chatlogo from '../../images/websocket-chat.png'
import { SmallHint } from "../../components/Hint/Hint";

export const Home = () => {
  const { close } = useTelegram();
  return (
    <div className="home-container">
      <button type="button" className="close-btn" onClick={close}>
        <CloseIcon className="close-icon" />
      </button>
      <header>
        <h1 className="main-title">Yurii Pochtiennykh</h1>
        <ul className="expertise-list small-text">
          <li>Junior Full-Stack Developer</li>
          <li>Designer</li>
        </ul>
      </header>
      <section className="section section-one">
        <div className="section-contant">
          <p className="section-text">
            I'm always looking for opportunities to enhance my skills and
            knowledge, and my last win is Full-Stack Dev expertise...
          </p>
        </div>
      </section>
      <section className="section section-three">
        <div className="section-header">
          <h2>latest project</h2>
          <a href="https://ukrwebprom.github.io/websocket-chat/" className="try-it-out">Try it out</a>
        </div>
        <div className="section-row">
          <img src={chatlogo} className="content-icons"/>
          <div>
            <p className="small-text">Websocket chat, made for fun and practice. Works and looks well on both desktop and mobile.</p>
            <SmallHint>React</SmallHint>
            <SmallHint>Node.js</SmallHint>
            <SmallHint>Websocket</SmallHint>
          </div>
          
        
        </div>
          
      </section>
    </div>
  );
};
