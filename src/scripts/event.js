let section_list = [];
let colorbg = ['starship','strawberry','pastelgreen'];
$(function(){
    
    let  $getsection = () =>{
            let result = [];
            let count = $('section').length;
            for(let i = 1; i <= count; i++)
            {
                result.push($(`#section-${i}`))
            }

            return result;
        }
    ;
    // Section List
    section_list = $getsection();

    // // console.log(list);
    // let myanimation = new TimelineLite();
    // TweenLite.set($container, {visibility : false});

    // myanimation.from($header, 0.5, {backgroundColor: '#222'});

    setTimeout(Init, .5);
})

// 초기화
function Init()
{

    TweenLite.fromTo(section_list[0], 1.5, {display:'block', opacity : 0}, {opacity : 1});

    
    
    for(let i = 0 ; i < 3; i++)
    {
        section_list[i].addClass(`bg-${colorbg[i]}`);
    }
    
    $('#header').addClass(`bg-${colorbg[0]}`);
    Move();
}

// Object 움직임
function Move()
{
    let t1 = new TimelineLite();

    let leftbox = $('.leftbox').find('img');
    let rightbox = $('rightbox');
    let title = rightbox.find('.title');
    let description = rightbox.find('.description');
    let activebutton = rightbox.find('.activebutton');

    t1.fromTo(leftbox, .5, {left : 0},{left:300});
    t1.from(leftbox, 0.9, {opacity : .1});
    t1.from(title, 0.2,{opacity : .1, right : 100}, "-=.8");
    t1.from(description, 0.2,{opacity : .1}, "-=.7");
    t1.from(activebutton, 0.2, {opacity : 0.1}, "-=.6");
    t1.play();
}




// 버튼 이벤트
$(function(){
    let fnb = $('#fnb');

    let hyperlink = fnb.find('a');

    hyperlink.on('click',function(e){
        console.log(e.target.alt);
        TweenLite.fromTo(section_list[0], 1.5, {display:'block', opacity : 0}, {opacity : 1});
        $('section').removeClass('active-screen');

        let lastch = e.target.alt.charAt(e.target.alt.length - 1);
        console.log(lastch);
        $(`#${e.target.alt}`).addClass('active-screen');

        for(let i = 0 ; i < 3; i++)
        {
            TweenLite.fromTo($(`#section-${i+1}`), 1.5, { opacity : 1}, {opacity : 0});
            TweenLite.fromTo($(`#section-${lastch}`), 1.5, { opacity : 0,display:'block'}, {opacity : 1});
            $('#header').removeClass(`bg-${colorbg[i]}`);
        }
        console.log(colorbg[lastch - 1]);
        $('#header').addClass(`bg-${colorbg[lastch - 1]}`);
    });
})

