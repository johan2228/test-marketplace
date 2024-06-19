import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { addProductToCartUseCase, getCartUseCase, removeProductFromCartUseCase } from '../../container';

const getUserIdFromEvent = (event: APIGatewayProxyEvent): number => {
  return parseInt(event.headers['user-id'], 10) || 1;
};

export const addProductToCartHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = getUserIdFromEvent(event);
    const { productId } = JSON.parse(event.body);

    const cart = await addProductToCartUseCase.execute(userId, productId);

    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  } catch (error) {
    console.error('Error adding product to cart:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

export const removeProductFromCartHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = getUserIdFromEvent(event);
    const { productId } = JSON.parse(event.body);

    const cart = await removeProductFromCartUseCase.execute(userId, productId);

    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  } catch (error) {
    console.error('Error removing product from cart:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};

export const getCartHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const userId = getUserIdFromEvent(event);

    const cart = await getCartUseCase.execute(userId);

    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  } catch (error) {
    console.error('Error fetching cart:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
