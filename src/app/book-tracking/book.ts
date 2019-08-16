import { Link } from '../shared/link';

export class BookAttributes{
    id: number;
    title: string;
    publishYear: Date;
    links: Link[];
}

export class Book {
    id: number;
    title: string;
    publishYear: Date
    links: Link[];

    constructor(bookAttributes: Partial<BookAttributes>)
    {
        this.id = bookAttributes.id;
        this.title = bookAttributes.title;
        this.publishYear = bookAttributes.publishYear
        this.links = bookAttributes.links;
    }
}
