{
    // 开启loading效果
    $.showPreloader();
    // 迷你laoding
    // $.showIndicator();

    // 影视详情页
    let $details = $('.details')

    // 打开视频
    function openVedio(url) {
        // $.alert('打开视频：' + url)
        window.location.href = url
    }

    // 页面添加数据
    function _updateDetailsPage(data) {
        const mov = data.MOVIE //当前电影数据
        const series = data.MOVIE_SERIES //当前电影选集数据
        let isbuy = Number(data.IS_BUY)

        // 是否已购
        // isbuy = 0
        if (isbuy) {
            $('#isbuy').hide();
        }else{
            $('.numbox').hide();
        }

        for (let key in mov) {
            let $dom = $('#' + key)
            if ($dom.length) {
                if ($dom[0].localName == 'img') {
                    $dom.attr('src', mov.poster)
                } else {
                    $dom.text(mov[key])
                }
            }
        }
        // 格式化价格
        let $price = $('#price')
        $price.text(Number($price.text()).toFixed(2))

        // 构建选集
        let numTpl = ``
        for (let i = 0; i < series.length; i++) {
            numTpl += `
                <a href="javascript:" class="num">${i+1}</a>
            `
        }
        $('.numbox').html(numTpl)

        // 选集绑定
        $details.on('click', '.num', function () {
            let index = $(this).index();
            var buttons = [{
                text: '主线资源',
                // bold: true,
                // color: 'danger',
                onClick: function () {
                    // $.alert("你选择了“主线资源“");
                    openVedio(series[index].resourceUrl)
                }
            }, {
                text: '备用地址1',
                onClick: function () {
                    // $.alert("你选择了“备用地址1“");
                    openVedio(series[index].otherOne)
                }
            }, {
                text: '备用地址2',
                onClick: function () {
                    // $.alert("你选择了“备用地址2“");
                    openVedio(series[index].otherTwo)
                }
            }, {
                text: '取消'
            }];
            $.actions(buttons);
        })
    }

    // 请求数据
    let idsearch = window.location.search.split('=')
    let movieId = idsearch[idsearch.length - 1]
    $.ajax({
        type: "get",
        url: "http://118.178.136.60:8001/rest/index/getMovie",
        data: {
            movieId: movieId
        },
        success: (res) => {
            console.log(res);
            if (res.STATUS == 1) {
                _updateDetailsPage(res);
            }else{
                $.alert('没有该影片信息！',function(){
                    $.router.back()
                })
            }
        },
        error: (e) => {
            let str = `影视详情页获取失败，稍后再试！`
            console.log(str, e);
            $.alert(str,function(){
                $.router.back()
            })
        },
        complete: () => {
            $.hidePreloader();
        }
    });


    // 简介
    $details.on('click', '.button-group .btn', function () {
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

    // 我要报错
    let $feedback = $('#detail-tab3');
    let $subText = $feedback.find('.sub-text')
    $feedback.on('click', '.sub-tag span', function () {
        $subText.val($subText.val() + '#' + $(this).text() + '#')
    })
}