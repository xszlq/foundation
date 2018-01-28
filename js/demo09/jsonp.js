/**
 * Created by LiuQiang on 2018/1/28.
 */
/*
    jsonp主要是利用了通过script标签引入的js不受浏览器同源策略控制的特点
    可以利用jquery封装的getJson方法，当然自己封装也很简单。
 */

function appendScript(url){
    let script = document.createElement("script");
    script.setAttribute("type", "javascript/text");
    script.setAttribute("src", url);
    document.body.appendChild(script);
}
