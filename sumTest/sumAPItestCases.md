# Sum API

## **sum(a,b)**

Returns the sum of two numbers. Numbers are passed to the function as parameters.

-   if a parameter is missing, throws an exception: `'parameter missing'`
-   if parameters are not numbers, throws an exception:
    `'only numbers allowed'`

## Test cases

### 1. function sum defined

### 2. sum
### 2.1. integers
-   sum(1, 1) return 2
-   sum(2, 3) return 5
-   sum(-2, -4) return -6
-   sum(-2, 4) return 2
-   sum(2, -4) return -2
-   sum(0, 0) return 0
-   sum(0, 3) return 3
-   sum(3, 0) return 3
-   sum(0, -3) return -3
-   sum(-3, 0) return -3

### 2.2. floating points
-   sum(10, 11.5) return 21.5
-   sum(2.5, 3) return 5.5
-   sum(-2.5, 3) return 0.5
-   sum(3, -2.5) return 0.5
-   sum(-3, 2.5) return -0.5
-   sum(-3, -2.5) return -5.5
-   sum(-2.5, -2.5) return -5
-   sum(2.5, 2.5) return 5
-   sum(-2.5, 2.5) return 0
-   sum(2.4, -2.5) return -0.1

### 3. missing parameters
-   sum() throws an exception `'parameter missing'`
-   sum(1) throws an exception `'parameter missing'`
-   sum('a') throws an exception `'parameter missing'`
-   sum('') throws an exception `'parameter missing'`

### 4. parameters are not numbers
-   sum('a', 2) throws an exception `'only numbers allowed'`
-   sum(1, 'a') throws an exception `'only numbers allowed'`
-   sum('a', 'b') throws an exception `'only numbers allowed'`
-   sum('','') throws an exception `'only numbers allowed'`
-   sum(null, 1) throws an exception `'parameter missing'`,
-   sum(undefined, 1) throws an exception `'parameter missing'`

## **subtract(a,b)**

Returns the difference of two numbers. Numbers are passed to the function as parameters.

-   if a parameter is missing, throws an exception: `'parameter missing'`
-   if parameters are not numbers, throws an exception:
    `'only numbers allowed'`

## Test cases    

### 5. function subtract defined

### 6. subtract

### 6.1. integers
-   subtract(1, 1) return 0
-   subtract(2, 3) return -1
-   subtract(-2, -4) return 2
-   subtract(-2, 4) return -6
-   subtract(2, -4) return 6
-   subtract(0, 0) return 0
-   subtract(0, 3) return -3
-   subtract(3, 0) return 0
-   subtract(0, -3) return -3
-   subtract(-3, 0) return -3

### 6.2. floating points
-   subtract(10, 11.5) return -1.5
-   subtract(2.5, 3) return -0.5
-   subtract(-2.5, 3) return -5.5
-   subtract(3, -2.5) return 5.5
-   subtract(-3, 2.5) return -5.5
-   subtract(-3, -2.5) return -0.5
-   subtract(-2.5, -2.5) return 0
-   subtract(2.5, 2.5) return 0
-   subtract(-2.5, 2.5) return -5
-   subtract(2.4, -2.5) return 4.9

### 7. missing parameters
-   subtract() throws an exception `'parameter missing'`
-   subtract(1) throws an exception `'parameter missing'`
-   subtract('a') throws an exception `'parameter missing'`
-   subtract('') throws an exception `'parameter missing'`

### 8. parameters are not numbers
-   subtract('a', 2) throws an exception `'only numbers allowed'`
-   subtract(1, 'a') throws an exception `'only numbers allowed'`
-   subtract('a', 'b') throws an exception `'only numbers allowed'`
-   subtract('','') throws an exception `'only numbers allowed'`
-   subtract(null, 1) throws an exception `'parameter missing'`,
-   subtract(undefined, 1) throws an exception `'parameter missing'`
