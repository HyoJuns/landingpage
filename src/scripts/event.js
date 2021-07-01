
let colorObject = {
    colorvalue : ['starship', 'strawberry','pastelgreen'],
    colorname : 'bg-'
};

let sectionObject = {
    sectionname : 'section-',
    sectionnumber : [1,2,3]
}

let prevobject = [];

// 초기화
$(()=>{Init()});


// 버튼 이벤트
$(function(){

    $('#fnb').find('img').on('click',eventButton);    
});
// 초기화
function Init()
{
    let t1 = new TimelineLite;
    $('#section-1').addClass(`${colorObject.colorname}${colorObject.colorvalue[0]}`).addClass('active-screen');
    $('#header').addClass(`${colorObject.colorname}${colorObject.colorvalue[0]}`).addClass('active-screen');;
    let leftbox = $('#section-1').find('.leftbox');
    t1.to(leftbox, 1, {
        x : 0,
        opacity : 1
    });

    let rightbox = $('#section-1').find('.rightbox');
    t1.to(rightbox, 1, {
        x : 0,
        opacity : 1
    });

    prevobject[0] = $('#section-1');
    prevobject[1] = leftbox;
    prevobject[2] = rightbox;
}

// 버튼 이벤트
function eventButton()
{
    let imagealt = $(this).attr('alt');
    
    let t1 = new TimelineLite;
    let pret1 = new TimelineLite;

    let index = imagealt.charAt(imagealt.length - 1);
    $(`section`).removeAttr('class');
    $("#header").removeAttr('class')
    let thissection = $(`#${sectionObject.sectionname}${index}`);
    pret1.to(prevobject[1], .4,{
        opacity : 0,
        x : -100
    });
    pret1.to(prevobject[2], .4,{
        opacity : 0,
        x : 500
    });


    // Class 추가
    thissection.addClass(`${colorObject.colorname}${colorObject.colorvalue[index - 1]}`).addClass('active-screen');
    $('#header').addClass(`${colorObject.colorname}${colorObject.colorvalue[index - 1]}`).addClass('active-screen');;




    let leftbox = $(thissection).find('.leftbox');
    t1.to(leftbox, .5, {
        x : 0,
        opacity : 1
    });

    let rightbox = $(thissection).find('.rightbox');
    t1.to(rightbox, .5, {
        x : 0,
        opacity : 1
    });
    

    prevobject[0] = thissection;
    prevobject[1] = leftbox;
    prevobject[2] = rightbox;
    // console.log(`${colorObject.colorname}${colorObject.colorvalue[1]}`);

    t1.restart();
}