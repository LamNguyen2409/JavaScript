//Learn Javascript in Youtube channel : "Thư viện lập trình"

------------------------------------------------------------
Leasson 1 : How to insert a script of javascript in HTML
------------------------------------------------------------

// hard code to fix some small problem by short script
<script type ="text/javascript">...</script>
// how to insert a javascript into a HTML 
<script type="text/javascript"=src="*.js"></script> //insert in head of HTML 
//Example : <script type="text/javascript"=src="./my-javascript/code.js></script>"

//OUTPUT to test functions
console.log('detail') //-> print detail to console log (right click/ inspect element). Error & warning messsage
alert('detail') //-> print a alert into client screen in popup 
document.wwrite('Detail') //-> print detail at place it appears (don't open any popup/modal)

------------------------------------------------------------
Leasson 2 : Statements/ variables/ note & simple caculator
------------------------------------------------------------

// Statements will be run one by one
// Use (;) to the end a statement 
// Many statement in a {} became a statement group

var var_name;
var var_name=value; 

//Example :
var biencuatoi="Hello world";
alert(biencuatoi);

//Note: Each variable don't allow duplication in its working space
//Note: Difference between abc != Abc != ABC
//Note: Var name must to start by these characters : letter (a, b, c...), underscore (_) or $ (don't use because it's used in jquery)

// Note after (//) skip when js runs
// To note more lines by (/*) and the end by (*/)

//Type of var
//Example :
var var_name = 5; // Type of var is number 
var var_name = "text to note detail 'abc' here"; // Type of var is strings
var var_name = 'text to note detail "abc" here'; // Type of var is strings

//Basic caculation : numberics or strings

= // example : var a = 1;
+ // example : var a = 1; var b = 3; var c = a + b;
- // example : var a = 2; var b = 1; var c = a - b;
* // example : var a = 2; var b = 1; var c = a * b;
/ /* example : var a = 2; var b = 1; var c = a / b;*/
% // 5 mode 2 = 1 example : var a = 5; var b = 2; var c = 5 % 2;
++ // plus 1 for value of a var. example : var a = 4; a++;
-- // Subtract 1 for value of a var. example : var b = 3; b--;

//Note :
var a = 5; var b = "6"; var c = a + b; // c = 56 string + string
var a = 5; var b = "6"; var c = a + 3 + b; // c = 86 : (number + number) -> string + string
var a = 5; var b = "6"; var c = b + (a + 5); // c = 610 : 5 + 5 = 10 -> string + string = 610

------------------------------------------------------------
Leasson 3 : Working with condition and conditional structure 
------------------------------------------------------------

boolean type : TRUE or FALSE

// Example : var a = true; ...

// Basic comparings which get result is true or false 

>, <, <=, >=, 
== (value), 
! (not result of boolean), 
===(value, type), 
!= (different value), 
!=== (different both value and type)

// Mutiple comparings

&& 
/* condition 1 = true AND condition 2 = true => true
Any condition i = false => false */

||
/* condition 1 = true OR condition 2 = true => true
Any condition i = true => true */

if and condition comparings

+ if(condition) statement;
+ if(condition) statement; else statement;

/* Example 1
var a = 5, b = 6, c = (a+b)/2;
if (a > c)
	alert("A lớn hơn C");
else 
	alter("C lớn hơn A");

Examle 2:
var a = 5, b = 6, c = (a+b)/2;
if (b >= c){
	b--;
	alert("B lớn hơn hoặc bằng C nên B đã trừ 1");
}

Example 3 : multiple conditions
var a = 5, b = 6, c = (a+b)/2;
if (a > c && b > 6)
alert ("A lớn hơn C và B cũng lớn hơn C");

Example 4 :
var a = 5, b = 6, c = (a+b)/2;
if (b >= c || a >= c) {
	a--;
	b--;
	alert("B hoặc A đã lớn hơn bằng C");
}

Example 5:
var a = 5, b = 6, c = 7;
var max = a;
if (max < b){
	max  = b;
	if (max < c)
		max = c;
}
alert(max);

Example 6:
var a = 5, b = 6, c = 7;

if (a > b) {
	alert("A lớn hơn B");
else
	alert("B lớn hơn A");
}*/

