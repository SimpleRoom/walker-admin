const cookieStore = {
    setCookie: (name, value, expires) => {
        let expiresDay = expires || 1;
        let LargeExpDate = new Date();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expiresDay * 1000 * 3600 * 24));
        document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + LargeExpDate.toGMTString()));
    },
    getCookie: (Name) => {
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
}

export {
    cookieStore
}