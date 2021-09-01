import Order from "../../infra/Order";
import { Router, Request, Response } from "express";
import { product } from "../Products/products";
const route = Router()
const order = new Order

route.post('/orders/:id', (req: Request, res: Response) => {
    const { id } = req.params
    const [newProduct] = product.getProductById(id)
    const newOrder = order.addOrder(newProduct)
    res.json(newOrder)
})

route.get('/orders', (_: Request, res: Response) => {
    res.json(order.getOrders)
})

route.get('/orders/:code', (req: Request, res: Response) => {
    const { code } = req.params
    res.json(order.removeOrder(code))
})

route.get('/order/:code', (req: Request, res: Response) => {
    const { code } = req.params
    res.json(order.getByCode(code))
})

route.delete('/order/:code', (req: Request, res: Response) => {
    const { code } = req.params
    try {
        order.removeOrder(code)
        res.json({ message: 'Removed', code: 204 })
    } catch (err) {
        res.json({ message: err, code: 204 })
    }
})

route.delete('/order/:code/:id', (req: Request, res: Response) => {
    const { code, id } = req.params
    try {
        order.removeItem(code, id)
        res.json({ message: 'Removed', code: 204 })
    } catch (err) {
        res.json({ message: err, code: 500 })
    }
})

route.get()

export { route }