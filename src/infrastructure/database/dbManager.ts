import { DataSource, EntityManager, EntityTarget, Repository } from 'typeorm';
import { AppDataSource } from '../../../ormconfig';

export class Database {
  private static dataSource: DataSource;

  public static async getDataSource(): Promise<DataSource> {
    if (!Database?.dataSource?.isInitialized) {
      try {
        Database.dataSource = await AppDataSource.initialize();
      } catch (error) {
        console.error('Error establishing database connection', error);
        throw error;
      }
    }
    return Database.dataSource;
  }

  public static async getManager(): Promise<EntityManager> {
    const dataSource = await Database.getDataSource();
    return dataSource.manager;
  }

  public static async getRepository<Entity>(
    entity: EntityTarget<Entity>,
  ): Promise<Repository<Entity>> {
    const manager = await Database.getManager();
    return manager.getRepository(entity);
  }
}
