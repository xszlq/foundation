/**
 * Created by LiuQiang on 2018/2/4.
 */
let xhr = new XMLHttpRequest();

xhr.open("POST", "/url");
// 如果是json类型则需要将json转成string
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.send("pageSize=25&pageNo=1");

xhr.onreadystatechange = function () {
    if ( xhr.readyState == 4 && xhr.status == 200 ) {
        alert( xhr.responseText );
    } else {
        alert( xhr.statusText );
    }
};