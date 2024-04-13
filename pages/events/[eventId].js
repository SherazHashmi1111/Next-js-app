import EventDetail from "@/components/EventDetail";
import { getAllEvents, getEventById } from "@/helppers/api-util";
import React from "react";

function EventId(props) {
  const event = props.event;
  if (!event) {
    return;
  }

  return (
    <EventDetail
      image={event.image}
      title={event.title}
      date={event.date}
      id={event.id}
      description={event.description}
      address={event.location}
    />
  );
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map(event => ({params : {eventId : event.id}}));
  return {
      paths: paths,
      fallback: false
  };
}

export async function getStaticProps(context) {
  const id = context.params.eventId;
  const Event = await getEventById(id);
  console.log(Event);
  return {
    props: {
      event: Event,
    },
  };
}

export default EventId;
