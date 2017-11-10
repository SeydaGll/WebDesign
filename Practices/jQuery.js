/*jQuery bir javascript kütüphanesidir.Jquery web sitemizde javascript kullanmayı çok daha kolay hale getirir.Jquery e çalışmaya başlamadan önce HTML,CSS ve JAVASCRİPT
hakkında temel bir bilgiye sahip olman gerekir.Jquery "daha az yaz,daha fazlasını yap" şeklinde bir javascript kütüphansidir.Jquery birkaç satırlı javascript kodunu 
yerine getirmek için birçok ortak görevleri alır ve onları tek satırlı kodla çağırabileceğimiz metodlara paketler.JQuery ayrıca Javascripten,AJAX çağrıları ve DOM 
değiştirme gibi birçok karmaşık şeyleri basitleştiriyor
Jqouery kütüphanesi şu özellikleri içeriyor
--HTML/DOM manipülasyonu(seçme,ekleme çıkarma yoluyla bilgileri değiştirme)
--CSS manipülasyon
--HTML Olay metodları
--Efektler ve animasyonlar
--AJAX
--Araçlar
Buna ek olarak, jQuery neredeyse her iş için eklentilere sahiptir.
Neden JQuery? Dışarıda birçok JavaScript framework ü var, ancak jQuery en popüler ve en uzatılabilir görünüyor.
Web'deki en büyük şirketlerin çoğu jQuery'yi kullanıyor.Google,Microsoft,IBM,Netflix
JQuery bütün browserlarda çalışır mı? JQuery ekibi çapraz tarayıcı sorunları hakkında her şeyi bilir ve bu bilgiyi jQuery kütüphanesine yazmışlardır.
JQuery, Internet Explorer 6 da dahil olmak üzere tüm büyük tarayıcılarda aynı şekilde çalışacaktır!
*/

<head>
<script src="jquery-3.1.1.min.js"></script>
</head>
/*jquery kütüphanesi basit bir javascript dosyasıdır ve bu dosyayı HTML <script> tagları ile referanslarız.(<script> tagları <head> bölümü içerisinde olarak bildirilir)
İpucu: İndirilen dosyayı, kullanmak istediğiniz sayfalarla aynı dizinde yerleştirin.
Neden <script> etiketinde type = "text / javascript" yazmadığını merak ediyor musunuz?HTML5'te bu gerekli değildir.
JavaScript, HTML5'te ve tüm modern tarayıcılarda varsayılan betik dili!
JQuery'yi kendiniz indirip barındırmak istemiyorsanız bir CDN'den (İçerik Dağıtım Ağı) indirebilirsiniz.Google ve Microsoft, jQuery'ı barındırıyor.
Google veya Microsoft'daki jQuery'yi kullanmak için aşağıdakilerden birini kullanın:*/
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>   ///GOOGLE CDN
</head>

<head>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>     ///MİCROSOFT CDN
</head>

/*Google veya Microsoft'un barındırılan jQuery'sini kullanmanın en büyük avantajı:
Birçok kullanıcı zaten başka bir siteyi ziyaret ederken jQuery'yi Google'dan veya Microsoft'dan indirmiştir.
Sonuç olarak, sitenizi ziyaret ettiklerinde önbellekten yüklenecek ve bu da yükleme süresinin daha hızlı olmasına neden oluyor.
Ayrıca, Çoğu CDN, bir kullanıcı bir dosyayı istediğinde dosyanın ona en yakın sunucudan sunulacağından emin olur ve bu da daha hızlı yükleme süresine neden olur.*/

****JQUERY SYNTAX****
/*Jquery ile HTML elementlerini seçip(sorgu) onlar üzerinde değişiklikler,eylemler gerçekleştirebilirsin.
JQuery sözdizimi, HTML element(ler)ini seçmek(selector) ve element(ler) üzerinde bazı işlemleri(action) gerçekleştirmek için özel olarak hazırlanmıştır.
BASİT SÖZ DİZİMİ: $(selector).action()
1) $ işareti JQuery i tanımlamak/erişmek içindir..
2)(selector) HTML elementini sorgulamak (veya bulmak) içindir..
3)Jquery action() elemntler üzerinde gerçekleştirilecek eylemlerdir*/
Örnekler:
$(this).hide() -//geçerli elementi gizler
$("p").hide() - //bütün p elemenlerini gizler
$(".test").hide() - // sınıfı test olan(class="test") bütün elementleri gizler
$("#test").hide() - //id si test olan(id="test") elementi gizler.
/*CSS selector lerine aşina mısın.JQuery elementleri seçmek için CSS sözdizimini kullanır*/

The document Ready Event(Döküman hazır olayı)**

