import { ListProductsUseCase } from '../../core/application/usecases/ListProductsUseCase';
import { CreateProductUseCase } from '../../core/application/usecases/CreateProductUseCase';
import { GetProductDetailsUseCase } from '../../core/application/usecases/GetProductDetailsUseCase';
import { AddProductToCartUseCase } from '../../core/application/usecases/AddProductToCartUseCase';
import { RemoveProductFromCartUseCase } from '../../core/application/usecases/RemoveProductFromCartUseCase';
import { GetCartUseCase } from '../../core/application/usecases/GetCartUseCase';
import { GetSalesByCategoryAndMonthUseCase } from '../../core/application/usecases/GetSalesByCategoryAndMonthUseCase';
import { AppDataSource } from '../../../ormconfig';
import { cartRepository, productRepository, saleRepository } from '../../infrastructure/container';


AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export const listProductsUseCase = new ListProductsUseCase(productRepository);
export const createProductUseCase = new CreateProductUseCase(productRepository);
export const getProductDetailsUseCase = new GetProductDetailsUseCase(productRepository);
export const addProductToCartUseCase = new AddProductToCartUseCase(cartRepository);
export const removeProductFromCartUseCase = new RemoveProductFromCartUseCase(cartRepository);
export const getCartUseCase = new GetCartUseCase(cartRepository);
export const getSalesByCategoryAndMonthUseCase = new GetSalesByCategoryAndMonthUseCase(saleRepository);

