# Dice class (API)

This is a Dice class for dice games. Dice has a field that holds the number of dots. The number of dots is between 1 and a given upper bound. The maximum upper bound is 20. If the dice hasn't been rolled, the number of dots is 0.

#### Test case

0. test that all methods and getters are defined

## Operations

### **constructor**

-   initializes the dice with upper bound that is passed as parameter
-   initializes dot count to 0
-   if upper bound is missing, the default upper bound is 6.
-   if upper bound is not an integer, throws an exception `'Upper bound must be an integer'`.
-   if the upper bound is not between 1 and 20, an exception is thrown:
    -   upper bound > 20: `'Upper bound too big'`
    -   upper bound < 1: `'Upper bound too small'`

#### Test cases

1.  create a dice with no upper bound

    -   creates a dice with lower bound and the upper bound 6
    -   dot count is zero

2.  create a dice with given upper bound

    -   create a dice all upper bounds 1 to 20

3.  test exceptions with wrong upper bounds
    -   21 throws an exception 'Upper bound too big'
    -   -1 throws an exception 'Upper bound too small'
    -   0 throws an exception 'Upper bound too small'
    -   'a' throws an exception 'Upper bound must be an integer'
    -   2.5 throws an exception 'Upper bound must be an integer'

### **getters**

#### **minimumValue**

-   returns the lower bound of a dice. It should be 1.

#### Test case

4. test that the minumum value is 1

#### **maximumValue**

-   returns the upper bound of a dice

#### Test case

5. create a dice with upper bound 20 and check if the maximum value is the same as the upper bound. Test this with the test case 2.

#### **dots**

-   returns the number of dots

### **methods**

#### **roll**

-   rolls the dice
-   dot count becomes a random number between 1 and the upper bound
-   when a dice is rolled, the dot count can't become zero again.
-   returns nothing

##### Test cases

6. create a dice with no upper bound. Upper bound is 6.
   Test when the dice hasn't been rolled. Dot count should be 0.
   Test when rolled, dot count should be between 1 and 6.

7. create a dice with the upper bound 20.
   Test when the dice hasn't been rolled. Dot count should be 0.
   Test when rolled, dot count should be between 1 and 20.

#### **toString**

-   returns dot count as a string, for example `'4'`
-   if the dice hasn't been rolled yet, returns a text `'Not rolled yet'`

##### Test cases

    in both cases create a new dice first with no upper bound

8. dice not rolled returns 'Not rolled yet'

9. dice rolled returns dot count as a string. Compare the result ofto string to dots.
