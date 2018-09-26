/*
 * new运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
 * // Otaku 御宅族，简称宅
	function Otaku (name, age) {
    	this.name = name;
    	this.age = age;
    	this.habit = 'Games';
	}
	Otaku.prototype.strength = 60;
	Otaku.prototype.sayYourName = function () {
    	console.log('I am ' + this.name);
	}
 	var person = new Otaku('Kevin', '18');
    console.log(person.name) // Kevin
	console.log(person.habit) // Games
	console.log(person.strength) // 60
 	person.sayYourName(); // I am Kevin
 	从该例可看出：
	1. 访问到 Otaku 构造函数里的属性
	2. 访问到 Otaku.prototype 中的属性
 * */
/*
 * new是关键字，且new的结果是一个新对象，故在模拟实现时，要建立一个新的对象。使用原型链的特性
 * 
	1. 用new Object() 的方式新建了一个对象 obj
	2. 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
	3. 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
	4. 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
	5. 返回 obj

 * */
function objectFactory() {
 
    var obj = new Object(),
 
    Constructor = [].shift.call(arguments);
 
    obj.__proto__ = Constructor.prototype;
 
    var ret = Constructor.apply(obj, arguments);
 
    return typeof ret === 'object' ? ret : obj;
 
};
