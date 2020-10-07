## Task: Create and test PhoneRegister class

### phones.json

```json
[
	{
		"firstname": "Leila",
		"lastname": "Hökki",
		"phones": [
			{ "type": "home", "number": "12345678" },
			{ "type": "work", "number": "87654321" },
			{ "type": "mobile", "number": "05040302" }
		]
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"phones": [
			{ "type": "home", "number": "56834923" },
			{ "type": "work", "number": "32121367" },
			{ "type": "work", "number": "7635462" }
		]
	}
]
```

Create a class PhoneRegister.

## Phone-API

## constructor

Phones json object is passed as a parameter to the constructor. If the parameter is missing, constructor throws an error `'phone info missing'`.

### test 1: object created

```js
new PhoneRegister(jsonFile);
```

test if field phones of the object is the same as json passed as a parameter

### test 2: missing parameter throws an exception 'phone info missing'

```js
new PhoneRegister();
```

# **

## getTypes()

returns all the phone types found in all phone data. A type is added to the result array only once. If there are no phones, the function returns an empty array.

### test 1: method getTypes is defined

### test 2:

get types of the default json

```json
["home", "work", "mobile"]
```

### test 3:

if there are no phones

```json
(testdata = [
	{
		"firstname": "Leila",
		"lastname": "Hökki",
		"phones": []
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"phones": []
	}
])
```

returns an empty array

```json
[]
```

### test 4: no persons in phoneRegister

```js
testdata = [];
```

returns an empty array

```js
testdata = [];
```

# **

## getNumbersByType(firstname, lastname, type)

Function returns an array of phone numbers of the given `type` and `firstname` and `lastname`.

-   If no person with the given name is found, an empty array is returned.
-   If at least one parameter is missing, the function throws an exception **'missing parameter'**

### test 1: method getNumbersByType is defined

### test 2: use default data get type that returns only one number

```js
phoneRegister.getNumbersByType('Leila', 'Hökki', 'home');
```

returns

```json
["12345678"]
```

### test 3: use default data get type that returns more than one number

```js
phoneRegister.getNumbersByType('Matt', 'River', 'work');
```

returns

```json
["32121367", "7635462"]
```

### test 4: wrong type or wrong name returns an empty array

These return an empty array:

```js
phoneRegister.getNumbersByType('Leila', 'Hökki', 'x');
phoneRegister.getNumbersByType('Leila', 'x', 'home');
phoneRegister.getNumbersByType('x', 'Hökki', 'home');
phoneRegister.getNumbersByType('x', 'y', 'home');
phoneRegister.getNumbersByType('x', 'y', 'z');
```

### test 5: missing parameter throws an exception 'missing parameter'

These tests throw an exception 'missing parameter'

```js
phoneRegister.getNumbersByType('Leila', 'Hökki');
phoneRegister.getNumbersByType('Leila');
phoneRegister.getNumbersByType();
```

# **

## getAllNumbersByType(type)

Returns an array of names and numbers of given type. If no number of given type is found, returns an empty array.

If a person has multiple numbers of same type, each of them will be in its own object.

If a parameter type is missing, the function throws an exception **'missing parameter'**.

The format of the returned object:

```json
[
	{ "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } },
	{ "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
]
```

### test 1: method getAllNumbersByType is defined

### test 2: get all numbers of type home

```js
phoneRegister.getAllNumbersByType('home)
```

returns

```json
[
	{
		"firstname": "Leila",
		"lastname": "Hökki",
		"number": { "type": "home", "tel": "12345678" }
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"number": { "type": "home", "tel": "56834923" }
	}
]
```

### test 3: get all numbers of type work

```js
phoneRegister.getAllNumbersByType('home)
```

returns

```json
[
	{
		"firstname": "Leila",
		"lastname": "Hökki",
		"number": { "work": "home", "tel": "87654321" }
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"number": { "type": "work", "tel": "32121367" }
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"number": { "type": "work", "tel": "7635462" }
	}
]
```

### test 4: get all numbers of type x will return an empty array []

```js
phoneRegister.getAllNumbersByType('x');
```

returns []

### test 5: missing type throws an exception 'missing parameter'

```js
phoneRegister.getAllNumbersByType();
```

throws an exception 'missing parameter'

# **

## getAllNumbers()

Returns all phone numbers in an array, each as an object of form:

```json
{ "firstname": " ", "lastname": " ", "phones": [] }
```

The object in `phones` array is of form

```json
{ "type": " ", "number": "" }
```

If a person doesn't have a phone (phones-field is an empty array), then the person is not
added into the result array. If all phones are missing, an empty array is returned.

### test 1: method getAllNumbers is defined

### test 2: get all numbers from the default data

```js
phoneRegister.getAllNumbers();
```

result is:

```json
[
	{
		"firstname": "Leila",
		"lastname": "Hökki",
		"phones": [
			{ "type": "home", "number": "12345678" },
			{ "type": "work", "number": "87654321" },
			{ "type": "mobile", "number": "05040302" }
		]
	},
	{
		"firstname": "Matt",
		"lastname": "River",
		"phones": [
			{ "type": "home", "number": "56834923" },
			{ "type": "work", "number": "32121367" },
			{ "type": "work", "number": "7635462" }
		]
	}
]
```

### test 3: some phones are missing

```js
testData = [
	{
		firstname: 'Leila',
		lastname: 'Hökki',
		phones: [
			{ type: 'home', number: '12345678' },
			{ type: 'work', number: '87654321' },
			{ type: 'mobile', number: '05040302' },
		],
	},
	{
		firstname: 'Matt',
		lastname: 'River',
		phones: [],
	},
];
```

returns

```json
{
		"firstname": "Leila",
		"lastname": "Hökki",
		"phones": [
			{ "type": "home", "number": "12345678" },
			{ "type": "work", "number": "87654321" },
			{ "type": "mobile", "number": "05040302" }
		]
	}
```

### test 4: all phones are missing

```js
testData = [
	{
		firstname: 'Leila',
		lastname: 'Hökki',
		phones: [],
	},
	{
		firstname: 'Matt',
		lastname: 'River',
		phones: [],
	},
];
```

returns an empty array []

# **

## getName(number)

The function searches the given phone number from the telephone registry. If the number is found, the function returns an json object of form

```json
{ "firstname": "", "lastname": "" }
```

If no phone with the given number is found, the function returns `null`. If the parameter is missing null is returned.

### test 1: method getName is defined

### test 2: get the name of number "12345678" will return {"firstname": "Leila", "lastname": "Hökki"}

```js
phoneRegister.getName("12345678")
```

returns
```json
{"firstname": "Leila", "lastname": "Hökki"}
```

### Test 3: get names by numbers from default data
```js
testValues = [
	["12345678", {"firstname": "Leila", "lastname": "Hökki"}],
	["87654321", {"firstname": "Leila", "lastname": "Hökki"}],
	["05040302", {"firstname": "Leila", "lastname": "Hökki"}],
	["56834923", {"firstname": "Matt", "lastname": "River"}],
	["32121367", {"firstname": "Matt", "lastname": "River"}],
	["7635462", {"firstname": "Matt", "lastname": "River"}],
]
```

### Test 4: wrong number

```js
phoneRegister.getName("0000")
```
returns `null`

### Test 5: missing parameter
```js
phoneRegister.getName()
```
returns `null`