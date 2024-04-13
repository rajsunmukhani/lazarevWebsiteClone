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

