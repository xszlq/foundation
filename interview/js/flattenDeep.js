
function flattenDeep(arr, result){
  result = result || [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] instanceof Array){
      flattenDeep(arr[i], result)
    }else{
      result.push(arr[i])
    }
  }

  return result;

}

console.log(flattenDeep([1, [2, [3, [4]], 5]])); //[1, 2, 3, 4, 5]