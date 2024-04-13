export async function getEvents() {
  const response = await fetch(
    "https://next-js-42980-default-rtdb.asia-southeast1.firebasedatabase.app/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getEvents();
  return allEvents.filter((event) => event.isFeatured);
}
export async function getAllEvents(){
    const allEvents = await getEvents();
    return allEvents;
}
export async function getEventById(id){
    const allEvents = await getEvents();
    const event = allEvents.find(event => event.id === id);
    return event;
}