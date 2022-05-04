import api from '../config/api';
import {
  ApiResponse,
  CreateSocialMediaParamDTO,
  GetSocialMediaParamPayload,
  GetAllSocialMediaParamsParams,
  GetAllSocialMediaParamsPayload,
  UpdateSocialMediaParamDTO,
  GetAvailablePostsPayload,
} from '@sec/common';
import { APIError } from '~/error/APIError';

export type GetAllSocialMediaParamsFilters = GetAllSocialMediaParamsParams;

export const getAllSocialMediaParams = async (filters: GetAllSocialMediaParamsParams | null) => {
  const { data, headers } = await api.get<ApiResponse<GetAllSocialMediaParamsPayload>>('/social-media-param', {
    params: filters,
  });

  if (data.status === 'SUCCESS' || data.status === 'WARNING') {
    return data;
  } else {
    throw new APIError(data.message, data, headers);
  }
};

export const getSocialMediaParam = async (id: number) => {
  const { data, headers } = await api.get<ApiResponse<GetSocialMediaParamPayload>>(`/social-media-param/${id}`);

  if (data.status === 'SUCCESS' || data.status === 'WARNING') {
    return data;
  } else {
    throw new APIError(data.message, data, headers);
  }
};

export const createSocialMediaParam = async (socialMediaParam: CreateSocialMediaParamDTO) => {
  const { data, headers } = await api.post<ApiResponse<GetSocialMediaParamPayload>>(
    '/social-media-param',
    socialMediaParam
  );

  if (data.status === 'SUCCESS' || data.status === 'WARNING') {
    return data;
  } else {
    throw new APIError(data.message, data, headers);
  }
};

export const updateSocialMediaParam = async (socialMediaParam: UpdateSocialMediaParamDTO) => {
  const { data, headers } = await api.put<ApiResponse<GetSocialMediaParamPayload>>(
    '/social-media-param',
    socialMediaParam
  );

  if (data.status === 'SUCCESS' || data.status === 'WARNING') {
    return data;
  } else {
    throw new APIError(data.message, data, headers);
  }
};

export const getAvailablePosts = async () => {
  const { data, headers } = await api.get<ApiResponse<GetAvailablePostsPayload>>('/social-media/posts');

  if (data.status === 'SUCCESS' || data.status === 'WARNING') {
    return data;
  } else {
    throw new APIError(data.message, data, headers);
  }
};
