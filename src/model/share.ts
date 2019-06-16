import { Schema, model } from 'mongoose'
import { ShareDocument, ShareModel, ShareStatus } from '../types/Share'

const ShareSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  returnDate: {
    type: Number,
    required: true,
  },
  period: {
    type: Number,
    required: true,
  },
  sharedDate: {
    type: Number,
    required: false,
  },
  isPublic: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    default: 'onShare',
  },
  images: {
    type: [
      String
    ],
    default: [],
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userLink: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
  },
  clientName: {
    type: String,
  },
  clientLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

ShareSchema.statics.updateShareStatusByTime = (time: number, status: ShareStatus) => {
  return Share.updateMany({
    returnDate: { $lt: time },
    status: { $ne: ShareStatus.end },
  }, {
    $set: { status },
  }).exec();
};

export const Share: ShareModel = model<ShareDocument, ShareModel>('Share', ShareSchema);
