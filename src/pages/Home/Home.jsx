import "./home.scss";
import { Link } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import chatlogo from '../../images/websocket-chat.png'
import { SmallHint } from "../../components/Hint/Hint";

export const Home = () => {
  const { close } = useTelegram();
  return (
    <>
      <section className="section section-one">
        <div className="section-contant">
          <p className="section-text">
            I'm always looking for opportunities to enhance my skills and
            knowledge, and my last win is Full-Stack Dev expertise...
          </p>
        </div>
        <Link to='skills' className="skills-link">Skills list</Link>
      </section>
      <section className="section section-three">
        <div className="section-header">
          <h2>The latest project</h2>
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
    </>
  );
};
