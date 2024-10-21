export class LocalStorage {
    static getItem<T>(key: string, parse: boolean = false): string | T | null{
        const value = localStorage.getItem(key);
        if (parse && value) return JSON.parse(value) as T;
        return value;
    }

    static setItem<T>(key:string, value:T):void{
        localStorage.setItem( key, JSON.stringify(value));
    }

}