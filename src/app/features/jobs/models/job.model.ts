export interface Job {
  id: number;
  title: string;
  description: string;
  price: number;
  paymentMethods: [];
  dueDate: Date;
}
