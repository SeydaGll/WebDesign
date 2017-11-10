JS SYNTAX***
//Bir bilgisayar programı, bilgisayar tarafından "yürütülmesi" gereken "talimatlar" listesidir.
//Bir programlama dilinde, bu program talimatlarına deyimler denir.
//JavaScript bir programlama dili.
//JavaScript ifadeleri noktalı virgüllerle ayrılır:
var x, y, z;
x = 5;  // bu ; ile ayrılmış olanlar deyim(statement) aslında.ifade dediğimiz şey yani.HTML'de JavaScript deyimleri, web tarayıcısı tarafından "yürütülmesi" gereken "talimatlar" dır.
y = 6;  //JS Programları birçok js ifadelerinden oluşur.Bu program sırasıyla tek tek yürütülür.Bunlar js kodu larak adlandırılıyor
z = x + y;
//HTML'de, JavaScript programları web tarayıcısı tarafından yürütülür.
document.getElementById("demo").innerHTML = "Hello Dolly."; //Bu ifade id si demo olan html elementinin içerisine "Hello Dolly" yazmasını browsera söyler.
JavaScript ifadeleri aşağıdakilerden oluşur:
Değerler, Operatörler, İfadeler, Anahtar Kelimeler ve Yorumlar.****
/*Değerler-->JavaScript sözdizimi iki tür değer tanımlar: Sabit(fixed) değerler ve değişken(variable) değerler.
Sabit değerlere "literal" denir. Değişken değerlere değişkenler(variable) adı verilir.
literaller olarak sayılar ondalıklarla yada ondalıksız yazılablir.document.getElementById("demo").innerHTML = 10.50;
stringler yani textlerde çift tırnak veya tek tırnak içriinde yazılabilir.document.getElementById("demo").innerHTML = 'John Doe';*/
//Bir programlama dilinde, değişkenler veri değerlerini depolamak için kullanılır.JavaScript değişkenlerini bildirmek için "var" anahtar(keyword) sözcüğünü kullanır.Var anahtar kelimesi, tarayıcıya değişkenler oluşturmasını söyler
//Değişkenlere değer atamak için eşittir işareti(=) kullanılır.
/*Operatörler-->JS hesaplama yapmak için (+ - * / % ++ --) gibi aritmatik operatörler kullanır.% modunu hesaplar,++ bir atırır, -- bir azaltır. 
                JS değişkenlere değer atmak için (=) atama operatörünü kullanır.SOnra..
+=,-=,*=,/=,%= gibi operatörlerde atama yapma operatörleridir.x=y(x ye y değerini atar)
                                                               x+=y(x=x+y)  bir değişkene(x) bir değer ekliyor(y)
                                                               x-=y(x=x-y)
                                                               x*=y(x=x*y)
                                                               x/=y(x=x/y)
                                                               x%=y(x=x%y)
+ stringler için kullanıldığında bitiştirme(birleştirme) operatörü olarak adlandırılır*/
/*İfadeler-->5*10 bir ifadedir,,x*10 bir ifadedir,,"John" + " " + "Doe" bir ifadedir.*/
/*İdentifiers-->Tanımlayıcılar isimlerdir.JavaScript'te, değişkenleri (ve anahtar kelimeleri, fonksiyonları ve etiketleri) adlandırmak için tanımlayıcılar kullanılır.
Yasal adlarla ilgili kurallar çoğu programlama dilinde aynıdır.JavaScript'te ilk karakter bir harf, bir alt çizgi (_) veya bir dolar işareti ($) olmalıdır.
Sonraki karakterler harf, rakam, altçizgi veya dolar işareti olabilir.*/
//javascript büyük küçük harf duyarlıdır.lastname ile lastName farklı algılanır.JavaScript VAR veya Var'ı "var"anahtar kelimesi olarak yorumlamaz ..
//first-name,last_name,MasterCard,interCity şeklinde değişkenler yazılır.ama js de ilk harf küçük ikinci kelimenin harfinin büyük yazılması üzerine eğilim vardır(firstName)
//JavaScript, Unicode karakter kümesini kullanır.Unicode, dünyadaki tüm karakterleri, noktalama işaretlerini ve sembolleri kapsar (neredeyse).
//keywordler--->break,continue,debugger(js nin yürütmesini durduruyor ve (eğer varsa) hata ayıklama fonksiyonunu çağırıyor),if..else,switch,var,do..while,for,function,if..else,return,try..catch,..
//JavaScript anahtar kelimeleri(keyword) ayrılmış kelimelerdir. Ayrılmış kelimeler değişkenler için ad olarak kullanılamaz.
JavaScript DEĞİŞKENLER***
//variable=değişken.js değişkenleri veri değerlerini depolamak için kullanılır.
var x = 5;  // burada x değişkendir.yani x, 5 değerini depolar.
//tüm js değişkenleri benzersiz isimlerle tanımlanmış olmalıdır.
// = atamak için kullanılır. == eşittir operatörüdür.
/*js hem sayı gibi veri değerlerini hemde metin şeklinde veri değerlerini tutuyo.Aslında birçok veri tipini barındırıyor.Ama biz şimdilik sayıları
ve string değerlerini düşünücez."string" metin değerlerini tutar.stringler çift tırnak veya tek tırnak içerisinde yazılır.sayılar ise tırnaksız yazılır.Eğer tırnaklar
içine sayı değeri koyuyorsak bu string olarak(metin dizesi) ele alınacaktır*/
//Js de bir değişken oluşturmak için bu değişkeni bildirmeliyiz.Js değişkenini "var" anahtar kelimesi ile bildiririz

