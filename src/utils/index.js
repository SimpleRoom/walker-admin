const setCookie = (name, value, expires) => {
    let expiresDay = expires || 1;
    let LargeExpDate = new Date();
    LargeExpDate.setTime(LargeExpDate.getTime() + (expiresDay * 1000 * 3600 * 24));
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
}

const getCookie = (Name) => {
    let search = Name + "="
    if (document.cookie.length > 0) {
        let offset = document.cookie.indexOf(search)
        if (offset !== -1) {
            offset += search.length
            let end = document.cookie.indexOf(";", offset)
            if (end === -1) end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        } else return ""
    }
}

const STORAGE_KEY = "USER_INFO";

const SESSION = {
    save: function (info) {
        return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(info));
    },
    fetch: function () {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || null);
    },
    remove: function () {
        return window.sessionStorage.removeItem(STORAGE_KEY);
    }
};


export {
    setCookie,
    getCookie,
    SESSION,
}