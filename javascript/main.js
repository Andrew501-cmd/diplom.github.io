function click_img(src)
{
    document.querySelector("#flexRadioDefault" + src).click();
}

function playSound(isRight)
{
    var audio = new Audio();
    if (isRight)
    {
        audio.src = 'resource/sound/true.mp3';
    }
    else
    {
        audio.src = 'resource/sound/false.mp3';
    }
    audio.play();
}

function showTrue()
{
    let elemModal = document.querySelector("#modalTrue");
    const modal = new bootstrap.Modal(elemModal);
    modal.show();
    playSound(true);
    setTimeout(function(){ modal.hide(); },2000);
}

function showFalse()
{
    let elemModal = document.querySelector("#modalFalse");
    const modal = new bootstrap.Modal(elemModal);
    modal.show();
    playSound(false);
    setTimeout(function(){ modal.hide(); },1000);
}

function check_radio(src)
{
    if (document.querySelector("#flexRadioDefault"+src).checked)
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text()
{
    let resp = document.querySelector("#collapse5_inside > div > div > div:nth-child(1) > input").value;
    if (resp.includes("1") & resp.includes("2") & resp.includes("3") & resp.includes("5") & resp.includes("6") & resp.includes("8"))
    {
        showTrue();
    }
    else
    {
        showFalse();    
    }
}

function check_box()
{
    let resp = document.querySelector("#flexCheckChecked2");
    let resp2 = document.querySelector("#flexCheckChecked4");
    let resp3 = document.querySelector("#flexCheckChecked1");
    let resp4 = document.querySelector("#flexCheckChecked3");
    if (resp.checked == true & resp2.checked == true & resp3.checked == false & resp4.checked == false)
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_box2()
{
    let resp20 = document.querySelector("#flexCheckChecked400");
    let resp30 = document.querySelector("#flexCheckChecked500");
    let resp40 = document.querySelector("#flexCheckChecked600");
    let resp50 = document.querySelector("#flexCheckChecked700");
    if (resp20.checked == true & resp30.checked == false & resp40.checked == false & resp50.checked == true)
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text2()
{
    if (document.querySelector("#collapse13_inside > div > div:nth-child(2) > input").value.toLowerCase() == "снежинки" & document.querySelector("#collapse13_inside > div > div:nth-child(3) > input").value.toLowerCase() == "календарь")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_box3()
{
    let resp1 = document.querySelector("#flexCheckDefault1");
    let resp2 = document.querySelector("#flexCheckDefault2");
    let resp3 = document.querySelector("#flexCheckDefault3");
    let resp4 = document.querySelector("#flexCheckDefault4");
    let resp5 = document.querySelector("#flexCheckDefault5");
    let resp6 = document.querySelector("#flexCheckDefault6");
    let resp7 = document.querySelector("#flexCheckDefault7");
    let resp8 = document.querySelector("#flexCheckDefault8");
    let resp9 = document.querySelector("#flexCheckDefault9");

    if (resp1.checked == true & resp2.checked == false & resp3.checked == true & resp4.checked == false & resp5.checked == false & resp6.checked == false & resp7.checked == false & resp8.checked == false & resp9.checked == true)
    {
        showTrue()
    }
    else
    {
        showFalse();
    }
}

function check_text3() 
{
    if (document.querySelector("#collapse19_inside > div > div > input").value.toLowerCase() == "друзья")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text4()
{
    if (document.querySelector("#collapse20_inside > div > div:nth-child(3) > input").value.toLowerCase() == "роза" &
    document.querySelector("#collapse20_inside > div > div:nth-child(4) > input").value.toLowerCase() == "коза" &
    document.querySelector("#collapse20_inside > div > div:nth-child(5) > input").value.toLowerCase() == "лук" &
    document.querySelector("#collapse20_inside > div > div:nth-child(6) > input").value.toLowerCase() == "рак" &
    document.querySelector("#collapse20_inside > div > div:nth-child(7) > input").value.toLowerCase() == "палка" &
    document.querySelector("#collapse20_inside > div > div:nth-child(8) > input").value.toLowerCase() == "бал" &
    document.querySelector("#collapse20_inside > div > div:nth-child(9) > input").value.toLowerCase() == "род" &
    document.querySelector("#collapse20_inside > div > div:nth-child(10) > input").value.toLowerCase() == "нож" &
    document.querySelector("#collapse20_inside > div > div:nth-child(11) > input").value.toLowerCase() == "сюда" &
    document.querySelector("#collapse20_inside > div > div:nth-child(12) > input").value.toLowerCase() == "дом" &
    document.querySelector("#collapse20_inside > div > div:nth-child(13) > input").value.toLowerCase() == "мёд" &
    document.querySelector("#collapse20_inside > div > div:nth-child(14) > input").value.toLowerCase() == "лез" &
    document.querySelector("#collapse20_inside > div > div:nth-child(15) > input").value.toLowerCase() == "пить")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text5()
{
    if (document.querySelector("#collapse22_inside > div > div > input").value == "34512")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text6()
{
    if (document.querySelector("#collapse23_inside > div > div > input").value == "562314")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_box5()
{
    let resp1 = document.querySelector("#flexCheckDefault201");
    let resp2 = document.querySelector("#flexCheckDefault202");
    let resp3 = document.querySelector("#flexCheckDefault203");
    let resp4 = document.querySelector("#flexCheckDefault204");
    let resp5 = document.querySelector("#flexCheckDefault205");
    let resp6 = document.querySelector("#flexCheckDefault206");
    let resp7 = document.querySelector("#flexCheckDefault207");
    let resp8 = document.querySelector("#flexCheckDefault208");

    if (resp1.checked == false & resp2.checked == true & resp3.checked == false & resp4.checked == true & resp5.checked == false & resp6.checked == true & resp7.checked == false & resp8.checked == true)
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_box10()
{
    let resp1 = document.querySelector("#flexCheckDefault77");
    let resp2 = document.querySelector("#flexCheckDefault78");
    let resp3 = document.querySelector("#flexCheckDefault79");
    let resp4 = document.querySelector("#flexCheckDefault80");
    let resp5 = document.querySelector("#flexCheckDefault81");
    let resp6 = document.querySelector("#flexCheckDefault82");
    let resp7 = document.querySelector("#flexCheckDefault83");
    let resp8 = document.querySelector("#flexCheckDefault84");
    let resp9 = document.querySelector("#flexCheckDefault85");
    let resp10 = document.querySelector("#flexCheckDefault86");

    if (resp1.checked == false & resp2.checked == true & resp3.checked == false & resp4.checked == true & resp5.checked == true & resp6.checked == true & resp7.checked == true & resp8.checked == true & resp9.checked == false & resp10.checked == true)
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text7()
{
    let resp1 = document.querySelector("#collapse41_inside > div > div:nth-child(2) > input").value.toLowerCase();
    let resp2 = document.querySelector("#collapse41_inside > div > div:nth-child(3) > input").value.toLowerCase();
    let resp3 = document.querySelector("#collapse41_inside > div > div:nth-child(4) > input").value.toLowerCase();
    let resp4 = document.querySelector("#collapse41_inside > div > div:nth-child(5) > input").value.toLowerCase();
    let resp5 = document.querySelector("#collapse41_inside > div > div:nth-child(6) > input").value.toLowerCase();
    let resp6 = document.querySelector("#collapse41_inside > div > div:nth-child(7) > input").value.toLowerCase();
    let resp7 = document.querySelector("#collapse41_inside > div > div:nth-child(8) > input").value.toLowerCase();
    let resp8 = document.querySelector("#collapse41_inside > div > div:nth-child(9) > input").value.toLowerCase();
    let resp9 = document.querySelector("#collapse41_inside > div > div:nth-child(10) > input").value.toLowerCase();
    let resp10 = document.querySelector("#collapse41_inside > div > div:nth-child(11) > input").value.toLowerCase();
    let resp11 = document.querySelector("#collapse41_inside > div > div:nth-child(12) > input").value.toLowerCase();
    let resp12 = document.querySelector("#collapse41_inside > div > div:nth-child(13) > input").value.toLowerCase();
    let resp13 = document.querySelector("#collapse41_inside > div > div:nth-child(14) > input").value.toLowerCase();
    let resp14 = document.querySelector("#collapse41_inside > div > div:nth-child(15) > input").value.toLowerCase();
    let resp15 = document.querySelector("#collapse41_inside > div > div:nth-child(16) > input").value.toLowerCase();
    let resp16 = document.querySelector("#collapse41_inside > div > div:nth-child(17) > input").value.toLowerCase();
    let resp17 = document.querySelector("#collapse41_inside > div > div:nth-child(18) > input").value.toLowerCase();
    let resp18 = document.querySelector("#collapse41_inside > div > div:nth-child(19) > input").value.toLowerCase();
    let resp19 = document.querySelector("#collapse41_inside > div > div:nth-child(20) > input").value.toLowerCase();
    let resp20 = document.querySelector("#collapse41_inside > div > div:nth-child(21) > input").value.toLowerCase();

    if (resp1 == "больничный" & resp2 == "молочный" & resp3 == "яичница" & resp4 == "удачный" & resp5 == "синичка" &
    resp6 == "звучный" & resp7 == "лисичка" & resp8 == "ежевичка" & resp9 == "горчичка" & resp10 == "аптечный" &
    resp11 == "стрелочка" & resp12 == "ночка" & resp13 == "дочка" & resp14 == "строчка" & resp15 == "стаканчик" &
    resp16 == "розочка" & resp17 == "пряничный" & resp18 == "сестричка" & resp19 == "лимончик" & resp20 == "замочная")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text90()
{
    let resp1 = document.querySelector("#collapse44_inside > div > div:nth-child(2) > input").value.toLowerCase();
    let resp2 = document.querySelector("#collapse44_inside > div > div:nth-child(3) > input").value.toLowerCase();
    let resp3 = document.querySelector("#collapse44_inside > div > div:nth-child(4) > input").value.toLowerCase();
    let resp4 = document.querySelector("#collapse44_inside > div > div:nth-child(5) > input").value.toLowerCase();
    let resp5 = document.querySelector("#collapse44_inside > div > div:nth-child(6) > input").value.toLowerCase();
    let resp6 = document.querySelector("#collapse44_inside > div > div:nth-child(7) > input").value.toLowerCase();
    let resp7 = document.querySelector("#collapse44_inside > div > div:nth-child(8) > input").value.toLowerCase();
    let resp8 = document.querySelector("#collapse44_inside > div > div:nth-child(9) > input").value.toLowerCase();
    let resp9 = document.querySelector("#collapse44_inside > div > div:nth-child(10) > input").value.toLowerCase();
    let resp10 = document.querySelector("#collapse44_inside > div > div:nth-child(11) > input").value.toLowerCase();
    let resp11 = document.querySelector("#collapse44_inside > div > div:nth-child(12) > input").value.toLowerCase();
    let resp12 = document.querySelector("#collapse44_inside > div > div:nth-child(13) > input").value.toLowerCase();
    let resp13 = document.querySelector("#collapse44_inside > div > div:nth-child(14) > input").value.toLowerCase();
    let resp14 = document.querySelector("#collapse44_inside > div > div:nth-child(15) > input").value.toLowerCase();

    if (resp1 == "машина" & resp2 == "задача" & resp3 == "чугун" & resp4 == "шишки" & resp5 == "ёжик" &
    resp6 == "овчарка" & resp7 == "перчатки" & resp8 == "снежинка" & resp9 == "ужин" & resp10 == "щука" &
    resp11 == "вершина" & resp12 == "чижик" & resp13 == "часовщик" & resp14 == "чудо")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function check_text91()
{
    let resp1 = document.querySelector("#collapse47_inside > div > div:nth-child(2) > input").value.toLowerCase();
    let resp2 = document.querySelector("#collapse47_inside > div > div:nth-child(3) > input").value.toLowerCase();
    let resp3 = document.querySelector("#collapse47_inside > div > div:nth-child(4) > input").value.toLowerCase();
    let resp4 = document.querySelector("#collapse47_inside > div > div:nth-child(5) > input").value.toLowerCase();
    let resp5 = document.querySelector("#collapse47_inside > div > div:nth-child(6) > input").value.toLowerCase();
    let resp6 = document.querySelector("#collapse47_inside > div > div:nth-child(7) > input").value.toLowerCase();

    if (resp1 == "владимир" & resp2 == "светлана" & resp3 == "борис" & resp4 == "галина" & resp5 == "иван" &
    resp6 == "дмитрий")
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}

function checkTest()
{
    let radio1 = document.querySelector("#flexRadioDefault1002").checked;
    let radio2 = document.querySelector("#flexRadioDefault1004").checked;
    let radio3 = document.querySelector("#flexRadioDefault1005").checked;
    let radio4 = document.querySelector("#flexRadioDefault1008").checked;
    let radio5 = document.querySelector("#flexRadioDefault1010").checked;
    let radio6 = document.querySelector("#flexRadioDefault1016").checked;
    let radio7 = document.querySelector("#flexRadioDefault1018").checked;
    let radio8 = document.querySelector("#flexRadioDefault1023").checked;
    let radio9 = document.querySelector("#flexRadioDefault1024").checked;
    
    let check_box1 = document.querySelector("#flexCheckDefault800");
    let check_box2 = document.querySelector("#flexCheckDefault801");
    let check_box3 = document.querySelector("#flexCheckDefault802");
    let check_box4 = document.querySelector("#flexCheckDefault803");
    let check_box5 = document.querySelector("#flexCheckDefault804");

    if (radio1 & radio2 & radio3 & radio4 & radio5 & radio6 & radio7 & radio8 & radio9 & check_box1.checked == false & check_box2.checked == false & check_box3.checked == true & check_box4.checked == true & check_box5.checked == true)
    {
        showTrue();
    }
    else
    {
        showFalse();
    }
}