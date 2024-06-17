import { ListProductsUseCase } from '../../core/application/usecases/ListProductsUseCase';
import { CreateProductUseCase } from '../../core/application/usecases/CreateProductUseCase';
import { GetProductDetailsUseCase } from '../../core/application/usecases/GetProductDetailsUseCase';
import { AppDataSource } from '../../../ormconfig';
import { productRepository } from '../../infrastructure/container';

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

