const header = document.querySelector(".header");
const headerText = document.querySelector("h1");
const info = document.querySelector(".info");
const section = document.querySelector(".section");
const descEnd = document.querySelector(".playerMark");
const playerMarker = document.querySelector("span");
const circleClass = document.querySelector(".circleClass");
const crossClass = document.querySelector(".crossClass");

const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9];
currentClass = '';
otherClass = '';
clickedCross = [];
clickedCircle = [];
allFields = [];
clicked = [];

const start = (window.onload = () => {
    section.style.display = "none";
    section.style.opacity = 0;
    headerText.innerHTML = "Choose a marker";
    const wrapper = document.createElement("div");
    const circle = document.createElement("div");
    const smallCircle = document.createElement("div");
    const crossWrapper = document.createElement("div");
    const crossOne = document.createElement("div");
    const crossTwo = document.createElement("div");
    wrapper.classList = "wrapper";
    circle.classList = "circle";
    circle.name = "circle";
    smallCircle.classList = "smallCircle";
    smallCircle.name = "circle";
    crossWrapper.classList = "crossWrapper";
    crossWrapper.name = "cross";
    crossOne.classList = "crossOne";
    crossOne.name = "cross";
    crossTwo.classList = "crossTwo";
    crossTwo.name = "cross";
    wrapper.appendChild(circle);
    info.appendChild(wrapper);
    circle.appendChild(smallCircle);
    wrapper.appendChild(crossWrapper);
    crossWrapper.appendChild(crossOne);
    crossWrapper.appendChild(crossTwo);
    const choose = setTimeout(() => (info.style.opacity = 1), 1000);

    circle.addEventListener('click', play = (e) => {
        playerMarker.innerHTML = e.target.name;
        info.style.display = "none";
        info.style.opacity = 1;
        section.style.opacity = 1;
        section.style.display = "block";
        const board = document.createElement("div");
        board.classList = "board";
        section.appendChild(board);
        quantity.forEach((item) => {
            const field = document.createElement("div");
            allFields.push(field);
            field.classList.add("field");
            board.appendChild(field);
            field.addEventListener(
                "click",
                (check = (e) => {
                    if (playerMarker.textContent === "circle") {
                        currentClass = 'circleClass';
                        otherClass = 'crossClass';
                        e.target.classList.add(currentClass);
                        const circleIcon = document.createElement("i");
                        circleIcon.classList.add('fa');
                        circleIcon.classList.add('fa-circle-o');
                        e.target.appendChild(circleIcon);
                        clickedCircle.push(field);
                        clicked.push(field);
                        e.target.style.pointerEvents = "none";
                        randomize();
                        checkWin();
                    } else if (playerMarker.textContent === "cross") {
                        currentClass = 'crossClass';
                        otherClass = 'circleClass';
                        e.target.classList.add(currentClass);
                        const crossIcon = document.createElement("i");
                        crossIcon.classList.add('fa');
                        crossIcon.classList.add('fa-times');
                        e.target.appendChild(crossIcon);
                        clickedCross.push(field);
                        clicked.push(field);
                        e.target.style.pointerEvents = "none";
                        randomize();
                        checkWin();
                    }
                }))
        })

        const winners = [
            [allFields[0], allFields[1], allFields[2]],
            [allFields[3], allFields[4], allFields[5]],
            [allFields[6], allFields[7], allFields[8]],
            [allFields[0], allFields[4], allFields[8]],
            [allFields[2], allFields[4], allFields[6]],
            [allFields[0], allFields[3], allFields[6]],
            [allFields[1], allFields[4], allFields[7]],
            [allFields[2], allFields[5], allFields[8]],

        ];

        function checkWin() {
            if (winners.some(item => (item.every(item => item.classList.contains(currentClass))))) {
                setTimeout(() => {
                    board.classList.remove('board');
                    board.classList.add('desc');
                    descEnd.style.display = "none";
                    descEnd.opacity = 0;
                }, 500);
                if (currentClass === 'circleClass') {
                    setTimeout(() => board.innerHTML = "Circle win!", 500);
                } else {
                    setTimeout(() => board.innerHTML = "Cross win!", 500);
                }
            } else if (winners.some(item => (item.every(item => item.classList.contains(otherClass))))) {
                setTimeout(() => {
                    board.classList.remove('board');
                    board.classList.add('desc');
                    descEnd.style.display = "none";
                    descEnd.opacity = 0;
                }, 500);
                if (otherClass === 'crossClass') {
                    setTimeout(() => board.innerHTML = "Cross win!", 500);
                } else {
                    setTimeout(() => board.innerHTML = "Circle win!", 500);
                };

            } else if ((clicked.length === 9) && (!winners.some(item => (item.every(item => item.classList.contains(currentClass))))) && (!winners.some(item => (item.every(item => item.classList.contains(otherClass)))))) {
                setTimeout(() => {
                    board.classList.remove('board');
                    board.classList.add('desc');
                    descEnd.style.display = "none";
                    descEnd.opacity = 0;
                    board.innerHTML = "Draw!";
                }, 500);
            }
        };

        randomize = () => {
            const randomField = Math.floor(Math.random() * quantity.length - 0, 5);
            if (
                (!clicked.includes(allFields[randomField])) && (clicked.length < allFields.length)) {
                if (playerMarker.textContent === 'circle') {
                    const crossIconR = document.createElement("i");
                    crossIconR.classList.add('fa');
                    crossIconR.classList.add('fa-times');
                    allFields[randomField].appendChild(crossIconR);
                    allFields[randomField].classList.add('crossClass');
                    allFields[randomField].style.pointerEvents = "none";
                    clickedCross.push(allFields[randomField]);
                    clicked.push(allFields[randomField]);

                } else {
                    const circleIconR = document.createElement("i");
                    circleIconR.classList.add('fa');
                    circleIconR.classList.add('fa-circle-o');
                    allFields[randomField].appendChild(circleIconR);
                    allFields[randomField].classList.add('circleClass');
                    allFields[randomField].style.pointerEvents = "none";
                    clicked.push(allFields[randomField]);
                    clickedCircle.push(allFields[randomField]);
                };

            } else if (clicked.includes(allFields[randomField]) && (clicked.length < allFields.length)) {
                randomize();
            } else(clicked.legth = 9); {
                checkWin();
            }
        };

    });
    crossWrapper.addEventListener('click', play);
});