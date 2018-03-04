export class Event {
    id: number;
    title: string;
    short_description: string;
    description: string;
    image: string;
    price: number;
    numberOfTickets: number;
    location: {
      lat: number;
      lon: number;
    };
    type: [string];
    age: [number];
    sex: [string];
    date: Date;
}
