function filterBy(arr, type) {
    return arr.filter((item) => {typeof (item) !== type;});
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));