import { FastifyRequest, FastifyReply } from "fastify";
import { GetProductsUseCase } from "./get-products.use-case";
import { InMemoryProductRepository } from "@/infra/database/in-memory/product.repository";

export async function getProductsController(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  const productRepository = new InMemoryProductRepository();
  const useCase = new GetProductsUseCase(productRepository);
  const products = await useCase.execute();
  reply.status(200).send({ products });
}
