function termsInString(str, arr, strict=false) {
    for (let i = 0; i < arr.length; i += 1) {
        if (strict) {
            if (str.toLowerCase() === arr[i].toLowerCase()) {
                return true;
            }
        } else {
            if (str.toLowerCase().includes(arr[i].toLowerCase())) {
                return true;
            }
        }
    }
    return false;
}

export {termsInString};
