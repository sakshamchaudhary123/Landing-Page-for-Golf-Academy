var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){

    crsr.style.left = dets.x+30+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4"); /*Select All <h4> Elements Inside the Element with ID nav */
h4all.forEach(function (elem) {       /*Loop Through Each <h4> Element:*/
  elem.addEventListener("mouseenter", function () {
    crsr.style.transform = "scale(3)";
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.transform = "scale(1)";
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav",{
    backgroundColor: "#000",
    height:"110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",// Scroller container (optional, defaults to closest scrollable ancestor)
        //markers: true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
} )

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",// Scroller container (optional, defaults to closest scrollable ancestor)
        //markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
     trigger:"#about-us",// Element that triggers the animation
     scroller:"body", // Scroller container (optional, defaults to closest scrollable ancestor)
     //markers:true,// Display markers for debugging purposes (optional)
     start:"top 70%",// Start the animation when top of trigger element reaches 60% of viewport
     end:"top 65% ",// End the animation when top of trigger element reaches 58% of viewport
     scrub:4// Scrub: smooth animation effect (optional)
    }

});

gsap.from(".card",{
    scale:0.1,
    opacity:0,
    duration:1,
    scrollTrigger:{
     trigger:".card",// Element that triggers the animation
     scroller:"body", // Scroller container (optional, defaults to closest scrollable ancestor)
     //markers:true,// Display markers for debugging purposes (optional)
     start:"top 70%",// Start the animation when top of trigger element reaches 60% of viewport
     end:"top 65% ",// End the animation when top of trigger element reaches 58% of viewport
     scrub:2// Scrub: smooth animation effect (optional)
    }

});

gsap.from("#colon-1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon-1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});
gsap.from("#colon-2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon-1", // it triggers when colon-1 ends
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
});

gsap.form("#page4 h1",{
    y:50,
    scrollTrigger:{
    trigger:"#page4 h1", // it triggers when colon-1 ends
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }    
});