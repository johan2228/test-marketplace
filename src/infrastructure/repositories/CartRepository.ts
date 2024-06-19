import { Repository } from 'typeorm';
import { CartSchema } from '../entities/CartSchema';
import { UserSchema } from '../entities/UserSchema';
import { AppDataSource } from '../../../ormconfig';
import { ICartService } from '../../core/application/interfaces/ICartService';
import { ProductSchema } from '../entities/ProductSchema';
import { Cart } from '../../core/domain/Cart';

export class CartRepository implements ICartService {
  private cartRepository: Repository<CartSchema>;
  private userRepository: Repository<UserSchema>;

  constructor() {
    this.cartRepository = AppDataSource.getRepository(CartSchema);
    this.userRepository = AppDataSource.getRepository(UserSchema);
  }

  async addProductToCart(userId: number, productId: number): Promise<Cart> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const cart = await this.cartRepository.findOne({
      where: { userId },
      relations: ['products'],
    });
    const product = await AppDataSource.getRepository(ProductSchema).findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    if (!cart) {
      const newCart = this.cartRepository.create({
        userId,
        products: [product],
      });
      const savedCart = await this.cartRepository.save(newCart);
      return this.toDomain(savedCart);
    }

    cart.products.push(product);
    const updatedCart = await this.cartRepository.save(cart);
    return this.toDomain(updatedCart);
  }

  async removeProductFromCart(
    userId: number,
    productId: number,
  ): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { userId },
      relations: ['products'],
    });
    const product = await AppDataSource.getRepository(ProductSchema).findOne({
      where: { id: productId },
    });

    if (!cart || !product) {
      throw new Error('Product or cart not found');
    }

    cart.products = cart.products.filter((p) => p.id !== productId);
    const updatedCart = await this.cartRepository.save(cart);
    return this.toDomain(updatedCart);
  }

  async getCart(userId: number): Promise<Cart> {
    const cart = await this.cartRepository.findOne({
      where: { userId },
      relations: ['products'],
    });
    if (!cart) {
      throw new Error('Cart not found');
    }
    return this.toDomain(cart);
  }

  private toDomain(cartSchema: CartSchema): Cart {
    const { id, userId, products } = cartSchema;
    return new Cart(id, userId, products.map(ProductSchema.toDomain));
  }
}
