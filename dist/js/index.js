'use strict';

$(function () {

    // 搜索展开
    $('.search-open').click(function () {
        $('.search').toggleClass('search-show');
    });

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
    initBanner();
});
//# sourceMappingURL=index.js.map
