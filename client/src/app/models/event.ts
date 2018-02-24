export class Event {
    //  constructor(public title, public short_description, public description, public image,
    //     public price, public location, public type, public minAge, public maxAge, public sex) {}

    id: number;
    title: string;
    short_description: string;
    description: string;
    image: string;
    price: number;
    numberOfTickets: number;
    location: string;
    type: [string];
    minAge: number;
    maxAge: number;
    sex: String;
}
