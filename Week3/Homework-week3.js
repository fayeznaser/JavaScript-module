//1 
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log("before replace:" + myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log("after replace:" + myString);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

//2
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);


favoriteAnimals.splice(1, 0, 'meerkat');
console.log("removes 0 elements from index 1 and inserts 'meerkat': " +favoriteAnimals);
//removes 0 elements from index 1, and inserts 'meerkat'
//https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
// removed is [giraffe]

favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1);
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf('meerkat'));
// One item was removed





















