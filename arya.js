console.log("arya");

function scatterImg() {

    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".arya2",
            start: "0% 0%",
            end: "100% 0%",
            scrub: 2,
            // markers: true,
            pin: true,
        }
    })

    t1.to(".anime_pic21", {
        y: "160",
        x: "0"
    }, "a")

    t1.to(".anime_pic20", {
        y: "-160",
        x: "0"
    }, "a")

    t1.to(".anime_pic19", {
        y: "480",
        x: "0"
    }, "a")

    t1.to(".anime_pic1", {
        y: "100",
        x: "-240"
    }, "a")

    t1.to(".anime_pic2", {
        y: "-220",
        x: "-240"
    }, "a")

    t1.to(".anime_pic3", {
        y: "420",
        x: "-240"
    }, "a")

    t1.to(".anime_pic4", {
        y: "160",
        x: "-480"
    }, "a")

    t1.to(".anime_pic5", {
        y: "-160",
        x: "-480"
    }, "a")

    t1.to(".anime_pic6", {
        y: "480",
        x: "-480"
    }, "a")

    t1.to(".anime_pic7", {
        y: "100",
        x: "-720"
    }, "a")

    t1.to(".anime_pic8", {
        y: "-220",
        x: "-720"
    }, "a")

    t1.to(".anime_pic9", {
        y: "420",
        x: "-720"
    }, "a")

    // RIGHT
    t1.to(".anime_pic10", {
        y: "100",
        x: "240"
    }, "a")

    t1.to(".anime_pic11", {
        y: "-220",
        x: "240"
    }, "a")

    t1.to(".anime_pic12", {
        y: "420",
        x: "240"
    }, "a")

    t1.to(".anime_pic13", {
        y: "160",
        x: "480"
    }, "a")

    t1.to(".anime_pic14", {
        y: "-160",
        x: "480"
    }, "a")

    t1.to(".anime_pic15", {
        y: "480",
        x: "480"
    }, "a")

    t1.to(".anime_pic16", {
        y: "100",
        x: "720"
    }, "a")

    t1.to(".anime_pic17", {
        y: "-220",
        x: "720"
    }, "a")

    t1.to(".anime_pic18", {
        y: "420",
        x: "720"
    }, "a")


}

scatterImg()