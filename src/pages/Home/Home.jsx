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
      <section className="section-row">
        <div className="section section-two">
        <img src={chatlogo} className="content-icons"/>
        </div>
        <div>
          <h2 className="capital-title">The latest project</h2>
          <p className="small-text">Websocket chat, made for fun and practice. Works and looks well on both desktop and mobile.</p>
          <a href="https://ukrwebprom.github.io/websocket-chat/" className="try-it-out">Try it out</a>
        </div>
      </section>
      <section className="text-section">
      <h2>why me?</h2>
      <strong>I'm a junior developer, but I'm not a newcomer to IT , and I have a good understanding of how things work.</strong>
      <p>I have been involved in the creation of several startups, and I understand how great projects start from a simple idea.</p>
      <p>I have experience working as a web designer and I'm proficient in design software, which allows me to effectively collaborate with designers as a developer.</p>
      <p>I have also had experience as a project manager, which has honed my communication skills and enabled me to interact with clients effectively.</p>
      <strong>Now, I want to challenge myself and dive into coding and development directly.</strong>
      <a href="Yuriy-Pochtiennykh-Junior-Front-end-developer.pdf">Yurii Pochtiennykh CV (.pdf)</a>
      </section>
    </>
  );
};
