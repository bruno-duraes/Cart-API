import { TaxItem } from "./taxItem"

export class Beer extends TaxItem {
    constructor(
        description: string,
        price: number
    ) {
        super('Beer', price, description)
    }
    getTax() {
        return 0.5
    }
}