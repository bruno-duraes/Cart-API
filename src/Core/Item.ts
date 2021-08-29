import ItemDTO from "../Interfaces/ItemDTO";

export abstract class Item implements ItemDTO {
    category: string
    price: number
    description: string
    id: string
    constructor(
        category: string,
        price: number,
        description: string,
    ) {
        this.category = category
        this.price = price
        this.description = description
        this.id = `${Math.floor(Math.random() * 100000)}`
    }
}