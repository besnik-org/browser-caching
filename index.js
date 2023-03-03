const storageKey = 'browser-cache'

/** add minutes to current date **/
const addMinutes = (minutes) => {
    return new Date(new Date().getTime() + (minutes * 60000));
}

export const setBrowserCache = (name, value, expireInMinute = null) => {

    localStorage.setItem(storageKey + name, JSON.stringify({
        value: value,
        expire: expireInMinute ? addMinutes(expireInMinute) : null
    }))

    return true
}

export const forgetBrowserCache = (name) => {
    localStorage.removeItem(storageKey + name);
    return true;
}

export const getBrowserCache = (name) => {

    let data = localStorage.getItem(storageKey + name);
    if (!data) {
        return '';
    }

    data = JSON.parse(data)

    if (!data.expire) {
        return data.value;
    }

    if (hasExpireDate(data.expire)) {
        return data.value
    }

    localStorage.removeItem(storageKey + name);

    return null;
}

function hasExpireDate(expireDate) {
    expireDate = new Date(expireDate);
    let currentDate = new Date();

    return expireDate.getTime() >= currentDate.getTime();
}