import EventsList from '@/components/EventsList';
import { getAllEvents } from '@/dummyData'
import React, { Fragment } from 'react'

function Events() {
    const events = getAllEvents();
  return (
    <Fragment>
    <EventsList items={events}/>
    </Fragment>
  )
}

export default Events