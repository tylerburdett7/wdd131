const obj = {
    key: 'value'
}

console.log(obj.key)
console.log(obj['key'])

const doc = {
    getElementById: (theIdOfTheElement) {
        return theIdOfTheElement
    }
}

doc.getElementById('id')