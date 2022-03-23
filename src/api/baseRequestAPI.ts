export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const request = async (url: string, data: any, token:any) => {
    const headersForToken = token ? {Authorization: `Bearer ${token}`} : {}
    const headersForMultiPart = typeof data.body === 'string' ? {"Content-type": "application/json;charset=utf-8"} : {}

    const response = await fetch(url, {
        ...data,
        headers: {
            ...headersForToken,
            ...headersForMultiPart,
        },
    });
    if (response.ok) {
        if (response.headers.get('Content-Length') === '0') {
            return true
        }
        const typeResponse = response.headers.get("Content-type");
        let result;
        if (typeResponse === 'aplication/text') {
            result = await response.text()
            return result
        }
        result = await response.json()
        return result;
    } 
        throw {status: response.status}
        
    }


export const get = (url: string, token?: string) => request(`${BASE_URL}${url}`, {method: "GET"}, token)

export const post = (url: string, body: string | FormData, token?: string | null) => {
    return request(`${BASE_URL}${url}`, {method: "POST", body}, token)
}
export const put = (url: string, body: string, token: string) => {
    return request(`${BASE_URL}${url}`, {method: "PUT", body}, token)
}
export const remove = (url: string, token?: string) => request(`${BASE_URL}${url}`, {method: "DELETE"}, token)
