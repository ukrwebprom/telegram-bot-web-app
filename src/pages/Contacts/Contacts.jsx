import { ContactItem } from "../../components/ContactItem/ContactItem";
import './contacts.scss';

export const Contacts = () => {
    return(
        <div className="contacts">
            <h2 >contacts & links</h2>
            <ContactItem name={'Location'}>Odessa, Ukraine</ContactItem>
            <ContactItem name={'Phone / Viber / WhatsApp'}>+380 96 333 6533</ContactItem>
            <ContactItem name={'e-mail'}>ukrwebprom@gmail.com</ContactItem>
            <ContactItem name={'Telegram'}><a href='https://t.me/Y_Pochtiennykh'>Y_Pochtennykh</a></ContactItem>
            <ContactItem name={'Linkedin'}><a href='https://www.linkedin.com/in/yuri-pochtennykh/'>yuri-pochtennykh</a></ContactItem>
            <ContactItem name={'Github'}><a href='https://github.com/ukrwebprom'>ukrwebprom</a></ContactItem>
            <ContactItem name={'Portfolio'}><a href='https://www.behance.net/ukrwebprom'>my design works on Behance</a></ContactItem>
            <ContactItem name={'Games'}><a href='https://play.google.com/store/apps/dev?id=8963674542756618187'>Gameboat on Google Play</a></ContactItem>
        </div>
    )
}