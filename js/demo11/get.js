/**
 * Created by LiuQiang on 2018/2/4.
 */
let xhr = new XMLHttpRequest();

// 参数需要使用 encodeURIComponent编码
xhr.open("GET", '/url?name=z3');

xhr.send();

xhr.onreadystatechange = function () {
    if ( xhr.readyState == 4 && xhr.status == 200 ) {
        alert( xhr.responseText );
    } else {
        alert( xhr.statusText );
    }
};