import { appPath, baseURL } from "@routes/app";
import axios, { AxiosResponse } from 'axios';

const defaultTimeoutLength = 4000; // 4 seconds

const axiosInstance = axios.create({
    baseURL, // baseURL is defined in @routes/app
    headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
    }
});

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: any) => {
        if (error.response) {
            const { status } = error.response;
            if (status === 440) {
                window.location.href = appPath.home;
            }
        }
        return error;
    }
);

/**
 * Get request from the API
 * @param path The path to the API endpoint
 * @returns The response from the API
 */
export const executeGetRequest = (path: string) => {
    const promise = axiosInstance.get(path, {
        timeout: defaultTimeoutLength,
    });

    return [promise];
};