------------------------------------------------------------
Leasson 4 : Working with repeat structure : for and while 
------------------------------------------------------------

for (statement 1; repeat conditions; statement 2){
	// repeat statements
}

Explaintion : /*
Statement 1 : Run when cricle starts at the first time
Repeat conditions : condition = True, continous 
Statement 2 :  Run only when condition = False

Example :
Tính tổng các số tự nhiên từ 1 đến 100 : 1 + 2 + 3 +... 

var i;
var tong = 0;

for (i = 1; i <= 100; i++){
	tong += i;
}
alert(tong); 
*/

structure 1: // Check condition firstly, run only when condition = True
while (repeat conditions){
	// repeat statements
}

structure 2: // Check condition after run a statement, so it runs once at the least 
do{
	// repeat statements
} while (repeat conditions);

/* Example 1
var i = 1;
var tong = 0;

while (i <= 100){
	tong += i;
	i++
}
alert(tong);

Example 2
var i = 1;
var tong = 1;

do {
	i++;
	tong += i;
} while (i < 100);

alert(tong); */

break and continue repeat cricle

structure 1 : break

while (repeat condition){
	break;
} // Stop process as soon as it runs

structure 2:  continue

while (repear condition){
	continue;
} // skip all steps after it runs in a repeat circle, move to next circle.

/* Example 1:

var i = 1;

 for (i = 1; i <= 100; i ++) {
	if (i==50){
	break;
	}
}
alert (i);

Example 2: 

var i = 1;
var k = 1;

while (i <= 100){
	k++;
}
alert(k);

Example 3: 

var i = 1;
var k = 1;

while (i <= 100){
	i++;
	if (i==50){
		continue;
	}
}
alert(k); */

------------------------------------------------------------
Leasson 5 : switch statements (continue)
------------------------------------------------------------

// To resolve problem which we need to compare mutiple value of variable

structure 1 :
switch (var){
	case 1: value_1 : {statement 1; break;}
	case 2: value_2 : {statement 2; break;}
	default : {statement; break;}
}

/* Example 1: 
var bien = 15;
switch (bien){
	case 1 : {
		bien += 10;
		break;
	}
	case 2 : {
		bien += 20;
		break;
	}
	default : {
		bien += 30;
		break;
	}
}
alert(bien);
*/

structure 2 :
switch (var){
	case value_1 : 
	case value_2 : {statement 1; break;}
	case value_3 : {statement 2; break;}
	default : {statement; break;}
}

/* Example 1: 
var bien = 10;
switch (bien){
	case 1 :
	case 10 : {
		bien += 50;
		break;
	}
	default : {
		bien += 30;
		break;
	}
}
alert(bien);
*/

structure 3 :
switch (var){
	case value_1 : {statement;}
	case value_2 : {statement 1; break;}
	case value_3 : {statement 2; break;}
	default : {statement; break;}
}

------------------------------------------------------------
Leasson 6 : Functions and how to use multiple function 
------------------------------------------------------------

structure

// How to declare a function
function function_name (){
	// statement;
}
// How to use function
function_name();

/* Note :
- function_name have to start by letter or character (_) or $
- function_name is duplication in working space
- Different between capslock and non capslock

Example 1:
function fun_name_1(){
	alert("hello world");
}

fun_name_1(); */

// How to declare a function
function function_name (parameter_1, parameter_2, ...){
	// statements;
}
// How to use function
function_name();

/* Example 1:
function sumAB(a,b){
	var sum = a + b;
	alert(sum);
}

sumAB(10,15) */

Use with var return

function function_name (parameter_1, parameter_2, ...){
	// statements;
	var var_1 = f(paramete_1, parameter_2);
	return var_1;
}
// How to use function
var var_2 = function_name();
alert(var_2);

/* Example 1:
function sumAB(a,b){
	return a + b;
	alert(return);
}

sumAB(10,15) 

Example 2:
function sumAB(a,b){
	var t = a + b;
	return t;
}

var sum = sumAB(10,15) 
alert(sum); */

------------------------------------------------------------
Leasson 7 : Resolve and control mistakes  
------------------------------------------------------------

