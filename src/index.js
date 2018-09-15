const createEnumerableProperty = (a) => {return a;};
const createNotEnumerableProperty = () => {};
const createProtoMagicObject = () => {return Function;};

let value = 0;
const incrementor = () => {
	value += 1;
	function func(){
		value += 1;
		return func;
	};
	func.toString = function(){
		return value;
	};
	return func;
};


let figure = 0;
const count = async() => {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve();
			figure += 1;
		},100);
	})
}

const asyncIncrementor = async() => {
	await count();
	return figure;
};


const createIncrementer = () => {
	let digits = [1,2,3,4,5,6,7,8,9];
	digits.next = function(){
		let temp = digits.map(function(item){return item += 1;});
		temp.forEach(function(item,i,arr){digits[i] = item;});
		return {value: digits[0]-1};
	}
	return digits;
};

// return same argument not earlier than in one second, and not later, than in two
const pause = async() => {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve();
		},1100);
	})
}
const returnBackInSecond = async(b) => {
	await pause();
	return b;
};

const getDeepPropertiesCount = (obj) => {return (JSON.stringify(obj)).match(/\:/g).length};
const createSerializedObject = () => {return null;};
const toBuffer = () => {};
const sortByProto = (arr) => {
	let arr_length = arr.length;
	let counter;
	function sortArr(){	
		counter = 0;
		for(let i=0;i<arr_length-1;i++){			
			if(!arr[i+1].isPrototypeOf(arr[i])){
				counter = 1;
				let temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				i = arr_length;
			}
		}
		if(!counter){return;}
		else{sortArr();}
		return;
	}
	return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;