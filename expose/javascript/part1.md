# Part1
## Question1:
Output: <br>
values added:  20 <br>
## Quesiton2: 
Output: <br>
final result:  20 <br>
## Question3: 
Output: <br>
values added:  20 <br>
## Question4: 
Output: <br>
ReferenceError: result is not defined <br>
Explanation: Since the result with the let keyword defines in the if statement block, therefore, the scope of it will be only within the if statement, when we process the “console.log(‘final result: ’, result)” the result is out of the scope. <br>
## Question5: 
Output: <br>
TypeError: Assignment to constant variable. <br>
## Question6:
Output: <br>
TypeError: Assignment to constant variable. <br>
Explanation: 5 and 6 have the same issue, which is that the result has the const keyword, which means that after result is assigned to 0 at the beginning it cannot be assigned to the sum of the num1 and num2. <br>