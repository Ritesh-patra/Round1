console.log("arya");

function sliderUpImg() {

    let t2 = gsap.timeline({

        scrollTrigger: {
            trigger: ".arya1",
            start: "0% 40%",
            end: "40% 40%",
            scrub: 1,
            // markers: true,
        }

    })

    t2.from(".arya1 div>h1", {
        y: "100%",
    }, "a")


    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".arya1",
            start: "0% 0%",
            end: "300% 0%",
            scrub: 2,
            // markers: true,
            pin: true,
        }
    })

    t1.to(".arya_slider_img1", {
        top: "50%",
        x: "0"
    }, "b")

    t1.to(".arya_slider_img2", {
        top: "50%",
        x: "0"
    }, "c")

    t1.to(".arya_slider_img3", {
        top: "50%",
        x: "0"
    }, "d")

    t1.to(".arya1 p,h1", {
        opacity: 0,
    }, "a")

    t1.to(".arya_scatter_img", {
        display: "block"
    }, "a")

    t1.to(".arya_scatter_img21", {
        y: "160",
        x: "0"
    }, "a")

    t1.to(".arya_slider_img", {
        y: "160",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img20", {
        y: "-160",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img19", {
        y: "480",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img1", {
        y: "100",
        x: "-240"
    }, "a")

    t1.to(".arya_scatter_img2", {
        y: "-220",
        x: "-240"
    }, "a")

    t1.to(".arya_scatter_img3", {
        y: "420",
        x: "-240"
    }, "a")

    t1.to(".arya_scatter_img4", {
        y: "160",
        x: "-480"
    }, "a")

    t1.to(".arya_scatter_img5", {
        y: "-160",
        x: "-480"
    }, "a")

    t1.to(".arya_scatter_img6", {
        y: "480",
        x: "-480"
    }, "a")

    t1.to(".arya_scatter_img7", {
        y: "100",
        x: "-720"
    }, "a")

    t1.to(".arya_scatter_img8", {
        y: "-220",
        x: "-720"
    }, "a")

    t1.to(".arya_scatter_img9", {
        y: "420",
        x: "-720"
    }, "a")

    // RIGHT
    t1.to(".arya_scatter_img10", {
        y: "100",
        x: "240"
    }, "a")

    t1.to(".arya_scatter_img11", {
        y: "-220",
        x: "240"
    }, "a")

    t1.to(".arya_scatter_img12", {
        y: "420",
        x: "240"
    }, "a")

    t1.to(".arya_scatter_img13", {
        y: "160",
        x: "480"
    }, "a")

    t1.to(".arya_scatter_img14", {
        y: "-160",
        x: "480"
    }, "a")

    t1.to(".arya_scatter_img15", {
        y: "480",
        x: "480"
    }, "a")

    t1.to(".arya_scatter_img16", {
        y: "100",
        x: "720"
    }, "a")

    t1.to(".arya_scatter_img17", {
        y: "-220",
        x: "720"
    }, "a")

    t1.to(".arya_scatter_img18", {
        y: "420",
        x: "720"
    }, "a")


}

sliderUpImg()


function arya_scroll(){

    gsap.to(".arya2 .arya_scroll p",{
        x:'-100%',
        repeat:-1,
        duration:10,
        ease:"linear",
    })
    

}

arya_scroll()