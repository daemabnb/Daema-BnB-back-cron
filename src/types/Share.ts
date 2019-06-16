import { Document, Model } from 'mongoose';

export enum ShareStatus {
  onShare = 'onShare',
  onRental = 'onRental',
  beforeExchage = 'beforeExchage',
  completeReturn = 'completeReturn',
  end = 'end',
}

export interface IShare {
  name: string;
  description: string;
  price: string;
  returnDate: number;
  period: number;
  sharedDate?: number;
  isPublic: boolean;
  status?: string;
  images?: string[];
  userId: string;
  userName: string;
  userLink: string;
  clientId?: string;
  clientName?: string;
  clientLink?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ShareDocument extends Document, IShare {}

export interface ShareModel extends Model<ShareDocument> {
  updateShareStatusByTime(time: number, status: ShareStatus): Promise<{}>
}
