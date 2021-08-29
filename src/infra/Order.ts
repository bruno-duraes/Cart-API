import ItemDTO from '../Interfaces/ItemDTO'
import OrderDTO from '../Interfaces/OrderDTO'
import { TaxItem } from '../Core/taxItem'

export default class Order {
    orderList: OrderDTO[] = []
    addItem(item: ItemDTO, orderCode: string): OrderDTO | void {
        for (const order of this.orderList) {
            if (order.code === orderCode) {
                order.items.push(item)
                return order
            }
        }
        throw new Error('order code undefined or dont have a match on database')
    }

    addOrder(item: ItemDTO) {
        const newOrder = { code: `${Math.floor(Math.random() * 100000)}`, items: [item] }
        this.orderList.push(newOrder)
        return newOrder
    }

    getOrders(): OrderDTO[] {
        return this.orderList
    }

    removeOrder(orderCode: string) {
        this.orderList = this.orderList.filter(({ code }) => code !== orderCode)
        return this.orderList
    }

    getByCode(orderCode: string): {} {
        const currentOrder = this.orderList.filter(({ code }) => code === orderCode)
        const value = this.getTotal(orderCode)
        return { currentOrder, value: value }
    }
    removeItem(id: string, orderCode: string): OrderDTO {
        for (const order of this.orderList) {
            if (order.code === orderCode) {
                order.items = order.items.filter(item => item.id !== id)
                return order
            }
        }
        throw new Error('Order must be defined and exist on db')
    }

    getSubtotal(orderCode: string) {
        let subtotal = 0
        for (const order of this.orderList) {
            if (orderCode === order.code) {
                subtotal = order.items.reduce((sum, curren) => sum + curren.price, 0)
            }
        }
        return subtotal
    }

    getTaxes(orderCode: string) {
        let taxes = 0
        for (const order of this.orderList) {
            order.items.map(product => {
                if (product instanceof TaxItem && orderCode === order.code) {
                    taxes += product.calculateTax()
                }
            })
        }
        return taxes
    }

    getTotal(orderCode: string) {
        return this.getSubtotal(orderCode) + this.getTaxes(orderCode)
    }
}
