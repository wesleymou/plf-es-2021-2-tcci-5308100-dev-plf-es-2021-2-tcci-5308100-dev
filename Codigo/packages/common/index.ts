import { UserType } from './models/User';

// endpoints
export * from './endpoints/administrators.endpoint';
export * from './endpoints/explorer.endpoint';
export * from './endpoints/challenge.endpoint';

// models
export * from './models/Administrator';
export * from './models/Challenge';
export * from './models/ChallengeAccepted';
export * from './models/ChallengeAcceptedResponse';
export * from './models/Comment';
export * from './models/Explorer';
export * from './models/Model';
export * from './models/Notification';
export * from './models/Post';
export * from './models/Profile';
export * from './models/Recompense';
export * from './models/SavedFile';
export * from './models/SocialMedia';
export * from './models/SocialMediaParam';
export * from './models/User';

// validators
export * from './validators/administrator.validation';
export * from './validators/explorer.validation';
export * from './validators/challenge.validation';

/**
 * 
 * global types
 * 
 */
export type ApiResponse<T> = {
  status: 'SUCCESS' | 'FAIL' | 'WARNING';
  message: string;
  payload: T;
  error?: Error;
};

export type Token = {
  id: number;
  email: string;
  name: string;
  type: UserType;
};

export interface AuthenticationPayload {
  token: string;
  user: Token;
}

export type Indexable<T> = { [K in keyof T]: T[K] };
