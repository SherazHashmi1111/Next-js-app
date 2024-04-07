import React from "react";
import EventsItem from "./EventsItem";
import styles from './EventsList.module.css'

function EventsList(props) {
  return (
    <ul className={styles.event__list}>
      {props.items.map((item) => (
        <EventsItem 
        key= {item.id}
        id= {item.id}
        title= {item.title}
        image= {item.image}
        date= {item.date}
        description= {item.description}
        address= {item.location}
        />
      ))}
    </ul>
  );
}

export default EventsList;
