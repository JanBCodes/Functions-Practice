/*
Write a program that calculates an Area of a circle. 
The area of the circle must be calculated by creating a function called areaCircle
which receives the appropriate arguments, calculates the area and returns it to the calling function.
*/

function areaCircle(n)
{
	const pi= 22/7
	return pi*(n**2)
}

function main()
{
num=parseInt(prompt(`Please enter a the radius`));
alert(`The area of a Circle with a radius of ${num} is equal to ${areaCircle(num).toFixed(2)}`);
}

main();