var carName; //burada bildirimden sonra değişkenin bir değeri yok(bu teknik olarak tanınlanmamış(undefined) değere sahiptir.Bu değişkene bir değer aramak için = işareti kullanılır..)
carName = "Volvo"; //bu şekildede bir değer atanabilir.Yada değişkeni bildirdiğimiz sıradada değişken atayabiliriz. var carName = "Volvo"; gibi..

var person = "john doe", carName = "Volvo", price = "200";  //tek bir bildiride(var)yada ifadede(statement) birçok değişken tanimlayabiliyorum.değişkenler , ile birbirinden ayrılmış.

var person = "John Doe",
    carName = "Volvo",     //bu değişkenler birden çok satırada yayılabilir.
    price = 200;

var carName; /*bilgisayar programlarında değişkenler sıklıkla bir değer almadan bildirilir.Değer hesaplanması gereken birşey olabilir
yada örneğin kullanıcı girişi gibi daha sonra verilecek bir şey olabilir.Bir değer almadan bildirilen bir değişken "undefined" değerine sahip olacaktır*/

var x = 5 + 4 + 3;  //+ ve = operatörleri kullanarak ben cebirde old gibi js değişkenleri ile aritmetik işlem yapabilirim.
var x = "john" + "" + "doe";  // yine aynı şekilde stringleri de toplaybilirim. ama burada stringler bir araya getirilicektir.yanyana yazılacaktırçünkü artık string ifadedir
var x = "5" + 2 + 3; // eğer tırnak içerisine bir sayı koyarsam,sayıların geri kalanı string olarak davranır ve birleştirilir. sonuç 523 olur.
var x = 2 + 3 + "5"; // burada da sonuç 55 olur!!!!! rakamına ulaşana kadar öncesi number olarak davranır

Javascript Operatörler*********
karşılaştırma operatörleri
==(eşittir) ===(tip ve değer olarak eşittir.) !=(eşit değildir) !==(tip veya değer olarak eşit değildir) >(den büyüktür) <(den küçüktür) >=(den büyüktür veya eşittir)
<=(den küçüktür veya eşittir) ?(üçlü operatör)
Logical Operatörler
&&(logical ve )  ||(logical veya) !(logical değil)
Tür Operatörleri
typeof(bir değişkenin türünü döndürür)  instanceof(eğer bir nesne bir nesne türünün örneğiyse True değerini döndürür)
Bitwise operatörleri // bu konu daha sonraya..

