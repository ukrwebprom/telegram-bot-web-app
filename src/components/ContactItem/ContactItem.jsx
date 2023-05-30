import './contactitem.scss';

export const ContactItem = ({ name, children }) => {
    return (
        <div className='contact-item'>
            <h3 className='contact-title'>{name}</h3>
            <p>{children}</p>
        </div>
    )
}