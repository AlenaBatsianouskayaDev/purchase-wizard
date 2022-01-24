import { ICard } from "./card.interface";

export interface User {
  firstName: string,
  lastName: string,
  phone: number,
  email: string,
  country: string,
  state?: string,
  city: string,
  street1: string,
  street2: string,
  zipCode: number,
  card: ICard,
}