JS VERİ TİPLERİ***
numbers,string,booleans,arrays,objects,typeof operatörü
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
boolean lar 2 değer alır.ya true yada false.boolean lar sıklıkla koşullu testlerde kullanalır.
diziler [] içine yazılır.içindeki veriler , ile ayrılır.var cars = ["Saab","Volvo","BMW"];  //otomobil(cars) adı verilen ve üç öğe içeren (araba isimleri) bir dizi bildirir (oluşturur)
objectler {} ile yazılır.Değer çifteleri , ile ayrılmıştr..ağağıda güzel bir kod var.içerisindeki değeri alırken person.firstName şeklimde demiş.dikkt et
<!DOCTYPE html> // burada object(nesne) person dır..bu nesnenin 4 özelliği vardır.bunlar firstName,lastName,age,eyeColor
<html>
<body>
<p id="demo"></p>
<script>
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";   //çıkt---> John is 50 years old.
</script>
</body>
</html>
typeof ile bir js değişkeninin türünü bulmak için kullanabilirim.Typeof işlevi, bir değişkenin veya bir ifadenin türünü döndürür:
    <script>
    document.getElementById("demo").innerHTML = 
    typeof "" + "<br>" +   // string  döner
    typeof "John" + "<br>" +   //string  döner
    typeof "John Doe";   // string döner
    typeof 314 + "<br>"  //  number döner
</script>
    typeof operatörü string,number,boolean,null,undefined değerlerinden birini döndürür---> bunlar primitive verilerdir. ek özellik ve yöntemleri olmayan tek bir basit veri değeridir. 
    typeof [1,2,3,4]             // Returns "object" (not "array", see note below).js dizileri objecttir.
    typeof {name:'John', age:34} // Returns "object"
    typeof function myFunc(){}   // Returns "function"
//object ve function complex verilerdir.
    var person;                // Value is undefined, type is undefined.değersiz bir değişken js de undefined değere sahiptir.türü de undefined dır
    person = undefined;        // Value is undefined, type is undefined.Herhangi bir değişken, değeri undefined olarak ayarlayarak boşaltılabilir. Tür de tanımlanmamış olacaktır.
    var car = "";              // The value is "", the typeof is "string".Boş bir değerin,undefined ile hiçbir ilgisi yoktur.Boş bir dize değişkeni hem bir değer hem de bir türe sahiptir.
    var person = null;         // Value is null, but type is still an object.Nesneyi null değerine ayarlayarak bir nesneyi boşaltabilirsiniz:
    var person = undefined;   // Value is undefined, type is undefined..Bir nesneyi tanımsız olarak ayarlayarak da bir nesneyi boşaltabilirsiniz:



JavaScript FONKSİYONLAR********
/*JS fonksiyonu belli bir görevi gerçekleştrmek için tasarlanmış bir kod bloğudur.js fonksiyonu "birşey" onu çağırdığında yürütülür(fonksiyonu çağırır.)
bir js fonksiyonu "function" keyword ı ile tanımlanır,bir isim(name) ve () ile devam eder.function name ().fonksiyon isimleri harf,sayı,alt çizgi,ve $ işareti içerebilir(değişkenlerle aynı)
() parantezler , ile ayrılmış parametre isimleri içerir.(parametre1,parametre2)..fonksiyon tarafından çalıştırılacak olan kod {..} içene yazılır..*/
function myFunction(p1,p2){
    return p1*p2;       //fonksiyon p1 ve p2 değerlerini geri döndürür.
}//BURADA myFunction fonksiyonun kendisine(nesnesine) ,myFunction() ise fonksiyonun sonucuna ulaşır.
/*fonksiyon içindeki kod 1.bir olay meydana geldiğinde(kullanıcı bir butona bastığında) 2.Js kodundan çağrıldığında 3. yada otomatik olarak(kendiliğinden gerçekleşir).
js "return" ifadesine eriştiğinde fonksiyonun çalışması duracaktır.Eğer fonksiyon bir deyimden(ifadeden) çağrıldıysa,Javascript çağıran deyimin ardından kodu yürütmek 
için geri dönecek(return).Fonksiyonlar genellikle bir dönüş değeri hesaplar.Dönüş değeri çağırana geri döndürülür*/
NEDEN FONKSİYON KULLANNIRIZ???
//Kodu birkez tanımlarsın ve birçok kez kullanabilirsin..Aynı kodu farklı argümanlarla defalarca kullanabilir,farklı sonuçlar elde edeblirsin
// () bu operatör fonksiyonu çağırır..() olmadan fonksiyonun sadece ismini yazarsam sonuç olarak sadece fonksiyonun tanımını yazar.function myFunction(p1,p2){return p1*p2;}  yazarr

