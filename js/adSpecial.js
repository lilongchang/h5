//参数  id
var uriT = 'http://10.0.12.25:9002/api/v1';

// 更多
function loadMore(that) {
    $(that).hide().siblings('li').show()
}

// 银河评级
function starList(data) {
    var html = '';
    if (data === '99' || data === null) {
        html = '';
    } else {
        for (var i = 0; i < 5; i++) {
            if (i < Number(data)) {
                html += "<span class='bg'></span>"
            } else {
                html += "<span class='bg-active'></span>"
            }

        }
    }
    return '评级'+html
}
// 收益类型
//查询字典(html)
getDictHtml()
function getDictHtml(element) {
    var da={
        dictId:'100015'
    }
    $.ajax({
        url: 'http://10.0.12.26:35118/dataDictionary/getSub',
        type: "POST",
        dataType: "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        success: function(data) {
            if(data.code=='0'){
                console.log(data)
                // var data=data.data;
                // var listTd=element;
                // for (var i = 0; i < listTd.length; i++) {
                //     for (var j = 0; j < data.length; j++){
                //         if(listTd[i].getAttribute(dataType)!=undefined && listTd[i].getAttribute(dataType)==data[j].dictvalue){
                //             listTd[i].innerHTML=data[j].dictcomment
                //         }
                //     }
                // }
            }else{
                alert(data.msg)
            }

        },
        error: function () {//请求失败处理函数
            alert1('请求失败');
        }
    })
}
getInformation()
function getInformation() {
    var da = {
        data: {
            specialtopicid: '922a0cb7e7b94f9c98a4d3b043daf481'
        }

    }
    $.ajax({
        url: uriT + '/app/api/specialTopic/getById',
        type: "POST",
        dataType: "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        success: function (data) {
            if (data.code === '0') {
                var result = data.data;
                var yieldType='';

                $('.title-img').attr('src', result.headphoto)
                $('.title').html(result.name)
                // 判断有无摘要
                if (result.summary) {
                    $('.main-recommend').html(result.summary).css('padding','0.05rem 0.11rem 0.11rem')
                }else {
                    $('.main-recommend').html('').css('padding','0')
                }
                // 产品增加短描
                if (result.mainproductdescribes) {
                    var addArr = result.mainproductdescribes.split(',');
                    for (var k = 0; k < addArr.length; k++) {
                        $('.mark-list').prepend("<p style='padding: 2px 4px'>" + addArr[k] + "</p>")
                    }
                }
                // 控制按钮
                $('.idBtn').html(result.displaycopy).css({color: result.copycolor, background: result.buttoncolor})   // 按钮
                // 多只基金
                if (result.fundRelatedInfos.length > 0) {
                    $('button').show()
                    var firstFund = result.fundRelatedInfos[0];
                    $('.fund-title').html(firstFund.fundName) // 基金名称
                    if (firstFund.risk) {  // 风险等级
                        $('.risk').html(firstFund.risk).css('padding', '2px 4px')
                    }

                    if (firstFund.themes) {// 主题
                        var str = '';
                        for (var i = 0; i < firstFund.themes.length; i++) {
                            str += firstFund.themes[i]+'、'
                        }
                        $('.fund-type').html(str.substr(0, str.length-1)).css('padding', '2px 4px')
                    }
                    if (firstFund.grade && firstFund.grade !== '99') {// 银河评级
                        $('.grades').html(starList(firstFund.grade)).css('padding', '2px 4px')
                    }
                    if (firstFund.rate !== null) { // 费率
                        if (firstFund.rate === 0) {
                            $('.rate').html('0费率').css('padding', '2px 4px')
                        } else {
                            $('.rate').html('费率' + (firstFund.rate) * 10 + '折').css('padding', '2px 4px')
                        }
                    }
                    if (firstFund.type) { // 费率
                        $('.types').html(firstFund.type).css('padding', '2px 4px')
                    }
                    if (firstFund.yield) {
                        $('.rates').html(firstFund.yield + '%')   // 收益率
                    }


                    // 超过一只基金的基金列表
                    if (result.fundRelatedInfos.length > 1) {
                        var fundList = result.fundRelatedInfos;
                        for (var j = 1; j < fundList.length; j++) {
                            var yield = ''
                            if (fundList[j].yield) {
                                yield = fundList[j].yield + '%'
                            } else {
                                yield = 0
                            }
                            var risk = '';
                            if (fundList[j].risk) {
                                risk = fundList[j].risk
                            }
                            if (j < 3) {
                                $('.fund-container').append(
                                    "<li>" +
                                    "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>今年来收益率</p></div>" +
                                    "<div class='lines'><i class='line'></i></div>" +
                                    "<div class='list-right'><h3>" + fundList[j].fundName + "</h3><div class='right-bottom'>" +
                                    showIS(fundList[j].grade, fundList[j].rate, fundList[j].risk, fundList[j].themes, fundList[j].type) +
                                    "</div>" +
                                    "</li>"
                                )
                            } else if (result.fundRelatedInfos.length === 4) {
                                $('.fund-container').append(
                                    "<li>" +
                                    "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>今年来收益率</p></div>" +
                                    "<div class='lines'><i class='line'></i></div>" +
                                    "<div class='list-right'><h3>" + fundList[j].fundName + "</h3><div class='right-bottom'>" +
                                    showIS(fundList[j].grade, fundList[j].rate, fundList[j].risk, fundList[j].themes, fundList[j].type) +
                                    "</div>" +
                                    "</li>"
                                )
                            } else if (result.fundRelatedInfos.length > 4 && j === 3) {
                                $('.fund-container').append(
                                    "<li>" +
                                    "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>今年来收益率</p></div>" +
                                    "<div class='lines'><i class='line'></i></div>" +
                                    "<div class='list-right'><h3>" + fundList[j].fundName + "</h3><div class='right-bottom'>" +
                                    showIS(fundList[j].grade, fundList[j].rate, fundList[j].risk, fundList[j].themes, fundList[j].type) +
                                    "</div>" +
                                    "</li><li class='li-more' onclick='loadMore(this)'><div>查看更多环保主题基金<i></i></div></li>"
                                )
                            } else {
                                $('.fund-container').append(
                                    "<li style='display: none'>" +
                                    "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>今年来收益率</p></div>" +
                                    "<div class='lines'><i class='line'></i></div>" +
                                    "<div class='list-right'><h3>" + fundList[j].fundName + "</h3><div class='right-bottom'>" +
                                    showIS(fundList[j].grade, fundList[j].rate, fundList[j].risk, fundList[j].themes, fundList[j].type) +
                                    "</div>" +
                                    "</li>"
                                )
                            }

                        }
                    }
                }else {
                    $('button').hide()
                }
                // 产品介绍图
                if(result.productintroducephotos){
                   var picList = result.productintroducephotos.split(',');
                   for(var n = 0; n < picList.length; n++){
                       $('.imgContainer').append(
                           "<div class='imgList'><img src="+picList[n]+" alt='' /></div>"
                       )
                   }
                }

            } else {
                alert(data.msg)
            }

        },
        error: function () {//请求失败处理函数
            alert('请求失败');
        }
    })
}

// 按需求显示短描字段
function showIS(grade, rate, risk, themes, type) {
    var str = '';
    if (risk) {
        str += "<div>" + risk + "</div>"
    }
    if (grade && grade !== '99') {
        str += "<div class='grade'>" + starList(grade) + "</div>"
    }
    if (type) {
        str += "<div>" + type + "</div>"
    }
    if (themes) {
        var html = '';
        for (var i = 0; i < themes.length; i++) {
            html += themes[i]+'、'
        }
        str += "<div>" + html.substr(0, html.length-1) + "</div>"
    }
    if (rate !== 0) {
        if (rate === 0) {
            str += "<div>0费率</div>"
        } else {
            str += "<div>" + '费率' + (rate) * 10 + '折' + "</div>"
        }
    }
    return str;
}



