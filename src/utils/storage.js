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


function getSpell(session, name) {
    const res = getLocalStorage(session, name);
    if (typeof(res) === 'undefined') {
        return {'prepared': 0, 'upcast': 0};
    }
    res['prepared'] = parseInt(res['prepared']);
    res['upcast'] = parseInt(res['upcast']);
    return res;
}


function setSpell(session, name, prepared, upcast, preparedHistory) {
    let data;
    if (typeof(preparedHistory) === 'undefined') {
        data = {'prepared': prepared, 'upcast': upcast};
    } else {
        data = {'prepared': prepared, 'upcast': upcast, 'preparedHistory': preparedHistory};
    }
    setLocalStorage(session, name, data);
}


export {getLocalStorage, setLocalStorage, getSpell, setSpell};
