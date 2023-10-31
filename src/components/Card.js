import star from '../images/star.png'

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    }
    else if(props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className='card'>
            <img src={props.item.coverImg} className='card-img' alt={`${props.item.coverImg}`}/>
            {badgeText && <div className='card-badge'>{badgeText}</div>}
            <div className='card-stats'>
                <img src={star} className='star' alt='a star'/>
                <span> {props.item.stats.rating} </span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p><span className='cost'>From ${props.item.price}</span> / month</p>
        </div>
    );
}