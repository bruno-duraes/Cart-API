import { TaxItem } from "./taxItem";

export class Cigarete extends TaxItem {
    constructor(
        price: number,
        description: string,
    ) {
        super('Cigar', price, description)
    }
    getTax() {
        return 1
    }
}