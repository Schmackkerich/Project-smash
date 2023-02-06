window.addEventListener("load", () => {
    smash.init();
  });
  
  const smash = {
    checkboxList: ["Yes", "Definitely", "Absolutely!!!!"],
    content: document.createElement("div"),
    currentlSelected: -1,
    init() {
      this.content.id = "content";
      document.body.appendChild(this.content);
      this.generateHeader();
      this.generateMainText();
      this.generateQuestion();
      this.generateBtn();
    },
  
    generateHeader() {
      const header = document.createElement("div");
      header.classList.add("header");
      this.content.appendChild(header);
      const title = document.createElement("p");
      title.innerHTML = "❤️";
      title.id = "heartTitle";
      header.appendChild(title);
    },
  
    generateMainText() {
      const textBody = document.createElement("div");
      textBody.classList.add("textBody");
      this.content.appendChild(textBody);
  
      const title = document.createElement("h");
      title.classList.add("textTitle");
      textBody.appendChild(title);
      title.innerHTML = "Jana...";
  
      const text = document.createElement("p");
      text.id = "paragraphText";
      text.classList.add("textParagraph");
      textBody.appendChild(text);
      setText();
    },
  
    generateQuestion() {
      const sheet = document.createElement("div");
      sheet.classList.add("sheet");
      this.content.appendChild(sheet);
      const question = document.createElement("p");
      question.innerHTML = `Willst du mit <br/>&nbsp &nbsp mir gehen?`;
      question.id = "question";
      sheet.appendChild(question);
      for (let i = 0; i < 3; i++) {
        this.generateCheckbox(sheet, i);
      }
    },
  
    generateCheckbox(parent, id) {
      let checkbox = document.createElement("input");
      checkbox.classList.add("checkbox");
      checkbox.type = "radio";
      checkbox.name = "name";
      checkbox.value = id;
      checkbox.id = "checkbox" + id;
      checkbox.addEventListener("clicked", (id) => this.selectOnlyThis(id));
  
      let label = document.createElement("label");
      label.htmlFor = "checkbox1";
      label.classList.add("checkboxLable");
      label.appendChild(document.createTextNode(this.checkboxList[id]));
  
      let row = document.createElement("div");
      row.classList.add("checkboxRow");
      row.appendChild(checkbox);
      row.appendChild(label);
      parent.appendChild(row);
    },
  
    generateBtn() {
      const btn = document.createElement("button");
      btn.classList.add("submitBtn");
      btn.innerHTML = "Bestätigen";
      this.content.appendChild(btn);
      btn.addEventListener("click", () => this.submitBtnClicked());
    },
    submitBtnClicked() {
      let selectedBox = this.selectedBtn();
      if (selectedBox != -1) {
        Email.send({
          Host: "smtp.elasticemail.com",
          Username: "malte.budig@elasticemail.de",
          Password: "E4969DC6E8FC7FD3B388A5BB7A693A85D300",
          To: "simon.mueller2@outlook.de",
          From: "mabu@vollbio.de",
          Subject: "Was hat sie wohl geantwortet ...",
          Body: "Die Antwort ist \n\n\n " + this.checkboxList[selectedBox],
        });
      } else {
        alert("Pls select one UwU");
      }
    },
    selectedBtn() {
      let radios = document.querySelectorAll('input[type="radio"]:checked');
      let value = radios.length > 0 ? radios[0].value : -1;
      return value;
    },
  };
  
  async function setText() {
    const response = await fetch("text.json");
    const json = await response.json();
    console.log(json.text);
    document.getElementById("paragraphText").innerHTML = json.text;
  }