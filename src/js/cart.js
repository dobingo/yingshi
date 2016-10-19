$(() => {
    function createList(data) {
        let tpl = ``
        let len = 6
        for (let i = 0; i < len; i++) {
            tpl += `
        <li>
            <label for="list-${i+1}">
                <span class="checkbox">
                    <input type="checkbox" class="select" id="list-${i+1}">
                    <label for="list-${i+1}"></label>
                </span>
                <div class="listcontent">
                    <div class="imgbox">
                        <img src="${'../images/index-banner.jpg'}">
                    </div>
                    <div class="info">
                        <h4 class="Title">${'芳芳'}</h4>
                        <span class="text">
                            ${'每个早上，我都要离开你；每个黄昏，你都要把我追回来。一天一天爱下去。” 电影总是留下貌似圆满的结尾，生活的...'}
                        </span>
                        <p>
                            <span class="site">更新至第${5}集</span>
                            <span class="price">${Number(10).toFixed(2)}</span>
                        </p>
                    </div>
                    <span class="delete">删除</span>
                </div>
            </label>
        </li>
        `
        }
        $('.list').append(tpl)
    }
    createList();



    // 交互部分==============
    var editMode = false;
    var hasSelect = false;

    // 全选
    $('#selectAll').on('change', function () {
        const $this = $(this)
        $('.select').prop('checked', $this.prop('checked'))
        changeBtnStatus()
    })

    // 有list被改变
    $(document).on('change', '.select', function () {
        changeBtnStatus()
    })

    // 编辑状态

    $('.edit').click(function () {
        editMode = !editMode;
        if (editMode) {
            $(this).text('完成')
            $('.deleteAll').show()
            $('.pay').hide()
            $('.delete').addClass('show')
        } else {
            $(this).text('编辑')
            $('.deleteAll').hide()
            $('.pay').show()
            $('.delete').removeClass('show')
        }
    })

    // 刷新操作按钮状态
    function changeBtnStatus() {
        $('.select').each(function (i, el) {
            if ($(el).prop('checked')) {
                hasSelect = true;
                return false;
            }
        })
        if (hasSelect) {
            $('.tools .btn').addClass('active')
        } else {
            $('.tools .btn').removeClass('active')
        }
    }

    // 删除一行
    $(document).on('click', '.delete', function () {
        $(this).parents('li').remove();
        changeBtnStatus()
        deleteEmpty()
    })

    // 删除全部
    $('.deleteAll').click(function () {
        $('.select:checked').parents('li').remove();
        changeBtnStatus()
        deleteEmpty()
    })

    // 全部删完
    function deleteEmpty() {
        let $list = $('.list>li')
        if ($list.length==0) {
            $('.list,.tools,.edit').hide();
        }
    }
})