Use a mistakes libary to verify problem where program skills (stop) and show on console.log

How to organise mistake controling

structure = rule to verify problem and resolve them or show error message

try{
	// script which is reason of mistake
	// script is stopped at there, go to catch part below
} catch (e){
	// place to resolve the problem. This script runs only when there is any mistake
	alert(e.message); // Notify error message in user's screen
} finally {
	// This script is always run when there is any mistake or not
}

/* Example 1
function chiaAB (a,b){
	var t = a/b;
	return t;
}

try{
	var kq = chiaAB(15,0);
	alert (kq);	
} catch (e){
	alert (e.message);
}

Example 2 
function chiaAB (a,b){
	var t = a/c;
	return t;
}

try{
	var kq = chiaAB(15,3);
	alert (kq);	
} catch (e){
	alert (e.message);
} */

Create new mistake by throw 

structure // notify error message by custom strings
throw "detail of error message which you need to show";
// Display error message by numberic type
throw number;

/* Example 1 :
function chiaAB (a,b){
	if (b == 0) {
		throw "Khong the co phep chia cho 0";
	}
	var t = a/b;
	return t;
}

try{
	var kq = chiaAB(15,0);
	alert ("Ket qua:" +kq);	
} catch (e){
	alert ("Loi :" + e);
} */

------------------------------------------------------------
Leasson 8 : Working with Array  
------------------------------------------------------------

array is used when you need to save many different values by a variable only

array like a list where there are many values is saved

any value of array is verified by index (i) which is ID _ saving key

- structure 1 :
var array_name = [value_1, value_2, ...];
Value is string or numberic : string need to be in ("string")

/* 
Example 1: 
var car_name = ["Toyota", "Kia morning", "Camry"];
var car_number = ["60-521.05", 52105, "lap-trinh-web"];
var giatri = car_name[1]; // Toyota
var giatri_2 = car_number[3]; // lap-trinh-web 
alert ("Gia tri:" + giatri + "," + "Gia tri 2" + giatri_2); */

------------------------------------------------------------
Leasson 9 : Local variable & Global variable
------------------------------------------------------------

Local var is appear in a function. Memory to save is remove as soon as the function stops 

Golbal var is appear out of function. Use everywhere it's called in the program. Need memory to save in program's life

/* Example 1:

var bien_a =5; // Golbal var

function HamABC(_thamso1, _thamso2) // Local var
{
	var tong = _thamso1 + _thamso2 + bien_a;
	return tong;
}

var ketqua = HamABC(5,6);
alert(ketqua); */

------------------------------------------------------------
Leasson 10 : Functions used for string var
------------------------------------------------------------

String have to be in " " or ' '

/* Example
var t = 'Hello "world"';
var h = "Hello 'world'"; */

\' : '
\" : "
\\ : \
\t : tab
\r\n : enter

Str.length(str1) : Amount of characters in str1
Str.indexOf(str2) : Verify position of str2 appear in str1 by index at the first time
Str.lastIndexOf(str2) : Verify position of str2 appear in str1 by index at the last time
Str.search(Str2) : Like IndexOf, used in (regular expression)

Str.slice(start, end) : Cut a string 2 from a string 1 from (start) to position before the end of string 1
Str.substring(start, end) : Like Str.slice
Str.substr(start, length) : Cat a string 2 with length from a tring 1

/* Example 1:
var Str = "Thu vien lap trinh :'thu vien lap trinh'";
alert(Str);

Example 2:
var Str = "Thu vien lap trinh :'thu vien lap trinh'";
var found_index = Str.indexOf(":");
alert(found_index);

Example 3:
var Str = "Thu vien lap trinh :'thu vien lap trinh'";
var found_index = Str.substr(20,10);
alert(found_index);

Example 4:
var Str = "Thu vien lap trinh :'thu vien lap trinh'";
var found_index = Str.substring(20,30);
alert(found_index); */

Str.replace(Str2, Str3): Replace Str2 by Str3 in Str
Str.toUpperCase() : Return CAPSLOCK for Str 
Str.toLowerCase() : Set lowercase for Str
Str.concat(Str2, Str3) : Add str with other strings return = str + str2 + Str3