$(document).ready(function(){

    // jQuery methods go here...

});
/*Bu, belgenin(document) yüklenmesi tamamlanmadan (hazır) jQuery kodunun çalışmasını önlemek içindir.
Dokümanın tamamen yüklenmesini ve onunla çalışmadan önce hazır olmasını beklemek iyi bir uygulamadır.
Bu aynı zamanda JavaScript kodunuzu, belgenizin baş(head) bölümünde bulunan gövdesinden önce almanızı sağlar.
Document tamamen yüklenmeden önce metodlar çalıştırıldığında başarısız olabilecek bazı eylem örnekleri:
--Henüz oluşturulmamış bir elementi gizlemeye çalışmak
--Henüz yüklenmemiş bir resmin boyutunu almaya çalışmak*/

**JQUERY SELECTORS**
/*JQuery selektörleri jquery kütüphanesinin en önemliparçalarından biridir.Jquery selektörleri html elementlerini seçmenize ve manipüle etmenize izin verir.
JQuery selektörleri,adlarına(name),kimliklerine(id),sınıflarına(classes),türlerine(types),özniteliklerine(attributes),öznitelik değerlerine(values) ve çok daha fazlasına
dayanan HTML öğelerini "bulmak" (veya seçmek için) kullanılır.Varolan CSS Selektörlerini temel alır ve buna ek olarak bazı kendi özel seçicileri de vardır.
JQUERY DEKİ BÜTÜN SELEKTÖRLER $() İLE BAŞLAR!!!!!*/

Element Selektörü
/*Jquery element selektörü element adına dayalı elementleri seçer.
$("p")  bunu yaparak sayadaki büün p elementlerini seçmiş oluyorum*/
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();        
    });
});
/*Bir kullanıcı bir butona tkladığında bütün p elementleri kayboluyo.gizleniyo*/

#id Selektörü**
/*Jquery id selektörü belli bir elementi bulmak html tagının id attribute ni kullanır
Bir id bir sayfada benzersiz olmalıdır.Bu nedenle benzersiz,tek element bulmak istediğimizde #id selektörünü kullanmlıyız
$("#test")*/

.class Selektörü**
//$(".test")

JQuery selektörlerinden bazıları ::
$("*")	//Bütün elementleri seçer
$(this) //Mevcut HTML elementini seçer
$("p.intro")	//  class="intro" olan p elementlerini seçiyo
$("p:first")	//İlk p elementini seçer
$("ul li:first")  //ilk ul listesinin ilk li elementini seçer
$("ul li:first-child")	 //tüm ul lerin ilk elementini seçer.
$("[href]")	       // href attribute lü bütün elementleri seçer
$("a[target='_blank']")	  // "_blank" değerine eşit  bir target attribute lü tüm <a> elementlerini seçer.
$("a[target!='_blank']")	//"_blank" değerine eşit OLMAYAN(!) bir target attribute lü tüm <a> elementlerini seçer.
$(":button")	//type="button" olan tüm <input> ve <button> elementlerini seçer.
$("tr:even")	//Bütün çift <tr> elementlerini seçer.
$("tr:odd")	    //Bütün tek <tr> elementlerini seçer.

JQuery event method***
//JQuery bir HTML sayfasındaki olaylara yanıt vermek için özel olarak hazırlanmıştır.
Events nedir ??
/*Bir web sayfasının yanıtlayabileceği tüm farklı ziyaretçilerin eylemlerine(action) event denir.bir olay bir şey meydana geldiğinde kesin(tam) anı temsil eder.
Örneğin;
--bir elementin üzerindeki mouse un hareketi
--Bir radyo düğmesini seçmek
--bir elemente tıklamak
Bazı yaygın DOM olayları:
Mouse events:click,dblclick,mouseenter,mouseleave
Keyboard events:keypress,keydown,keyup
Form events:submit,change,focus,blur
Document/Window events:load,resize,scroll,unload*/

Event metodları için JQuery syntax 
/*1)Bir asyfadaki tüm paragraflara(p elementlerine) click eventi atamak için:    $("p").click();
  2)Bir sonraki adım bu event ateşlendiği anda olması gereken şeyi tanımlaamktır:   $("p")click(function(){....}) */

Yaygın Bir şekilde kullanılan JQuery Event Metodları
/*$(document).ready()  metodu : document tamemen yüklendiği zaman bir fonksiyonu  gerçekleştirmeye(yürütmeye ) izin verir
click() metodu : Bir html elementine bir event işleyici(handler) fonksiyonu ekler.Kullanıcı bir html elementine tıkladığında fonksiyon yürütülür*/
$("p").click(function(){
    $(this).hide();   //bir p elementinde tıklama olayyı harekete geçirildiğinde geçerli olan p elemntini gizliyor(hide())
});
/*  dblclick() metodu : Bir html elementine bir event işleyici fonksiyonu ekler..Kullanıcı bir html elementi üzerine iki kez tıkladığında  fonksiyon yürütülr
   mouseenter() metodu : Bir html elementine bir event işleyici fonksiyonu ekler.MOuse html elementine girdiğinde fonksiyon yürütülür.*/
   $("#p1").mouseenter(function(){
    alert("You entered p1!");     //Fare p1 elementi üzerine geldiğinde bir alert penceresi açılıyor
   });
