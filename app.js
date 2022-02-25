const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");

textInput.addEventListener("input", () => {
    let letterCount = textInput.value.replace(/[^a-zㄱ-ㅎㅏ-ㅣ]/gi, "");
    letterCountElement.textContent = letterCount.replace(/\s/g, "").length;

    let wordCount = textInput.value.replace(/[0-9~!@#$%^&)(_+}{|:"><?`=\/;',.*-]*/g, "").match(/\S+/g) || [];
    wordCountElement.textContent = wordCount.length;

    let spaceCount = textInput.value.match(/\s/g) || [];
    spaceCountElement.textContent = spaceCount.length;
});