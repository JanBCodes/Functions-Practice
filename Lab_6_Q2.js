
/*
Write a program to calculate the square of a number. 
The square must be calculated by creating a function called sqr 
which receives the appropriate parameters, calculates the square of the number and returns it to the calling function.
*/

function sqr(n)
{
	return n**2
}

function main()
{
num=parseInt(prompt(`Please enter a number to be squared`));
alert(`The number ${num} squared is equal to ${sqr(num)}`);
}

main();
