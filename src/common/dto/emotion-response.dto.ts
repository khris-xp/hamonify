import { CommonUserModel } from './user-response';

export type EmotionResponse = {
  _id: string;
  name: string;
  score: number;
  createdBy: CommonUserModel;
  createdAt: string;
  updatedAt: string;
};