/*mouseleave() metodu : imleç diyelimki p elementinin üzerinde,imleci elementin üzerinde çektiğinde yani ayrıldığında fonksiyon yürütülüyor*/
$("#p1").mouseleave(function(){
    alert("Bye! You now leave p1!");
});
/*mousedown() : Fare html elementi üzerindeyken,sol,orta veya sağ fare düğmesine basıldığında fonksiyon yürütülür*/
$("#p1").mousedown(function(){
    alert("Mouse down over p1!");   //fareye basıldığı an uyarı penceresi çıkıyor
});
/*mouseup() : fare html elementi üzerindeyken sol,orta veya sağ a basılan tuş BIRAKILDIĞINDA fonksiyon yürütülür*/

/*hover(): İki fonksiyon alır .. mouseenter() ve mouseleave() metodalarını birleşimidir..Mouse html elementine girdiğinde ilk fonksiyon yürülür.ikinci fonksiyonda
mouse html elementinden ayrıldığında yürütülür*/
$("#p1").hover(function(){
    alert("You entered p1!");
},
function(){
    alert("Bye! You now leave p1!");
});
/*focus() metodu: bir html form alanına bir event işleyici fonksiyonu ekler..form alanına mesela ismimizin yazıldığı yere focuslanıldığında yani basıldığında fonksiyon 
yürütülür..blur() metodu: bu form alanından dışarıya tıklandığında fonksiyon yürütülür*/
$(document).ready(function(){
    $("input").focus(function(){       //2 tane inputumuz var.ismimizi ve emailimizi yazdığımız.ismimi yazmak için inputa tıkladığımda kutunun çi yeşil oluyor
        $(this).css("background-color", "green");
    });
    $("input").blur(function(){         // kutunun dışına bastığımda da kutumun içi pembe oluyor
        $(this).css("background-color", "pink");
    });
});

/* on() metodu : seçilmiş elementler için bir veya daha  fazla event işleyici ekliyor*/
$("p").on(metod)("click(event)", function(){
    $(this).hide();    // burası bir p elementine click eventi ekliyor
});

$("p").on({          //burada on() bir p elementine birden çok event işleyici(handler ) ekliyor
    mouseenter: function(){
        $(this).css("background-color", "lightgray");  // mouse yazının üzerindeyken gri
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");  //mouse üzerinden çekildiğinde mavimsi
    }, 
    click: function(){
        $(this).css("background-color", "yellow");  // yazının üerine tıklandığında sarı oluyo.çekildiğinde yine mavimsi omaya devam ediyor
    } 
});

Hide(gizle),Show(göster),Toggle,Slide(Slayt),Fade(),Animate***
Hide() ve show()**
//hide() ve show() metodları ile bir html elementini gizleyebilir ve gösterebiliriz
$("#hide").click(function(){
    $("p").hide();
});

$("#show").click(function(){
    $("p").show();
});
Sözdizimmi
$(selector).hide(speed,callback);//İsteğe bağlı hız parametresi hide()/ show() hızını belirtir.slow(yavaş),fast(hızlı ) ve milisaniyelik değerler alabilir.
$(selector).show(speed,callback);//İsteğe bağlı callback parametresi, hide () veya show () metodu tamamlandıktan sonra yürütülecek olan fonksiyondur
$("button").click(function(){
    $("p").hide(1000);  //bir saniye içinde varsayılandan daha yavaş şekilde gizleniyor
});
Toggle() metodu**
//toggle() metodu ile hide ve show metodları arasında geçiş yapabiliyoruz.yani <p>> elementi butona bir kere basıyorum kayboluyo bir kere daha  basıyorum görünüyor
$("button").click(function(){
    $("p").toggle();
});
$(selector).toggle(speed,callback);  //yine aynı şekilde kullanabiliyosun

fading metodları**
// fade türkçe anlamı soldurmak.yani elementleri daha soluk hale getirebiliyosun

fadeIn() metodu** //yavaş yavaş görünmek
//Gizlenmiş bir elementi soldurmak için kullanılıyor
$(selector).fadeIn(speed,callback); //speed paramaetrisi isteğe bağlıdır ve efekt süresini belirler.slow,fast veya milsisecond alabilir
//isteğe bağlı callback parametresi fading tamamlandıktan yürütülecek olan fonksiyondur
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

