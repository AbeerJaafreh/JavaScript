console.log('Here is : ', 'Reduce & Filter') \

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function avgAge(persons){
var avg=persons.reduce(function(acc,cu){return acc+cu.age;},0);
console.log(avg/persons.length);
}
avgAge(persons);
/*

/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function longestName(persons)
{
	var longerst=persons.reduce(function(acc,cu){
		if(acc.length<(cu.name.first+cu.name.last).length){
			return cu.name.first+" "+cu.name.last;
		}
		else {return acc}
	},'');

	return longerst;
}
longestName(persons);


/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(array){
	var max=array.reduce((max,cu)=>{return (max > cu)?max :cu });
	return max

}
maxNumber([1,2,4,9]);
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(string,char){
string=string.toLowerCase();
string=string.split("");
var count=0;
var numTimes=string.reduce(function(acc,ch)
	{if(ch===char)
		{count++;}

});

return count;
}
repeatChar("hello world",'w');

/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
                      
// function usAndNumberBeetweenUs(num1,num2){
// var arr=[num1,num2+1];
// var abc=[];
// var newArr=arr.filter(function(bet){
// 	bet =num1;
// 	return (bet>=num1 && bet<=num2);
// 	abc.push[bet];
// });
// console.log(abc);

// }

// usAndNumberBeetweenUs(2,5);



//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an arra y of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

function evenOnly(array)
{
	var evenArr=array.filter(value=>value%2==0);
	console.log(evenArr);


}
evenOnly([1,8,6,4]);
/*
7
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/
function  multiFour(array)
{
	var mulFour=array.filter(value=>value%4==0);
	console.log(mulFour);
}
multiFour([1,8,6,4]);
/*
8
**this question not that easy mybe you will need 
to use two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/

function containChar(strArr,char)
{
	var newArr=strArr.filter(function(string)
		{if(string.indexOf(char))
		console.log( newArr);},0);




}
containChar(["hello","world"],'w');

/*
9
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/


/*
10
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

/*
11
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/

/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/



/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/


/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/

//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/


/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/

// if you finish the exercises review the material of the week and help your classmate