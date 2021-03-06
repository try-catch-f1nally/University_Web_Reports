function chooseLab(button) {
    const activeBtn = document.querySelector(".labButtons .activeButton");
    if (activeBtn) {
        activeBtn.className = "";
    } else {
        document.querySelector("main .content").classList.remove("unActive");
    }
    const chosenBtn = document.getElementById(button.id);
    chosenBtn.className = "activeButton";
    switch (chosenBtn.id) {
        case "lab1":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"description\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Опис предметного середовища </button>" +
                "<button id=\"topic\" onclick=\"chooseInfo(this)\"> Тема, мета, посилання на ЛР</button>" +
                "<button id=\"structure\" onclick=\"chooseInfo(this)\"> Структура документа</button>" +
                "<button id=\"tables\" onclick=\"chooseInfo(this)\"> HTML-код таблиць</button>" +
                "<button id=\"forms\" onclick=\"chooseInfo(this)\"> HTML-код форми</button>" +
                "<button id=\"images\" onclick=\"chooseInfo(this)\"> HTML-код зображення</button>" +
                "<button id=\"conclusion\" onclick=\"chooseInfo(this)\"> Висновки</button>";
            break;
        case "lab2":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"about\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Постановка задачі ЛР №2</button>" +
                "<button id=\"lists\" onclick=\"chooseInfo(this)\"> Списки </button>" +
                "<button id=\"identifications\" onclick=\"chooseInfo(this)\"> Ідентифікатори </button>" +
                "<button id=\"indents\" onclick=\"chooseInfo(this)\"> Відступи </button>" +
                "<button id=\"floating_elements\" onclick=\"chooseInfo(this)\"> Плаваючі елементи </button>" +
                "<button id=\"selectorsByTagAndClass\" onclick=\"chooseInfo(this)\"> Селектори тегу і класу</button>" +
                "<button id=\"otherSelectors\" onclick=\"chooseInfo(this)\"> Інші селектори</button>" +
                "<button id=\"groupSelectors\" onclick=\"chooseInfo(this)\"> Групування селекторів</button>";
            break;
        case "lab3":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Тема. Мета. Посилання на звіт та сайт</button>" +
                "<button id=\"layout\" onclick=\"chooseInfo(this)\"> Зовнішній вигляд макету </button>" +
                "<button id=\"code_of_layout\" onclick=\"chooseInfo(this)\"> HTML-код макету </button>" +
                "<button id=\"table_layout\" onclick=\"chooseInfo(this)\">Розмітка сторінки за допомогою таблиці</button>" +
                "<button id=\"float_layout\" onclick=\"chooseInfo(this)\"> Розмітка сторінки за допомогою плаваючих блоків </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновки </button>";
            break;
        case "lab4":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Постановка задачі ЛР №4</button>" +
                "<button id=\"url_scheme\" onclick=\"chooseInfo(this)\"> Схема URL </button>" +
                "<button id=\"handler\" onclick=\"chooseInfo(this)\"> Обробник подій </button>" +
                "<button id=\"insert_script\" onclick=\"chooseInfo(this)\"> Вставка тегу SCRIPT</button>" +
                "<button id=\"task4\" onclick=\"chooseInfo(this)\"> Завдання 4 (масиви)</button>" +
                "<button id=\"task6\" onclick=\"chooseInfo(this)\"> Завдання 6 </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновок </button>";
            break;
        case "lab5":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Постановка задачі ЛР №5</button>" +
                "<button id=\"dynamic_elements\" onclick=\"chooseInfo(this)\"> Динамічні елементи </button>" +
                "<button id=\"photogallery\" onclick=\"chooseInfo(this)\"> Фотогалерея </button>" +
                "<button id=\"photoslider\" onclick=\"chooseInfo(this)\"> Слайдер фотографій </button>" +
                "<button id=\"videoslider\" onclick=\"chooseInfo(this)\"> Слайдер відеоматеріалів </button>" +
                "<button id=\"social_network_icons\" onclick=\"chooseInfo(this)\"> Кнопки соціальних мереж </button>" +
                "<button id=\"informers\" onclick=\"chooseInfo(this)\"> Інформери </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновок </button>";
            break;
        case "lab6":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Тема, Мета ЛР №6.<br> Посилання на GitHub. </button>" +
                "<button id=\"dynamic_elements\" onclick=\"chooseInfo(this)\"> Динамічні елементи 3 пункту</button>" +
                "<button id=\"installing_server\" onclick=\"chooseInfo(this)\"> Установка WEB-серверу </button>" +
                "<button id=\"query_for_view\" onclick=\"chooseInfo(this)\"> Запит для перегляду </button>" +
                "<button id=\"utf8_encoding\" onclick=\"chooseInfo(this)\"> Кодування UTF-8 </button>" +
                "<button id=\"feedback\" onclick=\"chooseInfo(this)\"> Зворотній зв'язок. <br> Відображення дати.</button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновок </button>";
            break;
        case "lab7":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\"> Тема, Мета ЛР №7.<br> Посилання на GitHub. </button>" +
                "<button id=\"describing_model\" onclick=\"chooseInfo(this)\"> Опис об'єктів предметної області </button>" +
                "<button id=\"infologic_model\" onclick=\"chooseInfo(this)\"> Інфологічна модель </button>" +
                "<button id=\"datalogic_model\" onclick=\"chooseInfo(this)\"> Датологічна модель </button>" +
                "<button id=\"db_phpMyAdmin\" onclick=\"chooseInfo(this)\"> Реалізація БД у phpMyAdmin </button>" +
                "<button id=\"interaction_php\" onclick=\"chooseInfo(this)\"> Взаємодія з БД <br> за допомогою PHP </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновки </button>";
            break;
        case "lab8":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\">Тема, Мета ЛР №8</button>" +
                "<button id=\"describing_model\" onclick=\"chooseInfo(this)\"> Опис об'єктів предметної області </button>" +
                "<button id=\"infologic_model\" onclick=\"chooseInfo(this)\"> Інфологічна модель </button>" +
                "<button id=\"datalogic_model\" onclick=\"chooseInfo(this)\"> Датологічна модель </button>" +
                "<button id=\"db_phpMyAdmin\" onclick=\"chooseInfo(this)\"> Реалізація БД у phpMyAdmin </button>" +
                "<button id=\"interaction_php\" onclick=\"chooseInfo(this)\"> Інтеграція БД із сайтом </button>" +
                "<button id=\"write_in_file\" onclick=\"chooseInfo(this)\"> Запис у файл </button>" +
                "<button id=\"auth\" onclick=\"chooseInfo(this)\"> Авторизація </button>" +
                "<button id=\"language_icons\" onclick=\"chooseInfo(this)\"> Іконки для вибору мови </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновки </button>";
            break;
        case "lab9":
            document.querySelector("main .infoButtons").innerHTML =
                "<button id=\"theme\" onclick=\"chooseInfo(this)\" class=\"activeButton\">Тема, Мета ЛР №9</button>" +
                "<button id=\"ajax_task2\" onclick=\"chooseInfo(this)\"> AJAX-запити (2 пункт) </button>" +
                "<button id=\"ajax_on_site\" onclick=\"chooseInfo(this)\"> AJAX-запити у власному сайті </button>" +
                "<button id=\"full_functionality\" onclick=\"chooseInfo(this)\"> Повний список функціоналу програми </button>" +
                "<button id=\"comparing_functionality\" onclick=\"chooseInfo(this)\"> Порівняння функціоналу першої та дев'ятої ЛР </button>" +
                "<button id=\"conclusions\" onclick=\"chooseInfo(this)\"> Висновки </button>";
            break;
    }
    chooseInfo(document.querySelector(".infoButtons").firstChild);
}

