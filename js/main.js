function uncoverToolGuide() {
    let htmlToolGuide = "<p>This is a step by step guide</p>";
    document.getElementById("guide-to-tools").innerHTML = htmlToolGuide;
}

let toolGuideButton = document.getElementById("tool-guide");
toolGuideButton.addEventListener("click",uncoverToolGuide);


