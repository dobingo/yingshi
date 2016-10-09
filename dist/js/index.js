$(function () {

    $(".swiper-container").swiper({

        // direction: 'vertical',
        loop: true,

        auto: 5000,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
    });


    // 搜索按钮
    $('.icon-search').click(function(){
        $('.search').toggleClass('search-show');
    })
});
//# sourceMappingURL=index.js.map
