window.addEventListener("load", () => {
  smash.init();
});

const smash = {
  content: document.createElement("div"),
  init() {
    this.content.id = "content";
    document.body.appendChild(this.content);
    this.generateHeader();
    this.generateMainText();
  },
  generateHeader() {
    const header = document.createElement("div");
    header.classList.add("header");
    this.content.appendChild(header);
    const title = document.createElement("p");
    title.innerHTML = "❤️";
    title.id = "HeartTitle";
    header.appendChild(title);
  },

  generateMainText() {
    const textBody = document.createElement("div");
    textBody.classList.add("textBody");
    this.content.appendChild(textBody);

    const title = document.createElement("h");
    title.classList.add("textTitle");
    textBody.appendChild(title);
    loadFile("text.txt");

    const text = document.createElement("p");
    text.id = "paragraphText";
    text.classList.add("textParagraph");
    text.innerHTML = getText();
    textBody.appendChild(text);
  },
};

function loadFile(o) {
  var fr = new FileReader();
  fr.onload = function (e) {
    showDataFile(e, o);
  };
  fr.readAsText(o.files[0]);
}

function showDataFile(e, o) {
  document.getElementById("paragraphText").innerText = e.target.result;
}
