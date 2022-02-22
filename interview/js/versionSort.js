/**
 * 有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
 */

let testArr = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];

function versionSort(arr){
    arr.sort((a, b)=>{
        let splitA = a.split('.');
        let splitB = b.split('.');

        let index = 0;
        let curCompareA = splitA[index], curCompareB = splitB[index];
        while(true){
            curCompareA = splitA[index];
            curCompareB = splitB[index]
            if(curCompareA === curCompareB){
                index++
            }else{
                return curCompareA/1 - curCompareB/1
            }
        }
    })

    return arr;
}

console.log(versionSort(testArr))
