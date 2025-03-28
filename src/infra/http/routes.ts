import { getProductsController } from "@/domain/product/use-cases/get-products/get-products.controller";
import { FastifyInstance } from "fastify";
//import { verifyJWT } from "./middlewares/verify-jwt";

export async function routes(app: FastifyInstance) {
  app.get("/", () => {
    return { msg: "Hello" };
  });
  app.get("/products", getProductsController);
}
