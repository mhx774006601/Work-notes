	//不生成新数组的迭代器方法
	//square
	function square(num){
		console.log(num, num * num)
	}
	var nums = [1,2,3,4,5,6,7,8,9,10];
	nums.forEach(square)
	
	
	//every
	function isEven(num){
		return num % 2 == 0;
	}
	var nums2 = [2,4,6,7,10]
	var even = nums2.every(isEven)
	if(even){
		console.log(even)
		console.log('all numbers are even')
	}else{
		console.log(even)
		console.log('not all numbers are even')
	}

	//some	
	function isEven(num){
		return num % 2 == 0;
	}
	var nums3 = [2,4,6,7,10]
	var even = nums3.some(isEven)
	if(even){
		console.log(even)
		console.log('all numbers are even')
	}else{
		console.log(even)
		console.log('not all numbers are even')
	}
	
	//reduce()方法接受一个函数
	function add(num1,curr_num2){
		return num1+ curr_num2;
	}
	var nums4 = [1,2,3,4,5,6,7,8,9,10];
	var sum = nums4.reduce(add);
	console.log(sum)
	
	//reduce()方法也可以将数组中的元素连接成一个长的字符串
	function concat(str,item){
		return str + item;
	}
	var words=['12 ','345 ','46 '];
	var sentence = words.reduce(concat);
	console.log(sentence)

	//reduceRight()是从右到左执行
	var sentence2 = words.reduceRight(concat);
	console.log(sentence2)

