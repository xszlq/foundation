// 
function Axios(config){

}

Axios.prototype.get = function(url){
    return new Promise(resovle=>{
        let xhr = new XMLHttpRequest();

        xhr.open('get', url);
    
        xhr.send();
    
        return new Promise(resolve=>{
    
        })
        xhr.onload = function(){
            // 
    
        }
    })
}