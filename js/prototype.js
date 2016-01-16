console.log("Hello World!")

var yearlyData = [
    [Date.UTC(2015, 9, 21), 0],
    [Date.UTC(2015, 10, 4), 0.28],
    [Date.UTC(2015, 10, 9), 0.25],
    [Date.UTC(2015, 10, 27), 0.2],
    [Date.UTC(2015, 11, 2), 0.28],
    [Date.UTC(2015, 11, 26), 0.28],
    [Date.UTC(2015, 11, 29), 0.47],
    [Date.UTC(2016, 0, 11), 0.79],
    [Date.UTC(2016, 0, 26), 0.72],
    [Date.UTC(2016, 1, 3), 1.02],
    [Date.UTC(2016, 1, 11), 1.12],
    [Date.UTC(2016, 1, 25), 1.2],
    [Date.UTC(2016, 2, 11), 1.18],
    [Date.UTC(2016, 3, 11), 1.19],
    [Date.UTC(2016, 4, 1), 1.85],
    [Date.UTC(2016, 4, 5), 2.22],
    [Date.UTC(2016, 4, 19), 1.15],
    [Date.UTC(2016, 5, 3), 1.3]
];

var weeklyData = [
    [Date.UTC(2016, 4, 5), 2.22],
    [Date.UTC(2016, 4, 6), 1.2],
    [Date.UTC(2016, 4, 7), 1.8],
    [Date.UTC(2016, 4, 8), 2.12],
    [Date.UTC(2016, 4, 9), 2.22],
    [Date.UTC(2016, 4, 10), 2.0],
];

var staticChartData = { 
    chart: {
        type: 'areaspline'
    },
    title: {
        text: 'Facebook',
        x: -20 //center
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: { 
            name: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Likes'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: ' Likes'
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'middle',
    //     borderWidth: 0
    // },
    series: [{
        name: 'Likes',
        data: yearlyData    
    }]
}

$(function () {

    $('#chart-01').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Facebook',
            x: -20 //center
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: { 
                name: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Likes'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Likes'
        },
        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle',
        //     borderWidth: 0
        // },
        series: [{
            name: 'Likes',
            data: yearlyData
        }]
    });

    $('#chart-02').highcharts($.extend({}, staticChartData, {
        title: {
            text: 'Email List Size',
            x: -20
        }
    }));
    $('#chart-03').highcharts($.extend({}, staticChartData, {
        title: {
            text: 'Twitter',
            x: -20
        }, 
        series: [{
            name: 'Mentions',
            data: weeklyData
        }]
    }));
    $('#chart-04').highcharts($.extend({}, staticChartData, {
        title: {
            text: 'Spotify Plays',
            x: -20
        }
    }));
});
