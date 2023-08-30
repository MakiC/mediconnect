export interface User {
    id?: number;
    lastName: string;
    firstName: string;
    birthday: Date;
    email: string;
    phoneNumber: string;
    address?: string;
    city: string;
    country: string;
}
