import { Router, Request, Response } from "express"
import Product from "../../infra/Product"

const route = Router()
const product = new Product()

route.get('/category', (_: Request, res: Response) => {
    res.json(product.getProducts())
})

