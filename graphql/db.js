export const people = [
    {
        id: 0,
        name: "kth",
        age: 29,
        gender: "mail"
    },
    {
        id: 1,
        name: "kth",
        age: 29,
        gender: "mail"
    }
    ,
    {
        id: 2,
        name: "kth",
        age: 29,
        gender: "mail"
    },
    {
        id: 3,
        name: "kth",
        age: 29,
        gender: "mail"
    },
    {
        id: 4,
        name: "kth",
        age: 29,
        gender: "mail"
    }];


export const getById = id => people.filter(person => id === person.id)[0];