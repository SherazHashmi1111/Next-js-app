export async function getAllEvents(){
 const response = await fetch('https://next-js-42980-default-rtdb.asia-southeast1.firebasedatabase.app/events.json');
 const data = await response.json();

 const  events = [];

 for (const key in data) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
 }
}