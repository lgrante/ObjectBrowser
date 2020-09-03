# ObjectBrowser
## What is it?
ObjectBrowser is JavaScript tools that allows you to get or set any field into an object and whatever its depth with its *path* (for instance: `user.friends[0].username`).

First, it seems to be useless because you could just do that:

    object.field
    object.field = "value"
   To get the value of the field and to modify it.
   But there is some case where you're dealing with string path of your field. For instance, if you're parsing a template file, and you have reference to an object from your js file into this template you can easily access to it with *ObjectBrowser*.

## How to use it?
Really easy, you have one function: 
`ObjectBrower(object, path)`

 - `object`: The object to browse.
 - `path`: The path of the field to get or set (for instance: `players[0].healthPoints`).
 
 This function returns an object containing to functions:
 
 - `set(value)`: To set a value to this field and returns the new object.
 - `get()`: To get the value of this field.
 
Try this example to understand:
 

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

