import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getSalesByCategoryAndMonthUseCase } from '../../container';

export const getSalesByCategoryAndMonthHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const salesData = await getSalesByCategoryAndMonthUseCase.execute();

    return {
      statusCode: 200,
      body: JSON.stringify(salesData),
    };
  } catch (error) {
    console.error('Error fetching sales data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
