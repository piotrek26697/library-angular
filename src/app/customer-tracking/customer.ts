export interface CustomerAttributes {
    id: number;
    name: string;
    lastName: string;
    email: string;
}

export class Customer {
    id: number;
    name: string;
    lastName: string;
    email: string;

    constructor(customer: Partial<CustomerAttributes>) {
        this.id = customer.id;
        this.name = customer.name;
        this.lastName = customer.lastName;
        this.email = customer.email;
    }
}
