import {Product} from './product';

export class Order {
  id: string;
  title: string;
  description: string;
  orderDate: string;
  deliveryDate: string;
  isPaid: boolean;
  isDelivered: boolean;
  products: Array<Product>;
}
