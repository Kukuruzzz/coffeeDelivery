import {Order} from './order';

export class User {
  id: string;
  firsName: string;
  secondName: string;
  address: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  orders: Array<Order>;
}
