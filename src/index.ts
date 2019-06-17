import { Handler } from 'aws-lambda';
import connection from './mongoConnection';
import { Share } from './model/share';
import { ShareStatus } from './types/Share'

export const updateShareStatusByTime: Handler = async () => {
  try {
    await connection();
    Share.updateShareStatusByTime(Date.now(), ShareStatus.end);
  } catch (error) {
    throw new Error(error.stack);
  }
}
