/**
 * Created by LiuQiang on 2018/1/28.
 */
// A页面通过postMessage方法发送消息：
window.onload = function () {
    var ifr = document.getElementById('ifr');
    var targetOrigin = "http://www.google.com";
    ifr.contentWindow.postMessage('hello world!', targetOrigin);
};
// B页面通过message事件监听并接受消息
var onmessage = function (event) {
    var data = event.data;//消息
    var origin = event.origin;//消息来源地址
    var source = event.source;//源Window对象
    if(origin=="http://www.baidu.com"){
        console.log(data);//hello world!
    }
};
if (typeof window.addEventListener != 'undefined') {
    window.addEventListener('message', onmessage, false);
} else if (typeof window.attachEvent != 'undefined') {
    //for ie
    window.attachEvent('onmessage', onmessage);
}