import { Link } from '../shared/link';

export interface BookHireAttributes {
    id: number;
    rentDate: Date;
    returnDate: Date;
    links: Link[];
}

export class BookHire {
    id: number;
    rentDate: Date;
    returnDate: Date;
    links: Link[];

    constructor(bookHireAttributes: Partial<BookHireAttributes>) {
        this.id = bookHireAttributes.id;
        this.rentDate = bookHireAttributes.rentDate;
        this.returnDate = bookHireAttributes.returnDate;
        this.links = bookHireAttributes.links;
    }
}
