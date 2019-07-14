"use strict";

// Part 1:

const div = document.createElement('div');
document.body.append(div);

div.style.height = "200vh";
div.className = "block";
div.innerHTML = ""

function waitForScroll(){
  return new Promise((resolve, reject) => {
      window.addEventListener('scroll', resolve);
  });
}

//console.log(waitForScroll());

waitForScroll() // вместо promise указываем функцию со скролом, так как она его и возвращает. И так мы ее и вызываем - два в одном.
  .then(
        function drawOnScroll() {
        let mRd = Math.round;
        let mRm = Math.random;
        let color = `rgb(${mRd(mRm() * 255)}, ${mRd(mRm() * 255)}, ${mRd(mRm() * 255)})`;
        div.style.background = color;
      } 
  );
   