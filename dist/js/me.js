'use strict';

{
    var makePie = function makePie(data) {
        // 拼图
        var newdata = [];
        for (var i = 0; i < data.length; i++) {
            newdata.push({
                value: data[i].value,
                itemStyle: {
                    normal: {
                        color: data[i].color
                    }
                }
            });
        }

        var option = {
            silent: true,
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: newdata
            }]
        };

        echarts.init($('.echart')[0]).setOption(option);
    };

    var data = [{
        name: '充值余额',
        color: '#FFC107',
        value: 78.13
    }, {
        name: '收益余额',
        color: '#F36C60',
        value: 46.87
    }];

    makePie(data);
}
//# sourceMappingURL=me.js.map
