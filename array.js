console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]
*/
 var arr1=[ 1,7 ,9 , 45 ];
 var arr2=['Str' ,'alex','moh', 'the','fox', 'over' ,lazy, 'dog' ];


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

fruits[0]=Tomato
fruits[1]=Banana
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var favFood=[fav1,fav2,fav3,fav4,fav5];
var favSport=[fav1,fav2,fav3];
var favMovie=[fav1,fav2,fav3,fav4];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(arr)
{
return arr[0];
}

var array=[1,6,3,9,5,7];
firstOfArray(array);

//result : 1
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function firstOfArray(arr)
{
	var i =arr.length;
	return arr[i-1];
}

var array=[1,6,3,9,5,7];
firstOfArray(array);

/*
6
Using console make this array to be like this one 
(push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9];
array.shift(0);
array.shift(5);
array.shift(7);
console.log(array);
//[9]
array.unshift(1,3,4,6,8);
console.log(array);
//[1, 3, 4, 6, 8, 9]
array.push(10);
console.log(array);

//result :  [1, 3, 4, 6, 8, 9, 10]


/*
7
Using the console try to figure out what the thing thats 
(push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5];
array2.push(3,2,0);
	console.log(array2);
	//[5, 9, -7, 3.5, 3, 2, 0]
array2.unshift(1,0.5);
	console.log(array2);
	//[1, 0.5, 5, 9, -7, 3.5, 3, 2, 0]
array2.shift();
	console.log(array2);
	//[0.5, 5, 9, -7, 3.5, 3, 2, 0]
array2.pop();
	console.log(array2);
	//[0.5, 5, 9, -7, 3.5, 3, 2]
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

function middleOfArray(arr){
	var i=arr.length;
	if(i%2==0)
		{return arr[i/2-1]+" and "+arr[i/2];}
	else
		{ return arr[(i-1)/2]}
}

	var array=[1,6,3,9,5];
	middleOfArray(array);

//result : 3
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[3]='zebra';
animals[4]='elephent';
console.log(animals);
//result :  ["cat", "ele", "bird", "zebra", "elephent"]

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/
function indexOfArray(arr,index)
{
	return arr[index];

}
var nums= [1,2,3,8,9];

indexOfArray(nums,4);



/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/

function arrayExceptLast(arr)
{	//arr.pop();
	arr.splice(arr.length-1);//another way

	return arr;
}
var nums= [1,2,3,8,9];
arrayExceptLast(nums);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
function addToEnd(arr,value)
{
	arr.push(value);//method 1
	arr[arr.length]=value;//method 2
	return arr;
}
var nums= [1,2,3,8,9];
addToEnd(nums,55);



// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(array){
	var len=array.length;
	var sum=0;
	for(i=0;i<len;i++){
		sum+=array[i];
	}
	return sum;
}
var nums= [1,2,3,8,9];
sumArray(nums);
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(array){
var len=array.length;
	var min=array[0];
		
		/*for(var i=0;i<len;i++){
			if (array[i]<=min ) {
				min=array[i];
			}
		} method 1*/

		var counter=0;		//method 2
		while (counter<len)
		{
			if (array[counter]<=min ) {
				min=array[counter];
			}
			counter++;
		}
	
	return min;
}
var nums= [5,4,3,6,9,1];
minInArray(nums);
//result:1
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(array,rmv){ //method 1
	
		for (var i = 0; i <array.length; i++) {
			if(array[i]==rmv){
				array.splice(i,1);
				i--;
			}

	}

	var counter=0;		//method 2
		while (counter<array.length)
		{
			if (array[counter]==rmv ) {
				array.splice(counter,1);
				counter--;		
			}
			counter++;
		}
	
	return array;
}
var nums= [15,20,30,30,30,30,20];
removeFromArray(nums,30);
//result :[15, 20, 20]
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(array){
	var oddArr=[];
	// for (var i=0; i <array.length; i++) { //method 1
	// 	if(array[i]%2!==0)
	// 	{
	// 		oddArr.push(array[i]);
	// 	}
	// }

	var count=0;		//method 2
		while (count<array.length)
		{
			if(array[count]%2!==0)
			{oddArr.push(array[count]);}
		count++;
		}

	return oddArr;

}

var nums= [1,2,3,8,9,6,2,8,4,3,6,4,5,6,8,9];
oddArray(nums);
/*result :[1, 3, 9, 3, 5, 9]
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(array) {
	// body...
	//method 1
	var sum=0;
	var len=array.length;
// 	for (var i=0; i<array.length; i++) {
// 		sum+=array[i];
// 	}
	counter=0;
	while(counter<len)
    {
		sum+=array[counter];
		counter++;
    }
	return sum/len;
}
var nums=[1,2,3,8,9,77];
aveArray(nums);
/*
//result :16.6
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function shorterInArray(strArray){
	var len=strArray.length;
	var min=strArray[0].length;
		
		// for(var i=0;i<len;i++){
		// 	if (strArray[i].length<=min ) {
		// 		min=strArray[i];
		// 	}
		// }// method 1

		var counter=0;		//method 2
		while (counter<len)
		{
			if (strArray[counter].length<=min ) {
				min=strArray[counter];
			}
			counter++;
		}
	
	return min;
}


var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
shorterInArray(strings);
//result : alex
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(str,char){
var sum=0;
// for (var i=0;i<str.length;i++) {
// 	if(str.charAt(i)==char){
// 		sum++;
// 	}
// }

		var counter=0;		//method 2
		while (counter<str.length)
		{
			if (str.charAt(counter)==char ) {
				sum++;
			}
			counter++;
		}
	return sum;
}
var string= "alex mercer madrasa rashed2 emad hala";
repeatChar(string,"a");
//result : 8
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(strArray){
	var len=strArray.length;
	var str="";
	// for (var i = 0; i <len; i+=2) {
	// 	if (strArray[i].length%2!=0) {
	// 		str=strArray[i];
	// 	}
	// }
	var count=0;
	while(count<len){
		if (strArray[count].length%2!=0) {
			str=strArray[count];
		}
		count+=2;
	}
	
	return str;

}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
evenIndexOddLength(strings);
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(array){
	var arr=[];
	for(var i=0;i<array.length;i++){
		arr.push(array[i]**i);

	}
	return arr;
}
var nums= [44, 5, 4, 3, 2, 10];
powerElementIndex(nums);
//result : [1, 5, 16, 27, 16, 100000]
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(array) {
	var evenArr=[];
	// for (var i=0; i <array.length; i+2) { //method 1
	// 	if(array[i]%2==0)
	// 	{
	// 		evenArr.push(array[i]);
	// 	}
	// }

	var count=0;		//method 2
		while (count<array.length)
		{
			if(array[count]%2==0)
			{evenArr.push(array[count]);}
		count+=2;
		}

	return evenArr;
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1];
evenNumberEvenIndex(nums);
//result [2, 8, 34]


