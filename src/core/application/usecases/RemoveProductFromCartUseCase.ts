import { ICartService } from '../../../interfaces/ICartService';
import { Cart } from '../../domain/Cart';

export class RemoveProductFromCartUseCase {
  private cartService: ICartService;

  constructor(cartService: ICartService) {
    this.cartService = cartService;
  }

  async execute(userId: number, productId: number): Promise<Cart> {
    try {
      const cart = await this.cartService.removeProductFromCart(userId, productId);
      return cart;
    } catch (error) {
      console.error('Error in RemoveProductFromCartUseCase:', error);
      throw new Error('Failed to remove product from cart');
    }
  }
}
