import axios, { type AxiosRequestHeaders } from 'axios';

export const fetchGet = async (
	endpoint: string,
	headers?: AxiosRequestHeaders | any
) => {
	const response = axios.get(endpoint, { headers });
	return await response;
};

export const fetchPost = async (
	endpoint: string,
	body?: object,
	headers?: AxiosRequestHeaders | any
) => {
	const response = axios.post(endpoint, body, { headers });
	return await response;
};

export const fetchPut = async (endpoint: string, params: object) => {
	const response = axios.put(endpoint, params);
	return await response;
};

export const fetchDelete = async (endpoint: string, params: object) => {
	const response = axios.delete(endpoint, params);
	return await response;
};
