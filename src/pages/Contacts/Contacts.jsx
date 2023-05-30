import { ContactItem } from "../../components/ContactItem/ContactItem";
import './contacts.scss';

export const Contacts = () => {
    return(
        <div className="contacts">
            <h2 >contacts & links</h2>
            <ContactItem name={'Location'}>Odessa, Ukraine</ContactItem>
            <ContactItem name={'Phone'}>+380 96 333 6533</ContactItem>
            <ContactItem name={'e-mail'}>ukrwebprom@gmail.com</ContactItem>
            <ContactItem name={'Linkedin'}><a href='https://www.linkedin.com/in/yuri-pochtennykh/'>yuri-pochtennykh</a></ContactItem>
            <ContactItem name={'Github'}><a href='https://github.com/ukrwebprom'>ukrwebprom</a></ContactItem>
            <ContactItem name={'Portfolio'}><a href='https://www.behance.net/ukrwebprom'>my design works on Behance</a></ContactItem>
        </div>
    )
}