JS OBJECTSS****
/*Mesela araba(car) bir nesnedir.nesnenin ağırlık,renk gibi özellikleri(properties) vardır.ve başla(start) ve dur(stop ) gibi de methodlar vardır
object= car   properties= car.name=Fiat, car.model=500, car.weight=850, car.color=white  method= car.stop(),car.start,car.drive(),car.brake()
bütün arabalar aynı özelliklere sahiptir ama özellik değrleri arabadan arabaya değişir.bütün arabalar aynı metodlara sahiptir ama metodlar farklı zamanlarda gerçekleşir*/
var car = "Fiat";  //car isimli değişkene basit bir değer(fiat) atanmış
//nesneler aynı zamanda değişkenlerdir de.Aam nesneler bir kaç değer içerebilior
<script>
var car = {type:"Fiat", model:"500", color:"white"}; //car isimli değişkene birkaç değer(Fiat,500,white) atanmış.değerler name:value olarak yazılmış
document.getElementById("demo").innerHTML = car.type;
</script>
Nesnein özelliklerine 2 yolla ulaşılır.
1)objectName.propertyName
2)objectName["propertyName"]
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {     //nesne nin metodudur.
        return this.firstName + " " + this.lastName;
    }
};
nesnenin metoduna erişmek için  //nesne metodu bir fonksiyon tanımıdır.yani metod aslında bizim oluşturduğumuz fonksiyonlardır
objectName.methodName()--->person.fullName();   // () bunu unutma. yoksa sadece fonksiyon tanımı yazar ekranda.

js SCOPE ** daha sonra bakk!!

JS EVENTS***
html events html elementlerine olan thing lerdİR.js html sayfasında kullanıldığında js bu events lara ulaşır
Bir html event i browser ın veya kullanıcının yaptığı birşey olabilir .mesela Bir HTML web sayfası yüklemesi tamamlandı.Bir HTML girdi alanı değiştirildi.Bir HTML butonu tıklandı//BUNLAR html eventlarıdır
//JavaScript, event lar tespit edildiğinde kodu yürütmenizi sağlar.
//html,thml elementlerine eklenilecek javascript kodlu  event handler attribute ne izin verir..
<some-HTML-element   some-event='some JavaScript'>   // tek tırnaklı
<some-HTML-element   some-event="some JavaScript">     //çift tırnaklı
    <button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>  ///burada button elementine(html elemneti) bir onclick attribute i eklenmiş(kod ile)
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>  ///js id si demo olan elementin içeriğini değiştiriyo
<button onclick="this.innerHTML = Date()">The time is?</button>  ///burada kod kendi elementinin içeriğini değiştiriyor(this.innerHTML kullanarak)
//JavaScript kodu genellikle birkaç satır uzunluğundadır. event attribute lerini çağıran fonksiyonların görülmesi daha yaygındır:
//onclick ile kullanıcı bir html elementini tıklıyor.w3schoolsda birçok html event i var.oradan incele...
<span onmouseover="this.style.color='red'">Mouse over me!</span>  /// burada mouse yazının üzerine geldiğinde kırmızı oluyor 
HTML DOM kısmında bu daha iyi anlatılmış****

JS STRİNGLER***
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;  // length özelliği ile string uzunluğu bulunur.. çıktı:26 dır
STRİNG METODLARI***
/*Normalde string nesne değildir bir primitive değerlerdir.ve primitive değerlerin metodları ve özellikleri(properties) olmaz.ama js ile metodlar ve propertes ler primitive
değerler içinde geçerlidir.çünkü JavaScript, metodları ve propertiesleri yürütürken primitive değerleri nesneler olarak değerlendirir.*/
1)(lenght) property-->//bir string in uzunluğunu döndürüyor.
<script>
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo").innerHTML = txt.length;
    </script>
