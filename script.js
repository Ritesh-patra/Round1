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
}

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

allLoaderAnimations();
loader();
