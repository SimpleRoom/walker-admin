const STORAGE_KEY = "USER_INFO";

const sessionStore = {
    save: (info) => {
        return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(info));
    },
    fetch: () => {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || null);
    },
    remove: () => {
        return window.sessionStorage.removeItem(STORAGE_KEY);
    }
}

export {
    sessionStore
}