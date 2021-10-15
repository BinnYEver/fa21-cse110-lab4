# Part1
## Question1:
### values added:  20
## Quesiton2: 
### final result:  20
## Question3: 
### values added:  20
## Question4:
### ReferenceError: result is not defined
### Since the result with the let keyword defines in the if statement block, therefore, the scope of it will be only within the if statement, when we process the “console.log(‘final result: ’, result)” the result is out of the scope.
## Question5:
### TypeError: Assignment to constant variable.
## Question6:
### TypeError: Assignment to constant variable.
### 5 and 6 have the same issue, which is that the result has the const keyword, which means that after result is assigned to 0 at the beginning it cannot be assigned to the sum of the num1 and num2.