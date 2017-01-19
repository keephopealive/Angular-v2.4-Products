export class Product {
    constructor(
        public id: number = null,
        public name: string ="",
        public description: string = "",
        public price: number = null,
        public quantity: number = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}   
}