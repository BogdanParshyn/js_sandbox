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
// ======================================================================================================================= //

// Part 2:

function waitForAnswer(){
    return new Promise((resolve, reject) => {
        window.addEventListener('keydown', (event) => {

          if( (event.key).toUpperCase() === "Y" ) {
            resolve();
          } else if( (event.key).toUpperCase() === "N" ) {
            reject();
          } 

        });
    });
}

function setText(text) {
      
      const div = document.createElement("div"); // Создаем новый div.
      div.id = "text"; // назначаем id
      div.style = 'position: absolute; top: 20px; border: 4px double black'; // назначаем стили нашему div-у.
      document.body.append(div); // добавляем наш div в HTML документ.
      
      document.getElementById("text").innerHTML = text; // назначаем нужный нам текст.
      
}

setText("Вы сделали домашнее задание? Y / N"); // это первый наш вызов, после которыйй выводит вопрос на страничке, а второй раз 
                                               // он уже вызывается с другим значением, которое прилетело после обработчика promise-а.

waitForAnswer() // prompt("Вы сделали домашнее задание? Y / N", "Y or N")
  .then(() => setText("Так держать!"))
  .catch(() => setText("Нужно подтянуть("));
  // ======================================================================================================================= //

  // Part 3:

  function waitForTime(seconds) {
    return new Promise((resolve, reject) => {
      window.addEventListener('scroll', resolve);
  });
  }

    waitForTime(seconds);