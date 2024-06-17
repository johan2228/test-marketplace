export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: number, name: string, description: string, price: number, category: string, createdAt: Date, updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}