import { User } from './user'

export class Participant extends User {
  id: String
  sex: String;
  photo: string;
  phone: string;
  birthDate: Date;
}
