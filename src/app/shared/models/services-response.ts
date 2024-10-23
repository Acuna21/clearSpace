export interface ServiceResponse<T> {
    error?: Error;
    data?: T;
}

interface Error{
    message: string;
    code: string;
}