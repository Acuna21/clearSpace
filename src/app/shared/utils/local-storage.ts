export class LocalStorage {
    static getItem<T>(key: string, parse: boolean = false): T{
        const value = localStorage.getItem(key);
        if (parse && value) return JSON.parse(value) as T;
        return value as T;
    }

    static setItem<T>(key:string, value:T):void{
        localStorage.setItem( key, JSON.stringify(value));
    }

    static removeItem(key: string): void{
        localStorage.removeItem(key);
    }

}