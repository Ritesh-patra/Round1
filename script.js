const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

var grow = 0;
var count = $(".counter");
setInterval(() => {
  if (grow <= 100) {
    count.innerHTML = grow++;
  }else{
    grow = 100
  }
}, 45);


tl = gsap.timeline();

tl.to(".counter", {
  y: "-100vh",
  delay: 5,
  stagger: 0.1,
  ease: "Power4.inOut",
},'a');


tl.to(".loader .bar", {
  y: "-100vh",
  delay: 5,
  stagger: 0.1,
  ease: "Power4.inOut",
},'a');

tl.to(".loader", {
 display: "none"
});

const lensi = () => {
  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
}

const btn = document.querySelector("#throttle");
 
// Throttling Function
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        // console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector('.loader')
.addEventListener("mousemove",
    throttleFunction((dets) => {
       var div = document.createElement("div");
       var img = document.createElement("img");
       div.style.left = dets.clientX + "px";
       div.style.top = dets.clientY + "px";
      divImg = div.classList.add("divImg");
      document.body.appendChild(div);
      const random = Math.floor(Math.random () *7);
      img.setAttribute("src",`./images/img${random}.png`);
      div.appendChild(img);

      
      setTimeout(() => {
        div.remove()
      }, 250);
    },50 ));








lensi();