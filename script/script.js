let rootElem = $('#root');

let width = rootElem.width();
let height = rootElem.height();

$('.screen').width(width);
$('.screen').height(height);

$('.screen .slides li').width(width);
$('.screen .slides li').height(height);

let slideCnt = $('.screen slides li').length;                   //указываем количество слайдов

$('.screen slides').width(width * slideCnt)

let page = 0;
const SPEED = 200;

function goRight() {
    if (page === slideCnt-1) {
        return
    }
    $('.screen .slides').animate({'left': `-${++page*width}px`}, SPEED);
    changeActivePoint();
}

function goLeft() {
    if (page === 0){
        return
    }
    $('.screen .slides').animate({'left': `-${--page*width}px`}, SPEED);
    changeActivePoint();
}


function changeActivePoint () {
    $('.points li').removeClass('active');
    $('.points li').eq(page).addClass('active');//points li - итерируемый объяект, то есть несколько объектов. eq позволяет вытягивать Jquery element
    
}

$('.t-left').on('click', goLeft );
$('.t-right').on('click', goRight);

$('.points li').on('click', function() {
       let cur = $(this); 
       let index = $('.points li').index(cur); //нужно определить элемент, на который мы кликали c помощью index
       page = index;
       $('.screen .slides').animate({'left': `-${index*width}px`}, SPEED);
       
})

//ДОБАВЛЕНИЕ КЛАССА
$('li').addClass('active');

//УДАЛЕНИЕ КЛАССА
$('li').removeClass('active');


$('.points li').on('click', function() {
    let cur = $(this); //считываем элемент
    
    $('.points li').removeClass('active');
    cur.addClass('active');

    let index = $('.points li').index(cur);
    page = index;
    
    $('.screen .slides').animate({'left': `-${index*width}px`}, SPEED);

    
})