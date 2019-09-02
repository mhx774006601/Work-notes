//生成新数组的迭代器方法
//map()返回新数组，该组的元素是对原有元素应用某个函数得到的结果。
function curve(grade){
	return grade+5;
}
var grades=[77,65,81,92,83];
var newgrades  = grades.map(curve);
console.log(newgrades)

function first(word){
	return word[0];
}
var words = ['for','your','add']
var aa = words.map(first);
console.log(aa.join(''));

//filter传入一个返回值为布尔类型的函数。和 every() 方法不同的是，
//当对数组中的所有元素应用该函数，结果均为 true 时，该方法并不返回 true ，而是返回
//一个新数组，该数组包含应用该函数后结果为 true 的元素。
function isEven(n){
	return n % 2 == 0;	
}
function isOld(n){
	return n % 2 != 0;
}
var nums = [];
for(var i=0;i<20;++i){
	nums[i] = i+1;
}
var evens = nums.filter(isEven);
console.log(evens);

var odds = nums.filter(isOld);
console.log(odds);

function passing(num){
	return num>=60;
}
var grades = [];
for(var i=0;i<20;++i){
	grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log(grades);
console.log(passGrades);

function afterc(str){
	if(str.indexOf('cie')>-1){
		return true;
	}
	return false;
}
var words=['recieve','deceive','percieve','deceit','concieve'];
var misspelled = words.filter(afterc);
console.log(misspelled)
