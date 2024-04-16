function navAnim(){
    var nav = document.querySelector('nav')

    nav.addEventListener('mouseenter',function(){
        let tl = gsap.timeline();

        tl.to(".nav-bottom",{
            height : '26vh'
        })
        tl.to(".nav-pt2-pane h5",{
            display : 'block'
        })
        tl.to(".nav-pt2-pane h5 span",{
            delay : -0.7,
            y : 0,
            stagger : {
                amount : 0.3
            }
        })
    })
    nav.addEventListener('mouseleave',function(){
        let tl = gsap.timeline();
        
        tl.to(".nav-pt2-pane h5 span",{
            // delay : -0.7,
            y : 25,
            stagger : {
                amount : 0.3
            }
        })
        tl.to(".nav-pt2-pane h5",{
            display : 'none',
            duration : 0.1
        })
        tl.to(".nav-bottom",{
            delay : -0.5,
            duration : 0.2,
            height : 0
        })
    })
}

navAnim();

function page2Anim(){
    var pane = document.querySelectorAll(".page2-right .pg2-right-pt")
    
    pane.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity : 1,
                scale : 1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity : 0,
                scale : 0.5
            })
        })
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x : dets.x - elem.getBoundingClientRect().x - 50 ,
                y : dets.y - elem.getBoundingClientRect().y - 150 
            })
        })
    })
}

page2Anim();
