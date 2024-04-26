console.log("arya");

const element = document.querySelector('.arya_card1');
var arya_card1 = document.querySelector('.arya_card1');
var arya3Div = document.querySelector('.arya3');

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {

        // Get the coordinates of the element
        var rect = arya_card1.getBoundingClientRect();
        var rect1 = arya3Div.getBoundingClientRect();

        // Extracting the coordinates
        var topLeftCorner = { x: Math.abs((rect.left / window.innerWidth * 100)), y: Math.abs((rect.top - rect1.top) / window.innerHeight * 100) };
        var bottomLeftCorner = { x: Math.abs((rect.left / window.innerWidth * 100)), y: Math.abs((rect.bottom - rect1.bottom) / window.innerHeight * 100) };
        var topRightCorner = { x: Math.abs((rect.right / window.innerWidth * 100)), y: Math.abs((rect.top - rect1.top) / window.innerHeight * 100) };
        var bottomRightCorner = { x: Math.abs((rect.right / window.innerWidth * 100)), y: Math.abs((rect.bottom - rect1.bottom) / window.innerHeight * 100) };

        let arya3_div2 = document.querySelector(".arya3_div2")
        arya3_div2.style.clipPath = `polygon(${topLeftCorner.x}%  ${topLeftCorner.y}%, ${topRightCorner.x}% ${topRightCorner.y}%, ${bottomRightCorner.x}% ${100 - bottomRightCorner.y}%, ${bottomLeftCorner.x}% ${100 - bottomLeftCorner.y}%)`;


    }
});

observer.observe(element, { attributes: true });

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

    t1.to(".arya_slider_img1", 1, {
        top: "50%",
        x: "0"
    }, "b")

    t1.to(".arya_slider_img2", 1, {
        top: "50%",
        x: "0"
    }, "c")

    t1.to(".arya_slider_img3", 1, {
        top: "50%",
        x: "0"
    }, "d")

    t1.to(".arya1 p,.arya1 h1,.arya1 h4", 1, {
        opacity: 0,
    }, "a")

    t1.to(".arya_scatter_img", 1, {
        display: "block"
    }, "a")

    t1.to(".arya_slider_img", 4, {
        y: "160",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img21", 4, {
        y: "160",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img20", 4, {
        y: "-160",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img19", 4, {
        y: "480",
        x: "0"
    }, "a")

    t1.to(".arya_scatter_img1", 4, {
        y: "100",
        x: "-240"
    }, "a")

    t1.to(".arya_scatter_img2", 4, {
        y: "-220",
        x: "-240"
    }, "a")

    t1.to(".arya_scatter_img3", 4, {
        y: "420",
        x: "-240"
    }, "a")

    t1.to(".arya_scatter_img4", 4, {
        y: "160",
        x: "-480"
    }, "a")

    t1.to(".arya_scatter_img5", 4, {
        y: "-160",
        x: "-480"
    }, "a")

    t1.to(".arya_scatter_img6", 4, {
        y: "480",
        x: "-480"
    }, "a")

    t1.to(".arya_scatter_img7", 4, {
        y: "100",
        x: "-720"
    }, "a")

    t1.to(".arya_scatter_img8", 4, {
        y: "-220",
        x: "-720"
    }, "a")

    t1.to(".arya_scatter_img9", 4, {
        y: "420",
        x: "-720"
    }, "a")

    // RIGHT
    t1.to(".arya_scatter_img10", 4, {
        y: "100",
        x: "240"
    }, "a")

    t1.to(".arya_scatter_img11", 4, {
        y: "-220",
        x: "240"
    }, "a")

    t1.to(".arya_scatter_img12", 4, {
        y: "420",
        x: "240"
    }, "a")

    t1.to(".arya_scatter_img13", 4, {
        y: "160",
        x: "480"
    }, "a")

    t1.to(".arya_scatter_img14", 4, {
        y: "-160",
        x: "480"
    }, "a")

    t1.to(".arya_scatter_img15", 4, {
        y: "480",
        x: "480"
    }, "a")

    t1.to(".arya_scatter_img16", 4, {
        y: "100",
        x: "720"
    }, "a")

    t1.to(".arya_scatter_img17", 4, {
        y: "-220",
        x: "720"
    }, "a")

    t1.to(".arya_scatter_img18", 4, {
        y: "420",
        x: "720"
    }, "a")


}

sliderUpImg()


function arya_scroll() {

    gsap.to(".arya2 .arya_scroll p", {
        x: '-100%',
        repeat: -1,
        duration: 10,
        ease: "linear",
    })


}

arya_scroll()

function rotatingCard() {

    let t2 = gsap.timeline({

        scrollTrigger: {
            trigger: ".arya3",
            start: "0% 0%",
            end: "100% 0%",
            scrub: 1,
            markers: true,
            pin: true,
        }

    })

    t2.to(".arya_card1", {
        rotationY: 180,
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 2,
    }, "a")

}

rotatingCard()


function getElementCoordinates(element) {
    // Get position relative to parent
    const boundingRect = element.getBoundingClientRect();
    const { top, left, width, height } = boundingRect;

    // Get rotation angle (assuming rotation in CSS)
    const computedStyle = window.getComputedStyle(element);
    const transform = computedStyle.getPropertyValue('transform');
    let rotation = 0;
    if (transform && transform !== 'none') {
        // Parse the rotation value from the transform matrix
        const matrix = transform.match(/^matrix\((.*)\)$/);
        if (matrix) {
            const matrixValues = matrix[1].split(',').map(parseFloat);
            rotation = Math.atan2(matrixValues[1], matrixValues[0]);
        }
    }

    // Calculate rotated coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const topLeftX = centerX + Math.cos(rotation) * (-width / 2) - Math.sin(rotation) * (-height / 2);
    const topLeftY = centerY + Math.sin(rotation) * (-width / 2) + Math.cos(rotation) * (-height / 2);

    const topRightX = centerX + Math.cos(rotation) * (width / 2) - Math.sin(rotation) * (-height / 2);
    const topRightY = centerY + Math.sin(rotation) * (width / 2) + Math.cos(rotation) * (-height / 2);

    const bottomLeftX = centerX + Math.cos(rotation) * (-width / 2) - Math.sin(rotation) * (height / 2);
    const bottomLeftY = centerY + Math.sin(rotation) * (-width / 2) + Math.cos(rotation) * (height / 2);

    const bottomRightX = centerX + Math.cos(rotation) * (width / 2) - Math.sin(rotation) * (height / 2);
    const bottomRightY = centerY + Math.sin(rotation) * (width / 2) + Math.cos(rotation) * (height / 2);

    return {
        topLeft: { x: topLeftX, y: topLeftY },
        topRight: { x: topRightX, y: topRightY },
        bottomLeft: { x: bottomLeftX, y: bottomLeftY },
        bottomRight: { x: bottomRightX, y: bottomRightY }
    };
}

// Example usage:
const element1 = document.querySelector('.arya_card1');
const coordinates = getElementCoordinates(element1);
console.log(coordinates);



var rect = arya_card1.getBoundingClientRect();
var rect1 = arya3Div.getBoundingClientRect();

// Extracting the coordinates
var topRightCorner = { X: rect.right, y: rect.top };

console.log(topRightCorner);


let newP = new Promise((res,rej)=>{

})

async function fn(){
    let a = 10;
    return new Promise((res,rej)=>{
        res("as")
    });
}

let res = fn()
console.log(res);

debugger;