function chooseInfo(button) {
    document.querySelector(".infoButtons .activeButton").className = "";
    document.querySelector(`#${button.id}`).className = "activeButton";
    if (document.querySelector(".labButtons .activeButton").id === "lab1") {
        switch (button.id) {
            case "description":
                document.querySelector("main .content").innerHTML =
                    "<p> З розвитком інформаційних технологій та зацікавленістю людей до перегляду кіно зріс попит на пошукові" +
                    "                кіносервіси для швидкого підбору фільму. </p>" +
                    "            <p> Наш сервіс – зручна, сучасна, розумна система з багатофільтровим пошуком фільмів за різними параметрами" +
                    "                та ознаками, такими як назва, рік, рейтинг, жанр та країни створення фільму. Також сайт володіє" +
                    "                функціоналом сортування за рейтингом, датою, популярністю, віковою категорією та ін.</p>" +
                    "            <p> Акторами є користувачі системи: <i>адміністратор</i>, <i>незареєстрований (гість)</i> та <i>зареєстрований" +
                    "                користувач</i>," +
                    "                які мають наступні можливості: </p>" +
                    "            <h3>Гість: </h3>" +
                    "            <ul class='properties'>" +
                    "                <li> Пошук фільмів за допомогою фільтрів та сортування;</li>" +
                    "                <li> Перегляд інформації про фільм</li>" +
                    "                <li> Можливість зареєструватися на сайті</li>" +
                    "            </ul>" +
                    "            <br>" +
                    "            <h3> Зареєстрований користувач: </h3>" +
                    "            <ul class='properties'>" +
                    "                <li> Пошук фільмів за допомогою фільтрів та сортування</li>" +
                    "                <li> Перегляд інформації про фільм</li>" +
                    "                <li> Додавання коментаря</li>" +
                    "                <li> Додавання фільму в список улюблених</li>" +
                    "            </ul>" +
                    "            <br>" +
                    "            <h3> Адміністратор: </h3>" +
                    "            <ul class='properties'>" +
                    "                <li> Додавання інформації до бази даних </li>" +
                    "                <li> Видалення залишених користувачами коментарів до фільму</li>" +
                    "            </ul>"
                break;
            case "topic":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> структура HTML-документа. Вибір предметної галузі. Робота з" +
                    " посиланнями, таблицями, зображеннями, формами в HTML-документі.</p>" +
                    "<p><b> Мета: </b> придбати практичні навички роботи  з HTML-документом, " +
                    "таблицями, формами, зображеннями, посиланнями. Створити шаблон звітного HTML-документом для " +
                    "відображення результатів роботи всіх лабораторних робіт.</p>" +
                    "<p><b> Посилання на ЛР: </b>" +
                    "<a href='https://gangstaprogrammer.github.io/Films4You/'>https://gangstaprogrammer.github.io/Films4You/</a></p>";
                break;
            case "structure":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"structure\">" +
                    "   <div><img src=\"img/lab1/structure.png\" alt=\"\"></div>" +
                    "   <div><p><i>6_task4.html</i> - базовий HTML-документ </p>" +
                    "       <p><i>temp.html</i> - HTML-документ з таблицею та формою</p>" +
                    "       <p><i>6_task4.css</i> - базовий css </p>" +
                    "       <p><i>reset.css</i> - css, що обнуляє стилі, які за замовчуванням задані браузерами </p>" +
                    "   </div>" +
                    "</div>";
                break;
            case "tables":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "   <img src=\"img/lab1/tableCode.png\" alt=\"\">" +
                    "   <img src=\"img/lab1/tableImg.png\" alt=\"\">" +
                    "</div>" +
                    "<div>" +
                    "   <p>Елемент &lt;table&gt; - контейнер для елементів, що визначають вміст таблиці</p>" +
                    "   <p> &lt;tr&gt; - створює рядок таблиці</p>" +
                    "   <p> &lt;td&gt; - створює комірки таблиці</p>" +
                    "   <p> &lt;thead&gt; - створює рядок, який розміщений зверху таблиці.</p>" +
                    "   <p> &lt;tfoot&gt; - створює рядок, який розміщений знизу таблиці.</p>" +
                    "</div>";
                break;
            case "forms":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "   <img src=\"img/lab1/formCode.png\" alt=\"\">" +
                    "   <img src=\"img/lab1/tableImg.png\" alt=\"\">" +
                    "</div>" +
                    "<div>" +
                    "   <p>Елемент &lt;form&gt; представляє собою розділ документа, що містить інтерактивні елементи" +
                    "   управління, які дозволяють користувачеві відправляти інформацію на веб-сервер.</p>" +
                    "   <p>&lt;input&gt; створює інтерактивні елементи управління в веб-формах для" +
                    "   отримання даних від користувача</p>" +
                    "</div>";
                break;
            case "images":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "   <img src=\"img/lab1/imgCode.png\" alt=\"\">" +
                    "   <img src=\"img/lab1/imgImgs.png\" alt=\"\">" +
                    "</div>" +
                    "   <p>HTML-елемент &lt;img&gt; вбудовує зображення в документ.</p>";
                break;
            case "conclusion":
                document.querySelector("main .content").innerHTML = "<p> Виконавши дану лабораторну роботу," +
                    " ми проаналізували сферу пошукових кіносервісів, що представлені на сучасному ринку, і розробили" +
                    " власний план створення системи багатофільтрового просунутого зручного кіносервісу. Також було" +
                    " створено звітний HTML-документ для відображення результатів роботи всіх лабораторних робіт.</p> ";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab2") {
        switch (button.id) {
            case "about":
                document.querySelector("main .content").innerHTML =
                    "<p><b'>Тема: </b> Каскадні таблиці стилів. Селектори .ідентифікатори. Стильове оформлення " +
                    "текстових елементів в html-документах.</p>" +
                    "<p><b>Завдання:</b>" +
                    "<ol><li> У програмному коді лабораторної работи №2 застосувати селектори тегу і класу на свій розуд. " +
                    "Вміти пояснити викладачу. Програмний код  даного пункту відобразити у звітному HTML-документі;</li>" +
                    "<li>У програмному коду лабораторної роботи №2  застосувати ідентифікатори. Вміти пояснити викладачу. " +
                    "Програмний код даного пункту відобразити у звітному HTML-документі. </li>" +
                    "<li>На свій розсуд застосувати сусідні, дочірні селектори, селектор атрибута та універсальний селектор. " +
                    "Програмні коди даного пункту відобразити у звітному HTML-документі. </li>" +
                    "<li>За допомогою каскадних таблиць стилів виконати на свій розсуд стильове оформлення текстових елементів. " +
                    "Показати як оформлюються:" +
                    "<ul class='dash'>" +
                    "<li> списки,</li>" +
                    "<li> різноманітні властивості кольору і фону,</li>" +
                    "<li> зовнішні та внутрішні  відступи,</li>" +
                    "<li> плаваючі елементи.</li>" +
                    "</ul></ol></p>";
                break;
            case "lists":
                document.querySelector("main .content").innerHTML =
                    "            <div class=\"elementImages\">" +
                    "                <div><img src=\"img/lab2/innerListsCode.png\" style='width: 600px' alt=\"\"></div>" +
                    "                <div><img src=\"img/lab2/css.png\" alt=\"\"></div>" +
                    "            </div>" +
                    "                <div><img src=\"img/lab2/innerLists.png\" style='width: 700px' alt=\"\"></div>" +
                    "            <div>" +
                    "                <p>&lt;ul&gt; - це контейнер маркованого списку</p>" +
                    "                <p> &lt;ol&gt; - це контейнер нумерованого списку</p>" +
                    "                <p> &lt;li&gt; - створює рядок(елемент) списку</p>" +
                    "            </div>";
                break;
            case "identifications":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "<div> <img src=\"img/lab2/lab2_identificators.png\" alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab2/lab2_ident_2.png\" alt=\"\"> </div>" +
                    "<div> <img src='img/lab2/idImg.png' alt=''/> </div>" +
                    "</div>" +
                    "<div>" +
                    "  <p> Ідентифікатор (званий також «ID селектор») визначає унікальне ім'я елемента, яке використовується для зміни його стилю і звернення до нього через скрипти.</p>\n" +
                    "  <p> Синтаксис застосування ідентифікатора наступний:</p>\n" +
                    "  <p> <b>#Ім'я ідентифікатору {Властивість1: значення; властивість2: значення; ... }</b></p>" +
                    "  <p> При описі ідентифікатора спочатку вказується символ решітки (#), потім йде ім'я ідентифікатора. Воно повинно починатися з латинської символу і може містити в собі символ дефіса (-) і підкреслення (_). Використання російських букв в іменах ідентифікатора неприпустимо. На відміну від класів ідентифікатори повинні бути унікальні, іншими словами, зустрічатися в коді документа лише один раз.</p>\n" +
                    "  <p> Звернення до ідентифікатора відбувається аналогічно класам, але в якості ключового слова у тега використовується атрибут id, значенням якого виступає ім'я ідентифікатора. Символ решітки при цьому вже не вказується.</p>\n" +
                    "</div>";
                break;
            case "indents":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "<div> <img src=\"img/lab2/paddingCode.jpg\" alt=\"\"></div>" +
                    "<div> <img src=\"img/lab2/paddingImg.jpg\" style=\"width: 200px;\" alt=\"\"></div>" +
                    "<div> <img src='img/lab2/paddingHtml.png' alt=''/> </div></div>" +
                    "<div> <p>Padding - Встановлює значення полів навколо вмісту елементу. Полем називається відстань від " +
                    "внутрішнього краю рамки елемента до уявного прямокутника, що обмежує його вміст</p>" +
                    "<p>Синтаксис padding: [значення | відтсотки] {1, 4} | inherit </p> <div/>";
                break;
            case "floating_elements":
                document.querySelector("main .content").innerHTML = "<div class='elementImages'>" +
                    "<div> <img src='img/lab2/floatCode.png' alt=''></div>" +
                    "<div> <img src='img/lab2/floatingElement.png' alt=''/></div>" +
                    "<div> <img src='img/tableCode.png' alt=''/></div></div>" +
                    "<p>CSS-властивість <i>float</i> визначає, по якій стороні буде вирівнюватися елемент, при цьому " +
                    "інші елементи будуть обтікати його з інших сторін</p>" +
                    "Значення:" +
                    "<p><i>left</i> - вирівнює елемент по лівому краю, а всі інші елементи, на кшталт тексту, обтікають " +
                    "його по правій стороні;</p>" +
                    "<p><i>right</i> - вирівнює елемент по правому краю, а всі інші елементи обтікають його по лівій стороні;</p>" +
                    "<p><i>none</i> - обтікання елемента не задається;</p>" +
                    "<p><i>inherit</i> - успадковує значення предки. </p>";
                break;
            case "selectorsByTagAndClass":
                document.querySelector("main .content").innerHTML = "<p><b>1.Селектор тегу:</b></p>\n" +
                    "<p>Селектор тегу іноді називається селектором імені типу або селектором елемента, оскільки він " +
                    "вибирає тег / елемент HTML у вашому документі. В прикладі ми використали тег header</p>\n" +
                    "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab2/headerHtml.png' alt=''/> </div>" +
                    "<div class=\"tableCodeImg\"> <img src=\"img/lab2/header.png\"  style=\"width: 200px; height:200px;\" alt=\"\"></div>\n" +
                    "<div class=\"tableImg\"> <img src=\"img/lab2/Header_site.png\"  style=\"width: 700px; height:40px;\" alt=\"\"></div>\n" + "</div>\n" +
                    "<p><b>2.Селектор класу:</b></p>\n" +
                    "<p>Селектор класу починається з крапки (.). Він вибере в документі все, до чого застосований цей клас. " +
                    "В живому прикладі нижче ми створили клас з ім'ям .filmname, і застосували його до кількох місцях в документі.</p>\n" +
                    "<div class=\"elementImages\">\n" +
                    "<div> <img src=\"img/lab2/filmname.png\" alt=''/> </div>\n" +
                    "<div> <img src=\"img/lab2/filmnamevdova.png\" alt=''/> </div>" +
                    "<div> <img src='img/lab2/Vdova.png' alt=''/> </div>" +
                    "</div>";
                break;
            case "otherSelectors":
                document.querySelector("main .content").innerHTML = "<div class=\"elementImages\">" +
                    "<div><img src=\"img/lab2/otherSelectorCode.jpg\" alt=\"\"></div></div>" +
                    "<div>" +
                    "<p>Універсальний селектор - Обирає всі елементи. За бажанням, він може бути обмежений певним" +
                    "простором імен або ставитися до всього простору імен " +
                    "внутрішнього краю рамки елемента до уявного прямокутника, що обмежує його вміст</p>\n" +
                    "<p>Синтаксис: * { style properties } </p>" +
                    "<p>На нашому сайті за допомогою універcального селектору задається шрифт для усього тексту" +
                    "Open Sans, колір світло-сірий та час, поки триває анімація переходу до її завершення. </p>" +
                    "<div/>";
                break;
            case "groupSelectors":
                document.querySelector("main .content").innerHTML = "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab2/groupSelectorsHtml.png' alt=''/></div>" +
                    "<div><img src=\"img/lab2/selectors.png\" alt=\"\"></div>\n" +
                    "<div><img src=\"img/lab2/groupselectors.png\" alt=\"\"></div></div>" +
                    "<div>" +
                    "<p>Щоб групувати CSS-селектори на аркуші стилів, використовуємо коми для розділення " +
                    "кількох згрупованих селекторів у стилі. Групуючи селектори CSS, ми застосовуємо однакові стилі до кожного з них.</p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab3") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> Блочна верстка HTML-документу за макетом.</p>" +
                    "<p><b> Мета: </b>придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясувати переваги та недоліки типів макетів веб-сторінок.</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a><br>" +
                    "<a href='https://gangstaprogrammer.github.io/Films4You/' target='_blank'>" +
                    "https://gangstaprogrammer.github.io/Films4You/ - Сайт(github page)</a>";
                break;
            case "layout":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages img \">" +
                    "<div> <img src='img/lab3/lab3_layout1.png' style='width: 100%' alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab3/lab3_layout2.png\" style='width: 100%' alt=\"\"> </div>" +
                    "</div>"
                break;
            case "code_of_layout":
                document.querySelector("main .content").innerHTML =
                    "<xmp><!doctype html>\n" +
                    "<html lang=\"en\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"UTF-8\">\n" +
                    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n" +
                    "    <title>Films4You</title>\n" +
                    "    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" +
                    "    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" +
                    "    <link href=\"https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Azeret+Mono&family=Montserrat&display=swap\"\n" +
                    "          rel=\"stylesheet\">\n" +
                    "    <link rel=\"stylesheet\" href=\"css/reset.css\"/>\n" +
                    "    <link rel=\"stylesheet\" href=\"css/6_task4.css\"/>\n" +
                    "</head>\n" +
                    "<body>\n" +
                    "<div class=\"cover\">\n" +
                    "    <header>\n" +
                    "        <div class=\"wrapper\">\n" +
                    "            <div class=\"content\">\n" +
                    "                <div class=\"logo\">\n" +
                    "                    <a href=\"6_task4.html\">\n" +
                    "                        <span class=\"films\">Films</span><span class=\"four\">4</span><span class=\"you\">You</span>\n" +
                    "                    </a>\n" +
                    "                </div>\n" +
                    "                <div class=\"menu_body\">\n" +
                    "                    <form action=\"\" class=\"search_by_name\">\n" +
                    "                        <input type=\"text\" placeholder=\"Пошук за назвою...\">\n" +
                    "                        <button type=\"submit\"><img src=\"img/search_icon\" alt=\"\"></button>\n" +
                    "                    </form>\n" +
                    "                    <div class=\"advanced_search\"><a href=\"#\">Розширений пошук</a></div>\n" +
                    "                    <div class=\"forms\">\n" +
                    "                        <div class=\"sign_in\"><a href=\"#\"> Вхід </a></div>\n" +
                    "                        <div class=\"sign_up\"><a href=\"#\"> Реєстрація </a></div>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <div class=\"menu_icon\"><span></span></div>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </header>\n" +
                    "\n" +
                    "    <div class=\"wrapper\">\n" +
                    "        <main>\n" +
                    "            <div class=\"roundabout\">\n" +
                    "                <div class=\"roundabout_title\">\n" +
                    "                    <h2> Новинки </h2>\n" +
                    "                    <a href=\"#\"> Показати всі</a>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "                <div class=\"films_row\">\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/black_widow.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Вдова (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/conjuring_3.webp\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\">Закляття 3 (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/f9.webp\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Форсаж 9 (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/don't_breathe_2.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Не дихай 2 (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/shang-chi_and_the_legend_of_ten_rings.avif\"\n" +
                    "                                                     alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Шан-Чі та легенда десяти кілець (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "            </div>\n" +
                    "            <div class=\"roundabout\">\n" +
                    "                <div class=\"roundabout_title\">\n" +
                    "                    <h2> Найпопулярніші </h2>\n" +
                    "                    <a href=\"#\"> Показати всі</a>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "                <div class=\"films_row\">\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/the_shawshank_redemption.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Втеча з Шоушенка (1994)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/inception.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Початок (2010)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/the_dark_knight.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Темний лицар (2008)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/fight_club.avif\"\n" +
                    "                                                     alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Бійцівський клуб (1999)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/forest_gump.avif\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Форрест Гамп (1994)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "            </div>\n" +
                    "            <div class=\"roundabout\">\n" +
                    "                <div class=\"roundabout_title\">\n" +
                    "                    <h2> Незабаром у кіно </h2>\n" +
                    "                    <a href=\"#\"> Показати всі</a>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "                <div class=\"films_row\">\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/halloween_kills.jpg\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Хеллоувін вбиває (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/the_last_duel.jpg\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Остання дуель (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"#\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/nebenan.jpg\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> По сусідству (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/eternals.jpg\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Вічні (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                    <div class=\"announcement\">\n" +
                    "                        <a href=\"\">\n" +
                    "                            <div class=\"poster\"><img src=\"img/posters/spencer.jpg\" alt=\"\"></div>\n" +
                    "                            <div class=\"film_name\"> Спенсер (2021)</div>\n" +
                    "                        </a>\n" +
                    "                    </div>\n" +
                    "                </div>\n" +
                    "                <hr>\n" +
                    "            </div>\n" +
                    "        </main>\n" +
                    "    </div>\n" +
                    "    <footer>\n" +
                    "        <div class=\"wrapper\"> © 2021 Films4You</div>\n" +
                    "    </footer>\n" +
                    "</div>\n" +
                    "<script src=\"js/6_task4.js\"></script>\n" +
                    "</body>\n" +
                    "</html></xmp>";
                break;
            case "table_layout":
                document.querySelector("main .content").innerHTML =
                    "<ol>" +
                    "<li> <a href='lab3/3_table.html' target='_blank'> Варіант 3 - Діана</a></li>" +
                    "<li> <a href='lab3/4_table.html' target='_blank'> Варіант 4 - Нікіта</a></li>" +
                    "<li> <a href='lab3/6_table.html' target='_blank'> Варіант 6 - Андрюша</a></li>" +
                    "<li> <a href='lab3/7_table.html' target='_blank'> Варіант 7 - Саша</a></li>" +
                    "</ol>";
                break;
            case "float_layout":
                document.querySelector("main .content").innerHTML =
                    "<ol>" +
                    "<li> <a href='lab3/3_float.html' target='_blank'> Варіант 3 - Діана</a></li>" +
                    "<li> <a href='lab3/4_float.html' target='_blank'> Варіант 4 - Нікіта</a></li>" +
                    "<li> <a href='lab3/6_float.html' target='_blank'> Варіант 6 - Андрюша</a></li>" +
                    "<li> <a href='lab3/7_float.html' target='_blank'> Варіант 7 - Саша</a></li>" +
                    "</ol>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "<p> Виконавши дану лабораторну роботу," +
                    " ми придбали практичні навички роботи верстки сторінок засобами CSS, " +
                    " верстки на основі плаваючих елементів та таблиць," +
                    " з’ясували переваги та недоліки типів макетів веб-сторінок. </p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab4") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> Функціональне застосування javascript у HTML-документі. Класи, об’єкти, функції, в мові javascript. Події та обробка подій. Програмна взаємодія з HTML документами на основі DOM API .</p>" +
                    "<p><b> Мета: </b> придбати практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови Javasсript, використання об’єктів, масивів, функцій, подій, обробників подій у сценаріях на мові JavaScript</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a><br>" +
                    "<a href='https://gangstaprogrammer.github.io/Films4You/' target='_blank'>" +
                    "https://gangstaprogrammer.github.io/Films4You/ - Сайт(github page)</a>";
                break;
            case "url_scheme":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab4/url_scheme_html.png' alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab4/url_scheme_view.png\" alt=\"\"> </div>" +
                    "</div>";
                break;
            case "handler":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab4/handler_js.png' style='width: 700px' alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab4/handler_view1.png\" style='width: 300px' alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab4/handler_view2.png\" style='width: 300px' alt=\"\"> </div>" +
                    "</div>";
                break;
            case "insert_script":
                document.querySelector("main .content").innerHTML =
                    "<div class=\"elementImages\">" +
                    "<div> <img src='img/lab4/tag_script_html.png' alt=\"\"> </div>" +
                    "<div> <img src=\"img/lab4/tag_script_js.png\" alt=\"\"> </div>" +
                    "</div>";
                break;
            case "task4":
                document.querySelector("main .content").innerHTML =
                    "<ol>" +
                    "<li> <a href='lab4/var3/3_task4.js' target='_blank'> Варіант 3 - Діана</a></li>" +
                    "<div class='elementImages'>" +
                    "<div><img src='img/lab4/3_task4_code.png' width='650px' alt=''></div></div>" +
                    "<div><img src='img/lab4/3_task4_result.png' width='400px' alt=''></div></div></li>" +
                    "<li> <a href='lab4/var4/4_task4.js' target='_blank'> Варіант 4 - Нікіта</a>" +
                    "<div class='elementImages'>" +
                    "<div><img src='img/lab4/4_task4_code.png' width='650px' alt=''></div></div>" +
                    "<div><img src='img/lab4/4_task4_result.png' width='400px' alt=''></div></div></li>" +
                    "<li> <a href='lab4/var6/6_task4.html' target='_blank'> Варіант 6 - Андрюша</a></li>" +
                    "<li> <a href='lab4/var7/7_task4.js' target='_blank'> Варіант 7 - Саша</a></li>" +
                    "<div class='elementImages'>" +
                    "<div><img src='img/lab4/7_task4_code1.jpg' width='650px' alt=''></div></div>" +
                    "<div><img src='img/lab4/7_task4_code2.jpg' width='650px' alt=''></div></div>" +
                    "<div><img src='img/lab4/7_task4_result.jpg' width='650px' alt=''></div></div></li>" +
                    "</ol>";
                break;
            case "task6":
                document.querySelector("main .content").innerHTML =
                    "<ol>" +
                    "<li> <a href='lab4/var3/3_task6.html' target='_blank'> Варіант 3 - Діана</a></li>" +
                    "<li> <a href='lab4/var4/4_task6.html' target='_blank'> Варіант 4 - Нікіта</a></li>" +
                    "<li> <a href='lab4/var6/6_task6.html' target='_blank'> Варіант 6 - Андрюша</a></li>" +
                    "<li> <a href='lab4/var7/7_task6.html' target='_blank'> Варіант 7 - Саша</a></li>" +
                    "</ol>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "Виконавши цю лабораторну роботу, ми придбали практичні навички роботи маніпулювання інформаційним " +
                    "вмістом Web-документа засобами мови Javasсript, використовували об’єкти, масиви, функції, події, " +
                    "обробники подій у сценаріях на мові JavaScript";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab5") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> використання в сценаріях javascript бібліотек крос-браузерних інтерфейсів " +
                    "методів DOM. Бібліотека jQuery UI. Засоби налагодження і тестування сценаріїв javascript.</p>" +
                    "<p><b> Мета: </b> придбати практичні навички роботи jQuery UI, вміти додавати до сайту динамічні " +
                    "елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a><br>" +
                    "<a href='https://gangstaprogrammer.github.io/Films4You/' target='_blank'>" +
                    "https://gangstaprogrammer.github.io/Films4You/ - Сайт(github page)</a>";
                break;
            case "dynamic_elements":
                document.querySelector("main .content").innerHTML =
                    "<p>Підключення потрібних бібліотек: </p>" +
                    "<div class='elementImages'> " +
                    "   <div><img src='img/lab5/adding_libraries_html.png' width='1000' alt=''></div> " +
                    "   <div><img src='img/lab5/dynmaic_elements_scripts.png' width='400' alt=''></div> " +
                    "</div><br>" +
                    "<a href='lab5/dynamic_elements_jquery.html' target='_blank'>Сторінка з динамічними елементами</a>";
                break;
            case "photogallery":
                document.querySelector("main .content").innerHTML =
                    "<p>Підключення потрібних бібліотек: </p>" +
                    "<div class='elementImages'> " +
                    "   <div><img src='img/lab5/adding_unitegallery_html.png' width='1000' alt=''></div> " +
                    "   <div><img src='img/lab5/photogallery_script.png' alt=''></div> " +
                    "</div><br>" +
                    "<a href='lab5/photogallery.html' target='_blank'>Сторінка з фотогалереєю</a>";
                break;
            case "photoslider":
                document.querySelector("main .content").innerHTML =
                    "<p>Підключення потрібних бібліотек: </p>" +
                    "<div class='elementImages'> " +
                    "   <div><img src='img/lab5/photoslider_html.png' width='1000' alt=''></div> " +
                    "   <div><img src='img/lab5/photoslider_script.png' alt=''></div> " +
                    "</div><br>" +
                    "<a href='lab5/photoslider.html' target='_blank'>Сторінка з фотослайдером</a>";
                break;
            case "videoslider":
                document.querySelector("main .content").innerHTML =
                    "<p>Підключення потрібних бібліотек: </p>" +
                    "<div class='elementImages'> " +
                    "   <div><img src='img/lab5/videoslider_html.png' width='1000' alt=''></div> " +
                    "   <div><img src='img/lab5/videoslider_script.png' alt=''></div> " +
                    "</div><br>" +
                    "<a href='lab5/videoslider.html' target='_blank'>Сторінка з відеослайдером</a>";
                break;
            case "social_network_icons":
                document.querySelector("main .content").innerHTML =
                    "<p>Підключення потрібних бібліотек: </p>" +
                    "<div class='elementImages'> " +
                    "   <div><img src='img/lab5/adding_libraries_html.png' width='1000' alt=''></div> " +
                    "</div><br>" +
                    "<a href='lab5/dynamic_elements_jquery.html' target='_blank'>Сторінка з іконками соціальних мереж</a>";
                break;
            case "informers":
                document.querySelector("main .content").innerHTML =
                    "<p>Підключення потрібних бібліотек: </p>" +
                    "<div class='elementImages'> " +
                    "   <div><img src='img/lab5/adding_libraries_html.png' width='1000' alt=''></div> " +
                    "</div><br>" +
                    "<a href='lab5/dynamic_elements_jquery.html' target='_blank'>Сторінка з інформерами</a>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "<p>Виконавши цю лабораторну роботу, ми придбали практичні навички роботи з jQuery UI, навчились додавати до " +
                    "сайту динамічні елементи цієї бібліотеки, плагін галереї UniteGallery, кнопки соціальних мереж, інформери та інше.</p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab6") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> WEB-сервери та принципи їх роботи з користувачем. Cерверні WEB-застосування.</p>" +
                    "<p><b> Мета: </b> придбати практичні навички встановлення та конфігурування WEB-сервера, " +
                    "встановлення та налаштування Apache.</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a><br>" +
                    "<a href='https://gangstaprogrammer.github.io/Films4You/' target='_blank'>" +
                    "https://gangstaprogrammer.github.io/Films4You/ - Сайт(github page)</a>";
                break;
            case "dynamic_elements":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'> " +
                    "   <img src='img/lab6/tooltip_autocomplete_js.png' width='' alt=''>" +
                    "   <img src='img/lab6/year_slider_js.png' width='' alt=''> " +
                    "   <img src='img/lab6/dynamic_elements_view.png' width='' alt=''> " +
                    "   <img src='img/lab6/year_slider_view.png' width='' alt=''> " +
                    "</div>";
                break;
            case "installing_server":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'> " +
                    "   <p> Заходимо на офіційний сайт розробника Open Server та завантажуємо інсталятор: </p>" +
                    "   <img src='img/lab6/open_server_site.png' width='' alt=''> " +
                    "   <img src='img/lab6/download_server.png' width='' alt=''> " +
                    "   <p> Відкриваємо інсталятор та починаємо встановлення: </p>" +
                    "   <img src='img/lab6/installing1.png' alt=''> " +
                    "   <p> Погоджуємося з правилами користування: </p>" +
                    "   <img src='img/lab6/installing2.png' alt=''>" +
                    "   <p> Обираємо директорію для встановлення серверу: </p>" +
                    "   <img src='img/lab6/installing3.png' alt=''> " +
                    "   <p> Обираємо компактне встановлення: </p>" +
                    "   <img src='img/lab6/installing4.png' alt=''> " +
                    "   <p> Залишаємо дефолтні налаштування: </p>" +
                    "   <img src='img/lab6/installing5.png' alt=''> " +
                    "   <img src='img/lab6/installing6.png' alt=''> " +
                    "</div>";
                break;
            case "query_for_view":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'> " +
                    "   <p> Поміщаємо наш проект у директорію domains: </p>" +
                    "   <img src='img/lab6/domains_dir.png' width='' alt=''> " +
                    "   <p> Вмикаємо сервер та відкриваємо нашу сторінку: </p>" +
                    "   <img src='img/lab6/open_server_context_menu.png' alt=''> " +
                    "   <img src='img/lab6/hosted_site.png' width='1000' alt=''> " +
                    "</div>";
                break;
            case "utf8_encoding":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'> " +
                    "   <p> Знаходимо файл конфігурації php.ini: </p>" +
                    "   <img src='img/lab6/find_php_ini.png' alt=''> " +
                    "   <p> Знаходимо параметр default_charset: </p>" +
                    "   <img src='img/lab6/php_ini_find_encode.png' alt=''>" +
                    "   <p> Прибираємо \";\" : </p>" +
                    "   <img src='img/lab6/php_ini_set_encode.png' alt=''>" +
                    "</div>";
                break;
            case "feedback":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'> " +
                    "   <img src='img/lab6/datetime_form_php.png' alt=''>" +
                    "   <img src='img/lab6/datetime_form_view.png' alt=''>" +
                    "</div>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "<p> Виконавши цю лабораторну роботу, ми придбали практичні навички встановлення та конфігурування " +
                    "WEB-сервера, встановлення та налаштування Apache.</p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab7") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> взаємодія WEB-застосувань з системою управління базами даних (СУБД). " +
                    "Обробка результатів SQL-запитів у PHP-сценарії.</p>" +
                    "<p><b> Мета: </b> придбати практичні навички підключення до СУБД, вибору бази даних, виконання " +
                    "запиту, отримання результатів, відключення від СУБД. </p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a>";
                break;
            case "describing_model":
                document.querySelector("main .content").innerHTML =
                    "<h2> Варіант 3 (Комп'ютерна техніка) </h2>" +
                    "<img src='img/lab7/var3_decription_model.jpg' width='900' alt=''>" +
                    "<h2> Варіант 4 (Фільмотека) </h2>" +
                    "<p>Виділимо базові сутності, атрибути та зв'язки предметної області \"Фільмотека\":</p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Сутності </th>" +
                    "       <th> Атрибути </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільми </td>" +
                    "       <td> id, назва, рік, країна, тривалість, режисер_id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Жанри </td>" +
                    "       <td> id, назва </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актори </td>" +
                    "       <td> id, Ім'я, Прізвище </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Режисери </td>" +
                    "       <td> id, Ім'я, Прізвище </td>" +
                    "   </tr>" +
                    "</table><br>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Зв'язки </th>" +
                    "       <th> Сутності та атрибути, що беруть участь у зв'зку </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Зрежисував </td>" +
                    "       <td> Фільми.режисер_id -> Режисери.id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільм належить до жанру </td>" +
                    "       <td> фільм_id -> Фільми.id, жанр_id -> Жанри.id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актор знявся у фільмі </td>" +
                    "       <td> фільм_id -> Фільми.id, актор_id -> Актори.id </td>" +
                    "   </tr>" +
                    "</table><br>" +
                    "<h2> Варіант 6 (Розклад руху залізничного транспорту) </h2>" +
                    "<img src='img/lab7/var6_decription_model.png' width='900' alt=''><br>" +
                    "<h2> Варіант 7 (Довідник з радіотехники) </h2>" +
                    "<p>Виділимо базові сутності, атрибути та зв'язки предметної області \"Довідник з радіотехніки\":</p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Сутності </th>" +
                    "       <th> Атрибути </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Товари </td>" +
                    "       <td> id, назва, опис, вага, ціна, матеріл, наявність, категорія_id, постачальник_id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Категорії </td>" +
                    "       <td> id, назва, опис </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Постачальники </td>" +
                    "       <td> id, назва компанії, телефон, пошта, країна, товар_id </td>" +
                    "   </tr>" +
                    "</table><br>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Зв'язки </th>" +
                    "       <th> Сутності та атрибути, що беруть участь у зв'зку </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Категорія товару </td>" +
                    "       <td> Товар.категорія_id -> Категорія.id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Поставка товару </td>" +
                    "       <td> Постачальник.товар_id -> Товар.id, Товар.постачальник_id -> Постачальник.id </td>" +
                    "   </tr>" +
                    "</table>";
                break;
            case "infologic_model":
                document.querySelector("main .content").innerHTML =
                    "<div style='text-align: center'> " +
                    "   <h2> Варіант 3 (Комп'ютерна техніка) </h2> " +
                    "   <img src='img/lab7/var3_infologic_model.png' height='420' alt=''><br>" +
                    "   <h2> Варіант 4 (Фільмотека) </h2> " +
                    "   <img src='img/lab7/var4_infologic_model.png' height='420' alt=''><br>" +
                    "   <h2> Варіант 6 (Розклад руху залізничного транспорту) </h2> " +
                    "   <img src='img/lab7/var6_infologic_model.png' height='420' alt=''>" +
                    "   <h2> Варіант 7 (Довідник з радіотехники) </h2> " +
                    "   <img src='img/lab7/var7_infologic_model.png' height='420' alt=''>" +
                    "</div>";
                break;
            case "datalogic_model":
                document.querySelector("main .content").innerHTML =
                    "<div style='text-align: justify'> " +
                    "   <h2> Варіант 3 (Комп'ютерна техніка) </h2> " +
                    "   <img src='img/lab7/var3_datalogic_model.png' height='420' alt=''><br>" +
                    "   <h2> Варіант 4 (Фільмотека) </h2> " +
                    "   <p style='text-align: justify'>Для формалізації зв’язку між таблицями Films та Genres створюємо допоміжну " +
                    "таблицю film_genre, що містить вторинні ключі – посилання на ідентифікатори таблиць," +
                    " які зв’язує. Аналогічно створюємо допоміжну таблицю film_actor.</p>" +
                    "   <img src='img/lab7/var4_datalogic_model.png' height='420' alt=''><br>" +
                    "   <h2> Варіант 6 (Розклад руху залізничного транспорту) </h2> " +
                     "   <img src='img/lab7/var6_datalogic_model.png' height='420' alt=''>" +
                    "   <h2> Варіант 7 (Довідник з радіотехники) </h2> " +
                    "   <p style='text-align: justify'>Для формалізації зв’язку між таблицями Товари та Постачальники створюємо допоміжну " +
                    "таблицю Товари_Постачальники, що містить вторинні ключі – посилання на ідентифікатори таблиць," +
                    " які зв’язує.</p>" +
                    "   <img src='img/lab7/var7_datalogic_model.png' height='420' alt=''>" +
                    "</div>";
                break;
            case "db_phpMyAdmin":
                document.querySelector("main .content").innerHTML =
                    "<h2> Варіант 3 (Комп'ютерна техніка) </h2>" +
                    "<p> Скрипти для створення БД та її об'єктів:</p>" +
                    "<pre>CREATE TABLE `employees` (\n" +
                    "  `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "  `Fname` varchar(30) NOT NULL,\n" +
                    "  `Sname` varchar(50) NOT NULL,\n" +
                    "  `Pname` varchar(50) NOT NULL,\n" +
                    "  `Phone` varchar(20) NOT NULL,\n" +
                    "  `Adress` varchar(250) NOT NULL,\n" +
                    "  `Position` varchar(70) NOT NULL\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n" +
                    "\n" +
                    "CREATE TABLE `movement` (\n" +
                    "  `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "  `From` varchar(50) NOT NULL,\n" +
                    "  `To` varchar(100) NOT NULL,\n" +
                    "  `Move_date` date NOT NULL\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 \n" +
                    "\n" +
                    "CREATE TABLE `suppliers` (\n" +
                    "  `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "  `Fname` varchar(30) NOT NULL,\n" +
                    "  `Sname` varchar(50) NOT NULL,\n" +
                    "  `Name_organization` varchar(250) NOT NULL,\n" +
                    "  `Phone` varchar(20) NOT NULL,\n" +
                    "  `Adress` varchar(250) NOT NULL\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 \n" +
                    "\n" +
                    "CREATE TABLE `technic` (\n" +
                    "  `id` int PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "  `Name` varchar(30) NOT NULL,\n" +
                    "  `Description` varchar(250) NOT NULL,\n" +
                    "  `Date_buy` date NOT NULL,\n" +
                    "  `id_employee` int NOT NULL,\n" +
                    "  `id_provider` int NOT NULL,\n" +
                    "  `id_movement` int NOT NULL,\n" +
                    "  `Availability` varchar(10) NOT NULL\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 \n" +
                    "\n" +
                    "ALTER TABLE `technic`\n" +
                    "  ADD KEY `id_employee` (`id_employee`),\n" +
                    "  ADD KEY `id_movement` (`id_movement`),\n" +
                    "  ADD KEY `id_provider` (`id_provider`);\n" +
                    "\n" +
                    "ALTER TABLE `technic`\n" +
                    "  ADD CONSTRAINT `technic_ibfk_1` FOREIGN KEY (`id_employee`) REFERENCES `employees` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,\n" +
                    "  ADD CONSTRAINT `technic_ibfk_2` FOREIGN KEY (`id_movement`) REFERENCES `movement` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,\n" +
                    "  ADD CONSTRAINT `technic_ibfk_3` FOREIGN KEY (`id_provider`) REFERENCES `suppliers` (`id`) ON DELETE ;\n</pre>" +
                    "<p>Фізична модель даних:</p>" +
                    "<img src='img/lab7/var3_physical_model.png' height='420' alt=''><br>" +
                    "<h2> Варіант 4 (Фільмотека) </h2>" +
                    "<p> Скрипти для створення БД та її об'єктів:</p>" +
                    "<pre>CREATE DATABASE FILMS_LIBRARY;\n" +
                    "USE FILMS_LIBRARY;\n" +
                    "\n" +
                    "CREATE TABLE Films\n" +
                    "(\n" +
                    "    id               INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    director_id      INT                            NOT NULL,\n" +
                    "    name             VARCHAR(30)                    NOT NULL,\n" +
                    "    year             YEAR                           NOT NULL,\n" +
                    "    country          VARCHAR(30)                    NOT NULL,\n" +
                    "    duration_minutes INT                            NOT NULL,\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE Directors\n" +
                    "(\n" +
                    "    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    first_name VARCHAR(30)                    NOT NULL,\n" +
                    "    last_name  VARCHAR(30)                    NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE Actors\n" +
                    "(\n" +
                    "    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    first_name VARCHAR(30)                    NOT NULL,\n" +
                    "    last_name  VARCHAR(30)                    NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE Genres\n" +
                    "(\n" +
                    "    id   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    name VARCHAR(30)                    NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE film_actor\n" +
                    "(\n" +
                    "    id       INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    film_id  INT                            NOT NULL,\n" +
                    "    actor_id INT                            NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE film_genre\n" +
                    "(\n" +
                    "    id       INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    film_id  INT                            NOT NULL,\n" +
                    "    genre_id INT                            NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "ALTER TABLE Films\n" +
                    "    ADD CONSTRAINT FK_Films_director_id_Directors\n" +
                    "        FOREIGN KEY (director_id) REFERENCES Directors (id);\n" +
                    "\n" +
                    "ALTER TABLE film_actor\n" +
                    "    ADD CONSTRAINT FK_film_actor_film_id_Films\n" +
                    "        FOREIGN KEY (film_id) REFERENCES Films (id);\n" +
                    "\n" +
                    "ALTER TABLE film_actor\n" +
                    "    ADD CONSTRAINT FK_film_actor_actor_id_Actors\n" +
                    "        FOREIGN KEY (actor_id) REFERENCES Actors (id);\n" +
                    "\n" +
                    "ALTER TABLE film_genre\n" +
                    "    ADD CONSTRAINT FK_film_genre_film_id_Films\n" +
                    "        FOREIGN KEY (film_id) REFERENCES Films (id);\n" +
                    "\n" +
                    "ALTER TABLE film_genre\n" +
                    "    ADD CONSTRAINT FK_film_genre_actor_id_Genres\n" +
                    "        FOREIGN KEY (genre_id) REFERENCES Genres (id);\n</pre>" +
                    "<p>Фізична модель даних:</p>" +
                    "<img src='img/lab7/var4_physical_model.png' height='420' alt=''><br>" +

                    "<h2> Варіант 6 (Розклад руху залізничного транспорту) </h2> " +
                    "<p> Скрипти для створення БД та її об'єктів:</p>" +
                    "<pre>CREATE TABLE timetables\n" +
                    "(\n" +
                    "    Id INT NOT NULL,\n" +
                    "    time_arrival_id TIME NOT NULL,\n" +
                    "    time_departure_id TIME NOT NULL,\n" +
                    "    station_id INT NOT NULL,\n" +
                    "    train_id INT NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE stations\n" +
                    "(\n" +
                    "    Id INT NOT NULL,\n" +
                    "    name VARCHAR(20) NOT NULL,\n" +
                    "    address VARCHAR(20) NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE trains\n" +
                    "(\n" +
                    "    Id INT NOT NULL,\n" +
                    "    name VARCHAR(20) NOT NULL,\n" +
                    "    start_station_id INT NOT NULL,\n" +
                    "    end_station_id INT NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "ALTER TABLE timetables ADD PRIMARY KEY (Id);\n" +
                    "ALTER TABLE stations ADD PRIMARY KEY (Id);\n" +
                    "ALTER TABLE trains ADD PRIMARY KEY (Id);\n" +
                    "\n" +
                    "ALTER TABLE timetables\n" +
                    "ADD FOREIGN KEY (train_id) REFERENCES trains(Id);\n" +
                    "ALTER TABLE timetables\n" +
                    "ADD FOREIGN KEY (station_id) REFERENCES stations(Id);\n" +
                    "ALTER TABLE trains\n" +
                    "ADD FOREIGN KEY (start_station_id) REFERENCES stations(Id);\n" +
                    "ALTER TABLE trains\n" +
                    "ADD FOREIGN KEY (end_station_id) REFERENCES stations(Id);\n" +
                    "\n</pre>" +
                    "<img src='img/lab7/var6_physical_model.jpg' height='420' alt=''><br>" +
                    "<h2> Варіант 7 (Довідник з радіотехники) </h2> " +
                    "<p> Скрипти для створення БД та її об'єктів:</p>" +
                    "<pre>\n" +
                    "\n" +
                    "CREATE DATABASE IF NOT EXISTS `db` /*!40100 DEFAULT CHARACTER SET utf8 */;\n" +
                    "USE `db`;\n" +
                    "\n" +
                    "CREATE TABLE IF NOT EXISTS `category` (\n" +
                    "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                    "  `name` varchar(50) NOT NULL DEFAULT '',\n" +
                    "  `description` text NOT NULL,\n" +
                    "  PRIMARY KEY (`id`)\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8;\n" +
                    "\n" +
                    "\n" +
                    "CREATE TABLE IF NOT EXISTS `product` (\n" +
                    "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                    "  `name` varchar(100) NOT NULL DEFAULT '',\n" +
                    "  `category_id` int(11) NOT NULL DEFAULT '0',\n" +
                    "  `description` text NOT NULL,\n" +
                    "  `weight` float NOT NULL DEFAULT '0',\n" +
                    "  `price` float NOT NULL DEFAULT '0',\n" +
                    "  `material` varchar(50) NOT NULL DEFAULT '0',\n" +
                    "  `available` tinyint(1) NOT NULL DEFAULT '0',\n" +
                    "  PRIMARY KEY (`id`) USING BTREE,\n" +
                    "  KEY `FK_product_category` (`category_id`),\n" +
                    "  CONSTRAINT `FK_product_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8;\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "CREATE TABLE IF NOT EXISTS `product_supplier` (\n" +
                    "  `product_id` int(11) DEFAULT NULL,\n" +
                    "  `supplier_id` int(11) DEFAULT NULL,\n" +
                    "  KEY `FK__product` (`product_id`),\n" +
                    "  KEY `FK__supplier` (`supplier_id`),\n" +
                    "  CONSTRAINT `FK__product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,\n" +
                    "  CONSTRAINT `FK__supplier` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8;\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "CREATE TABLE IF NOT EXISTS `supplier` (\n" +
                    "  `id` int(11) NOT NULL AUTO_INCREMENT,\n" +
                    "  `name` varchar(50) NOT NULL DEFAULT '',\n" +
                    "  `country` varchar(50) NOT NULL DEFAULT '',\n" +
                    "  `email` varchar(50) NOT NULL DEFAULT '',\n" +
                    "  `phone` varchar(50) NOT NULL DEFAULT '',\n" +
                    "  PRIMARY KEY (`id`)\n" +
                    ") ENGINE=InnoDB DEFAULT CHARSET=utf8;\n" +
                    "\n</pre>" +
                    "<p>Фізична модель даних створена у phpMyAdmin</p>" +
                    "<img src='img/lab7/var7_physical_model.jpg' height='420' alt=''><br>";
                break;
            case "interaction_php":
                document.querySelector("main .content").innerHTML =
                    "<h2> Варіант 3 (Комп'ютерна техніка) </h2>" +
                    "<div class='elementImages'>" +
                    "   <img src='img/lab7/var3_main_page.png' width='600' alt=''>" +
                    "   <img src='img/lab7/var3_technics_page.png' width='900' alt=''>" +
                    "   <img src='img/lab7/var3_employees_page.png' width='900' alt=''>" +
                    "   <img src='img/lab7/var3_suppliers_page.png' width='600' alt=''>" +
                    "   <img src='img/lab7/var3_movements_page.png' width='300' alt=''>" +
                    "</div><br><br>" +
                    "<h2> Варіант 4 (Фільмотека) </h2>" +
                    "<div class='elementImages'>" +
                    "   <img src='img/lab7/var4_main_page.png' width='600' alt=''>" +
                    "   <img src='img/lab7/var4_films_page.png' width='900' alt=''>" +
                    "   <img src='img/lab7/var4_genres_page.png' width='300' alt=''>" +
                    "   <img src='img/lab7/var4_actors_page.png' width='300' alt=''>" +
                    "   <img src='img/lab7/var4_directors_page.png' width='300' alt=''>" +
                    "</div><br><br>" +
                    "<h2> Варіант 6 (Розклад руху залізничного транспорту) </h2>" +
                    "<div class='elementImages'>" +
                    "   <img src='img/lab7/var6_main_page.png' width='600' alt=''>" +
                    "   <img src='img/lab7/var6_stations_page.png' width='300' alt=''>" +
                    "   <img src='img/lab7/var6_update_page.png' width='300' alt=''>" +
                    "   <img src='img/lab7/var6_trains_page.png' width='300' alt=''>" +
                    "</div><br><br>" +
                    "<h2> Варіант 7 (Довідник з радіотехники) </h2>" +
                    "<div class='elementImages'>" +
                    "   <img src='img/lab7/var7_main_page.jpg' width='600' alt=''>" +
                    "   <img src='img/lab7/var7_products.jpg' width='900' alt=''>" +
                    "   <img src='img/lab7/var7_suppliers.jpg' width='900' alt=''>" +
                    "   <img src='img/lab7/var7_categories.jpg' width='900' alt=''>" +
                    "</div>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "<p>Виконавши цю лабораторну роботу, ми придбали практичні навички підключення до СУБД, вибору бази даних, виконання " +
                    "запиту, отримання результатів, відключення від СУБД.</p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab8") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> Інтерфейси взаємодії WEB-застосувань з системою керування баз даних (СУБД). " +
                    "SQL-запити у PHP-сценаріях. Інтерфейси WEB-застосувань з СУБД. Використання сесій і cookies в " +
                    "сценаріях авторизації. Розробка сценаріїв обробки даних з файлів.</p>" +
                    "<p><b> Мета:</b>придбати практичні навички роботи взаємодії WEB-застосувань з СУБД, використання" +
                    " сесій і cookies в сценаріях авторизації, розробки сценаріїв обробки даних з файлів.</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a>";
                break;
            case "describing_model":
                document.querySelector("main .content").innerHTML =
                    "<p>База даних створюється для інформаційного обслуговування онлайн кіносервісу Films4You. БД " +
                    "повинна містити дані про фільми, а саме його назву, рік, опис, постер, акторів, режисерів, " +
                    "жанри, рейтинг, тривалість, прем'єру, країни у якій його зняли. </p>" +
                    "<p>Виділимо базові сутності, атрибути та зв'язки предметної області \"Фільмотека\":</p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Сутності </th>" +
                    "       <th> Атрибути </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільми </td>" +
                    "       <td> id, постер, назва, рік, країна, рейтинг IMDb, тривалість, опис, прем'єра, режисер_id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Жанри </td>" +
                    "       <td> id, назва </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актори </td>" +
                    "       <td> id, Ім'я, Прізвище </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Режисери </td>" +
                    "       <td> id, Ім'я, Прізвище </td>" +
                    "   </tr>" +
                    "</table><br>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Зв'язки </th>" +
                    "       <th> Сутності та атрибути, що беруть участь у зв'зку </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Зрежисував </td>" +
                    "       <td> Фільми.режисер_id -> Режисери.id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільм належить до жанру </td>" +
                    "       <td> фільм_id -> Фільми.id, жанр_id -> Жанри.id </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актор знявся у фільмі </td>" +
                    "       <td> фільм_id -> Фільми.id, актор_id -> Актори.id </td>" +
                    "   </tr>" +
                    "</table>";
                break;
            case "infologic_model":
                document.querySelector("main .content").innerHTML =
                    "<p>Класифікація сутностей:</p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Сутності </th>" +
                    "       <th> Вид сутності </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільми </td>" +
                    "       <td> Слабка </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Жанри </td>" +
                    "       <td> Стержнева </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актори </td>" +
                    "       <td> Стержнева </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Режисери </td>" +
                    "       <td> Стержнева </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актор знявся у фільмі </td>" +
                    "       <td> Асоціативна </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільм належить до жанру </td>" +
                    "       <td> Асоціативна </td>" +
                    "   </tr>" +
                    "</table><br>" +
                    "<p>Класифікація атрибутів:</p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Сутності </th>" +
                    "       <th> Атрибути </th>" +
                    "       <th> Вид атрибуту </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='10'> Фільми </td>" +
                    "       <td> id </td>" +
                    "       <td> Ідентифікатор </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> постер </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> назва </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> рік </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> опис </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> країни </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> тривалість</td>" +
                    "       <td> Описовий</td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> рейтинг IMDb </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> прем'єра </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> режисер_id </td>" +
                    "       <td> Допоміжний </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='2'> Жанри </td>" +
                    "       <td> id </td>" +
                    "       <td> Ідентифікатор </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> назва </td>" +
                    "       <td> Вказівний </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> Актори </td>" +
                    "       <td> id </td>" +
                    "       <td> Ідентифікатор </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> ім'я</td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Прізвище </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> Режисери </td>" +
                    "       <td> id </td>" +
                    "       <td> Ідентифікатор </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> ім'я</td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Прізвище </td>" +
                    "       <td> Описовий </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> Актор знявся у фільмі </td>" +
                    "       <td> id </td>" +
                    "       <td> Ідентифікатор </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> фільм_id </td>" +
                    "       <td> Допоміжний </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> актор_id </td>" +
                    "       <td> Допоміжний</td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> Фільм належить до жанру </td>" +
                    "       <td> id </td>" +
                    "       <td> Ідентифікатор </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> фільм_id </td>" +
                    "       <td> Допоміжний </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> жанр_id </td>" +
                    "       <td> Допоміжний</td>" +
                    "   </tr>" +
                    "</table><br>" +
                    "<p> ER-діаграма (нотація Мартіна), створена за допомогою ERDplus: </p>" +
                    "<img src='img/lab8/infologic_model.png' height='420' alt=''>";
                break;
            case "datalogic_model":
                document.querySelector("main .content").innerHTML =
                    "<p> Опис та класифікація зв'язків: </p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Зв'язки </th>" +
                    "       <th> Опис </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Зрежисував </td>" +
                    "       <td> Режисери 1 : M Фільми, безумовний; формалізується допоміжним атрибутом в " +
                    "           сутності «Фільми» </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Фільм належить до жанру </td>" +
                    "       <td> Фільми М : N Жанри, безумовний; необхідна формалізація за допомогою асоціативної " +
                    "           сутності (бінарний зв’язок)" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> Актор знявся у фільмі </td>" +
                    "       <td> Фільми М : N Актори, безумовний; необхідна формалізація за допомогою асоціативної " +
                    "           сутності (бінарний зв’язок)" +
                    "   </tr>" +
                    "</table><br><br>" +
                    "<div style='text-align: justify'>" +
                    "   <p>Для формалізації зв’язку між таблицями Films та Genres створюємо допоміжну " +
                    "   таблицю film_genre, що містить вторинні ключі – посилання на ідентифікатори таблиць," +
                    "   які зв’язує. Аналогічно створюємо допоміжну таблицю film_actor.</p>" +
                    "   <img src='img/lab8/datalogic_model.png' height='420' alt=''><br>" +
                    "</div><br><br>" +
                    "<p>Визначимо типи даних та обмежння цілісності для нашої моделі даних:</p>" +
                    "<table>" +
                    "   <tr>" +
                    "       <th> Сутності </th>" +
                    "       <th> Атрибути </th>" +
                    "       <th> Обмеження цілісності </th>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='10'> Films </td>" +
                    "       <td> id </td>" +
                    "       <td> INT PRIMARY KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> poster </td>" +
                    "       <td> BLOB NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> name </td>" +
                    "       <td> VARCHAR(100) NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> year </td>" +
                    "       <td> YEAR NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> description </td>" +
                    "       <td> TEXT NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> countries </td>" +
                    "       <td> VARCHAR(100) NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> duration_minutes </td>" +
                    "       <td> INT NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> IMDb rating </td>" +
                    "       <td> FLOAT(2,1) </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> premiere </td>" +
                    "       <td> DATE NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> director_id </td>" +
                    "       <td> INT FOREIGN KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='2'> Genres </td>" +
                    "       <td> id </td>" +
                    "       <td> INT PRIMARY KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> name </td>" +
                    "       <td> VARCHAR(50) NOT NULL UNIQUE </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> Actors </td>" +
                    "       <td> id </td>" +
                    "       <td> INT PRIMARY KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> first_name </td>" +
                    "       <td> VARCHAR(50) NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> last_name </td>" +
                    "       <td> VARCHAR(50) NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> Directors </td>" +
                    "       <td> id </td>" +
                    "       <td> INT PRIMARY KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> first_name</td>" +
                    "       <td> VARCHAR(50) NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> last_name </td>" +
                    "       <td> VARCHAR(50) NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> film_actor </td>" +
                    "       <td> id </td>" +
                    "       <td> INT PRIMARY KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> film_id </td>" +
                    "       <td> INT FOREIGN KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> actor_id </td>" +
                    "       <td> INT FOREIGN KEY NOT NULL</td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td rowspan='3'> film_genre </td>" +
                    "       <td> id </td>" +
                    "       <td> INT PRIMARY KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> film_id </td>" +
                    "       <td> INT FOREIGN KEY NOT NULL </td>" +
                    "   </tr>" +
                    "   <tr>" +
                    "       <td> genre_id </td>" +
                    "       <td> INT FOREIGN KEY NOT NULL</td>" +
                    "   </tr>" +
                    "</table>";
                break;
            case "db_phpMyAdmin":
                document.querySelector("main .content").innerHTML =
                    "<p> Скрипти для створення БД та її об'єктів:</p>" +
                    "<pre>CREATE DATABASE FILMS4YOU;\n" +
                    "USE FILMS4YOU;\n" +
                    "\n" +
                    "CREATE TABLE Films\n" +
                    "(\n" +
                    "    id               INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    director_id      INT                            NOT NULL,\n" +
                    "    poster           BLOB                           NOT NULL,\n" +
                    "    name             VARCHAR(255)                   NOT NULL,\n" +
                    "    year             YEAR                           NOT NULL,\n" +
                    "    country          VARCHAR(100)                   NOT NULL,\n" +
                    "    duration_minutes INT                            NOT NULL,\n" +
                    "    description      TEXT                           NOT NULL,\n" +
                    "    premiere         DATE                           NOT NULL,\n" +
                    "    IMDb_rating      FLOAT(2, 1)\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE Directors\n" +
                    "(\n" +
                    "    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    first_name VARCHAR(50)                    NOT NULL,\n" +
                    "    last_name  VARCHAR(50)                    NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE Actors\n" +
                    "(\n" +
                    "    id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    first_name VARCHAR(50)                    NOT NULL,\n" +
                    "    last_name  VARCHAR(50)                    NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE Genres\n" +
                    "(\n" +
                    "    id   INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    name VARCHAR(30)                    NOT NULL UNIQUE\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE film_actor\n" +
                    "(\n" +
                    "    id       INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    film_id  INT                            NOT NULL,\n" +
                    "    actor_id INT                            NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "CREATE TABLE film_genre\n" +
                    "(\n" +
                    "    id       INT PRIMARY KEY AUTO_INCREMENT NOT NULL,\n" +
                    "    film_id  INT                            NOT NULL,\n" +
                    "    genre_id INT                            NOT NULL\n" +
                    ");\n" +
                    "\n" +
                    "ALTER TABLE Films\n" +
                    "    ADD CONSTRAINT FK_Films_director_id_Directors\n" +
                    "        FOREIGN KEY (director_id) REFERENCES Directors (id);\n" +
                    "\n" +
                    "ALTER TABLE film_actor\n" +
                    "    ADD CONSTRAINT FK_film_actor_film_id_Films\n" +
                    "        FOREIGN KEY (film_id) REFERENCES Films (id);\n" +
                    "\n" +
                    "ALTER TABLE film_actor\n" +
                    "    ADD CONSTRAINT FK_film_actor_actor_id_Actors\n" +
                    "        FOREIGN KEY (actor_id) REFERENCES Actors (id);\n" +
                    "\n" +
                    "ALTER TABLE film_genre\n" +
                    "    ADD CONSTRAINT FK_film_genre_film_id_Films\n" +
                    "        FOREIGN KEY (film_id) REFERENCES Films (id);\n" +
                    "\n" +
                    "ALTER TABLE film_genre\n" +
                    "    ADD CONSTRAINT FK_film_genre_actor_id_Genres\n" +
                    "        FOREIGN KEY (genre_id) REFERENCES Genres (id);</pre><br>" +
                    "<p>Фізична модель даних, створена у phpMyAdmin:</p>" +
                    "<img src='img/lab8/physical_model.png' height='420' alt=''><br>";
                break;
            case "interaction_php":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'>" +
                    "   <img src='img/lab8/admin_auth.png' width='300' alt=''>" +
                    "   <img src='img/lab8/main_page.png' width='500' alt=''>" +
                    "   <img src='img/lab8/films_page.png' width='900' alt=''>" +
                    "   <img src='img/lab8/genres_page.png' width='300' alt=''>" +
                    "   <img src='img/lab8/actors_page.png' width='300' alt=''>" +
                    "   <img src='img/lab8/directors_page.png' width='300' alt=''>" +
                    "   <img src='img/lab8/novelties_php_query.png' width='900' alt=''>" +
                    "   <img src='img/lab8/novelties_view.png' width='900' alt=''>" +
                    "   <img src='img/lab8/top_rating_php_query.png' width='900' alt=''>" +
                    "   <img src='img/lab8/top_rating_view.png' width='900' alt=''>" +
                    "   <img src='img/lab8/now_playing_php_query.png' width='900' alt=''>" +
                    "   <img src='img/lab8/now_playing_view.png' width='900' alt=''>" +
                    "</div>";
                break;
            case "write_in_file":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'>" +
                    "   <img src='img/lab8/writing_to_file.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/top_rating_log.png' alt=''>" +
                    "</div>";
                break;
            case "auth":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'>" +
                    "   <img src='img/lab8/auth_block.png' width='400' alt=''>" +
                    "   <img src='img/lab8/sign_in_yana.png' width='400' alt=''>" +
                    "   <img src='img/lab8/auth_php.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/empty_input_error.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/no_user_error.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/registration_page.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/create_user_php.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/users_db.png' width='1000' alt=''>" +
                    "</div>";
                break;
            case "language_icons":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'>" +
                    "   <img src='img/lab8/lang_icons_view.png' width='200' alt=''>" +
                    "   <img src='img/lab8/lang_icons_html.png' width='600' alt=''>" +
                    "   <img src='img/lab8/set_lang_php.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/language_class.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/system_en_ini.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/register_php.png' width='1000' alt=''>" +
                    "   <img src='img/lab8/registration_en_lang.png' width='1000' alt=''>" +
                    "</div>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "<p>Виконавши цю лабораторну роботу, ми придбали практичні навички взаємодії WEB-застосувань з СУБД, " +
                    "використання сесій і cookies в сценаріях авторизації, розробки сценаріїв обробки даних з файлів.</p>";
                break;
        }
    }
    if (document.querySelector(".labButtons .activeButton").id === "lab9") {
        switch (button.id) {
            case "theme":
                document.querySelector("main .content").innerHTML =
                    "<p><b> Тема: </b> Асинхронна взаємодія клієнтської і серверної частин WEB-застосувань з " +
                    "використанням технології AJAX. формування AJAX-запиту засобами jQuery." +
                    "<p><b> Мета:</b>придбати практичні навички роботи основ асинхронного обміну даними мовою " +
                    "JavaScript за допомогою технології Ajax та бібліотеки Jquery, формування  Аjax-запиту засобами " +
                    "jQuery при реалізації практичних задач Web-програмування.</p><br>" +
                    "<a href='https://github.com/GangstaProgrammer/University_Web_Reports' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/University_Web_Reports - Звіт</a><br>" +
                    "<a href='https://github.com/GangstaProgrammer/Films4You' target='_blank'>" +
                    "https://github.com/GangstaProgrammer/Films4You - Сайт</a>";
                break;
            case "ajax_task2":
                document.querySelector("main .content").innerHTML =
                    "<h2> Варіант 4 (Редактор текстових файлів) </h2>" +
                    "<div class='elementImages'> " +
                    "   <img src='img/lab9/var4_main_page_script.png' width='1000' alt=''>" +
                    "   <img src='img/lab9/var4_main_page_view.png' width='1000' alt=''>" +
                    "   <img src='img/lab9/var4_create_new_file_page_view.png' width='1000' alt=''> " +
                    "   <img src='img/lab9/var4_edit_file_page_view.png' width='1000' alt=''> " +
                    "   <img src='img/lab9/var4_alert_view.png' width='' alt=''> " +
                    "   <img src='img/lab9/var4_edit_file_script.png' width='' alt=''> " +
                    "   <img src='img/lab9/var4_alert_view.png' width='' alt=''> " +
                    "   <img src='img/lab9/var4_json_file.png' width='' alt='900'> " +
                    "   <img src='img/lab9/var4_edit_file_php.png' width='1000' alt=''> " +
                    "   <img src='img/lab9/var4_log_file.png' width='' alt=''> " +
                    "</div>";
                break;
            case "ajax_on_site":
                document.querySelector("main .content").innerHTML =
                    "<div class='elementImages'>" +
                    "   <img src='img/lab9/ajax_actors_js.png' alt=''>" +
                    "   <img src='img/lab9/ajax_directors_js.png' alt=''>" +
                    "   <img src='img/lab9/ajax_genres_js.png' alt=''>" +
                    "   <img src='img/lab9/ajax_autocomplete_js.png' alt=''>" +
                    "   <img src='img/lab9/ajax_autocomplete.png' alt=''>" +
                    "   <img src='img/lab9/get_film_names_php.png' alt=''>" +
                    "</div>";
                break;
            case "full_functionality":
                document.querySelector("main .content").innerHTML =
                    "<p>На даному етапі наш сайт володіє наступним функціоналом:" +
                    "   <li> Перегляд основної сторінки;</li>" +
                    "   <li> Вибір мови сайту (російська, українська, англійська);</li>" +
                    "   <li> Реєстрація на сайті;</li>" +
                    "   <li> Пошук фільмів за назвою;</li>" +
                    "   <li> Авторизація (для зареєстрованих користувачів);</li>" +
                    "   <li> Додавання фільмів, жанрів, акторів, режисерів до бази даних (адміністратор);</li>" +
                    "   <li> Перегляд фільмів, жанрів, акторів, режисерів у базі даних (адміністратор);</li>" +
                    "</p>";
                break;
            case "comparing_functionality":
                document.querySelector("main .content").innerHTML =
                    "<p>" +
                    "Порівнявши з описаним функціоналом з 1-ї лабораторної роботи, можна зробити висновки, " +
                    "що частину заплановаго функціоналу було не зроблено, а саме:" +
                    "   <li>Пошук фільмів за допомогою фільтрів та сортування;</li>" +
                    "   <li>Пошук інформації про фільм;</li>" +
                    "   <li>Додавання коментарів (зереєстрований користувач);</li>" +
                    "   <li>Додавання фільмів у список улюблених (зереєстрований користувач);</li>" +
                    "   <li>Видалення коментарів залишинеми користувачами до фільму (адміністратор);</li>" +
                    "</p>";
                break;
            case "conclusions":
                document.querySelector("main .content").innerHTML =
                    "<p>Виконавши цю лабораторну роботу, ми придбали практичні навички роботи основ асинхронного обміну " +
                    "даними мовою JavaScript за допомогою технології Ajax та бібліотеки Jquery, формування " +
                    "Аjax-запиту засобами jQuery при реалізації практичних задач Web-програмування.</p>";
                break;
        }
    }
}