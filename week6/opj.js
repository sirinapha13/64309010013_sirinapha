let opj ={
    "firstName":"john",
    "lastName":"Smith",
    "isAlive":"true",
    "age":25,
    "address":{
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    },
    "phoneNumbers": [{
        "type": "home",
        "number": "212 555-1234"
        },
        {
            "type": "office",
            "number": "646 555-4567"
            },
            {
            "type": "mobile",
            "number": "123 456-7890"
            }
            ],
            "children": [],
            "spouse": null
};
console.log(opj.firstName+opj.lastName);
console.log(opj.address.streetAddress);
console.log(opj.phoneNumbers[1].number);