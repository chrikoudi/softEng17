import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
        {   id: 1,
            title: 'Kidzland1',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img1.jpg',
            price: 10,
            numberOfTickets: 100,
            location: 'Λεωφόρος Καλαμακίου 33, Άλιμος, 17455',
            type: ['Θέατρο', 'Διασκέδαση'],
            minAge: 2,
            maxAge: 5,
            sex: 'Αγόρι'
        },
        {   id: 2,
            title: 'Kidzland2',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the second event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the second event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img2.jpeg',
            price: 5,
            numberOfTickets: 70,
            location: 'Ηρώων Πολυτεχνείου 33, Ζωγράφου',
            type: ['Διασκέδαση', 'Αθλητισμός'],
            minAge: 7,
            maxAge: 12,
            sex: 'Αγόρι'
        },
        {   id: 3,
            title: 'Kidzland3',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the third event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the third event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img3.jpg',
            price: 5,
            numberOfTickets: 20,
            location: 'Ηρώων Πολυτεχνείου 1, Ζωγράφου',
            type: ['Μουσική'],
            minAge: 10,
            maxAge: 14,
            sex: 'Κορίτσι'
        },
        {   id: 4,
            title: 'Kidzland4',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the fourth event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the fourth event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img4.jpg',
            price: 12,
            numberOfTickets: 50,
            location: 'Λεωφόρος Καλαμακίου 40, Άλιμος, 17455',
            type: ['Εκπαίδευση'],
            minAge: 1,
            maxAge: 3,
            sex: 'Κορίτσι'
        },
        {   id: 5,
            title: 'Kindergarten1',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the fifth event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the fifth event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img5.jpg',
            price: 5,
            numberOfTickets: 5,
            location: 'Ηρώων Πολυτεχνείου 10, Ζωγράφου',
            type: ['Διασκέδαση', 'Παιδότοπος'],
            minAge: 5,
            maxAge: 12,
            sex: 'Αγόρι'
        },
        {   id: 6,
            title: 'Kindergarten2',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the sixth event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the sixth event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img6.jpg',
            price: 5,
            numberOfTickets: 20,
            location: 'Ηρώων Πολυτεχνείου 2, Ζωγράφου',
            type: ['Ζωγραφική'],
            minAge: 5,
            maxAge: 12,
            sex: 'Κορίτσι'
        },
        {   id: 7,
            title: 'Kindergarten3',
            // tslint:disable-next-line:max-line-length
            short_description: 'this is the seventh event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            // tslint:disable-next-line:max-line-length
            description: 'this is the seventh event.this is the first event.this is the first event.this is the first event.this is the first event.this is the first event.',
            image: '../../assets/images/img7.jpg',
            price: 8,
            numberOfTickets: 15,
            location: 'Λεωφόρος Καλαμακίου 26, Άλιμος, 17455',
            type: ['Διασκέδαση', 'Παιδότοπος'],
            minAge: 4,
            maxAge: 12,
            sex: 'Αγόρι'
        },
    ];
    return {events};
  }
}
