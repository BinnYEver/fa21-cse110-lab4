### Part2
## Question1:
Output: 3 <br>
Explain: Since for each time running the for loop, the i will increase 1, the given array has the length of 3. Therefore, we need to run 3 times of the for loop, then the i will increase 3, which means from 0 to 3.
## Question2:
150
Since the third for loop is given the number prices[2] = 300, therefore, ‘var discountedPrice = price[i] * (1 - discount);’ will be discountedPrice = 300 * (1 - 0.5) = 150
## Question3:
150
Since the third for loop we already have discountedPrice = 150, therefore, ‘finalPrice = Math.round(discountedPrice * 100)/100;’ will be discountedPrice = Math.round(150 * 100)/100  = 150
## Question4:
50
100
150
Since for each iteration in the for loop, we process ‘var discountedPrice = price[i] * (1 - discount);’ and finalPrice = Math.round(discountedPrice * 100)/100;’ the input numbers of price[i] are given from array price[], which are 100, 200, 300. So after the processing finalPrice will be 50, 100, 150 respectively. Then we push them into discounted[] via ‘discounted.push(finalPrice);’
## Question5:
ReferenceError: i is not defined
Since the i with the let keyword defines in the for statement block, therefore, the scope of i will be only within the for statement, when we process the “console.log(i)” the result is out of the scope.
## Question6:
ReferenceError: discountedPrice is not defined
Since the discountedPrice with the let keyword defines in the for statement block, therefore, the scope of discountedPrice will be only within the for statement, when we process the “console.log(discountedPrice)” the result is out of the scope.
## Question7:
150
Since the third for loop we already have discountedPrice = 150, therefore, ‘finalPrice = Math.round(discountedPrice * 100)/100;’ will be discountedPrice = Math.round(150 * 100)/100  = 150, also finalPrice is within its valid block.
## Question8:
50
100
150
Since for each iteration in the for loop, we process ‘let discountedPrice = price[i] * (1 - discount);’ and finalPrice = Math.round(discountedPrice * 100)/100;’ the input numbers of price[i] are given from array price[], which are 100, 200, 300. So after the processing finalPrice will be 50, 100, 150 respectively. Then we push them into discounted[] via ‘discounted.push(finalPrice);’
## Question9:
ReferenceError: i is not defined
Since the i with the let keyword defines in the for statement block, therefore, the scope of i will be only within the for statement, when we process the “console.log(i)” the result is out of the scope.
## Question10:
3
Since ‘const length = prices.length;’, the length is set to be the length of the prices[] array which is 3.
## Question11:
50
100
150
Since for each iteration in the for loop, we process ‘const discountedPrice = price[i] * (1 - discount);’  the input numbers of price[i] are given from array price[], which are 100, 200, 300. So after the processing discountedPrice will be 50, 100, 150 respectively. Then we push them into discounted[] via ‘discounted.push(discountedPrice);’ Since in each for loop we define a new ‘const discountedPrice’ therefore, there will not be a scope and assign problem.
## Question12:
A.student.name
B.student[‘Grad Year’]
C. student.greeting()
D.student[‘Favorite Teacher’].name
E.student.courseLoad[0]
## Question13:
A.‘32’
Since this will transfer the number 2 to string ‘2’ and then combine two strings
B.1
Since this will transfer the string ‘3’ to number 3 and then do the 3 minus 2
C.3
Since the null will transfer to the number 0 and then do the 3 add 0
D.3null
Since the null will transfer to the string ‘null’ and then do the string combination with ‘3’
E.4
Since the true will transfer to the number 1 and then do the 1 add 3
F.0
Since the false will transfer to the number 0 and the null will transfer to number 0 as well, then do the 0 add 0
G.3undefined
Since here undefined will transfer to the string ‘undefined’ and then do the string combination with ‘3’
H.NaN
Since there is no way for undefined or ‘3’ to transfer into one type of data and then do the minus operation. Therefore, the output will be not a number
## Question14:
A.true
Since string ‘2’ will be transfer to the number 2 and then do the comparison with 1
B.false
Since on both side are string therefore, they will compare their Unicode. Here the Unicode of ‘12’ is less than the Unicode of ‘2’ since we compare the first value of the string, which are ‘1’ and ‘2’
C.true
Since the ‘2’ will transfer to the number 2 and then compare them
D.false
Since string ‘2’ and number 2 have different data type therefore return false
E.false
Since here true will transfer to the number 1 and then compare 1 to 2 return is false
F. true
Since Boolean(2) will return a true case 2 is a number other than 0, therefore, both sides are true, return is true
## Question15:
== will be used to compare two variables in a way of ignoring the datatype of the variable
=== will be used to compare two variables in a way of checking their datatype and their value
## Question17:
The newArr[] will be 2, 4, 6. [1,2,3] and doSomething will be passed to the function modifyArray then after entered the for loop, we call the callback function which is the doSomething function and give the 1, 2, 3 respectively to the doSomething function. The doSomething will double the input number and return. Then we push those numbers into newArr[]. Therefore, the number in newArr[] will be 2, 4, 6.
## Question19:
1
4
3
2
