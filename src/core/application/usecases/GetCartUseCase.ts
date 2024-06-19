import { ICartService } from '../../../interfaces/ICartService';
import { Cart } from '../../domain/Cart';

export class GetCartUseCase {
  private cartService: ICartService;

  constructor(cartService: ICartService) {
    this.cartService = cartService;
  }

  async execute(userId: number): Promise<Cart> {
    try {
      return await this.cartService.getCart(userId);
    } catch (error) {
      console.error('Error in GetCartUseCase:', error);
      throw new Error('Failed to get cart details');
    }
  }
}
