import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { HttpResponse, type HttpClient } from './httpClient'

const axiosClient = axios
const CancelToken = axiosClient.CancelToken
let source = CancelToken.source()
const options: AxiosRequestConfig = {
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'text',
    timeout: 30000,
    cancelToken: source.token
}
export class Axios implements HttpClient {
    constructor() { }

    private async resolveRequest<T>(verb: Promise<AxiosResponse<string, any>>): Promise<HttpResponse<T>> {
        try {
            const { data, status } = await verb
            return new HttpResponse<T>(status, data)
        } catch (error: any) {
            let noData: void
            if (axiosClient.isAxiosError(error)) {
                console.log('error message: ', error.message)
                const status: number = error && error?.response ? error.response.status : -1
                return new HttpResponse<T>(status, noData, error.message)
            } else {
                console.log('unexpected error: ', error)
                return new HttpResponse<T>(-1, noData, error.message)
            }
        }
    }

    async get<T>(url: string): Promise<HttpResponse<T>> {
        return this.resolveRequest(axiosClient.get<string>(url, options))
    }
    async post<T>(url: string, body: any): Promise<HttpResponse<T>> {
        return this.resolveRequest(axiosClient.post<string>(url, body, options))
    }
    async patch<T>(url: string, body: any): Promise<HttpResponse<T>> {
        return this.resolveRequest(axiosClient.patch<string>(url, body, options))
    }
    async put<T>(url: string, body: any): Promise<HttpResponse<T>> {
        return this.resolveRequest(axiosClient.put<string>(url, body, options))
    }
    async _delete<T>(url: string): Promise<HttpResponse<T>> {
        return this.resolveRequest(axiosClient.delete<string>(url, options))
    }
}
