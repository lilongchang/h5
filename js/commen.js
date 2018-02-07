/**
 * Created by User on 2017/12/19.
 */
window.onload = function () {
    var html=document.getElementById('html');
    var width=document.documentElement.clientWidth;
    html.style.fontSize=width/375*100+'px';
    window.onresize=function(){
        var width=document.documentElement.clientWidth;
        html.style.fontSize=width/375*100+'px';
    }
};
var uriT1 = 'http://10.0.12.25:9002/api/v1';
// 获取url参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}
// (function() {
//    var baseFontSize = 100;
//    var baseWidth = 375;
//    var clientWidth = document.documentElement.clientWidth || window.innerWidth;
//    var innerWidth = Math.max(Math.min(clientWidth, 480), 360);
//
//    var rem = 100;
//    if (innerWidth >= 414) {
//        rem = Math.floor(innerWidth / baseWidth * baseFontSize * 0.98);
//    } else {
//        rem = Math.floor(innerWidth / baseWidth * baseFontSize);
//    }
//
//    document.querySelector('html').style.fontSize = rem + 'px';
// }());