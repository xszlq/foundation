// 将 153812.7 转化为 153,812.7
function numberFormat(num){
    let split = num.toString().split(".");

    let integer = split[0], float = split[1];

    let integerArr = integer.split("");

    let stack = [];

    for(let i=integerArr.length-1; i>=0; i = i-3){
        if(i>2){
            stack.push(integerArr[i], integerArr[i-1], integerArr[i-2], ",")
        }else{
            if(i === 2){
                stack.push(integerArr[2], integerArr[1], integerArr[0])
            }
            if(i === 1){
                stack.push(integerArr[1], integerArr[0])
            }
            if(i === 0){
                stack.push(integerArr[0])
            }
        }
    }

    return stack.reverse().join("") + (float ? "."+ float : '')
}

// 正则版本
function regVerison(num){
    const [integer, float] = num.toString().split(".");
    console.log(typeof integer)

    // let addComma = integer.replace(/\d{1-3}(?=(\d{3})+&)/g, '$1,');
    let addComma = integer.replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,');

    return addComma + (float ? '.' + float : '')
}

console.log(numberFormat(153812.7))
console.log(numberFormat(12.7))
console.log(numberFormat(24323412.7))

console.log(regVerison(1343253812.7))
