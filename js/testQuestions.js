/**
 * Created by User on 2017/12/5.
 */
var uriT = 'http://10.0.12.26:5599';
var uriT2 = 'http://10.0.12.25:35119';
$(document).ready(function(){
    $('.questionPage').height(document.documentElement.clientHeight);
})
//需要接收参数
// papertype:'0'//机构=0，个人=1
// paperid:'888888',//机构试卷编号=888888个人试卷编号=777777
// clientid:'bd69380f38104088b9ddea622e814569',客户ID
//paperprop
function checkThis(that){
    $(that).parent().siblings().find('i').removeClass('active');
    if(!($(that).attr('class').indexOf('active') > -1)){
        $(that).addClass('active')
    }
    //点击选项后跳转下一题
    setTimeout(nextQuestion,500)

}
// 跳转下一题
function nextQuestion(){
    if(currentTest<totalList&&isSecond){
        $('.nowOrder').html(currentTest+1)
        var questionList = $('.questionList');
        for(var i = 0; i < questionList.length; i++){
            questionList[i].style.display = 'none'
        }
        questionList[currentTest].style.display = 'block'
        $('.step').css('width',((currentTest+1)/totalList)*100+'%');
      //提交显示
        if(currentTest==questionList.length-1){
          $('.preQuestion').css('bottom','84px')
          $('.submit').show()
        }else {
            $('.submit').hide()
        }
        //上一题字段显示
        if(currentTest=='0'){
            $('.preQuestion').hide()
        }else {
            $('.preQuestion').show()
        }
        currentTest++;
    }else {
        $('.questionPage').scrollTop($('.questionPage')[0].scrollHeight);
        isSecond = false;
    }

}
// 点击上一题
function preQuestion(){
    //上一题字段显示
    currentTest--;
    if(currentTest=='1'){
        $('.preQuestion').hide()
    }else {
        $('.preQuestion').show()
    }
    $('.nowOrder').html(currentTest)
    var questionList = $('.questionList');
    for(var i = 0; i < questionList.length; i++){
        questionList[i].style.display = 'none'
    }
    questionList[currentTest-1].style.display = 'block'
    $('.step').css('width',((currentTest)/totalList)*100+'%');
    //提交显示
    if(currentTest==questionList.length-1){
        $('.preQuestion').css('bottom','84px')
        $('.submit').show()
    }else {
        $('.submit').hide();

    }
    // 上一题字段显示
    $('.submit').hide();
    $('.preQuestion').css('bottom','0');

    //点击下一题
    isSecond=true;
}

var Letters = ["A.","B.","C.","D.","E.","F.","G.","H.","I.","J.","K.","L.","M.","N."];
var currentTest=1;
var totalList;
var isSecond = true;
//获取题目列表
getQuestionList()
function getQuestionList(){
    var da = {
        data:{
            paperid:'888888',//机构试卷编号=888888个人试卷编号=777777
            paperprop:'0',
            papertype:'0'//机构=0，个人=1
        }

    }
    $.ajax({
        url: 'http://26.gs.youyufund.com/customer/riskLevel/getQuestionList',
        type : "POST",
        dataType : "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        success: function(data) {
            if(data.code=='0'){
                var data = data.data;
                var totle = data.length;
                totalList = totle;
                $('.totalQuestion').html(totle)
                $('.step').css('width',(currentTest/totle)*100+'%')
                $('.container').empty()
                for(var i = 0; i < data.length; i++){
                    if(i == 0){
                        $('.container').append(
                            "<div class='questionList'><div class='questions'>"+data[i].questioncontent+"</div><ul>"+list(data[i].answers,data[i].questionid)+"</ul></div>"
                        )
                    }else {
                        $('.container').append(
                            "<div class='questionList' style='display: none'><div class='questions'>"+data[i].questioncontent+"</div><ul>"+list(data[i].answers,data[i].questionid)+"</ul></div>"
                        )
                    }

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
function list(result,id) {
    var str = '';
    for(var i = 0; i < result.length; i++){
        str += "<li class='clearFix'><span class='letter'>"+Letters[i]+"</span><span class='List'>"+result[i].answercontent+"</span><i class='check' data-quesid="+id+" data-answerid="+result[i].answerid+"  data-questionid="+result[i].serialno+"  data-score="+result[i].answerscore+" onclick='checkThis(this)'></i></li>"
    }
    return str;
}
// 自己真实意愿
function isMyself(that){
    $(that).toggleClass('activeit')
}


// 提交试题
function getResult() {
    var scoreSum=0;
    var questions = '';
    var assessmentJsonStr = [];
    $('.check').each(function(){
        if($(this).attr('class').indexOf('active') > -1){
            scoreSum += parseInt($(this).attr('data-score'))
            questions += $(this).attr('data-questionid') + ','
            assessmentJsonStr.push({
                questionid:$(this).attr('data-quesid'),
                answerid:$(this).attr('data-answerid'),
                answerscore:Number($(this).attr('data-score'))
            })
        }
    })
    questions = questions.substr(0,questions.length-1)
    var da = {
        data:{
            paperid:'777777',
            paperprop:'0',
            papertype:'1',
            score:scoreSum,
            assessmentJsonStr:assessmentJsonStr,
            clientid:'yu2G0KTMU1J71I2BO13113X03U1PXD557',
            answers:questions
        }
    }
    $.ajax({
        url: uriT1 + '/customer/riskLevel/riskAssessment',
        type : "POST",
        dataType : "json",
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(da),
        crossDomain:true,
        success: function(data) {
            if(data.code=='0'){
                var riskClass = data.data
                window.location.href = 'testResult.html?levelcode='+riskClass;
            }else{
                alert(data.msg)
            }

        },
        error: function () {//请求失败处理函数
            alert('请求失败');
        }
    })
}

