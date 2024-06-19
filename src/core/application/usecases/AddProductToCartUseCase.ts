import { ICartService } from '../../../interfaces/ICartService';
import { Cart } from '../../domain/Cart';

export class AddProductToCartUseCase {
  private cartService: ICartService;

  constructor(cartService: ICartService) {
    this.cartService = cartService;
  }

  async execute(userId: number, productId: number): Promise<Cart> {
    try {
      return await this.cartService.addProductToCart(userId, productId);
    } catch (error) {
      console.error('Error in AddProductToCartUseCase:', error);
      throw new Error('Failed to add product to cart');
    }
  }
}
