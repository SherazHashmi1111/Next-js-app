import EventsList from '@/components/EventsList';
import { getFeaturedEvents } from '@/dummyData'
import React from 'react'

function Home() {
  const events = getFeaturedEvents();
  return (
    <>
    <EventsList items= {events}/>
    </>

  )
}

export default Home