string içerisinde string bulmak
2)indexof() metodu-->//bir stringdeki belirtilen bir metnin ilk bulunuşunun (konumunun) dizinini döndürür.Yani bir string metninde bir kelime var. bu kelimenin kaçıncı karakterde olduğunu bulacaksın.boşluk dahil her karakteri o klimeye gelene kadar sayıyosun.kelimenin ilk harfinin başında imlecin bulunduğu an kelimenin konumunu bildiriyo.
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
3)lastIndexOf() metodu--->// bir stringdeki belirtilmiş bir textin son oluşumunun dizinini döndürür.// yani bir string de iki tane aynı kelime yazılı. ama gidip en sondaki kelimenin konumunu döndürüyo.imleci o kelimenin başına gelene kadar sayıyo 
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
// hem indexof() hemde lastIndexOf() metodları eğer metin bulunamazsa -1 döndürür.Javascript pozisyonları 0 dan sayar.0 Bir string deki ilk konumdur.1 ikinci konumdur.2 ikinci konum..
//Her iki yöntemde arama için başlangıç konumu olarak  ikinci bir parametre kabul eder.
string içerisinde string araştırmak
4)search() metodu-->//bir stringi belirtilen bir değer için arar ve eşleşmenin konumunu döndürür.
string parçaları çıkarmak/ayıklamak //3 tane metod vardır.slice(start,end)  substring(start,end)   substr(start,length)
5)slice(7,13)-->//imlecin 7. konumu ve 13. konumu arasındaki kelimeyi çıkartıyo.Okelimeyi döndürüyo.yani stringin 7,13 arasındaki kelimeyi çıkartıyo ve yeni stringdeki çıkartılmış kelimeyi döndürüyor
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);   // sonuç Banana
slice(-12,-6)-->// bunun negatif değperse konum strşngin sonundan sayılmaya başlıyor
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);  //sonuç Banana
var res = str.slice(7); //eğer slice içindeki 2. parametre çıkartılırsa,metod stringin gelir kalanını döndürür.. // sonc Banana, Kiwi
var res = str.slice(-12); // aynı şeklide sondan başlayıp geri kalanı alıyo sonuç Banana, Kiwi.. negatif değerler intrenet ex 8 de çalışmıy
6)substring() metodu slice() metodu ile aynıdır.tek farkı  substring() negatif girdileri kabul etmez
7)substr() metodu slice() metodu ile aynı. farkı ikinci parametre çıkarılan parcanın uzunluğunu belirtiyo.//ilk parametre negatif olursa konum stringin sonun sayılıyor.
//ikini parametre negatif olamaz.çünkü uzunluğu tanımlıyo.eğer ikini ci parametreyi çıkarırsan substr() stringin geri kalanını dilimler.
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);  //sonuc Banana

String içeriğini değiştirmek
8)replace() metodu string deki belirlenmiş bir değeri başka bir değerle değiştitiri
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");  // Sonuçç Please visit W3Schools!
// varsayılan olarak replace() fonksiyonu mesela string de değiştirmek istediğin kelimeden birkaç tane varsa sadece ilk eşleşmedeki kelimeyi değiştirir.diğerleri aynı kalır
//Bütün eşleşmeleri (kelimeleri ) değiştirmek için bir tane "g" bayraklı normal bir ifade kullnılır(küresel eşleşme için)
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");   //sonuc Please visit W3Schools  and W3Schools!
9)toUpperCase() ile bir stringin tüm harfleri büyük yazılablir
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper  //sonuc: HELLO WORLD!
10)toLowerCase()  ile bir stringin tüm harfleri küçük yazılabilir.
var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower  // sonuc : hello world!
11)concat() metodu---> 2 veya daha fazla stringi birleştirir
var text1 = "Hello";
var text2 = "World!";
text3 = text1.concat(" ", text2);  //sonuc:Hello World!  text1.concat(text2); olsaydı sonuc HelloWorld!  text1.concat(text2,text2)  sonuc: HelloWorld!World!
var text = "Hello" + " " + "World!";      var text = "Hello".concat(" ", "World!");  // bu ikisi aynı şey

