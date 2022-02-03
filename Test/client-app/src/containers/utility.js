import {API} from "./API";

export const currentUser = () => {
    if (isCookiePresent("jwt")) {
        fetchData().then(response => {
            if (response.ok) {
                response.json().then(userData => {
                    AddObjectInCookie(userData)})
            } else {
                document.cookie = "userLoggedIn=false"
                response.json().then(error => console.log(error))
            }
        })
        return "user changed"
    } else {
        document.cookie = "userLoggedIn=false"
        return "user changed"
    }
}

export const fetchData = async () => {
    let jwt = getCookie("jwt")
    return await fetch(API.USER, {
        method: "POST", headers: {"Content-Type": "Application/json"}, body: JSON.stringify({jwt}),
    })
}

export const fetchCustomData = async (url, method, args) => {
    if (method.toLowerCase() === "post") {
        return await fetch(url, {
            method: method, headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(args),
        })
    } else {
        return await fetch(url, {
            method: method,
            headers: {"Content-Type": "Application/json"}
        })
    }
}


export const isCookiePresent = (cookie) => {
    return getCookie(cookie) !== null
}


export const getUserData = async (jwt) => {
    const response = await fetch(API.USER, {
        method: "POST", headers: {"Content-Type": "Application/json"}, body: JSON.stringify({jwt}),
    });
    return await response.json()
}


export function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

export function AddObjectInCookie(object) {
    for (const property in object) {
        document.cookie = property + "=" + object[property]
    }
}