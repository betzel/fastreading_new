//Thanks to: http://www.webtipblog.com/adding-scroll-top-button-website/

$(document).ready(function () {

    $(function(){

        $(document).on( 'scroll', function(){

            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        });

        $('.scroll-top-wrapper').on('click', scrollToTop);
    });

    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }

    $('#Carousel4').carousel({
        interval: false
    });

    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
                center: [55.817785, 49.111669],
                zoom: 16,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myGeoObject = new ymaps.GeoObject({}, {
                preset: 'islands#blackStretchyIcon'
            });

        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([55.817785, 49.111669], {
                iconCaption: 'ул. Чистопольская, 20А'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption'
            }));
    }

    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });

    $(".fancybox").fancybox();

    function eqBl(first, second){
        setTimeout(function(){
            if($(first).height()<$(second).height()){
                $(first).css('height', $(second).height());
            }
            if($(first).height()>$(second).height()) {
                $(second).css('height', $(first).height());
            }
        }, 500);
    }

    function eqBlMany(first, second, third){
        setTimeout(function(){
            if($(first).height()>$(second).height() && $(first).height()>$(third).height()){
                $(second).css('height', $(first).height());
                $(third).css('height', $(first).height());
            } else if ($(second).height()>$(first).height() && $(second).height()>$(third).height()) {
                $(first).css('height', $(second).height());
                $(third).css('height', $(second).height());
            } else {
                $(first).css('height', $(third).height());
                $(second).css('height', $(third).height());
            }
        }, 500);
    }

    if($(window).width()>991){
        eqBl('header .col-md-4:first > .col-md-3', 'header .col-md-4:first > .col-md-9');
    }

    if($(window).width()<=991){
        $('header .col-md-4:first > .col-md-3').css('height', 'inherit');
        $('header .col-md-4:first > .col-md-9').css('height', 'inherit');
    }
});