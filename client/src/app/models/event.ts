export class Event {
    _id: number;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    price: number;
    numberOfTickets: number;
    geo: {
      lat: number;
      lon: number;
    };
    eventType: [string];
    age: [number];
    sex: [string];
    startDate: Date;
}
