var active = false;

function hamOverlay() {
    var line1 = document.querySelector(".line1");
    var line2 = document.querySelector(".line2");
    var line3 = document.querySelector(".line3");
    var overlay = document.querySelector(".overlay");

    if (!active) {
        overlay.style.right = "0";
        line2.style.opacity = "0";

        line1.style.top = "50%";
        line1.style.transform = "translateY(calc(-50% + 2px)) rotate(45deg)";

        line3.style.top = "50%";
        line3.style.transform = "translateY(calc(-50% - 2px)) rotate(-45deg)";

        active = true;
    } else {
        overlay.style.right = "-20%";
        line2.style.opacity = "1";

        line1.style.transform = "rotate(0deg)";
        line3.style.transform = "rotate(0deg)";

        line1.style.top = "0";
        line3.style.top = "100%";

        active = false;
    }
}

function activateSlider() {
    var slider = document.getElementById("slider");
    var background = document.getElementById("bgslider");
    var body = document.querySelector("body");
    var hamButton = document.querySelectorAll(".ham-container span");
    var overlay = document.querySelector(".overlay");
    var titles = document.querySelector("h2");

    if (slider.style.transform == "translateX(100%)") {
        slider.style.transform = "translateX(0%)";
        background.style.width = "50px";
        body.style.backgroundColor = "#e4e6b8";

        for (let i = 0; i < hamButton.length; i++) {
            line = hamButton[i];
            line.style.backgroundColor = "black";
        }

        overlay.style.backgroundColor = "white";
        titles.style.color = "black";
    } else {
        slider.style.transform = "translateX(100%)";
        background.style.width = "100%";
        body.style.backgroundColor = "#4e4e4e";

        for (let i = 0; i < hamButton.length; i++) {
            line = hamButton[i];
            line.style.backgroundColor = "white";
        }

        overlay.style.backgroundColor = "#2e2c2c";
        titles.style.color = "white";
    }
}
