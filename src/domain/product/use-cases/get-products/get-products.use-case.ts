import { Product } from "../../entity";
import { ProductRepository } from "../../repository";

export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute(): Promise<Array<Product>> {
    return await this.productRepository.getProducts();
  }
}
