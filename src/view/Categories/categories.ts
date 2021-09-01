import Categories from "../../infra/categories";
import { Router, Request, Response, json } from "express";

const route = Router()
const categories = new Categories()

route.get('/categories', (_: Request, res: Response) => {
    res.json(categories.getCategories())
})

export { route }
