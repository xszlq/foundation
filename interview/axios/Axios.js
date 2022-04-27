/**
 * 实现简易的axios 实现发送请求
 * 1.实现发送get、post请求 
 * 2.实现响应和请求拦截器
 * 
 * 例如：
 * 
 axios({
    method: 'post',
    url: '/user/12345',
    data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
    }
});

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
 */

function Axios(){
    
}

Axios.prototype.request = function(config){
    const {method='get', params, url} = config || {};

    return new Promise(resovle=>{
        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        if(requestQueues.length){
            requestQueues.forEach(fn=>fn())
        }
    
        xhr.onload = function(){
            resovle(xhr.responseText);
        }
    })
}

let requestMethods = ['get', 'post'];

requestMethods.forEach(i=>{
    Axios.prototype[i] = function(){
        // 传入url data的场景
        if(arguments.length === 2){
            this.request({
                method: i,
                url: arguments[0],
                data: arguments[1],
            })
        }
        // 传入 url data config 的场景 todo
        else if(arguments.length === 3){

        }
    }
})

let axios = (function(){
    return function(config){
        let ins = new Axios();
        return ins.request(config)
    }
})()

let requestQueues = [];
let reponseQueues = [];

axios.interceptor = {
    requset(fn){
        if(fn){
            requestQueues.push(fn); 
        }
    },
    response(fn){
        if(fn){
            reponseQueues.push(fn);
        }
    }
}


