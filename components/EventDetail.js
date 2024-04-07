import React from 'react'
import styles from './EventDetail.module.css'
import { getEventById } from '@/dummyData';
import { redirect } from 'next/dist/server/api-utils';

function EventDetail(props) {

    const {image, title, date, id, description, address} = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: '2-digit'
    })
  return (
    <li className={`${styles.item__detail}`}>
        <img src={'/'+image} alt="" className='img-fluid rounded'/>
        <div className=''>
            <h2>{title}</h2>
            <time>{humanReadableDate}</time>
            <address>{address}</address>
            <p>{description}</p>
            <button className='btn btn-primary'>Go BAck</button>
        </div>
    </li>
  )
}

export default EventDetail