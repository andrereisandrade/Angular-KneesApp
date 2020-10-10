import { Address } from './address';
import { Category } from './category'
import { Advertiser } from "app/models/advertiser.model";

export class Event {
  id: string;
  name: string;
  description: string;
  date: string;
  photo: string;
  category: Category;
  advertiser: Advertiser;
  address: string;
  latitude: string;
  longitude: string;
}
