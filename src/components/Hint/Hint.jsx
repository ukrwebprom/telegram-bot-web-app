import './hints.scss';

export const SmallHint = ({children}) => {
    return(
        <div className='small-hint'>
            <p>{children}</p>
        </div>
    )
}