fadeOut() metodu** //fade out yavaş yavaş ortadan zayıflayıp kaybolmak demek
//görünür bir elementi silmek için kullanılıyor
$(selector).fadeOut(speed,callback); //yine aynı şekilde kullanabliyosun

fadeToggle() Methodu ** //JQuery fadeToggle () yöntemi, fadeIn () ve fadeOut () metodları arasında geçiş yapar.
$(document).ready(function(){
    $("button").click(function(){ //butona tıkladığımda speed parametresine göre elemntler kayboluyo.tekrar bastığımda aynı hızla ortaya çıkıyor
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });
});

fadeTo() metodu*** //0 ve 1 arasında verilen bir değerle belirli bir opaklığa solmaya izin verir.yani ortadan kaybolma yok
$(selector).fadeTo(speed,opacity,callback); //opacity (0 ve 1 arasında bir değerdir)

Sliding metodları***//kayma metodları.slide türkçe anlamı kaydırmak
slideDown() metodu** // elementin Aşağı doğru kaymasını sağlıyor
$(selector).slideDown(speed,callback);
$("#flip").click(function(){
    $("#panel").slideDown();   //butona bastığımda panel aşağı doğru kayıyor
});

slideUp() metodu ** // yukarı doğru kaymak
$("#flip").click(function(){
    $("#panel").slideUp();   //butona bastığımda açık olan panel yukarı doğru kayarak kapanıyor
});

slideToggle() metodu ** // aynı şekilde . toggle açma kapama butonu gibi düşünebilrsinn

animate() metodu**  // özel animasyonlar oluşturmamızı sağlıyor
$(selector).animate({params},speed,callback);  //{params} gereklidir yani isteğe bağlı değildir.bu animasyonu yapılacak css özelliklerini tanımlar
$("button").click(function(){
    $("div").animate({left: '250px'});   //250 px lik sol özelliğine ulaşana kadar div sağa kayacaktır
});
<div style="background:#98bf21;height:100px;width:100px;position:absolute;">***//neden position:absolute; önemli!
/*Varsayılan olarak, tüm HTML öğeleri statik bir konuma sahiptir ve taşınamaz.
Pozisyonu değiştirmek için önce elemanın CSS konum özelliğini göreli(relative), sabit(fixed) veya mutlak(absolute) olarak ayarlamayı unutmayın!*/

Birden Çok özellik işleme***//Birden çok özelliğin aynı anda canlandırılabildiğine dikkat edin:
$("button").click(function(){
    $("div").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); 

/*TÜM CSS özelliklerini animate () metoduyla değiştirmek mümkün müdür?

Evet neredeyse! Ancak unutulmaması gereken önemli bir nokta vardır: tüm özellik adları, animate () yöntemiyle kullanıldığında CamelCased olmalıdır: 
padding-left yerine paddingLeft, margin-right(kenarsağ) yerine marginRight yazmanız gerekecektir.

Ayrıca, renk animasyonu çekirdek jQuery kitaplığına dahil değildir.
Rengi canlandırmak isterseniz, jQuery.com'dan Renkli Animasyonlar eklentisini indirmeniz gerekir.*/

Göreli değerler kullanma***
//yani mesela butona bastıkça değeri her defasında büyütmek yada küçültmek gibi.normalde bi kere basarsın bi daha basarsan değişmez aynen kalır.ama burda sürekli büyütebiirsin
//bUnuda değerin önüne += yada -= koyarak yapabilsin.
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        });
    });
});

Önceden tanımlanmış değerler kullanmak**
//bir property(mesela height) sin animasyon değerini show,hide ,toggle olarakda belirtebilirsin
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
            height: 'toggle'   //butona bastığımda animasyon kayboluyo.tekrar bastığımda animasyon geliyo.yani yükseklik bir kayboluyo bir ortaya çıkıyo
        });
    });
});

Kuyruk İşlevsellik**
/*Varsayılan olarak, jQuery animasyonlar için sıra işlevselliği ile gelir.Bu, birbiri ardına birden fazla animate () çağrı yazarsanız,
jQuery bu yöntem çağrılarıyla "dahili" bir sıra oluşturduğu anlamına gelir.Ardından animasyon çağrılarını teker teker çalıştırır.
Dolayısıyla, birbirinden sonra farklı animasyonlar gerçekleştirmek isterseniz, sıranın işlevselliğinden yararlanırız.*/
$("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
}); 

$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");  
        div.animate({left: '100px'}, "slow");  //ilk önce div öğesi sağa taşınıyor ardından metnin yazi boyutu artıyo
        div.animate({fontSize: '3em'}, "slow");
    });
});

