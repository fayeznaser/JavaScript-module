//1-

let array = [];
function div3(num) {
    console.log(num + ' is divisible by three!')
}
function div5(num) {
    console.log(num + ' is divisible by five!')
}
function div3and5(num) {
    console.log(num + ' is divisible by three and divisible by five!')
}
function arrayGenerator(startValue, endValue, callbackDiv3, callbackDiv5) {
    const array = []
    if (startValue < endValue) {
        let i = startValue
        while (i <= endValue) {
            array.push(i);
            i++;
            if (i % 3 === 0) {
                const num = i
                callbackDiv3(num);
            } else if (i % 5 === 0) {
                const num = i
                callbackDiv5(num);
            }
        } console.log(array);
    } else {
        console.log("Error");
    }
}
arrayGenerator(1, 20, div3, div5);


// 2-


// for loop.



function repeatStringNumTimes(str, num) {
    var str1 = "";
    for (i = num; i > 0; i--) {
        str1 += str;
    }
    str = str1;
    return str;
}
// while loop.
function repeatStringNumTimes(str, num) {
    var str1 = "";
    while (num > 0) {
        str1 += str;
        num--;
    }
    str = str1;
    return str;
}
repeatStringNumTimes("abc", 3);
// do loop
function repeatStringNumTimes(str, num) {
    var str1 = "";
    do {
        str1 += str;
        num--;
    }
    while (num > 0);
    str = str1;
    return str;
}
repeatStringNumTimes("abc", 3);




