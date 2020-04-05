/*
Write a program to calculate the cube of a number. 
The square must be calculated by creating a function called cube which receives the appropriate parameters, 
calculates the cube of the number and returns it to the calling function.
*/

function cube(n)
{
	return n**3
}

function main()
{
num=parseInt(prompt(`Please enter a number to be cubed`));
alert(`The number ${num} cubed is equal to ${cube(num)}`);
}

main();