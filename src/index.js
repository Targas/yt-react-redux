const person = {
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }
}

// const updated = Object.assign({}, person, { name: 'Bob', age: 30 })
const updated = {
    ...person,
    name: 'bob',
    address: {
        ...person.address,
        city: "Tokyo"
    }
}
updated.address.city = 'New York'

console.log('person', person)
console.log('updated', updated)