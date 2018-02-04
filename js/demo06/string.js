// Es6新增方法 repeat includes
const str1 = "xy";

const str2 = str1.repeat(2);

console.log(str2.includes("xy"), "0234xy".lastIndexOf("xy")); // true

/**
 * 判断一个字符串中重复出现了几次指定字符串
 */
function countRepeatStr(str, word){
    const wordLength = word.length;

    let tempStr = str,
        count = 0;

    while(tempStr.indexOf(word) !== -1){
        count++;
        tempStr = tempStr.substr(tempStr.indexOf(word)+wordLength);
    }

    return count;
}

console.log(countRepeatStr("I love you, and love me", "love"))