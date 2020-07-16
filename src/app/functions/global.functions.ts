export function saveToLocalStorage(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function saveToSessionStorage(key: string, value: any): void {
    window.sessionStorage.setItem(key, JSON.stringify(value));
}

export function fetchFromLocalStorage(key: string): any {
    return JSON.parse(window.localStorage.getItem(key));
}

export function fetchFromSessionStorage(key: string): any {
    return JSON.parse(window.sessionStorage.getItem(key));
}
