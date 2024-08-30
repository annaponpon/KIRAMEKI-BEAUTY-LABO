// スリック
$('.voices__slick').slick({
    dots: true, //ドットのナビ表示
    arrows: false, // 前・次のスライド切り替える矢印表示
    slidesToShow: 3, //表示するスライド枚数
    slidesToScroll: 1, //1回で動くスライド数
    swipe: true, //スワイプ操作を有効
    infinite: true, // 無限再生
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true, //スライドを中心に表示して、部分的に前後のスライドが見えるように設定
            centerPadding: "10px", //centerMode時に前後のスライドが見える幅（px or ％）（初期値：50px）
            variableWidth: true,
        }
    }
    ]
});