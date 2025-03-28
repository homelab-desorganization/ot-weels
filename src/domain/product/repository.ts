import { Product } from "./entity";

export interface ProductRepository {
  getProducts(): Promise<Array<Product>>;
}
