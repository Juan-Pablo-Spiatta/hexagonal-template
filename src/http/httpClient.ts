export class HttpResponse<T> {
    status: number
    message: string
    data: T | void

    constructor(status: number, data: string | void, message: string = 'None') {
        this.status = status
        this.message = message
        this.data = typeof data === 'string' ? JSON.parse(data).data : undefined
    }
}

export interface HttpClient {
    get: <T>(url: string) => Promise<HttpResponse<T>>
    post: <T>(url: string, body: any) => Promise<HttpResponse<T>>
    patch: <T>(url: string, body: any) => Promise<HttpResponse<T>>
    put: <T>(url: string, body: any) => Promise<HttpResponse<T>>
    _delete: <T>(url: string) => Promise<HttpResponse<T>>
}
