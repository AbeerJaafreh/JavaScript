console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth),
 favorite food (3),favorite movie (5)
*/


var myInfo = {
firstName: 'Abeer',
lastLast: 'Jaafreh' , 
age: 35,
dob:1996,
favFood:["salad","spaghetti","mansaf"],
favMovie:["Me Before You","Mission Impossible","Cast Away"]};  

myInfo;  




var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function firstName(persons){
  for (var i=0;i<persons.length;i++) {
      console.log(persons[i].name.first);
    }
}
firstName(persons);


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

function averageAge(persons){
  var sum=0;
  var avg;
  for (var i=0;i<persons.length;i++) {
      sum+=persons[i].age;
    }
    return sum/persons.length;
}
averageAge(persons);
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Al-Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function averageAge(persons){
  var olderAge=persons[0].age;
  var name;
  for (var i=0;i<persons.length;i++) {
      if (persons[i].age>olderAge) 
      {
        olderAge=persons[i].age;
        name =persons[i].name.first+" "+persons[i].name.last;
      }
    }
    return name;
}
averageAge(persons);


/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Al-Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
function longestName(persons){
  var longName=persons[0].name.first.lenght + persons[0].name.last.length;
  var index=0;
   for (i=1;i<persons.length;i++) 
  {
    if((persons[i].name.first.lenght + persons[i].name.last.lenght)>longName)
      longName=persons[i].name.first.length + persons[i].name.last.length;
      index=i;

  }
  return persons[index].name.first+" " + persons[index].name.last;
}
longestName(persons);

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(string)
{
  var arr=string.length;
  var keys=[];
  var values=[];
  
  for (var j =0; j<arr; j++) {
    var counter=0;
    keys[j]=string[j];
    for(var i=0;i<arr;i++){
     if (string[j]==string[i]) {
      counter++;
     }
    }
    values[j]=counter;
  }
  var newObj={};
  keys.forEach((keys,i)=>newObj[keys]=values[i]);
  return newObj;
}

var word="My name is alex mercer class name B baba mama hello Hello HELLO";
word=word.toLowerCase();
array=word.split(" ");
repeatedWord(array);
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(string)
{
  var arr=string.length;
  var keys=[];
  var values=[];
  
  for (var j =0; j<arr; j++) {
    var counter=0;
    keys[j]=string[j];
    for(var i=0;i<arr;i++){
     if (string[j]==string[i]) {
      counter++;
     }
    }
    values[j]=counter;
  }
  var newObj={};
  keys.forEach((keys,i)=>newObj[keys]=values[i]);
  return newObj;
}

var word="mamababatetacedo";
word=word.toLowerCase();
array=word.split("");
repeatChar(array);

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(obj,array){
var newObj={};
    
    for (key in obj ){
      for (i in array)
      {  if (array[i]==key){
          newObj[key]=obj[key];
      }
    }
  }
  return newObj;
}

var newObject={a:1,cat:3};
var arr=['a','cat','d','a','cat'];
selectFromObject(newObject,arr);

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object
Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj)
{var newArr=[];
// Object.key(obj).forEach(item=>{console.log(item)})
  for(key in obj){
    newArr.push(key,obj[key]);
  }
  return newArr;
}
objectToArray({firstName:"Moh",age:24});

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object
Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function  arrayToObject(arr)
{var newObj={};
  for(i=0;i<arr.length;i++)
  {
    newObj[arr[i]]= arr[++i];
  }

return objectOfKeys;
}
arrayToObject(["firstName","Moh","age",24]);
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable
Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function  onlyNumber(object)
{
  var newObj={};
  for(x in object)
  {if (typeof (object[x])=='number') {
        newObj[x]=object[x];
      }
  }
  return  newObj;

}
onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]});


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable
Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(object)
{
  var newObj={};
  for (x in object)
  {
      if(typeof(object[x])=='string'){
		newObj[x]=object[x];
	}

  }
  return newObj
}
onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]});

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable
Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(object)
{
  var newObj={};
  for (x in object)
  {
      if(typeof(object[x])=='object'){
		newObj[x]=object[x];
	}

  }
  return newObj
}
onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]});

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']
*/

function keysArray(object)
{
  var newArr=[];
  for(x in object){
    newArr.push(x);
  }
  return newArr; 
}
keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]});

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object
Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]
*/
function valuesArray(object)
{
  var newArr=[];
  for(x in object){
    newArr.push(object[x]);
  }
  return newArr; 
}
valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]});

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var object={a:1,b:3,c:4};
delete object.b;
object.a=4;
object.c=66;
console.log(object);

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object
Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(object)
{
  var counter=0;
  for(key in object)
  {
    counter++
  }
  return "number of keys = "+counter;
}
objectLength({a:1,b:2,c:3,d:4})
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even
Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/

function evenValue(object)
{
  var newObj={}
  for(key in object)
  {
    if(object[key]%2==0)
    {
      newObj[key]=object[key];
    }
  }
  return newObj;
  
}
evenValue({a:1, b:2, c:3, d:4})

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key
Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(object)
{
  
  var keys=Object.keys(object);
  var max=keys[0].length;
  var val=keys[0];
  var valKey=object[0];

  for(var i=1;i<keys.length;i++)
  {
    if(keys[i].length>max){
    val=keys[i];
    max=keys[i].length;
    valKey=object[val]
    }
  }
  return valKey;
}
longestKey({car:1, school:2, monster:3, alexMercer:4});
