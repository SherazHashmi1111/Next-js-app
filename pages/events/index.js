import EventsList from '@/components/EventsList';
import { getAllEvents } from '@/dummyData'
import React from 'react'

function Events() {
    const events = getAllEvents();
  return (
    <>
    <EventsList items={events}/>
    </>
  )
}

export default Events