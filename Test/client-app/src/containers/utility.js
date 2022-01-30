import {variables as API} from "./Variables";

export const currentUser = () => {
    if (isCookiePresent("jwt")) {
        fetchData().then(response=> {
            if (response.ok){
                console.log("The user is logged in")
                document.cookie="userLoggedIn=true"
                response.json().then(userData=>AddObjectInCookie(userData))
            }else {
                document.cookie="userLoggedIn=false"
                console.log("The user is NOT logged in")


            }
        })
        return "user changed"
    }
    else {
        document.cookie="userLoggedIn=false"
        return "user changed"
    }
}

export const fetchData = async () => {
    let jwt = getCookie("jwt")
    return await fetch(API.USER, {
        method: "POST", headers: {"Content-Type": "Application/json"}, body: JSON.stringify({jwt}),
    })
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