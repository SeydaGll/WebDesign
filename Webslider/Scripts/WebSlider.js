/// <reference path="jquery-3.1.1.min.js" />
$(document).ready(function () {
    var toplamLi = $(".Slider ul li").length;  //li elementlerimin sayısını hesaplıyor.kaç taneyse
    var liWidth = 720; // css de tanımlamıştık.li elementlerinin genişliği resmin genişliği kadar.yani 720px
    var liDeger = 0;  // o anda ekranda gördüğüm li yani resmimin değeri
    var toplamWidth = liWidth * toplamLi; // bu değişken resimlerin yanyana dizilebilmesi için

    $(".Slider ul").css("width", toplamWidth + "px"); //bu sayede genişlik arttı resimlerim yanyana geldi.bu kısmı html de ul e style atayarakta yapabilirdin

    $("a.Sonraki").click(function () {
        if (liDeger < toplamLi-1) {
            liDeger++;
            var yeniWidth = liWidth * liDeger;
            $(".Slider ul").animate({marginLeft: "-" + yeniWidth + "px" }, 500);
        } else {
            liDeger = 0;  //burayı yazmak zorundayım.yazmazsak lideger 3 te kaldığı için if içerisini yapamaz
            $(".Slider ul").animate({marginLeft:"0"},500)
        }
        return false;

    })

    $("a.Onceki").click(function () {
        switch (liDeger) {
            case 0:
                liDeger = toplamLi - 1;
                var yeniWidth = liDeger * liWidth;
                $(".Slider ul").animate({ marginLeft: "-" + yeniWidth + "px" }, 500);
                break;
            default:
                liDeger--;
                var yeniWidth = liWidth * liDeger;
                $(".Slider ul").animate({ marginLeft: "-" + yeniWidth + "px" }, 500)
        }

    })
})