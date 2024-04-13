import EventsList from "@/components/EventsList";
import { getAllEvents } from "@/helppers/api-util";
import React, { Fragment } from "react";

function Events(props) {
  return (
    <Fragment>
      <EventsList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
  };
}

export default Events;
