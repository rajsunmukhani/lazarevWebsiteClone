var nav = document.querySelector('nav');
nav.addEventListener("mouseenter",function(){
    var tl = gsap.timeline()
    tl.to('.nav-body-overlay',{
        height : '220%',
        duration : 0.05
    })
    tl.from('nav-p2 span',{
        y : 25
    })
})