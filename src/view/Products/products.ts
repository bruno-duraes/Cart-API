import { Router, Request, Response, request } from "express"
import { Beer } from "../../Core/beer"
import { Cigarete } from "../../Core/cigarete"
import { Eletronic } from "../../Core/eletronic"
import { Water } from "../../Core/water"
import Product from "../../infra/Product"

const route = Router()
export const product = new Product()

route.get('/products', (_: Request, res: Response) => {
    res.json(product.getProducts())
})

route.get('/product/:id', (req: Request, res: Response) => {
    const { id } = req.params
    res.json(product.getProductById(id))
})

route.post('/product/cigar', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newCigar = new Cigarete(price, description)
    product.addidProduct(newCigar)
    res.json(newCigar)

})

route.post('/product/water', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newWater = new Water(price, description)
    product.addidProduct(newWater)
    res.json(newWater)

})

route.post('/product/eletronic', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newEletronic = new Eletronic(price, description)
    product.addidProduct(newEletronic)
    res.json(newEletronic)

})

route.post('/product/beer', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newBeer = new Beer(price, description)
    product.addidProduct(newBeer)
    res.json(newBeer)

})

route.delete('/product/:id', (req: Request, res: Response) => {
    const { id } = req.params
    try {
        product.removeProduct(id)
        res.json({ message: 'Removed', code: 204 })
    } catch (err) {
        res.json({ message: err, code: 500 })
    }
})

export { route }

