const dummyData = [
    {
        id: 'e1',
        title: 'Networking for introverts',
        date: '05-30-2024',
        location: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dicta debitis, eum sit quod eius!',
        image: 'images/img1.jpg',
        isFeatured: true
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        date: '06-30-2024',
        location: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dicta debitis, eum sit quod eius!',
        image: 'images/img2.jpg'
    },
    {
        id: 'e3',
        title: 'Networking for introverts',
        date: '07-30-2024',
        location: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dicta debitis, eum sit quod eius!',
        image: 'images/img3.jpg',
        isFeatured: true
    },
    {
        id: 'e4',
        title: 'Networking for introverts',
        date: '08-30-2024',
        location: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dicta debitis, eum sit quod eius!',
        image: 'images/img4.jpg'
    },
    {
        id: 'e5',
        title: 'Networking for introverts',
        date: '09-30-2024',
        location: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed dicta debitis, eum sit quod eius!',
        image: 'images/img5.jpg'
    },
]


export function getAllEvents(){
    return dummyData;
}
export function getFeaturedEvents(){
    return dummyData.filter(event => event.isFeatured);
}
export function getEventById(id){
    const event = dummyData.find(event => event.id === id);
    return event;
}

















