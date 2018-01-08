//参数  id


// 更多
function loadMore(that) {
    $(that).hide().siblings('li').show()
}

// 银河评级
function starList(data) {
    var html = '';
    if (data == '99' || data == null) {
        html = '-----';
    } else {
        for (var i = 0; i < 5; i++) {
            if (i < Number(data)) {
                html += "<span class='bg'></span>"
            } else {
                html += "<span class='bg-active'></span>"
            }

        }
    }
    return html
}

// 时间转换
function transTime(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    if (month < 10) {
        month = '0' + month
    }
    var day = time.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    var hours = time.getHours();
    var minutes = time.getMinutes();
    return year + '-' + month + '-' + day + "<span style='margin-left: 10px;'>" + hours + ":" + minutes + "</span>";
}

//获取资讯I内容
var isImgBig = []
getInformation()

function getInformation() {
    var da = {
        id: '72142'
    }
    $.ajax({
        url: uriT1 + '/app/api/relatedFund/getPageDetail',
        type: "POST",
        dataType: "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        success: function (data) {
            if (data.code == '0') {
                var result = data.data;
                var content = result.fundPage;
                $('.cont-title').html(content.title);
                $('.date').html(transTime(content.createTime));
                $('.subtitle').html(content.sourceName);
                var contentHtml = content.clearContent;
                // 调用android方法
                var imgJson = content.photos;
                var imgArr = [];

                for (var k = 0; k < imgJson.length; k++) {
                    imgArr.push({
                        "index": k,
                        "url": imgJson[k]
                    })
                    isImgBig.push(imgJson[k])
                }
                // youyufund.setImages(JSON.stringify(imgArr));
                // ///////
                $('section').html(contentHtml.replace(/\n/g, ''));
                //代销基金
                if (result.sellFunds != null) {
                    var sellList = result.sellFunds;
                    for (var i = 0; i < sellList.length; i++) {
                        console.log(sellList[i])
                        var yield = ''
                        if (sellList[i].marYield) {
                            yield = sellList[i].marYield + '%'
                        } else {
                            yield = 0
                        }
                        if (i < 2) {
                            $('.fund-container').append(
                                "<li>" +
                                "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label> " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li>"
                            )
                        } else if (sellList.length === 3) {
                            $('.fund-container').append(
                                "<li>" +
                                "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label> " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li>"
                            )
                        } else if (i === 2 && sellList.length > 3) {
                            $('.fund-container').append(
                                "<li>" +
                                "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label>  " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li> <li class='more-fund' onclick='loadMore(this)'>更多</li>"
                            )
                        } else {
                            $('.fund-container').append(
                                "<li style='display: none'>" +
                                "<div class='list-left'><p class='profit'>" + yield + "</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label> " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li>"
                            )
                        }
                    }
                }
                else if (result.notSellFunds != null) {
                    var notList = result.notSellFunds;
                    var length = 3
                    for (var j = 0; j < notList.length; j++) {
                        console.log(notList[j])
                        if (!(notList[j].marYield)) {
                            length++
                            continue;

                        }
                        if (j < length) {
                            $('.fund-container').append(
                                "<li>" +
                                "<div class='list-left'><p class='profit'>" + notList[j].marYield + '%' + "</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + notList[j].fundShort + "</h3><div class='right-bottom'><div class='type'>" + notList[j].label + "</div>" +
                                "<div class='grade'><label>评级</label> " + starList(notList[j].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li>"
                            )
                        }
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

$(document).ready(function () {
    var sectionId = document.getElementById('sectionId');
    sectionId.onclick = function (e) {
        e = e || window.event;
        var list = e.target || e.srcElement;
        if (list.nodeName.toLowerCase() === 'img') {
            for (var i = 0; i < isImgBig.length; i++) {
                if (list.getAttribute('src') === isImgBig[i]) {
                    // youyufund.openGallery(i);
                    break
                }

            }
        }
    };

})


