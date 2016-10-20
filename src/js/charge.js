$(function(){
    const $chargeBtn = $('#chargeOk')
    $('.chargelist input').first().click()

    /*$.ajax({
        type: "get",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (res) {
            ajax(res);
        }
    });*/

    function ajax(res) {
        if (res.STATUS == 1) {
            $.msg('充值成功，可以买片啦！',5000)
            setTimeout(function() {
                $.router.back();
            }, 5000);
        } else {
            $.msg('充值失败，请小主稍后再试！',5000)
        }
    }
})