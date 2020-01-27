$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
        $('#index_content').toggleClass('active');
        $('#main_sidbar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('#main_sidebarCollapse').on('click', function () {
        $('#index_content').toggleClass('active');
        $('#main_sidbar').toggleClass('active');
        $(this).toggleClass('active');
    });

    if ($(window).width() < 992){
        $('#sidebarCollapse').addClass('active');
        $('#main_sidebarCollapse').removeClass('active');
    };

   

    $('#inspection_summary').click(function(){
        $('.popup').hide();
        $('.layer').show();
        $('#inspection_list').toggle();
    });
    $('#expert_achiev_btn').click(function(){
        $('.popup').hide();
        $('.layer').show();
        $('#expert_achiev_list').toggle();
    });

    $('.layer').click(function(){
        $('.popup').hide();
        $('.layer').hide();
    });

    (function(){
        // left check box changee label-background and its chart
        $('.checkbox-small').addClass("checked-bar");
        $('#customCheck-bar:input').click(function(){
            $('.checkbox-small').addClass("checked-bar");
            $('.checkbox-small').removeClass("checked-line");
            $('.checkbox-small').removeClass("checked-half");
            $('.checkbox-small').removeClass("checked-circle");
            $('.chart-row').addClass("barChart");
            $('.chart-row').removeClass("lineChart");
            $('.chart-row').removeClass("circleChart");
            $('.chart-row').removeClass("halfChart");
        });

        $('#customCheck-line:input').click(function(){
            $('.checkbox-small').addClass("checked-line");
            $('.checkbox-small').removeClass("checked-bar");
            $('.checkbox-small').removeClass("checked-half");
            $('.checkbox-small').removeClass("checked-circle");
            $('.chart-row').addClass("lineChart");
            $('.chart-row').removeClass("barChart");
            $('.chart-row').removeClass("circleChart");
            $('.chart-row').removeClass("halfChart");
            
        });

        $('#customCheck-half:input').click(function(){
            $('.checkbox-small').addClass("checked-half");
            $('.checkbox-small').removeClass("checked-bar");
            $('.checkbox-small').removeClass("checked-line");
            $('.checkbox-small').removeClass("checked-circle");
            $('.chart-row').addClass("halfChart");
            $('.chart-row').removeClass("barChart");
            $('.chart-row').removeClass("circleChart");
            $('.chart-row').removeClass("lineChart");
        });

        $('#customCheck-circle:input').click(function(){
            $('.checkbox-small').addClass("checked-circle");
            $('.checkbox-small').removeClass("checked-half");
            $('.checkbox-small').removeClass("checked-bar");
            $('.checkbox-small').removeClass("checked-line");
            $('.chart-row').addClass("circleChart");
            $('.chart-row').removeClass("lineChart");
            $('.chart-row').removeClass("barChart");
            $('.chart-row').removeClass("halfChart");
        });

    })();

});