$(function(){
    const $chargeBtn = $('#chargeOk')

    /*$.ajax({
        type: "get",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (res) {
            submit(res);
        }
    });*/

    function submit(res) {
        if (res.STATUS == 1) {
            $.msg('充值成功，可以买片啦！',5000)
            setTimeout(function() {
                $.router.back();
            }, 5000);
        } else {
            $.msg('充值失败，请小主稍后再试！',5000)
        }
    }

    function addChargeList() {
        let tpl = ``
        let len = 5
        let priceArry = [20,30,50,100,200]
        for (let i = 1; i < len; i++) {
            let checked = i==1?'checked':'';
            tpl +=`
                <li>
                    <input type="radio" name="chargeRadio" id="chargeRadio-${i}" ${checked}>
                    <label class="splitline" for="chargeRadio-${i}"><span class="price">${priceArry[i].toFixed(2)}</span><i class="fa fa-check"></i></label>
                </li>
            `
        }
        $('.chargelist').append(tpl)
    }
    addChargeList()
})