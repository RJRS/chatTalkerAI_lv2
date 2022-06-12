$(document).ready(function () {
    $(".btn-top a").click(function(){
        $("html,body").animate({scrollTop: "0"}, 800);
    });
    $('.program a').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass();
        if ($(this).text() == '>25000位') {
            const regex2 = /\>\d{5}/;
            const match2 = $(this).text().match(regex2);
            $('.card-price-box p').text(match2[0]);
            $('.month_basic p').text('200');
            $('.month_pro p').text('1200');
        } else {
            const regex = /\d{5}/;
            const match = $(this).text().match(regex);
            $('.card-price-box p').text(match[0]);
            if (match[0] == '10000') {
                $('.month_basic p').text('600');
                $('.month_pro p').text('1600');
            } else if (match[0] == '15000') {
                $('.month_basic p').text('500');
                $('.month_pro p').text('1500');
            } else if (match[0] == '20000') {
                $('.month_basic p').text('400');
                $('.month_pro p').text('1400');
            } else if (match[0] == '25000') {
                $('.month_basic p').text('300');
                $('.month_pro p').text('1300');
            }
        }
    });

    $('.question>ul>li').click(function () {
        $(this).find('.ans').slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('button').find('.minus').attr("src", "img/icon_minus.svg");
        } else {
            $(this).find('button').find('.minus').attr("src", "img/icon_plus.svg");
        }
    });
})