//BÜTÜN STRİNG METODLARI YENİ BİR STRİNG DÖNDÜRÜR.ORJİNAL STRİNGİ DEĞİŞTİRMEZLER.
//RESMİ OLARAK STRİNGLER DEĞİŞMEZDİR:DEĞİŞTİRİLEMEZ SADECE yenisiyle DEĞİŞTİRİLİR
String karakterlerini çıkarmak  //charAt(position)  ve charCodeAt(position)
12)charAt()-->string de verilen pozisyondaki karakteri döndürür
var str = "HELLO WORLD";
str.charAt(0);            // returns H
13)charCodeAt()---> string de verilen pozisyondaki karakterin Hex değerini döndürüyo
var str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72
14)var str = "HELLO WORLD";
str[0];                   // returns H  // bu şekilde bir dizi olarak stringe erişmek unsafe dir and unpredictable.
// bu her browserda çalışmaz.(IE5,IE6,IE7 hriç)
//String leri diziler gibi görür(ama stringler dizi değildir)
//str[0] ="H" bir hata vermez(ama çalışmazda)
//EĞER STRİNG İ BİR DİZİ OLARAK OKUMAK İSTERSEN Stringi önce bir diziye dönüştürr!!!
Stringi Bir diziye dönüştürme
15)split() metodu---> bir stringi bir diziye dönüştürür
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas  //EĞER AYIRICI(,) ATLANIRSA,DÖNDÜRÜLEN DİZİ İNDEX[0] DA TÜM DİZİYİ İÇERECEK
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "Hello";       // String   //eğer ayırıcı "" ise döndürülen dizi tek karakterli bir dizi olaak.
txt.split("");           // Split in characters

NUMBERS*****
Javascriptin tek bir sayı türü vardır.Sayılar decimalli ve decimalsiz yazılabilir.
var x = 34.00;    // A number with decimals
var y = 34;       // A number without decimals
Ekstra büyük veya ekstra küçük sayılar bilimsel (üstel) gösterimle yazılabilir:
    var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123

IF...ELSE*******
//koşullu ifadeler farklı koşullara dayalı farklı eylemleri gerçekleştirmek için kullanılır
if(koşul){           // eğer koşul doğru(true) ise yürütülecek bir js kod bloğu belirtmek için if kullanılır
    //koşul doğruysa yürülecek kod bloğu
}
else{ //eğer koşul yanlışsa(false) yürütülecek kod bloğunu belirtmek için kullanılır
}
-------------------
if(koşul1){
    //koşul1 doğru ise yürütülecek kod bloğu
}
else if(koşul2){
    //koşul1 yanlış ama koşul2 doğru olduğunda yürütülecek kod bloğu
}
else{
    //koşul1 ve koşul2 yanlış olduğunda yürütülecek kod bloğu
}
SWITCH ifadesiiii****//switch,forklı koşullara dayalı farklı eylemleri gerçekleştirmek için kullanılır
/*çalıştırılacak birkaç kod bloğundan birini seçmemk için switch ifadesi kullanılır*/           var day;      
switch(ifade){  /*switch ifadesi bir kez değerlendirilir. */                                    switch(new Date().getDate()){  //getDate() haftanın günlerini 0 ile 6 değerleri arasında sayı olarak döndürür.pazar=0;pazartesi=1...
    case n:     /*ifadenin değeri her bir case in(durumun) değerleriyle karşılaştırılır.*/      case 0:
    /*kod bloğu*/                                                                                   day="Sunday";
        break;                                                                                          break;
    case n:                                                                                     case 1:
    /*kod bloğu*/     /*eğer bir eşleşme varsa ,ilişkili kod bloğu yürütülür*/                      day="Monday"
        break;                                                                                          break;   // bu şekilde case 6 ya kadar gidebilirsin
    default:                                                                                    .....}
    /*kod bloğu  */                                                                             document.getElementById("demo").innerHTML="Today is" + day
}                                                                                                 // bugün hangi günse onu yazar
break //js bu bloğa ulaştığı zaman,switch bloğundan çıkar.diğer kodları işlemez
default //mesela case ile eşleşen bir durum olmadığında bu blok yürütülür.örneğin haftanın bugün sunday yada monday değilse default ile varsayılan bir mesaj yazılabilir
    default text="bugün pazar yada pazartesi değil" yazılabilir.

