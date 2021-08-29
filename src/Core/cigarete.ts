import { TaxItem } from "./taxItem";

export class Cigarete extends TaxItem {
    constructor(
        category: string,
        price: number,
        description: string,
    ) {
        super(category, price, description)
    }
    getTax() {
        return 1
    }
}