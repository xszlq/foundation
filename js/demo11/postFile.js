/**
 * Created by LiuQiang on 2018/2/4.
 */
/**
 * 提交一个文件怎么实现呢？
 */
let formData = new FormData(); // H5新增Api
formData.append("id", 5); // 数字5会被立即转换成字符串 "5"
formData.append("name", "#yin");
// formData.append("file", input.files[0]);
let xhr = new XMLHttpRequest();
xhr.open("POST", "/add");
xhr.send(formData);


