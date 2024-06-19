import { Sale } from '../../domain/Sale';

export interface ISaleService {
  getSalesByCategoryAndMonth(): Promise<{
    [key: string]: { [key: string]: Sale[] };
  }>;
}
