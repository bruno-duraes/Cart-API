import ItemDTO from "./ItemDTO";

export default interface OrderDTO {
    code: string
    items: ItemDTO[]
}