stop() metodu***
//JQuery stop () yöntemi, bir animasyonu veya efekti bitmeden* durdurmak için kullanılır.
//Stop () yöntemi, kayan(sliding), solan(fading) ve özel animasyonlar da dahil olmak üzere tüm jQuery efekt işlevleri için çalışır.
$(selector).stop(stopAll,goToEnd);//İsteğe bağlı stopAll parametresi, animasyon sırasının temizlenip temizlenmeyeceğini belirtir.
                                  //Varsayılan değer false, yani aktif animasyonun durdurulması, daha sonra sıralanan animasyonların yapılmasına izin verileceği anlamına gelir.
                                  //İsteğe bağlı goToEnd parametresi, geçerli animasyonun hemen tamamlanıp tamamlanmayacağını belirtir.Varsayılan değer false dur.
                                   //Varsayılan olarak, stop () yöntemi seçilmiş element üzerindeki gerçekleştirilmekte olan geçerli animasyonu öldürür.
$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });
});

callBack Fonksiyonu***
/*Geçerli efekt % 100 tamamlandıktan sonra bir geri arama(callBack) fonksiyonu yürütülür.JavaScript deyimleri satır satır yürütülür. 
Bununla birlikte, efektlerle birlikte, efekt bitmediğinde dahi bir sonraki kod satırı çalıştırılabilir. Bu hatalar oluşturabilir.
Bunu önlemek için geri arama(callBack) fonksiyonu oluşturabilirsiniz.
callBack fonksiyonu Geçerli efekt bittikten sonra yürütülür.*/
$(selector).hide(speed,callback);
//Aşağıdaki örnek, gizleme efekti tamamlandıktan sonra yürütülecek bir fonksiyon olan bir geri arama parametresine sahiptir:
$("button").click(function(){
    $("p").hide("slow", function(){   //hide butonuna bastığımda önce yazı kayboluyo sonra alert penceresi açılıyo
        alert("The paragraph is now hidden"); 
    });
});

$("button").click(function(){
    $("p").hide(1000);  //burada bir callBack fonksiynu yok ve hide efekti tamamlanmadan alert pencere açılıyo.
    alert("The paragraph is now hidden");
});

Chaining ** (zincirleme)
/*JQuery ile eylemleri(actions) / metodları birbirine zincirleyebilirsiniz.
Zincirleme, tek bir bildirimde(deyimde) birden fazla jQuery metodunu (aynı element üzerinde) çalıştırmamızı sağlar.
Şimdiye kadar, bir seferde bir tane jQuery ifadesi yazdık (birbiri ardına).
Bununla birlikte, zincirleme olarak adlandırılan ve aynı elementte(lerde) birden fazla jQuery komutunu birbiri ardına çalıştırmamızı sağlayan bir teknik var.
İpucu: Bu şekilde, tarayıcıların aynı elementleri bir kereden fazla bulması gerekmez.
Bir eylemi zincirlemek için, eylemi bir önceki eylemin üzerine ekleyin.*/
$(document).ready(function(){
    $("button").click(function(){ //bu css,slideUp,slideDown metodlarını birbirine zincirlemiş.p1 elementinin önce rengi kırmızıya değişiyo sonra yukarı doğru kayıyo ardında aşağı dopru kayıyo.
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
});
/*İpucu: zincirleme yaparken, kod satırı oldukça uzun sürebilir. Bununla birlikte, 
jQuery sözdizimi konusunda çok katı değildir; Satır sonları ve girintiler de dahil olmak üzere, istediğiniz gibi biçimlendirebilirsiniz.*/
$(document).ready(function(){
    $("button").click(function(){
        $("#p1").css("color", "red")
            .slideUp(2000)    //JQuery ek boşlukları atar ve yukarıdaki satırları bir uzun kod satırı olarak yürütür.
            .slideDown(2000);
    });
});

JQUERY HTML****
//Jquery HTML elementlerini ve attribute lerini değiştirmek ve üzerinde oynamak(manipulate) için güçlü metodlara sahiptir
Jquery DOM manipülasyonu
/*JQuery'nin çok önemli bir kısmı DOM'u değiştirme imkânıdır.Jquery elementlere ve attributeleri değiştirmek ve erişmeyi kolaytırmak için bir dizi DOM ile ilgili 
yöntemlerle birlikte gelir
DOM = Belge Nesnesi Modeli(Document Object Model)
DOM, HTML ve XML belgelerine erişmek için bir standart tanımlar:
W3C Belge Nesnesi Modeli (DOM), programların ve komut dosyalarının bir belgenin içeriğine,yapısına ve stiline dinamik olarak erişmesini ve güncellemesini 
sağlayan bir platform ve dil-etkisiz arabirimdir. "*/

İçerik almak(gets) ** text(),html(),val() ** Get Content and Attribute
DOM işleme için üç basit, ancak kullanışlı, jQuery yöntemleri şunlardır:
    Text () - //Seçilen elementlerin METİN(TEXT) içeriğini ayarlar(sets) veya döndürür(returns),
    Html () - //Seçilen elementlerin İÇERİĞİNİ ayarlar veya döndürür (HTML biçimlendirme dahil),
    Val () - //FORM alanlarının değerini ayarlar veya döndürür
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text()); //burada butona bastığımda alert penceresi açılıyor ve şu yazıyor--> Text: This is some bold text in a paragraph.
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html()); //burada butona bastığımda alert penceresi açılıyor ve şu yazıyor--> HTML: This is some <b>bold</b> text in a paragraph.  
    });    //YANİ HER İKİSİNDE İÇERİK ALMIŞ OLUYORUZ
});
<p id="test">This is some <b>bold</b> text in a paragraph.</p>

