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

function getSpellCount(session, name) {
    const res = getLocalStorage(session, name);
    if (typeof(res) === 'undefined') {
        return 0;
    }
    return res;
}

export {getLocalStorage, setLocalStorage, getSpellCount};
