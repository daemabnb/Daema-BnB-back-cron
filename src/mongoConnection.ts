import { Connection, createConnection, ConnectionOptions } from 'mongoose';
import { mongoUri } from './config'

let mongoConnection: Connection;

export default async (): Promise<void> => {
  if (!mongoConnection) {
    const mongoOptions: ConnectionOptions = {
      useNewUrlParser: true,
    };

    mongoConnection = await createConnection(mongoUri, mongoOptions);
  }
  
  return Promise.resolve();
};