/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */
//do not begin variables with numbers
//var 1stCar = 'Doge';
var FirstCar = 'Doge';
//you dont use double key words in declaring a variable
//var var = 'variable';
var variableName= 'variable'
//no space between variable names
//var first name = 'Jerry';
var firstname = 'Jerry'
//use camelcase to enable readability
//var Sch00lName = 'MEST';
var SchoolName = 'MEST'
//Use camelcase
//var totalnumber = 100;
var TotalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
 //use of escape sequence needed
//var greeting  =  'It\'s nice to me you today!';
var greeting = 'It\'s nice to me you today!';
//use of escape sequence
var response = "Ashwin said, \"Yes Sir!\"";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here*/
 its true since they are of the same data type and content


/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
 var aObject = {};
 var pizza = {
 	Type : 'Barbeque'
 	Toppings : 'Cheese'
 	Taste : 'delicious'
 	Drink : 'CocaCola'
 };

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

function Animal (mammal,type,size,habitat)
	this.mammal = mammal;
	this.type = type;
	this.size = size;
	this.habitat=habitat;

}

Animal.prototype.view(){
	return this.mammal

};

Animal.prototype.type(){
	return this.type + ' stay in' + this.habitat

};


animal1 = new Animal('cat','cuteblack','small','house')

animal1.view()
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
var item = prompt('menu items','enter item number')
switch (item)
		case 1:
		alert('jolof is 3 cedis');
		break;
		case 2:
		alert('kenke is 5 cedis')
		break;
		default:
		alert('item you have selected is not in the menu')
		break;




//ifeslse menu

var item = prompt('menu items', 'enter item number')
	if (item === 1){
		
			alert('jolof is 3 cedis')
			}
		else if(item === 2){
			alert('kenke is 5 cedis') 
	        }
	    else {
	    	alert('item not in menu')
	    }



/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50,67, 80, 90, 100, 30, 88, 68];
for (i =0; i<studentScores.length;i++){
			if (studentScores[i] <= 50){
			
				alert('fail')
				}
			else if(studentScores[i] >=51 && studentScores[i] <= 80 ){
				alert('pass') 
		        }
		    else if (studentScores[i] >= 81 && studentScores[i]<= 100){
		    	alert('excellent')
		    }
		    else{
		    	alert('marks not in range')
		    }
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */var studentScores = [50, 67, 80, 90, 100,30, 88, 68];
 var sum = 0;
 	for each (var score in studentScores){
 		sum += score
 		return sum

 	}