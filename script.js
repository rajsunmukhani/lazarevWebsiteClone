function navAnim(){
    var nav = document.querySelector('.nav-pt2')

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

function page2Anim(){
    var pane = document.querySelectorAll(".page2-right .pg2-right-pt")
    
    
    pane.forEach(function(elem){

        
        elem.addEventListener("mouseenter",function(){
            var icons = elem.children[0].children[1];
            gsap.to(elem.childNodes[3],{
                opacity : 1,
                scale : 1
            })
            gsap.to(icons.childNodes[1],{
                top : 0,
                right : 0,
                duration : 0.25
            })
            gsap.to(icons.childNodes[3],{
                top : '-80%',
                right : '-80%',
                duration : 0.25
            })
        })
        elem.addEventListener("mouseleave",function(){
            var icons = elem.children[0].children[1];
            gsap.to(elem.childNodes[3],{
                opacity : 0,
                scale : 0.5
            })
            gsap.to(icons.childNodes[3],{
                top : 0,
                right : 0,
                duration : 0.25
            })
            gsap.to(icons.childNodes[1],{
                top : '80%',
                right : '80%',
                duration : 0.25
            })
        })
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x : dets.x - elem.getBoundingClientRect().x - 50 ,
                y : dets.y - elem.getBoundingClientRect().y - 150 
            })
        })
    })

    gsap.to('.bord1',{
        width : '100%',
        scrollTrigger : {
            trigger : '.bord1',
            scroller : 'body',
            // markers : true,
            start : 'top 85%',
        }
    })
    gsap.to('.bord2',{
        width : '100%',
        scrollTrigger : {
            trigger : '.bord2',
            scroller : 'body',
            // markers : true,
            start : 'top 85%',
        }
    })
    gsap.to('.bord3',{
        width : '100%',
        scrollTrigger : {
            trigger : '.bord3',
            scroller : 'body',
            // markers : true,
            start : 'top 85%',
        }
    })
    
}

function page3VidAnim(){
    
    var page3Video = document.querySelector('.page3 video');
    var playIcon = document.querySelector('.p3-play-vid');
    
    playIcon.addEventListener("click",function(){
        page3Video.play()
        gsap.to(page3Video,{
            display : 'initial',
            opacity : '1',
            transform : "scaleX(1) scaleY(1)",
            duration : 0.3,
        })
    });
    
    page3Video.addEventListener("click",function(){
        page3Video.pause()
        gsap.to(page3Video,{
            opacity : '0',
            display : 'none',
            // transform : "scaleX(80%) scaleY(20%)",
            // duration : 0.3,
        })
    })
    
}

function page6Anim(){
    var divs = document.querySelectorAll(".pg6-elem-right");
    var video = document.querySelectorAll(".pg6-elem-right video");
    
    
    
    divs.forEach(function(div){
            div.addEventListener("mouseenter",function(){
                div.childNodes[1].style.opacity = 0;
                div.childNodes[3].load();
                div.childNodes[3].style.opacity = 1;
                div.childNodes[3].style.display = "initial";
            })
            div.addEventListener("mouseleave",function(){
                div.childNodes[1].style.opacity = 1;
                div.childNodes[3].pause();
                div.childNodes[3].style.opacity = 0;
                div.childNodes[3].style.display = "none";
            })
    })
}

function page7Anim(){

    var pg7Elem = document.querySelectorAll('.pg7-right-pane')
    
    pg7Elem.forEach(function(pane){
        pane.addEventListener('mouseenter',function(){
            pane.childNodes[5].childNodes[3].load();
            gsap.to(pane.childNodes[5].childNodes[3],{
                display : 'initial',
                opacity : 1
            })
            gsap.to(pane.childNodes[5].childNodes[1],{
                opacity : 0
            })
        })
        pane.addEventListener('mouseleave',function(){
            pane.childNodes[5].childNodes[3].pause();
            gsap.to(pane.childNodes[5].childNodes[3],{
                display : 'none',
                opacity : 0
            })
            gsap.to(pane.childNodes[5].childNodes[1],{
                opacity : 1
            })
        })
    })
}

function page11Anim(){
    gsap.from('.pg11-pt3-pane h3',{
        x : '0',
        duration : 0.5,
        scrollTrigger : {
            trigger : ".pg11-pt3-pane h3",
            scroller : "body",
            // markers : true,
            start : "top 90%",
            end : "top 30%",
            scrub : 4
        } 
    })
}


navAnim();

page2Anim();

page3VidAnim();

page6Anim();

page7Anim()

page11Anim()
