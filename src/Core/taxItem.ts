import { Item } from "./Item";

export abstract class TaxItem extends Item {
    constructor(
        category: string,
        price: number,
        description: string,
    ) {
        super(category, price, description)
    }
    calculateTax() {
        return this.price * this.getTax()
    }
    abstract getTax(): number
}