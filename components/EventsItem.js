import React from 'react'
import styles from './EventItem.module.css'
import { useRouter } from 'next/router';

function EventsItem(props) {
  const router = useRouter();
    const {image, title, date, id, description, address} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: '2-digit'
    })
    console.log(title);

    const exploreEventHandler = (e) => {
      e.preventDefault();
      router.push(`/events/${id}`)
    }
  return (
    <li className={`row ${styles.list__item}`}>
        <img src={'/'+image} alt="" className='col-4 img-fluid rounded'/>
        <div className='col-8'>
            <h2>{title}</h2>
            <time>{humanReadableDate}</time>
            <address>{address}</address>
            <button className='btn btn-outline-dark' onClick={exploreEventHandler}>Explore Events</button>
        </div>
    </li>
  )
}

export default EventsItem