window.addEventListener("load", function () {
    let deviceAgent = navigator.userAgent.toLowerCase(),
    agentID = deviceAgent.match(/(iphone|ipod|ipad)/),
    mobileLink = $('.btn'); // Добавить этот класс всем ссылкам, которые должны нажиматься

    touchMenuEvent = agentID ? "touchstart" : "click";
    mobileLink.bind(touchMenuEvent, function() {
        answerBtn();
    });

    let numberItem = document.querySelectorAll(".item");
    let checkBox = document.querySelectorAll(".option__wrapper");
    let btn = document.querySelector("#btn");

    let count = 0;

    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener("click", function () {
            this.querySelector("input").checked = true

            console.log(this.parentNode.dataset.answer);
        })
    }


    function answerBtn() {
        count = 0;

        let checkInput = document.querySelectorAll('input[type="radio"]:checked');
        let checkTrue = document.querySelectorAll('li[data-answer] label');
        for (let i = 0; i < checkTrue.length; i++) {
            console.log(checkTrue[i].textContent);
        }
        

        for (let i = 0; i < checkInput.length; i++) {
            if (checkInput[i].closest('[data-answer]'))
                count++;
        }

        document.querySelector(".answer").innerHTML = `Кол-во верных ответов: ${count} из ${numberItem.length}`;
        // alert(`Кол-во верных ответов: ${count} из ${numberItem.length - 3}`);
    }

    // btn.addEventListener('click', answerBtn);
    // btn.addEventListener('touchstart', answerBtn);

})