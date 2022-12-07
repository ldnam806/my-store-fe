export class Checkout {
  fullname: string;
  address: string;
  cardNumber: string;
  totalPrice: number;
  constructor() {
      this.fullname = '',
      this.address = ''
      this.totalPrice = 0
      this.cardNumber = ''
  }
}
