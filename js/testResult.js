/**
 * Created by User on 2018/2/7.
 */
//获取类型描述和推荐列表
var riskClass = getQueryString('levelcode');
if(riskClass){
    if(riskClass == '0'){
        $('.riskType').html('“保守型”')
        $('.bestFund').html('保守型')
    }else if(riskClass == '1'){
        $('.riskType').html('“稳健型”')
        $('.bestFund').html('稳健型')
    }else if(riskClass == '2'){
        $('.riskType').html('“平衡型”')
        $('.bestFund').html('平衡型')
    }else if(riskClass == '3'){
        $('.riskType').html('“积极型”')
        $('.bestFund').html('积极型')
    }else if(riskClass == '4'){
        $('.riskType').html('“进取型”')
        $('.bestFund').html('进取型')
    }
    getRIskmemo(riskClass)
}
function getRIskmemo(id){
    var da = {
        data:id,
    };
    $.ajax({
        url: uriT1  + '/app/api/riskAppraisal/getRiskProductPromotion',
        type : "POST",
        dataType : "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        crossDomain:true,
        success: function(data) {
            if(data.code=='0'){
                $('.remark').html(data.data.memo)
                var result = data.data.appProductPromotions;
                if(result.length > 0){
                    $('.recommend-title').show()
                    $('.fund-list').empty();
                    for(var i = 0; i < result.length; i++){
                        $('.fund-list').append(
                            "<li><a href="+result[i].adid+"><p class='title'>"+result[i].title+"</p><p class='sub-title'>"+result[i].memo+"</p><i></i></a></li>"
                        )
                    }
                }else {
                    $('.recommend-title').hide()
                }
            }else{
                alert(data.msg)
            }

        },
        error: function () {//请求失败处理函数
            alert('请求失败');
        }
    })
}

// 重新评测
function testAgain() {

    // window.location.href = location.href+'?flag=false';
}
// 完成测评
function finish() {
    setupWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler('assessComplete', null, function(response) {})
    })
}