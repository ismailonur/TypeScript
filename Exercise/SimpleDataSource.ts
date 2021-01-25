import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>

    constructor() {
        this.products = new Array<Product>(
            new Product(1, "Xiaomi MI 9T", "Telefon", 3500),
            new Product(2, "Xiaomi MI 10T", "Telefon", 3500),
            new Product(3, "Xiaomi MI 10", "Telefon", 3500),
            new Product(4, "Xiaomi MI 11", "Telefon", 3500)
        )
    }

    getProducts(): Product[] {
        return this.products;
    }
}

