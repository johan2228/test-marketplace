export class Sale {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  createdAt: Date;

  constructor(id: number, userId: number, productId: number, quantity: number, createdAt: Date) {
    this.id = id;
    this.userId = userId;
    this.productId = productId;
    this.quantity = quantity;
    this.createdAt = createdAt;
  }

  static toDomain(saleSchema: any): Sale {
    return new Sale(
      saleSchema.id,
      saleSchema.userId,
      saleSchema.productId,
      saleSchema.quantity,
      saleSchema.createdAt,
    );
  }
}