$("#btn1").click(function(){
    alert("Value: " + $("#test").val());  //burada inputun alanına girdiğim değeri alıyor.yani ne yazıyosam alertte gösteriyo
});
<p>Name: <input type="text" id="test" value="Mickey Mouse"></p>

Attr() ile attribute almak**
//attribute değerlerini almak için jquery attr() metodunu kullanır.
//Aşağıdaki örnek, bir bağlantıdaki href attribute nin değerinin nasıl elde edilebileceğini göstermektedir:
$("button").click(function(){
    alert($("#w3s").attr("href"));  //butona bastığımda href değeri yani https://www.w3schools.com yazısı alert penceresinde görünüyor
});
<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

İçerik ayarlamak(sets)**text(),html(),val()**Set Content and Attribute
//İçeriği ayarlamak için önceki sayfadaki üç yöntemi kullanıyruz
Text () - //Seçilen elementlerin METİN(TEXT) içeriğini ayarlar(sets) veya döndürür(returns),
Html () - //Seçilen elementlerin İÇERİĞİNİ ayarlar veya döndürür (HTML biçimlendirme dahil),
Val () - //FORM alanlarının değerini ayarlar veya döndürür

$("#btn1").click(function(){
    $("#test1").text("Hello world!");  //id si test1 olan paragrafın içinde yazan yazıyı değiştirip Hello world! yazıyo
});
$("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>"); // id si test2 olan paragrafın içinde yazan yazıyo değiştirp koyu harflerle Hello World yazıyo..<b> elementinden dolayı
});
$("#btn3").click(function(){    // id si test3 olan inputun içinde yazan ismi değiştrip Dolly Duck yazıyo
    $("#test3").val("Dolly Duck"); 
});

Text (), html () ve val () için bir callBack Fonksiyonu
/*Yukarıdaki üç jQuery yönteminin tümü: text (), html () ve val () de bir callBack fonksiyonu ile birlikte gelir.
callBack fonksiyonun iki parametresi vardır: seçilen elementler listesindeki geçerli elementin indexi(dizini) ve orjinal (eski) değer.
Daha sonra kullanmak istediğin string i fonksiyonun yeni değer olarak döndürürsün*/

$("#btn1").click(function(){
    $("#test1").text(function(i, origText){   //i elementin index i , origText orginal değer
        return "Old text: " + origText + " New text: Hello world!
        (index: " + i + ")"; 
    });
});

$("#btn2").click(function(){
    $("#test2").html(function(i, origText){  //index olarak 2 si de 0 dönüyor.orasını anlamadım!!
        return "Old html: " + origText + " New html: Hello <b>world!</b>
        (index: " + i + ")"; 
    });
});

attr()**Attribute leri ayarlamak //bununla attribute değerlerini değiştirebiliyorum/ayarlayabiliyorum
$(document).ready(function(){
    $("button").click(function(){
        $("#w3s").attr("href", "https://www.w3schools.com/jquery"); //yani butona tıkladığımda artık https://www.w3schools.com  adresine değilde https://www.w3schools.com/jquery adresine gidecek
    });                                                             //görüldüğü gibi iki parametre kullanılmış!!!!!
});
<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>


$(document).ready(function(){   // attr() metodu bize ayni anda birden fazla attibute ayarlamamıza da izin veriyor
    $("button").click(function(){
        $("#w3s").attr({
            "href" : "https://www.w3schools.com/jquery",  //aynı başlık(title) ve href attribute lerinin her ikisini ayarlamamıza da izin veriyor.
            "title" : "W3Schools jQuery Tutorial"   // artık butona bastığımda adresim https://www.w3schools.com/jquery başlığım W3Schools jQuery Tutorial dır..
        });
    });
});
<p><a href="https://www.w3schools.com" title="some title" id="w3s">W3Schools.com</a></p>

