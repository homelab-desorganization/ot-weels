import { Product } from "@/domain/product/entity";
import { ProductRepository } from "@/domain/product/repository";

export class InMemoryProductRepository implements ProductRepository {
  async getProducts(): Promise<Array<Product>> {
    return [
      { id: 0, name: "Yakisoba", price: 5000, description: "Chinese food" },
      { id: 1, name: "Tubaina", price: 500, description: "Refri" },
      { id: 2, name: "Lasanha", price: 2000, description: "Lasanha congelada" },
      { id: 3, name: "Lamen", price: 4500, description: "Best noodles ever" },
      { id: 4, name: "Udon", price: 10, description: "Weak noodles" },
    ];
  }
}
