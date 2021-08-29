import { TaxItem } from "./taxItem"

export class Beer extends TaxItem {
    constructor(
        category: string,
        price: number,
        description: string
    ) {
        super(category, price, description)
    }
    getTax() {
        return 0.5
    }
}