switch (new Date().getDay()) {
    case 4:          //bu şekilde aynı kod bloğunu paylaşan case ler de olabilir...
    case 5:
        text = "Soon it is Weekend";
        break; 
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default: 
        text = "Looking forward to the Weekend";
}
    DÖNGÜLERRRR******
    //döngüler bir kod bloğunu birçok kez çalıştırabilir.
    FOR DÖNGÜSÜ***
    for(ifade1;ifade2;ifade3){
    //yürütülecek kod bloğu buraya yazılır
}
    //ifade1 döngü(kod bloğu) başlamadan önce yürütülür.ifade2 döngüyü(kod bloğu) çalıştırmak için koşul tanımlar.ifade3 döngü(kod bloğu) yürütüldükten sonra her defasında yürütülür
    for (i = 0; i < 5; i++) {   //döngü başlamadan önce var i=0 değişkeni ayarlanıyo.i<5 ile döngü için çalışma koşulu tanımlanıyo(i 5 den az olmalı).i++ döngüdeki kod bloğu her çalıştırıldığında i değeri her seferinde 1 artıyo
    text += "The number is " + i + "<br>";
}
*********
    for (i = 0, len = cars.length, text = ""; i < len; i++) {   // ifade 1 kısmında virgülle ayrılmış bir çok değeri başlatabliriz
    text += cars[i] + "<br>";
}
    *************
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) { //ifade1 i atlayabiliyoruz.değişkeni döngü başlamadan belirtmişiz
    text += cars[i] + "<br>";
}
    ***********
var i = 0;
var len = cars.length;
for (; i < len; ) {   //ifade3 ihmal edileblir.
    text += cars[i] + "<br>";
    i++;
}
    WHİLE DÖNGÜSÜ***
    while (condition) {  // buradaki koşul true olduğu sürece {..} içerisinde yazan kod bloğunu döndürür 
    
}
    while (i<10) {
       text+="<br>The number is" +i;
       i++;                 //eğer koşulda kullanılan değişkeni artırmayı unutursan döngü hiç sonlanmaz.Tarayıcı kilitlenir
}
    DO/WHİLE DÖNGÜSÜ********  //burada while de koşulun doğru olup olmadığı kontrol etmeden önce do nun içndeki kod bloğunu bir kere çalıştıracak.SONra while e gelecek.koşul doğru ise döngüyü(kod bloğunu) tekrar edecek
    do {
    //kod bloğu
} while (true);

    BREAK ve CONTİNUE***
    for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}//sonucunda sadece i nin 2 olduğu duruma kadar yazar.
    //break switch te kullanılmıştı.break ifadesi bir döngüden atlamak içinde kullanılır
    //break ifadesi bi döngüden atlar ve döngüden sonraki kodu çalışmaya devam eder.
    for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}// burada sadece i=3 olduğu durumu atlayıp diğerlerini yazmaya  devaöm ediyo
    //continue eğer döngü içinde özel bir koşul meydana geldiyse döngüdeki yinelemeyi(mesela yazdırılan texti atlar) bırakır ve döngüde sonraki yinelemey yazmaya devam eder.

    /*JS JSON*****(JAVASCRİPT NESNE GÖSTERİMİ)
        //JSON,verileri taşımak ve depolamak için bir formattır
        //Json,bir sunucudan bir web sayfasına veri gönderildiğinde sıklıkla kullanılır
        //JSON,hafif bir  veri değiş tokuş formatıdır diyebiliriz."kendini açıklayan" ve anlaması kolaydır.
        //Dilden bağımsızdır.JSON söz dizimi,JS NEsne gösterim sözdiziminden türetilir.Ancak JSON format sadece metin şeklindedir.JSON verilerini okumak ve üretmek için kullanılan kod herhangi bir programlama dilinde yazılabilir.
    {
    "employees":[
    {"firstName":"John", "lastName":"Doe"},  //bu söz dizimi, çalışanların(employee) nesnesini tanımlar.3 çalışanın kaydı(nesne) olan bir dizi
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
    ]
    }*/

JS OUTPUT*****
    //innerHTML ,,html elementlerinin içeriğini değiştirmek için kullanılıyor.mesela elementlerin içerisine bir yazmak istersen bunu kullanıyosun..
    //document.write();  HTML SAYFASINA birşey yazmak istiyosan bunu kullanıyosun
    //window.alert(); bir uyarı penceresi içerisine birşey yazmak istersen  kullanıyosun..
    //console.log(); tarayıcı konsolu içerisinde yazmak için kullanılır..
    1)bir html elementine erişmek için elementten kastımız mesela bir p elementine ulaşmak için javascript şunu kullanıyo--->metoddur bu
     document.getElementById(id) ; bunu kullanıyor.id attribute HTML elementini tanınlar.innerHTML ile HTML elementinin içeriğini tanmlıyorsun.yani ne yazdırmak istiyosan 
    yazdırıyorsun.//document.getElementbyId("demo").innerHTML= ... bence burada document Html sayfası. ile bunun içindeki(document.) id si demmo olan elementi al(getelemntbyid)
    //ve bu html elementi içerisine (innerHTML) şunu şunu yap (=..)//bir html elentinin innerhtml özelliğini değiştirmek html de veriyi göstermenin en yaygın yoludur.
    2)Test etmek amacıyla document.write(); işlevini kullanmakta fayda vardır.Bir html dokümanı tamamen yüklendikten sonra document.write(); kullanmak mevcut
    tüm html i silecektir..//document.write özelliği sadece test etmek amacıyla kullanılmalıdır!!
    3)Veriyi görüntülemek için bir uyarı kutusu kullanabilirsin.. window.alert(); ile
    4)Hata ayıklamak amacıyla verileri görüntülemek için console.log(); kullanabiliriz.
