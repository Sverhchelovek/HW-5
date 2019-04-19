// function reverse(someStr) {

// 	let  reverseString = '';

// 	for ( let i = someStr.length-1; i >= 0; i--) {

// 		reverseString = reverseString + someStr[i];
// 	}

// 	return reverseString
// }

// reverse('tato');

// console.log(reverse('tato'));













// function printStairs(n) { 
// 	let stairSharp = '#';

// 	for (var i = 0; i < n; i++) {

// 		console.log(stairSharp);

// 		stairSharp = stairSharp + '#';

// 	}
// 	return stairSharp
// }


// printStairs(3);















// function sumRange(start, end) {
// let totalSum = 0; 

// 	for (var i = start; i <= end; i++) {
// 		console.log()
// 		totalSum += i;
// 	}

// 	return totalSum

//  }

// sumRange(2, 4);

// console.log(sumRange(2, 4));












// function min(a, b, c) { 
// let minNumber = a;

// 	if (b < minNumber) {
// 		minNumber = b;
// 	} 
// 	if (c < minNumber) {
// 		minNumber = c;
// 	}

// 	console.log(minNumber);
// }

// min(7, 5, 3);











// function printPyramid(n) { 

// 	for (let i = 0; i < n; i++) {
// 		let str= '';
// 			for (let g = 1; g < n - i; g++) {
// 				str =  str + ' ';
// 			}
// 			for (let k = 1; k <= (2*i + 1); k++) {
// 				str =  str + '#';
// 			}
// 		return str;	
// 	}
	
// }

// printPyramid(3);















// function firstAndLastToUpper(str){
// 	let newStr = str[0].toUpperCase() + str.slice(1, str.length - 1) + str[str.length - 1].toUpperCase();
// 	return newStr;


// }


// function cursorCheck(str) { 
// 	let newStr = str.toLowerCase();
// 	if (newStr.includes('ostap') || newStr.includes('ironman') ||  newStr.includes('cursor')){
// 		return true
// 	} else {
// 		return false
// 	}
// }


// cursorCheck('Hello I am OstaP');








// function toUppercase(str)  { 

// 	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//  	let bigAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//  	let arr = str.split('');
//  	for (var i = 0; i < arr.length; i++) {
//  		for (var g = 0; g < alphabet.length; g++) {
//  			if(arr[i] == alphabet[g] ) {
//  				arr[i] = bigAlphabet[g];
//  			}
//  		}
//  	}
//  	let newStr = arr.join('');
//  	return newStr;

// }









// function removeDuplicationLetters(str) { 
// 	let lowerStr = str.toLowerCase();
// 	let arr = str.split('');
// 	let lowerArr = lowerStr.split('');
// 	let lowerResultArr = [];
// 	let resultArr = [];
// 	let newString = '';

// 	for (var i = 0; i < arr.length ; i++) {
// 		if(lowerResultArr.indexOf(lowerArr[i]) === -1 || lowerArr[i] === ' ') {
// 			lowerResultArr[i] = lowerArr[i];
// 			resultArr.push(arr[i])
// 	}
// 	newStr = resultArr.join('');

	
// }
// 	return newStr;
// }

// removeDuplicationLetters('Hello I am Iron Man')


