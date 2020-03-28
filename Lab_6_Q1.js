/*
Write a program that requests from the user two numbers. 
The program is required to calculate the sum of the two numbers received from the user and display the output to the user. 
The sum must be calculated by creating a function called sum which receives two arguments, 
calculates the sum of the two values and returns the answer to the calling function.

*/

function sum(n, n1)
{
	return n + n1	
}

function main()
{
num1=parseInt(prompt(`Please enter the first number to be added`));
num2=parseInt(prompt(`Please enter the second number to be added`));
alert(`The sum of ${num1} and ${num2} is ${sum(num1,num2)}`);
}
main();