const ObjectBrowser = require('./index')

const object = {
    id: '0001',
    user: {
        name: 'Polo',
        friends: [
            'Michel'
        ]
    }
}

console.log(ObjectBrowser(object, 'id').get())
console.log(ObjectBrowser(object, 'id').set('0002'))

console.log(ObjectBrowser(object, 'user').get())

console.log(ObjectBrowser(object, 'user.name').get())
console.log(ObjectBrowser(object, 'user.name').set('Marco'))

console.log(ObjectBrowser(object, 'user.friends[0]').get())
console.log(ObjectBrowser(object, 'user.friends[0]').set('Peter'))