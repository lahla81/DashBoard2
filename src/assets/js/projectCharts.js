$(document).ready(function () {

    $('.chart-row').css({opacity:'0'});

    var customCheck =  document.getElementsByName("notary")[0];
    const labels = JSON.parse(customCheck.parentElement.dataset.label);

    var reversed_labels = labels.slice().reverse();

    var advertise_data = document.getElementById("bar-chart");
    var ctx =  advertise_data.getContext('2d');

    gradient1 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient1.addColorStop(0, '#FF95DA');
    gradient1.addColorStop(1, '#E50497');

    gradient2 = ctx.createLinearGradient(0, 0, 0, 600);
    gradient2.addColorStop(0, '#BE72FF');
    gradient2.addColorStop(1, '#7B0ED9');

    gradient14 = ctx.createLinearGradient(0, 0, 800, 800);
    gradient14.addColorStop(000, '#00BA81');
    gradient14.addColorStop(0.1, '#9102FC');
    gradient14.addColorStop(0.2, '#45C19C');
    gradient14.addColorStop(0.3, '#FFD062');
    gradient14.addColorStop(0.4, '#005EF7');
    gradient14.addColorStop(0.5, '#C7521F');
    gradient14.addColorStop(0.6, '#FF95DA');
    gradient14.addColorStop(0.7, '#7B8AFF');
    gradient14.addColorStop(0.8, '#FF8B58');
    gradient14.addColorStop(0.9, '#BE72FF');
    gradient14.addColorStop(1.0, '#44F2BD');

    gradhalf0 = ctx.createLinearGradient(0, 0, 0, 400);
    gradhalf0.addColorStop(1, '#000000');
    gradhalf0.addColorStop(0.5, '#000000');
    gradhalf0.addColorStop(0, '#850CED');

    gradhalf1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradhalf1.addColorStop(1, '#000000');
    gradhalf1.addColorStop(0.5, '#000000');
    gradhalf1.addColorStop(0, '#FF07A9');

    bgColor = [ gradhalf0,gradhalf1];

    var halfShadowColor= [  '#850CED','#FF07A9','#FF6A6A',
                            '#D9581F','#3349F0','#850CED',
                            '#E5A100','#1A8162','#FF07A9',
                            '#711466','#4D4F5C',
                            '#00BA81','#3B86FF','#FF6A6A',
                            '#D9581F','#3349F0','#850CED',
                            '#E5A100','#1A8162','#FF07A9',
                            '#711466','#4D4F5C','#00BA81'];

    var emptyFill = ['rgba(133,12,237,0.2)','rgba(255,7,169,0.2)']
    
    Chart.defaults.global.defaultFontFamily = " 'JF-Flat-regular', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";
    Chart.defaults.global.defaultFontSize = 12;
    ctx_font = Chart.helpers.fontString(25, 700, Chart.defaults.global.defaultFontFamily);
    if ($(window).width() < 900){
        Chart.defaults.global.defaultFontSize = 8;
        ctx_font = Chart.helpers.fontString(14, 600, Chart.defaults.global.defaultFontFamily);
    };
    
    var chart_data;
    var myChart;
    var chart_options;
    var chart_type;

    $('input[name="notary"]').click(function(){

        $('.chart-row').css({opacity:'1'});

        var checked = $('input[name="notary"]:checked').val();
        customCheck = document.getElementsByName("notary")[checked];
        var data   = JSON.parse(customCheck.parentElement.dataset.value);
        var project   = JSON.parse(customCheck.parentElement.dataset.project);

        var reversed_data = data.slice().reverse();
        
        var data_line = [ 0,reversed_data[0], 0,reversed_data[1],0];
        var label_line = [ , reversed_labels[0],,reversed_labels[1], ,];
        for (i = 0; i < project.length ; i++) {
            var titleId = "project_data" + i;
            document.getElementById(titleId).innerHTML = project[i];
        }

        for (i = 0; i < data.length ; i++) {
            var titleId = "half_title" + i;
            document.getElementById(titleId).innerHTML = labels[i];
        }

        for (i = 0; i < data.length ; i++) {
            var circle_titleId = "circle_title" + i;
            document.getElementById(circle_titleId).innerHTML = labels[i];
        }

        var line_data =  {
            labels: label_line,
            datasets: [{
                data: data_line,
                backgroundColor: gradient1,
                borderColor: gradient14,
                borderWidth: 5,
                lineTension : 0.1
            }]
        };

        var line_options = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 30,
                    bottom: 10
                }
            },
            legend: {
                display : false
            },
            plugins: {
                
            },
            animation: {
                duration: 500,
                onComplete: function() {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
        
                ctx.font = ctx_font;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = "#ffffff";

                ctx.font = ctx_font;
                this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function(line, index) {
                    var data = dataset.data[index] + "%";
                    ctx.fillText(data, line._model.x, line._model.y + 30);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
                    fontColor: "red",
                },
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero:true
                    },
                    gridLines: {
                        color: '#E2E2E2',
                        zeroLineColor: '#707070',
                        zeroLineWidth: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#FF07A9',
                        stepSize: 1,
                        min: 0,
                        autoSkip: false,
                    },
                    gridLines: {
                        display:false,
                        zeroLineWidth: 4,
                    },
                }]
            },
            tooltips: {
                enabled: false
            }          
        };

        var bar_data =  {
            labels: reversed_labels,
            datasets: [{
                data: reversed_data,
                backgroundColor: [ 
                    gradient1,gradient2
                    
                ], 
                hoverBackgroundColor: [
                    gradient1,gradient2
                ],

                shadowOffsetX: 3,
                shadowOffsetY: 3,
                shadowBlur: 20,
                shadowColor: ['#FF07A9','#850CED']
            }]
        };

        var bar_options = {
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 30,
                    bottom: 10
                }
            },
            legend: {
                display : false
            },
            animation: {
                duration: 500,
                onComplete: function() {
                var chartInstance = this.chart,
                    ctx = chartInstance.ctx;
        
                ctx.font = ctx_font;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillStyle = "#ffffff";
        
                this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    meta.data.forEach(function(bar, index) {
                    var data = dataset.data[index] + "%";
                    ctx.fillText(data, bar._model.x, bar._model.y + 30);
                    });
                });
                }
            },
            scales: {
                pointlabels :{
                    fontColor: "red",
                },
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero:true
                    },
                    gridLines: {
                        color: '#E2E2E2',
                        zeroLineColor: '#707070',
                        zeroLineWidth: 1
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#FF07A9',
                        stepSize: 1,
                        min: 0,
                        autoSkip: false,
                        
                    },
                    gridLines: {
                        display:false,
                        zeroLineWidth: 4,
                    },
                    barPercentage: 1.0,
                    categoryPercentage: 0.4
                }]
            },
            tooltips: {
                enabled: false
            }          
        };

        if(document.getElementById("customCheck-line").checked === true){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
        }
        if(document.getElementById("customCheck-bar").checked === true){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
        }
        if(document.getElementById("customCheck-circle").checked === true){
            circle();
        }
        if(document.getElementById("customCheck-half").checked === true){
            half();
        }

        $('#customCheck-bar:input').click(function(){
            chart_type = 'bar';
            chart_data = bar_data;
            chart_options = bar_options;
            init();
        });
        $('#customCheck-line:input').click(function(){
            chart_type = 'line';
            chart_data = line_data;
            chart_options = line_options;
            init();
        });
        $('#customCheck-half:input').click(function() {
            half();
        });
        $('#customCheck-circle:input').click(function(){
            circle();
        });

        
    
        // half Charts
        half();
        function half(){
            for (i = 0; i < data.length ; i++) {
                var id = "half_chart_no" + i;
                var ctx = document.getElementById(id).getContext('2d');
                const ctx_fillstyle = halfShadowColor[i];

                var myChart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        datasets: [{
                            data: [data[i],100-data[i]],
                            backgroundColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            hoverBackgroundColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            borderColor:'#F0F2F8',
                            hoverBorderColor: [
                                bgColor[i],'#F0F2F8'
                            ],
                            borderWidth: 2,
                            shadowOffsetX: 0,
                            shadowOffsetY: 6,
                            shadowBlur: 6,
                            shadowColor: halfShadowColor[i],
                        }]
                    },
                    options: {
                        rotation: 1 * Math.PI,
                        circumference: 1 * Math.PI,
                        layout: {
                            padding: {
                                left: 10,
                                right: 10,
                                top: 0,
                                bottom: 0
                            }
                        },
                        animation: {
                            duration: 500,
                            onComplete: function() {
                                var chartInstance = this.chart;
                                ctx = chartInstance.ctx;

                                ctx.font = ctx_font;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                ctx.fillStyle = ctx_fillstyle;
                                
                                this.data.datasets.forEach(function(dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function(half, index) {
                                var data = dataset.data[0] + "%";
                                ctx.fillText(data, half._model.x, half._model.y + 15);
                                });
                            });
                            }
                        },
                        legend: {
                            display : false
                        },
                        tooltips: {
                            enabled: false
                        }
                    },
                })
            };
        };

        // circle Charts
        circle();
        function circle(){
            // circle Charts
            for (i = 0; i < data.length ; i++) {
                var id = "#circle-body-no" + i;
            
                $(id).circleProgress({
                    value: data[i]/100,
                    size: 146,
                    startAngle: 0,
                    reverse: true,
                    emptyFill: emptyFill[i],
                    animationStartValue: 0,
                    fill: halfShadowColor[i],
                }).on('circle-animation-progress', function(event, progress, stepvalue){

                    $(this).find('span').html(Math.round(stepvalue * 100) + "%");
                });
            }
        };

        init();
        function init(){
            if (myChart) {
                myChart.destroy();
              }
            myChart = new Chart(ctx, {
                type: chart_type,
                data: chart_data,
                options: chart_options,
            });
        };

    });
});