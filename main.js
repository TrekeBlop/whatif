const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-Yes");
const btnNo = document.querySelector(".btn-No");

function getrandomnumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

btnNo.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 3) {
        newTop = getrandomnumber(0, containerHeight - btnHeight);
    }

    while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
        newLeft = getrandomnumber(0, containerWidth - btnWidth);
    }

    btnNo.style.top = Math.floor(newTop) + "px";
    btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
    btnNo.classList.add("hide");
    imageOne.classList.add("hide");
    imageTwo.classList.remove("hide");
});