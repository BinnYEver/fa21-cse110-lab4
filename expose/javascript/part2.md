### Part2
## Question1:
<<<<<<< HEAD
Output:
3 <br>
Explaination: Since for each time running the for loop, the i will increase 1, the given array has the length of 3. Therefore, we need to run 3 times of the for loop, then the i will increase 3, which means from 0 to 3. <br>
=======
Output: 3 <br>
Explain: Since for each time running the for loop, the i will increase 1, the given array has the length of 3. Therefore, we need to run 3 times of the for loop, then the i will increase 3, which means from 0 to 3.
>>>>>>> 1cfe359e508691a5c83db8e1428538d1c6971bdf
## Question2:
Output: 
150 <br>
Explaination: Since the third for loop is given the number prices[2] = 300, therefore, ‘var discountedPrice = price[i] * (1 - discount);’ will be discountedPrice = 300 * (1 - 0.5) = 150 <br>
## Question3:
Output: <br>
150 <br>
Explaination: Since the third for loop we already have discountedPrice = 150, therefore, ‘finalPrice = Math.round(discountedPrice * 100)/100;’ will be discountedPrice = Math.round(150 * 100)/100  = 150 <br>
## Question4:
Output: <br>
50 <br>
100 <br>
150 <br>
Explaination: Since for each iteration in the for loop, we process ‘var discountedPrice = price[i] * (1 - discount);’ and finalPrice = Math.round(discountedPrice * 100)/100;’ the input numbers of price[i] are given from array price[], which are 100, 200, 300. So after the processing finalPrice will be 50, 100, 150 respectively. Then we push them into discounted[] via ‘discounted.push(finalPrice);’ <br>
## Question5:
Output: <br>
ReferenceError: i is not defined <br>
Explaination: Since the i with the let keyword defines in the for statement block, therefore, the scope of i will be only within the for statement, when we process the “console.log(i)” the result is out of the scope. <br>
## Question6:
Output: <br>
ReferenceError: discountedPrice is not defined <br>
Explaination: Since the discountedPrice with the let keyword defines in the for statement block, therefore, the scope of discountedPrice will be only within the for statement, when we process the “console.log(discountedPrice)” the result is out of the scope. <br>
## Question7:
Output: <br>
150 <br>
Explaination: Since the third for loop we already have discountedPrice = 150, therefore, ‘finalPrice = Math.round(discountedPrice * 100)/100;’ will be discountedPrice = Math.round(150 * 100)/100  = 150, also finalPrice is within its valid block. <br>
## Question8:
Output: <br>
50 <br>
100 <br>
150 <br>
Explaination: Since for each iteration in the for loop, we process ‘let discountedPrice = price[i] * (1 - discount);’ and finalPrice = Math.round(discountedPrice * 100)/100;’ the input numbers of price[i] are given from array price[], which are 100, 200, 300. So after the processing finalPrice will be 50, 100, 150 respectively. Then we push them into discounted[] via ‘discounted.push(finalPrice);’ <br>
## Question9:
Output: <br>
ReferenceError: i is not defined <br>
Explaination: Since the i with the let keyword defines in the for statement block, therefore, the scope of i will be only within the for statement, when we process the “console.log(i)” the result is out of the scope. <br>
## Question10:
Output: <br>
3 <br>
Explaination: Since ‘const length = prices.length;’, the length is set to be the length of the prices[] array which is 3. <br>
## Question11:
Output: <br>
50 <br>
100 <br>
150 <br>
Explaination: Since for each iteration in the for loop, we process ‘const discountedPrice = price[i] * (1 - discount);’  the input numbers of price[i] are given from array price[], which are 100, 200, 300. So after the processing discountedPrice will be 50, 100, 150 respectively. Then we push them into discounted[] via ‘discounted.push(discountedPrice);’ Since in each for loop we define a new ‘const discountedPrice’ therefore, there will not be a scope and assign problem. <br>
## Question12:
A.student.name <br>
B.student[‘Grad Year’] <br>
C. student.greeting() <br>
D.student[‘Favorite Teacher’].name <br>
E.student.courseLoad[0] <br>
## Question13:
A.‘32’ <br>
Explaination: Since this will transfer the number 2 to string ‘2’ and then combine two strings <br>
B.1 <br>
Explaination: Since this will transfer the string ‘3’ to number 3 and then do the 3 minus 2 <br>
C.3 <br>
Explaination: Since the null will transfer to the number 0 and then do the 3 add 0 <br>
D.3null <br>
Explaination: Since the null will transfer to the string ‘null’ and then do the string combination with ‘3’ <br>
E.4 <br>
Explaination: Since the true will transfer to the number 1 and then do the 1 add 3 <br>
F.0 <br>
Explaination: Since the false will transfer to the number 0 and the null will transfer to number 0 as well, then do the 0 add 0 <br>
G.3undefined <br>
Explaination: Since here undefined will transfer to the string ‘undefined’ and then do the string combination with ‘3’ <br>
H.NaN <br>
Explaination: Since there is no way for undefined or ‘3’ to transfer into one type of data and then do the minus operation. Therefore, the output will be not a number <br>
## Question14:
A.true <br>
Explaination: Since string ‘2’ will be transfer to the number 2 and then do the comparison with 1 <br>
B.false <br>
Explaination: Since on both side are string therefore, they will compare their Unicode. Here the Unicode of ‘12’ is less than the Unicode of ‘2’ since we compare the first value of the string, which are ‘1’ and ‘2’ <br>
C.true <br>
Explaination: Since the ‘2’ will transfer to the number 2 and then compare them <br>
D.false <br>
Explaination: Since string ‘2’ and number 2 have different data type therefore return false <br>
E.false <br>
Explaination: Since here true will transfer to the number 1 and then compare 1 to 2 return is false <br>
F. true <br>
Explaination: Since Boolean(2) will return a true case 2 is a number other than 0, therefore, both sides are true, return is true <br>
## Question15:
== will be used to compare two variables in a way of ignoring the datatype of the variable <br>
=== will be used to compare two variables in a way of checking their datatype and their value <br>
## Question17:
Explaination: The newArr[] will be 2, 4, 6. [1,2,3] and doSomething will be passed to the function modifyArray then after entered the for loop, we call the callback function which is the doSomething function and give the 1, 2, 3 respectively to the doSomething function. The doSomething will double the input number and return. Then we push those numbers into newArr[]. Therefore, the number in newArr[] will be 2, 4, 6. <br>
## Question19:
<<<<<<< HEAD
Output: <br>
1 <br>
4 <br>
3 <br>
2 <br>
=======
1
4
3
2
>>>>>>> 1cfe359e508691a5c83db8e1428538d1c6971bdf
