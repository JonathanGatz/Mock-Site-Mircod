const rangeUpdated = (data1, data) => {
    return {
        type: "RANGEPICKER",
        payload: getAdjustedValue(data1, data)
    }
}

// The goal here is to get the aboslute value of the number   


const getAdjustedValue = (val, val2) => {
    return val2.reduce((p, c) =>
        Math.abs(p - val) < Math.abs(c - val) ? p : c
    );
}

export {
    rangeUpdated
}

