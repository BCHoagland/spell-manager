function getLocalStorage(session, ind) {
    let res = localStorage[session];
    if (typeof res === 'undefined') {
        res = '{}';
    }

    if (typeof ind !== 'undefined') {
        return JSON.parse(res)[ind];
    } else {
        return JSON.parse(res);
    }
}
  
function setLocalStorage(session, ind, val) {
    const obj = getLocalStorage(session);
    if (val == null) {
        delete obj[ind];
    } else {
        obj[ind] = val;
    }
    localStorage.setItem(session, JSON.stringify(obj));
}

export {getLocalStorage, setLocalStorage};
