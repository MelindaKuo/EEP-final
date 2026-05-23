const base = import.meta.env.BASE_URL;

export const events = [
  {
    id: 'ev1',
    title: 'Fundraiser',
    date: '11/13/25',
    time: '9am-12pm',
    location: 'House',
    necessity: 'Optional',
    photo: `${base}eventphotos/evntphoto.jpg`,
  },
  {
    id: 'ev2',
    title: 'Fundraiser',
    date: '11/26/25',
    time: '9am-12pm',
    location: 'House',
    necessity: 'Optional',
    photo: `${base}eventphotos/evntphoto2.jpg`,
  },
  {
    id: 'ev3',
    title: 'Graduation',
    date: '2/23/26',
    time: '9am-12pm',
    location: 'House',
    necessity: 'Optional',
    photo: `${base}eventphotos/grad-photo.jpg`,
  },
  {
    id: 'ev4',
    title: 'Book Drive / Party',
    date: '3/19/26',
    time: '9am-12pm',
    location: 'House',
    necessity: 'Optional',
    photo: `${base}eventphotos/package-photo.jpg`,
  },
];
