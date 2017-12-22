
getContent()
function getContent(){
    var da = {
        data:{
           id:538213506212
        }
    }
    $.ajax({
        url: 'http://10.0.12.26:5599/app/api/getAnnouncementById',
        type : "POST",
        dataType : "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        crossDomain:true,
        success: function(data) {
            if(data.code=='0'){
                var data = data.data;
                var date = new Date(data.infopubldate);
                var year = date.getFullYear();
                var mouth = date.getMonth()+1;
                var day = date.getDate();
                if(mouth < 10){
                    mouth = '0'+mouth
                }
                if(day < 10){
                    day = '0'+day
                }
                var str = data.content.replace(/(\r\n)|(\n)/g,'<br>')
                $('.title').html(data.infotitle)
                $('.time').html(year+'年'+mouth+'月'+day)
                $('.action').html(str)
            }else{
                alert(data.msg)
            }

        },
        error: function () {//请求失败处理函数
            alert('请求失败');
        }
    })
}

var nowurl = document.URL;
var fromurl = document.referrer;
console.log(nowurl)
console.log(fromurl)