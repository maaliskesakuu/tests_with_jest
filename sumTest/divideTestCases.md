## **divide**

Returns the result of division a/b. Numbers are passed to the function as parameters.

-   if a parameter is missing, throws an exception: `'parameter missing'`
-   if parameters are not numbers, throws an exception:
    `'only numbers allowed'`

problems:
0/0 => NaN
2/0 => Infinity
-2/0 => -Infinity
Infinity/Infinity => NaN
-Infinity/-Infinity => NaN
-Infinity/Infinity => NaN
Infinity/-Infinity

## Test cases

### 1. function divide defined

### 2. divide

### 2.1.

-   divide(1, 2) return 0.5
-   divide(4, 2) return 2
-   divide(-4, 2) return -2
-   divide(4, -2) return -2
-   divide(-4, -2) return 2
-   divide(3, 3) return 1
-   divide(2.4, 3.5) return 0.69
-   divide(2.5, 3) return 0.83
-   divide(1, 1) return 1
-   divide(2, 3) return 0.67
-   divide(-2, -4) return 0.5
-   divide(-2, 4) return -0.5
-   divide(2, -4) return -0.5
-   divide(0, 3) return 0
-   divide(0, -3) return 0

-   divide(10, 11.5) return 0.87
-   divide(2.5, 3) return 0.83
-   divide(-2.5, 3) return -0.83
-   divide(3, -2.5) return -1.2
-   divide(-3, 2.5) return -1.2
-   divide(-3, -2.5) return 1.2
-   divide(-2.5, -2.5) return -1
-   divide(2.5, 2.5) return 1
-   divide(-2.5, 2.5) return -1
-   divide(2.4, -2.5) return -0.95

### 2.2 special cases

-   divide(0, 0) return Number.NaN
-   divide(2, 0) return Number.POSITIVE_INFINITY
-   divide(-2, 0) return Number.NEGATIVE_INFINITY
-   divide(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY) return Number.NaN
-   divide(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY) return Number.NaN
-   divide(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) return Number.NaN
-   divide(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY) return Number.NaN

### 3. missing parameters

-   divide() throws an exception `'parameter missing'`
-   divide(1) throws an exception `'parameter missing'`
-   divide('a') throws an exception `'parameter missing'`
-   divide('') throws an exception `'parameter missing'`

### 4. parameters are not numbers

-   divide('a', 2) throws an exception `'only numbers allowed'`
-   divide(1, 'a') throws an exception `'only numbers allowed'`
-   divide('a', 'b') throws an exception `'only numbers allowed'`
-   divide('','') throws an exception `'only numbers allowed'`
-   divide(null, 1) throws an exception `'parameter missing'`,
-   divide(undefined, 1) throws an exception `'parameter missing'`
