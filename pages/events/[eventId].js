import EventDetail from "@/components/EventDetail";
import { getEventById } from "@/dummyData";
import { useRouter } from "next/router";
import React from "react";

function EventId() {
  const router = useRouter();
  const id = router.query.eventId;
  const event = getEventById(id);
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

export default EventId;