attr() için callBack fonksiyonu****
/*JQuery yöntemi attr (), ayrıca bir callBack fonksiyonu ile birlikte gelir.callBack fonksiyonu iki parametreye sahiptir: seçilen elementler listesindeki geçerli 
elementin dizini(index) ve orjinal(eski) attribute değeri. Daha sonra, kullanmak istediğiniz string fonksiyonun yeni attribute değeri olarak döndürürsünüz.*/

ELEMENTLER EKLEMEK**//jquery ile yeni element/içerik eklemek kolaydır
YENİ HTML İÇERİK EKLEMEK***
//Yeni içerik eklemek için kullanılan 4 jquery metodu vardır
Append () - Seçilen elementlerin sonuna içerik ekler
Prepend () - Seçilen elementlerin başına içerik ekler
After () - Seçilen elementlerden sonra içerik ekler
Before () - Seçilen öğelerden önce içerik ekler

append() metodu***
//JQuery append () yöntemi, seçili HTML öğelerinin SONUNDA içeriği ekler.
$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").append(" <b>Appended text</b>.");    //burada p elemntlerini seçmiş ve p elementin içndeki yazının sonuna yazı eklliyo.yani burada yazının sonunda koyu harflerle Appended text yazıcak
    });

    $("#btn2").click(function(){  //burada listeyi seçmiş.listenin sonuna ekliyor.yani basında 4.Appended item(öğe) yazıcak.eklerken <li>Appended item</li> yazdığın dikkat et çünkü liste ekliyor.
        $("ol").append("<li>Appended item</li>");
    });
});
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>

  prepend()metodu*** // Burada da başına ekliyor.

  Append() ve Prepend() ile birkaç yeni element eklemek*** //Anlamadım daha sonra incele!!!!!!!!
  /*Yukarıdaki iki örnekte de, yalnızca seçilen HTML elementlerinin başında / sonunda bazı metin / HTML i yerleştirdik.Bununla birlikte, append () ve prepend () yöntemleri, 
  parametreler olarak sonsuz sayıda yeni elementer alabilir.Yeni elementler text / HTML (yukarıdaki örneklerde yaptığımız gibi),jQuery veya JavaScript kodu ve DOM elementleri 
  ile oluşturulabilir.
  Aşağıdaki örnekte birkaç yeni element oluşturduk.Elementler metin(text) / HTML, jQuery ve JavaScript / DOM ile oluşturuldu.Ardından yeni öğeleri metne append () yöntemiyle
  ekledik . (BU prepend () için de işe yarardı):*/
  function appendText() {
      var txt1 = "<p>Text.</p>";              // Create text with HTML
      var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
      var txt3 = document.createElement("p");
      txt3.innerHTML = "Text.";               // Create text with DOM
      $("body").append(txt1, txt2, txt3);     // Append new elements
  }

  before() ve after() metodları***
  /*JQuery after () yöntemi, seçilen HTML elementlerinden SONRA içerik ekler.
  JQuery before () yöntemi, seçilen HTML öğelerinden ÖNCE içeriği ekler.*/
  
  $(document).ready(function(){
    $("#btn1").click(function(){
        $("img").before("<b>Before</b>");  //butona bastığımda resimden önce Before yazısı yazılıyo.bold geliyo <b> den dolayı
    });

    $("#btn2").click(function(){
        $("img").after("<i>After</i>");  //butona bastığımda resimden sonra After yazısı geliyo.italik geliyo <i> den dolayı
    });
});
  <img src="/images/w3jquery.gif" alt="jQuery" width="100" height="140"><br>

After () ve before () ile Birkaç Yeni Element Ekleme***
/*Ayrıca after () ve before () yöntemleri parametre olarak sonsuz sayıda yeni element alabilir. Yeni elementler text / HTML (yukarıdaki örnekte yaptığımız gibi), 
jQuery veya JavaScript kodu ve DOM elementleri ile oluşturulabilir.
Aşağıdaki örnekte birkaç yeni element oluşturduk. Elementlar metin / HTML, jQuery ve JavaScript / DOM ile oluşturuldu. Ardından yeni elementleri metne after () yöntemi
ile ekledik (bu, before () için de işe yarardı)*/

function afterText() {
    var txt1 = "<b>I </b>";                   // Create element with HTML
    var txt2 = $("<i></i>").text("love ");    // Create with jQuery
    var txt3 = document.createElement("b");   // Create with DOM
    txt3.innerHTML = "jQuery!";
    $("img").after(txt1, txt2, txt3);      // Insert new elements after img
}
<img src="/images/w3jquery.gif" alt="jQuery" width="100" height="140">

Remove elementss****
/*JQuery ile varolan HTML öğelerini kaldırmak kolaydır.
Öğeleri ve içeriği kaldırmak için esas olarak iki jQuery yöntemi vardır:*/

Remove () - Seçili elementi (ve alt(childe) elementlerini kaldırır)
Empty () - Seçilen elementten  alt elementlerini kaldırır.

