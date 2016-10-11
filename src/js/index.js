$(function () {

    // 搜索展开
    $('.icon-search').click(function () {
        $('.search').toggleClass('search-show');
    })

    // ajax
    /*$.ajax({
        type: "get",
        dataType:"json",
        url: "../json/index.json"
    })
    .done((res) => {
        // 获取数据后，加载每个组件
    })
    .fail((e) => {
        console.log(e);
    })*/


    // 加载banner数据
    function initBanner() {
        // 初始化
        $("#banner").swiper({

            // direction: 'vertical',
            loop: true,

            autoplay: 5000,

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',

            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
        });
    }
    initBanner()


    // 影视详情页
    let $detailsMov = $('.details-mov')

    // $detailsMov.find('.tab:first').addClass('active');

    // 简介
    $detailsMov.on('click', '.button-group .btn', function () {
        let $this = $(this)
            // 立即购买
        if ($this.hasClass('buy')) {
            // $.toast('操作成功，正在跳转...', 2345);
            $.msg('账户余额不足，请充值或使用微信支付！')
        }

        // 加入购物车
        if ($this.hasClass('cart')) {

        }
    })

    // 选集
    $detailsMov.on('click', '.num', function () {
        var buttons1 = [{
            text: '请选择',
            label: true
        }, {
            text: '卖出',
            bold: true,
            color: 'danger',
            onClick: function () {
                $.alert("你选择了“卖出“");
            }
        }, {
            text: '买入',
            onClick: function () {
                $.alert("你选择了“买入“");
            }
        }];
        var buttons2 = [{
            text: '取消',
            bg: 'danger'
        }];
        var groups = [buttons1, buttons2];
        $.actions(groups);
    })

    // 我要报错
    let $feedback = $('#detail-tab3');
    let $subText = $feedback.find('.sub-text')
    $feedback.on('click', '.sub-tag span', function () {
        $subText.val($subText.val() + '#' + $(this).text() + '#')
    })


});