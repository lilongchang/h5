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