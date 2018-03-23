/*
    事件绑定 防止内存泄露
 */
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
    let logoData = myWeakmap.get(myElement);
    logoData.timesClicked++;
}, false);