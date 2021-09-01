import { Item } from "./Item"

export class Water extends Item {
    constructor(
        price: number,
        description: string,
    ) {
        super("Water", price, description,)
    }
}