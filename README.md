## Test-Marketplace

Sistema diseñado para crear una plataforma de mercado digital con funcionalidades orientadas a la gestión y visualización de productos, así como a la interacción con un carrito de compras.

### Instalación

1. Clona el repositorio:
   git clone https://github.com/johan2228/test-marketplace.git

2. Instalar dependencias:
   npm install

3. Configura las variables de entorno:
   Crea un archivo .env en la raíz del proyecto y añade las variables necesarias:
   DB_HOST=localhost
   DB_USER=tu-usuario
   DB_PASSWORD=tu-contraseña

### Uso

1. Iniciar el servidor:
   npm run dev

2. Documentación API con Postman:

- Listar productos
  GET - http://localhost:3000/dev/products

- Buscar producto
  GET - http://localhost:3000/dev/products?search=Product 1
  Query Params
  Key:search value:Product 1

- Detalle del producto
  GET - http://localhost:3000/dev/products/1

- Agregar producto al carrito de compras
  POST - http://localhost:3000/dev/cart/products
  Request Headers
  key: user-id value: 1
  Body raw (json)
  {
  "productId": 1
  }

- Detalle del carrito de compras
  GET - http://localhost:3000/dev/cart
  Request Headers
  key: user-id value: 1
  Body raw (json)
  {
  "productId": 1
  }

- Remover producto del carrito de compras
  DELETE - http://localhost:3000/dev/cart/products
  Request Headers
  key: user-id value: 1
  Body raw (json)
  {
  "productId": 1
  }

- Ventas por categoria y mes
  GET - http://localhost:3000/dev/sales/category-month

### Estructura del proyecto

.
├── src
│ ├── adapters
│ │ ├── container
│ │ │ └── index.ts
│ │ └── primary
│ │ └── http
│ │ ├── cartHandler.ts
│ │ ├── productHandler.ts
│ │ └── salesHandler.ts
│ ├── core
│ │ ├── application
│ │ │ └── usecases
│ │ │ ├── AddProductToCartUseCase.ts
│ │ │ ├── CreateProductUseCase.ts
│ │ │ ├── GetCartUseCase.ts
│ │ │ ├── GetProductDetailsUseCase.ts
│ │ │ ├── GetSalesByCategoryAndMonthUseCase.ts
│ │ │ ├── ListProductsUseCase.ts
│ │ │ └── RemoveProductFromCartUseCase.ts
│ │ └── domain
│ │ ├── Cart.ts
│ │ ├── Product.ts
│ │ ├── Sale.ts
│ │ └── types.ts
│ ├── infrastructure
│ │ ├── container
│ │ │ └── index.ts
│ │ ├── database
│ │ │ └── dbManager.ts
│ │ ├── entities
│ │ │ ├── CartSchema.ts
│ │ │ ├── ProductSchema.ts
│ │ │ ├── SaleSchema.ts
│ │ │ └── UserSchema.ts
│ │ └── repositories
│ │ ├── CartRepository.ts
│ │ ├── ProductRepository.ts
│ │ └── SaleRepository.ts
│ ├── interfaces
│ │ ├── ICartService.ts
│ │ ├── IProductService.ts
│ │ └── ISaleService.ts
│ └── migrations
│ ├── 1718731352571-tableProductAndCart.ts
│ ├── 1718748352575-tableUser.ts
│ ├── 1718766968161-InsertUsers.ts
│ ├── 1718767030845-InsertProduct.ts
│ ├── 1718805759682-tableSalesAndRelationships.ts
│ └── 1718805793402-insertSales.ts
├── ormconfig.ts
├── package.json
├── serverless.ts
├── tsconfig.json
└── README.md

### Migraciones

- Crear migración
  npx typeorm migration:create src/migrations/NOMBREDELAMIGRACION

- Generar migración
  npm run typeorm migration:generate src/migrations/NOMBREDELAMIGRACION

- Revertir migración
  npm run typeorm migration:revert

- Correr migración
  npm run typeorm migration:run
