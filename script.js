const $ = (e) => document.querySelector(e);
const $$ = (e) => document.querySelectorAll(e);

function allLoaderAnimations() {
  var tl = gsap.timeline();
  tl.to(
    "#num3",
    {
      y: "-2000%",
      duration: 3,
    },
    "a"
  );

  tl.to(
    "#num2",
    {
      y: "-1100%",
      duration: 4.5,
    },
    "a"
  );

  tl.to(
    "#num1",
    {
      delay: 3.5,
      y: "-100%",
      duration: 1,
    },
    "a"
  );

  tl.to(
    ".fulling",
    {
      width: "100%",
      duration: 4.5,
    },
    "a"
  );

  tl.to(
    ".loadingcont",
    {
      delay: 4.3,
      display: "none",
      ease: Power4.inOut,
    },
    "a"
  );

  const loader = () => {
    tl = gsap.timeline();

    tl.to(
      ".counter",
      {
        y: "-100vh",
        delay: 5,
        stagger: 0.1,
        ease: "Power4.inOut",
      },
      "a"
    );

    tl.to(
      ".loader .bar",
      {
        y: "-100vh",
        delay: 5,
        stagger: 0.1,
        ease: "Power4.inOut",
      },
      "a"
    );

    tl.to(".loader", {
      display: "none",
    });
  };
}

const lensi = () => {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

// const imageHover = () => {
//   const btn = document.querySelector("#throttle");

// // Throttling Function
// const throttleFunction = (func, delay) => {

//     let prev = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         // console.log(now - prev, delay);
//         if (now - prev > delay) {
//             prev = now;
//             return func(...args);
//         }
//     }
// }
// document.querySelector('.loader')
// .addEventListener("mousemove",
//     throttleFunction((dets) => {
//        var div = document.createElement("div");
//        var img = document.createElement("img");
//        div.style.left = dets.clientX + "px";
//        div.style.top = dets.clientY + "px";
//       divImg = div.classList.add("divImg");
//       document.body.appendChild(div);
//       const random = Math.floor(Math.random () *7);
//       img.setAttribute("src",`./images/img${random}.png`);
//       div.appendChild(img);

//       setTimeout(() => {
//         div.remove()
//       }, 250);
//     },50 ));
// }

lensi();
allLoaderAnimations()