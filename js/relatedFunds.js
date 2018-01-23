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

       var dataArr =  [{
            "prodCode": "004871",
            "fundShort": "中银金融地产混合",
            "label": "房地产",
            "milkyWayRating": "3",
            "marYield": null
        }, {
            "prodCode": "001606",
            "fundShort": "农银汇理工业4.0灵活配置混合",
            "label": "工业4.0",
            "milkyWayRating": "3",
            "marYield": 0
        }, {
            "prodCode": "161725",
            "fundShort": "招商中证白酒指数分级",
            "label": "酿酒行业",
            "milkyWayRating": "99",
            "marYield": 14.0652
        }, {
            "prodCode": "160632",
            "fundShort": "鹏华中证酒指数分级",
            "label": "酿酒行业",
            "milkyWayRating": "99",
            "marYield": 0
        }, {
            "prodCode": "002595",
            "fundShort": "博时工业4.0主题股票",
            "label": "工业4.0",
            "milkyWayRating": "99",
            "marYield": -23
        }, {
            "prodCode": "519132",
            "fundShort": "海富通东财大数据灵活配置混合",
            "label": "大数据",
            "milkyWayRating": "99",
            "marYield": 6.269
        }, {
            "prodCode": "003299",
            "fundShort": "嘉实物流产业股票C",
            "label": "交运物流",
            "milkyWayRating": "99",
            "marYield": 5.013
        }, {
            "prodCode": "003298",
            "fundShort": "嘉实物流产业股票A",
            "label": "交运物流",
            "milkyWayRating": "99",
            "marYield": 4.9138
        }, {
            "prodCode": "000251",
            "fundShort": "工银瑞信金融地产行业混合",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 3.9814
        }, {
            "prodCode": "161211",
            "fundShort": "国投瑞银沪深300金融地产ETF联接",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 3.9667
        }, {
            "prodCode": "002588",
            "fundShort": "博时中证银联智惠大数据100指数A",
            "label": "大数据",
            "milkyWayRating": "99",
            "marYield": 3.8788
        }, {
            "prodCode": "160628",
            "fundShort": "鹏华中证800地产指数分级",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 3.5584
        }, {
            "prodCode": "160224",
            "fundShort": "国泰深证TMT50指数分级",
            "label": "TMT产业",
            "milkyWayRating": "99",
            "marYield": 3.517
        }, {
            "prodCode": "217019",
            "fundShort": "招商深证TMT50ETF联接A",
            "label": "TMT产业",
            "milkyWayRating": "99",
            "marYield": 3.4891
        }, {
            "prodCode": "160814",
            "fundShort": "长盛中证金融地产指数分级",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 3.2057
        }, {
            "prodCode": "001242",
            "fundShort": "博时中证淘金大数据100A",
            "label": "大数据",
            "milkyWayRating": "99",
            "marYield": 2.2494
        }, {
            "prodCode": "160218",
            "fundShort": "国泰国证房地产行业",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 1.7701
        }, {
            "prodCode": "001594",
            "fundShort": "天弘中证银行指数A",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.7451
        }, {
            "prodCode": "001595",
            "fundShort": "天弘中证银行指数C",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.6735
        }, {
            "prodCode": "161721",
            "fundShort": "招商沪深300地产等权重指数分级",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 1.6611
        }, {
            "prodCode": "160517",
            "fundShort": "博时中证银行指数分级",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.635
        }, {
            "prodCode": "161029",
            "fundShort": "富国中证银行指数分级",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.6107
        }, {
            "prodCode": "004597",
            "fundShort": "南方中证银行ETF联接A",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.5908
        }, {
            "prodCode": "004598",
            "fundShort": "南方中证银行ETF联接C",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.4816
        }, {
            "prodCode": "161723",
            "fundShort": "招商中证银行指数分级",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.3518
        }, {
            "prodCode": "161121",
            "fundShort": "易方达银行指数分级",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 1.265
        }, {
            "prodCode": "160418",
            "fundShort": "华安中证银行指数分级",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 0.69
        }, {
            "prodCode": "004521",
            "fundShort": "安信工业4.0主题沪港深精选灵活配置混合A",
            "label": "工业4.0",
            "milkyWayRating": "99",
            "marYield": 0.6889
        }, {
            "prodCode": "004522",
            "fundShort": "安信工业4.0主题沪港深精选灵活配置混合C",
            "label": "工业4.0",
            "milkyWayRating": "99",
            "marYield": 0.6595
        }, {
            "prodCode": "001557",
            "fundShort": "天弘中证全指房地产指数C",
            "label": "房地产",
            "milkyWayRating": "99",
            "marYield": 0.3189
        }, {
            "prodCode": "160631",
            "fundShort": "鹏华中证银行指数分级",
            "label": "银行",
            "milkyWayRating": "99",
            "marYield": 0.2881
        }, {
            "prodCode": "001361",
            "fundShort": "景顺中证TMT150ETF联接",
            "label": "TMT产业",
            "milkyWayRating": "99",
            "marYield": 0.165
        }, {
            "prodCode": "161720",
            "fundShort": "招商中证全指证券公司",
            "label": "券商",
            "milkyWayRating": "99",
            "marYield": -13.6151
        }, {
            "prodCode": "160633",
            "fundShort": "鹏华中证全指证券公司",
            "label": "券商",
            "milkyWayRating": "99",
            "marYield": 13.6731
        }]


