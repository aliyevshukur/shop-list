function filterBy(arr, type) {
    let newArr = [];
    for (let item of arr) {
        if (typeof (item) !== type) {
            newArr.push(item);
        }
    }
    return newArr;
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));