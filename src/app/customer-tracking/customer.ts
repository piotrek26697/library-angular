import { Link } from '../shared/link';

export interface CustomerAttributes {
    id: number;
    name: string;
    lastName: string;
    email: string;
    links: Link[];
}

export class Customer {
    id: number;
    name: string;
    lastName: string;
    email: string;
    links: Link[];

    constructor(customer: Partial<CustomerAttributes>) {
        this.id = customer.id;
        this.name = customer.name;
        this.lastName = customer.lastName;
        this.email = customer.email;
        this.links = customer.links;
    }
}
