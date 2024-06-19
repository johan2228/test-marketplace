import { ProductRepository } from "../repositories/ProductRepository";
import { CartRepository } from "../repositories/CartRepository";
import { SaleRepository } from "../repositories/SaleRepository";

export const productRepository = new ProductRepository();
export const cartRepository = new CartRepository();
export const saleRepository = new SaleRepository();