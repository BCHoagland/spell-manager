function getLocalStorage(session, ind) {
    if (typeof ind !== 'undefined') {
        return JSON.parse(localStorage[session])[ind];
    } else {
        return JSON.parse(localStorage[session]);
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
