import Express  from "express";

const apiPort= 3333
const app = Express()
app.use(Express.json())
app.use()

app.listen(apiPort, () => console.log("server running on port 3333"))