<!DOCTYPE html>
<html>  //mesela burada id=demo olan html elementini bulmak(getElementById("")) ve bu elemntin içeriğini "Hello Javascript!" olarak değiştirmek için(innerHTML) ağaşıdaki söz dizimi kullanılır..document.getElemntById("demo").innerHTML="..";
<body>//javascript Html içeriğini(content) değiştirebilir..HTML VE js de çift veya tek tırnak kullanılabilir.
<h1>What Can JavaScript Do?</h1>
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>
</body>
</html>

<!DOCTYPE html>
<html> //burada da JS HTML attribute nide değiştirebilir.mesela bir resmin src sini de değiştirebilir.src attribute ini değiştiriyor.
<body>
<h1>What Can JavaScript Do?</h1>
<p>JavaScript can change HTML attributes.</p>
<p>In this case JavaScript changes the src (source) attribute of an image.</p>
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
<img id="myImage" src="pic_bulboff.gif" style="width:100px">  //bir resmim var.İD si myImage olan kaynağı(src si) pic_bulboff.gif olan bir image
<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
</body>/ //o zaman id=myImage olan html elementini bulamk(getElementById("myImage")) ve bu elemntin kaynağını(src) değiştirmek içn(.src) document.getElemntByID("myImage").src='pic_bulbon' söz dizimi kullanılır..
</html>

<!DOCTYPE html>
<html>  //JS bir html elementinin CSS nide değiştirebilir.Bu html atrribute nin değiştirilmesinin bir çeşididir.
<body>
<h1>What Can JavaScript Do?</h1>
<p id="demo">JavaScript can change the style of an HTML element.</p>
<button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>/ // söz dizimine dikkat. style.fontSize='..'
</body>
</html> /// JS HEM çift hemde tek tırnak kabul eder..ama tek tırnak kullan sen.

 <!DOCTYPE html>  //JS HTML elementlerini gizleyebilirde.Gizlemek için bunu görüntü stilini değiştirerek yapabilir.
<html>  //Butona bastiğimda p elementi gizlenecek.yani yazılan yazı kaybolucak.
<body>
<h1>What Can JavaScript Do?</h1>
<p id="demo">JavaScript can hide HTML elements.</p>
<button type="button" onclick="document.getElementById('demo').style.display='none'">Click Me!</button>
</body>
</html> 

 <!DOCTYPE html>  // JS gizlenmiş html elementlerini ortaya çıkarmak yada görüntülemek içinde kullanılabilir.
<html>
<body>
<h1>What Can JavaScript Do?</h1>
<p>JavaScript can show hidden HTML elements.</p>
<p id="demo" style="display:none">Hello JavaScript!</p>   ///style="display:none"  bu özellik kullanılarak burada p elemnetinin içeriği gösterilmez..
<button type="button" onclick="document.getElementById('demo').style.display='block'">Click Me!</button> ///block özelliğiyle bastığım anda ortaya çıkar
</body>
</html> 

    //HTML içinde JS kodları <script>..</script> etiketleri arasına eklenmelidir.
    //scriptler bir html sayfasının <body> bölümüne yada  <head> bölümüne yada her ikisine de yerleştirilebilir.<body> de yazmak daha iyi olur.hız artar
    //harici bir js dosyası hazırlayıp bunu body içerisine <script src="...js" ></script> şeklinde bağlantısını yapabiliyosun.js dosyası içinde script tagları kullanılmaz