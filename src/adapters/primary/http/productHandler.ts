import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { listProductsUseCase, createProductUseCase, getProductDetailsUseCase } from '../../container';

export const listProductsHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const page = event.queryStringParameters?.page ? parseInt(event.queryStringParameters.page) : 1;
    const pageSize = event.queryStringParameters?.pageSize ? parseInt(event.queryStringParameters.pageSize) : 10;
    const search = event.queryStringParameters?.search || '';
    console.log('listProducts entro handler')
    const products = await listProductsUseCase.execute(page, pageSize, search);

    return {
      statusCode: 200,
      body: JSON.stringify({ products }),
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

export const createProductHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const productData = JSON.parse(event.body);
    const newProduct = await createProductUseCase.execute(productData);
    return {
      statusCode: 201,
      body: JSON.stringify({ product: newProduct }),
    };
  } catch (error) {
    console.error('Error creating product:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

export const getProductDetailsHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const productId = parseInt(event.pathParameters.id);

    const product = await getProductDetailsUseCase.execute(productId);

    return {
      statusCode: 200,
      body: JSON.stringify({ product }),
    };
  } catch (error) {
    console.error('Error fetching product details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
