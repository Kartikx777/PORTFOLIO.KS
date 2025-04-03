var timeout;



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easyinout
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easyInout,
            duration: 2,
            delay: -1,
            stagger: 0.2

        })
        .from("#herofooter", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInout,
        });

}

// function circlechaptakro() {
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;

//     window.addEventListener("mousemove", function (dets) {
//         xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xdiff);
//         yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - ydiff);

//         xprev = dets.clientX;
//         yprev = dets.clientY;


//         circleMouseFollower(xscale , yscale);
//     })
// }
// circlechaptakro();

// function circleMouseFollower(xscale,yscale) {
//     window.addEventListener("mousemove", function (dets) {
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
// }
  
// function circlechaptakro() {
//     var xscale = 1;
//     var yscale = 1;

//     var xprev = 0;
//     var yprev = 0;
    
//     var minicircle = document.querySelector("#minicircle");

//     window.addEventListener("mousemove", function (dets) {
//         var xdiff = Math.abs(dets.clientX - xprev);
//         var ydiff = Math.abs(dets.clientY - yprev);

//         xscale = gsap.utils.clamp(0.8, 1.2, 1 + xdiff * 0.01);
//         yscale = gsap.utils.clamp(0.8, 1.2, 1 + ydiff * 0.01);

//         xprev = dets.clientX;
//         yprev = dets.clientY;

//         minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
// }

// circlechaptakro();
// // Ensure the DOM is loaded before executing
// document.addEventListener("DOMContentLoaded", circleMouseFollower);

function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector(
          "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
    });
  }
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  circleChaptaKaro();
  circleMouseFollower();
  firstPageAnim();
  

// document.querySelectorAll(".elem").forEach(function (elem) {
//     elem.addEventListener("mousemove",function(dets) {


//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power1,
//         });

//     });

// });
// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     elem.addEventListener("mouseleave", function (dets) {
//       gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
  
//     elem.addEventListener("mousemove", function (dets) {
//       var diff = dets.clientY - elem.getBoundingClientRect().top;
//       diffrot = dets.clientX - rotate;
//       rotate = dets.clientX;
//       gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: dets.clientX,
//         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//       });
//     });
//   });

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  var img = elem.querySelector("img"); // Cache image reference

  if (!img) return; // Prevent errors if no image is found

  elem.addEventListener("mouseleave", function () {
    gsap.to(img, {
      opacity: 0,
      ease: Power3.easeOut,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    gsap.to(img, {
      opacity: 1,
      ease: Power3.easeOut,
      duration: 0.3,
      x: dets.clientX - elem.getBoundingClientRect().left,
      y: diff,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12 || 12}:${minutes} ${ampm}`;
  document.getElementById('current-time').textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();