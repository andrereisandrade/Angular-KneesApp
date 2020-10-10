import { User } from 'app/models/user';

export class Advertiser extends User {
    id: string;
    phone: string;
    photo: string;
    address: string;
    dscription: string;
    facebook: string;
    site: string;
    latitude: string;
    longitude: string;
}