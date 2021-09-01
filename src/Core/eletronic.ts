import { TaxItem } from "./taxItem"

export class Eletronic extends TaxItem {
    constructor(
        price: number,
        description: string,
    ) {
        super("Eletronic", price, description,)
    }
    getTax() {
        return 0.3
    }
}