function getInformation() {
    var da = {
        data: '81938'
    }
    $.ajax({
        url: 'http://26.gs.youyufund.com/app/api/relatedFund/getPageDetail',
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
                if(content.photos){
                    var imgJson = content.photos;
                    var imgArr = [];

                    for (var k = 0; k < imgJson.length; k++) {
                        imgArr.push({
                            "index": k,
                            "url": imgJson[k]
                        })
                        isImgBig.push(imgJson[k])
                    }
                    console.log(imgArr)
                    console.log(isImgBig)

                    // youyufund.setImages(JSON.stringify(imgArr));
                    // WebViewJavascriptBridge.callHandler('setImages', JSON.stringify(imgArr),null  );
                    // setupWebViewJavascriptBridge(function(bridge) {
                    //     bridge.callHandler('setImages', JSON.stringify(imgArr), function(response) {})
                    // })
                    // ///////
                }
                // ///////
                $('section').html(contentHtml.replace(/\n/g, ''));
                //代销基金
                if (result.sellFunds) {
                    var sellList = result.sellFunds;
                    // var sellList = dataArr;

                    for (var i = 0; i < sellList.length; i++) {
                        var yield = ''
                        var addStyle;
                        if (sellList[i].marYield) {
                            yield = sellList[i].marYield.toFixed(2) + '%'
                            if(sellList[i].marYield > 0){
                                addStyle='add'
                            }else if(sellList[i].marYield < 0){
                                addStyle='flow'
                            }
                        }else if(sellList[i].marYield == '0'){
                            yield = '0.00%';
                            addStyle='zero'
                        }else {
                            yield = '--';
                            addStyle='zero'
                        }
                        var procodes = sellList[i].prodCode;
                        if (i < 2) {
                            $('.fund-container').append(
                                "<li onclick='goDetails(this)' data-procode=" + procodes + ">" +
                                "<div class='list-left'><p class='profit "+addStyle+"'>" + yield +"</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label> " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li>"
                            )
                        } else if (sellList.length === 3) {
                            $('.fund-container').append(
                                "<li onclick='goDetails(this)' data-procode=" + procodes + ">" +
                                "<div class='list-left'><p class='profit "+addStyle+"'>" + yield +"</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label> " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li>"
                            )
                        } else if (i === 2 && sellList.length > 3) {
                            $('.fund-container').append(
                                "<li onclick='goDetails(this)' data-procode=" + procodes + ">" +
                                "<div class='list-left'><p class='profit "+addStyle+"'>" + yield +"</p><p class='remark'>近三个月收益</p></div>" +
                                "<div class='list-right'><h3>" + sellList[i].fundShort + "</h3><div class='right-bottom'><div class='type'>" + sellList[i].label + "</div>" +
                                "<div class='grade'><label>评级</label>  " + starList(sellList[i].milkyWayRating) + "</div>" +
                                "</div>" +
                                "</li> <li class='more-fund' onclick='loadMore(this)'>更多</li>"
                            )
                        } else {
                            $('.fund-container').append(
                                "<li onclick='goDetails(this)' data-procode=" + procodes + "  style='display: none'>" +
                                "<div class='list-left'><p class='profit "+addStyle+"'>" + yield +"</p><p class='remark'>近三个月收益</p></div>" +
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
                        var procodes = notList[j].prodCode;
                        if (j < length) {
                            $('.fund-container').append(
                                "<li onclick='goDetails(this)' data-procode=" + procodes + ">" +
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
                    console.log(i)
                    // youyufund.openGallery(i);
                    break
                }

            }
        }
    };

})
function goDetails(that) {
    var procode = $(that).attr('data-procode')
    console.log(procode)
    // window.location = "youyufund://webLink/openFundDetail?fundCode="+procode
}


