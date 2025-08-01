function page1Animation(){
  var tl = gsap.timeline();

  tl.from("nav h1, nav .part2", {
    y: -30,
    duration: 0.6,
    delay: 0.3,
    opacity: 0,
    stagger: 0.2,
  });

  tl.from(".center1 h1", {
    x: -200,
    duration: 0.2,
    delay: 0.15,
    opacity: 0,
  });

  tl.from(".center1 p", {
    x: -100,
    duration: 0.2,
    delay: 0.15,
    opacity: 0,
  });

  tl.from(
    ".center2 img",
    {
      x: 100,
      duration: 0.2,
      delay: 0.15,
      opacity: 0,
    },
    "-=0.2"
  );

  tl.from(".center1 button", {
    opacity: 0,
  });

  tl.from(".section1bottom img", {
    y: -40,
    opacity: 0,
    duration: 0.4,
    stagger: 0.2,
  });
}



function page2Animation(){
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });

  tl2.from(".services h1", {
    x: -300,
    duration: 0.2,
    delay: 0.15,
    opacity: 0,
  });
  tl2.from(".services p", {
    x: 1000,
    duration: 0.2,
    delay: 0.1,
    opacity: 0,
  });

  tl2.from(
    ".elem.left1",
    {
      x: -300,
      duration: 0.4,
      delay: 0.3,
      opacity: 0,
    },
    "anim"
  );

  tl2.from(
    ".elem.right1",
    {
      x: 300,
      duration: 0.4,
      delay: 0.3,
      opacity: 0,
    },
    "anim"
  );

  tl2.from(
    ".elem.left2",
    {
      x: -300,
      duration: 0.4,
      delay: 0.3,
      opacity: 0,
    },
    "anim2"
  );

  tl2.from(
    ".elem.right2",
    {
      x: 300,
      duration: 0.4,
      delay: 0.3,
      opacity: 0,
    },
    "anim2"
  );
}

page1Animation();
page2Animation();