import Express from "express";
import { route as productsRoute } from "./Products/products";
import { route as categoriesRoute } from "./Categories/categories"
import { route as ordersRoute } from "./Order/Order";

const apiPort = 3333
const app = Express()
app.use(Express.json())
app.use(productsRoute, categoriesRoute, ordersRoute)

app.listen(apiPort, () => console.log("server running on port 3333"))
