import EventsList from "@/components/EventsList";
import { getFeaturedEvents } from "@/helppers/api-util";
import React from "react";

function Home(props) {
  return (
    <>
      <EventsList items={props.events} />
    </>
  );
}

export async function getStaticProps(context){
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    }
  }
  
}
export default Home;




