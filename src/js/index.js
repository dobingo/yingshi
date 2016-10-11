$(function () {

    // 搜索展开
    $('.search-open').click(function () {
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
            pagination: '.swiper-pagination'
        });
    }
    initBanner()


    // 影视详情页
    let $detailsMov = $('.details-mov')

    // 简介
    $detailsMov.on('click', '.button-group .btn', function () {
        let $this = $(this)
            // 立即购买
        if ($this.hasClass('buy')) {
            $.msg('您还不是会员，无法购买，先长按页面下方二维码成为会员吧！')
        }

        // 加入购物车
        if ($this.hasClass('cart')) {
            $.msg('您还不是会员，无法购买，先长按页面下方二维码成为会员吧！')
        }
    })

    // 选集
    $detailsMov.on('click', '.num', function () {
        var buttons = [{
            text: '主线资源',
            // bold: true,
            // color: 'danger',
            onClick: function () {
                $.alert("你选择了“主线资源“");
            }
        }, {
            text: '备用地址1',
            onClick: function () {
                $.alert("你选择了“备用地址1“");
            }
        }, {
            text: '备用地址2',
            onClick: function () {
                $.alert("你选择了“备用地址2“");
            }
        }, {
            text: '取消'
        }];
        $.actions(buttons);
    })

    // 我要报错
    let $feedback = $('#detail-tab3');
    let $subText = $feedback.find('.sub-text')
    $feedback.on('click', '.sub-tag span', function () {
        $subText.val($subText.val() + '#' + $(this).text() + '#')
    })


});