Remove() Metodu*** //seçilen elementi ve alt elementlerini kaldırıyor
$(document).ready(function(){  //burada butona bastığımda div tamamen kaldırılıyor
    $("button").click(function(){
        $("#div1").remove();
    });
});
<div id="div1" style="height:100px;width:300px;border:1px solid black;background-color:yellow;">

This is some text in the div.
<p>This is a paragraph in the div.</p>
<p>This is another paragraph in the div.</p>

</div>

Empty() Metodu** // buDA SADEce alt elementleri kaldırıyor.yani yukarıda örneği baz alıcak olursak div içerisindeki elementleri kaldırıyor yani yazılar kalkıyr sadece.

Kaldırılacak Elemanların Filtrelenmesi***
/*JQuery remove () yöntemi, kaldırılacak elementleri filtrelemenize izin veren bir parametre de kabul eder.
Parametre herhangi jQuery selector sözdizimi(syntaxes) olabilir.
Aşağıdaki örnek, class=<"test" olan tüm <p> öğelerini kaldırır:*/
$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".test");   // class="test" olan p leri kaldıryo
    });
});

$(document).ready(function(){
    $("button").click(function(){
        $("p").remove(".test, .demo");  //buda hem class="test" hemde class="demo" olan p leri kaldırıyor 
    });
});

CSS SINIFLARINI ALMAK VE AYARLAMAK***
//JQuery ile elementlerin CSS'sini işlemek kolaydır.
AddClass () - Seçilen elementlere bir veya daha fazla sınıf ekler
RemoveClass () - Seçilen elementlerden bir veya daha fazla sınıfı kaldırır.
ToggleClass () - Seçili elementlerden sınıf ekleme / kaldırma arasında geçiş yapar
Css () - Stil attribute lerini ayarlar veya döndürür

Stil SAYFASII**(Stylesheet)
<style>
.important {
    font-weight: bold; //bu şekilde stil olarak important ve blue adında sınıf oluşturup stilleri yazmışım.şimdi bu classları p ye h1 h2 ye eklicem
    font-size: xx-large; //demekki sınıf eklemek için öncelikle bu şekilde bir style tanımlamamız gerkiyor
}

.blue {
    color: blue;
}
</style>

addClass metodu****

$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").addClass("blue");   //addClass diyerek blue sınıfını h1 h2 ve p ler üzerinde uygulamış oldum yani bunların renkleri mavi oldu.
        $("div").addClass("important");  // div içerisi de büyüdü ve koyusiyah yazıldı
    });
});

Ayrıca addClass() içerisinde birden fazla sınıf da belirleyebiliriz
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").addClass("important blue"); //bu şekilde de yazılabilir.hem büyüdü koyu mavi oldu
    });
});

removeClass() metodu**
$(document).ready(function(){
    $("button").click(function(){  // burada da sınıfı blue olan elementlerin üzerindeki blue sınıfını kaldırdım ve renkleri siyaha dönmüi oldu
        $("h1, h2, p").removeClass("blue");
    });
});

toggleClass() metodu**
//Bu yöntem, seçilen elementlerden sınıfların ekleme / kaldırma arasında geçiş yapar:
$(document).ready(function(){
    $("button").click(function(){
        $("h1, h2, p").toggleClass("blue");  //butona bastıpımda blue sınıfını işeyip mavi oluyo bir kere daha bastığımda sınıf kalkıyo ve siyaha dönüyor
    });
});

Css() METODU****
//css() metodu seçilmiş elementler için bir veya birden fazla stil özelliklerini ayarlıyor ve döndürüyor

Bir css özelliğini döndürmek*****
css("propertyname");

bir Css özelliği ayarlamak******
css("propertyname","value");

$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background-color", "yellow");  //bütün p elementleribi seçip arka plan renklerini sarı yapıyor
    });
});

Birden çok Css özelliği ayarlamak********
css({"propertyname":"value","propertyname":"value",...});

$(document).ready(function(){  // tüm p elementlerinin arka plan rengi ve yazı tipi boyutunu ayarlyıor
    $("button").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });
});

JQUERY- BOYUT****(dimension)
//JQuery ile eleman boyutları ve tarayıcı penceresi ile çalışmak kolaydır.
JQuery boyutları ile çalışmak için birkaç önemli yöntem vardır
width()
height()
innerWidth()
innerHeight()
outerWidth()
outerHeight()

width() ve height() metodları****
/*Width () metodu, bir elementin genişliğini ayarlar veya döndürür (dolgu(padding), kenarlık(border) ve kenar boşluğu(margin) hariçtir).
Height () metodu, bir elementin yüksekliğini ayarlar veya döndürür (dolgu, kenarlık ve kenar boşluğu hariçtir).





