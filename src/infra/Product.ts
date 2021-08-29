import ItemDTO from '../Interfaces/ItemDTO'

export default class Product {
    productList: ItemDTO[] = []

    getProducts(): ItemDTO[] {
        return this.productList
    }

    addidProduct(product: ItemDTO): void {
        this.productList.push(product)
    }

    getProductById(id: string): ItemDTO[] {
        return this.productList.filter(item => item.id === id)
    }

    removeProduct(id: string): void {
        this.productList = this.productList.filter(item => item.id !== id)
    }
}