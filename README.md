## Test-Marketplace

Sistema diseñado para crear una plataforma de mercado digital con funcionalidades orientadas a la gestión y visualización de productos, así como a la interacción con un carrito de compras.

### Instalación

1. Clona el repositorio:

   - git clone https://github.com/johan2228/test-marketplace.git
   - git clone git@github.com:johan2228/test-marketplace.git

2. Instalar dependencias:

```sh
   npm install
```

3. Configura las variables de entorno:
   Crea un archivo .env en la raíz del proyecto y añade las variables necesarias:
   - DB_HOST=localhost
   - DB_USER=tu-usuario
   - DB_PASSWORD=tu-contraseña
   - DB_DATABASE=test-marketplace

### Uso

1. Iniciar el servidor:

```sh
   npm run dev
```

2. Documentación API con Postman:

- Listar productos
  GET - http://localhost:3000/dev/api/v1/products

- Buscar producto
  GET - http://localhost:3000/dev/api/v1/products?search=ProductName

  - Query Params
    - Key: search
    - value: ProductName

- Detalle del producto
  GET - http://localhost:3000/dev/api/v1/products/1

- Agregar producto al carrito de compras
  POST - http://localhost:3000/dev/api/v1/cart/products

  - Request Headers
    - key: user-id
    - value: userId (ejemplo: 1)
    - Body raw (json)
      - {
        "productId": productId (ejemplo: 1)
        }

- Detalle del carrito de compras
  GET - http://localhost:3000/dev/api/v1/cart

  - Request Headers
    - key: user-id
    - value: userId (ejemplo: 1)
    - Body raw (json)
      - {
        "productId": productId (ejemplo: 1)
        }

- Remover producto del carrito de compras
  DELETE - http://localhost:3000/dev/api/v1/cart/products

  - Request Headers
    - key: user-id
    - value: userId (ejemplo: 1)
    - Body raw (json)
      - {
        "productId": productId (ejemplo: 1)
        }

- Ventas por categoria y mes
  GET - http://localhost:3000/dev/api/v1/sales/category-month

- Actualmente esta publicado en la url https://876e14mc01.execute-api.us-east-1.amazonaws.com/prod/api/v1/
- en la carpeta que se encuentra en la raiz del proyecto llamada docs, esta la collection exportada de postman.

  3. Funciones:

  - listProducts: test-marketplace-prod-listProducts
  - createProduct: test-marketplace-prod-createProduct
  - getProductDetails: test-marketplace-prod-getProductDetails
  - addProductToCart: test-marketplace-prod-addProductToCart
  - removeProductFromCart: test-marketplace-prod-removeProductFromCart
  - getCart: test-marketplace-prod-getCart
  - getSalesByCategoryAndMonth: test-marketplace-prod-getSalesByCategoryAndMonth

### Estructura del proyecto

```ini
.
├── src
│ ├── adapters
│ │ ├── container
│ │ │ └── index.ts
│ │ └── primary
│ │   └── http
│ │     ├── cartHandler.ts
│ │     ├── productHandler.ts
│ │     └── salesHandler.ts
│ ├── core
│ │ ├── application
│ │ | ├── usecases
│ │ │ |  ├── AddProductToCartUseCase.ts
│ │ │ |  ├── CreateProductUseCase.ts
│ │ │ |  ├── GetCartUseCase.ts
│ │ │ |  ├── GetProductDetailsUseCase.ts
│ │ │ |  ├── GetSalesByCategoryAndMonthUseCase.ts
│ │ │ |  ├── ListProductsUseCase.ts
│ │ │ |  └── RemoveProductFromCartUseCase.ts
│ | | └──interfaces
│ │ |    ├── ICartService.ts
│ │ |    ├── IProductService.ts
│ │ |    └── ISaleService.ts
│ │ └── domain
│ │       ├── Cart.ts
│ │       ├── Product.ts
│ │       ├── Sale.ts
│ │       └── types.ts
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
│ │   ├── CartRepository.ts
│ │   ├── ProductRepository.ts
│ │   └── SaleRepository.ts
│ └── migrations
│   ├── 1718731352571-tableProductAndCart.ts
│   ├── 1718748352575-tableUser.ts
│   ├── 1718766968161-InsertUsers.ts
│   ├── 1718767030845-InsertProduct.ts
│   ├── 1718805759682-tableSalesAndRelationships.ts
│   └── 1718805793402-insertSales.ts
├── ormconfig.ts
├── package.json
├── serverless.ts
├── tsconfig.json
└── README.md
```

### Migraciones

- Crear migración

```sh
  npx typeorm migration:create src/migrations/NOMBREDELAMIGRACION
```

- Generar migración

```sh
  npm run typeorm migration:generate src/migrations/NOMBREDELAMIGRACION
```

- Revertir migración

```sh
  npm run typeorm migration:revert
```

- Correr migración

```sh
  npm run typeorm migration:run
```
