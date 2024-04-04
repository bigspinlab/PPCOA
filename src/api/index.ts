import { RequestInit } from "next/dist/server/web/spec-extension/request";

const apiUrl = 'https://danielribamar-001-site1.itempurl.com/api/v1';

// Common function to make API calls with headers
const makeApiCall = async <T>(url: string, headers: Record<string, string>, method: string = 'GET', body?: any): Promise<T> => {
  const options: RequestInit = {
    method: method,
    headers: {
      ...headers,
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
    (options.headers as Record<string, string>)['Content-Type'] = 'application/json';
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  return await response.json() as T;
};

// Function to get umbraco content with specified culture
export const getHeadless = async <T>({ route, lang }: { route: string, lang: string }): Promise<T> => {
  const url = `${apiUrl}/pages/${route}`;
  return await makeApiCall<T>(url, { 'x-content-culture': lang });
};

// Function to get master content with specified language
export const getHeadlessMaster = async <T>({ lang }: { lang: string }): Promise<T> => {
  const url = `${apiUrl}/content/master`;
  return await makeApiCall<T>(url, { 'x-content-culture': lang });
};

// Function to get project detail
export const getProjectDetail = async <T>({ projectName, lang }: { projectName: string, lang: string }): Promise<T> => {
  const url = `${apiUrl}/projects?route=/projects/${projectName}`;
  return await makeApiCall<T>(url, { 'x-content-culture': lang });
};

// Function to get project list with specified parameters
export const getProjectList = async <T>({ pageNumber, perPage, category = 'todos', lang }: { pageNumber: number, perPage: number, category?: string, lang: string }): Promise<T> => {
  const url = `${apiUrl}/categories/${category}?page=${pageNumber}&perPage=${perPage}`;
  return await makeApiCall<T>(url, { 'x-content-culture': lang });
};

// Function to submit form data
export const submitForm = async (values: any): Promise<void> => {
  const url = `${apiUrl}/form`;
  await makeApiCall<void>(url, {}, 'POST', values);
};
