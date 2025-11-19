let Message_Container = document.querySelector(".Messages-Container");

let Start = 99;
let End = 0;
let Step = 1;

let Get_HTML_Template = (number, color) => {
  let Plurality = "";
  if (number > 1){
    Plurality = "s";
  }
  let HTML = `
    <div class="Message">
        <p>
          <span style="color: ${color};">${number}</span> bottle${Plurality} of 🍺 on the 🧱, <span style="color: ${color};">${number}</span> bottle${Plurality} of 🍺.<br> Take one down and
          pass it around, <span style="color: ${color};">${
    number - 1
  }</span> bottle${Plurality} of 🍺 on the 🧱.
        </p>
    </div>`;
  return HTML;
};

function Start_Song() {
  Message_Container.innerHTML = "";
  for (let i = Start; i >= End; i -= Step) {
    switch (true) {
      case i >= 25 && i <= 99:
        Message_Container.insertAdjacentHTML(
          "beforeend",
          Get_HTML_Template(i, "green")
        );
        break;

      case i >= 10 && i <= 24:
        Message_Container.insertAdjacentHTML(
          "beforeend",
          Get_HTML_Template(i, "yellow")
        );
        break;

      case i >= 1 && i <= 9:
        Message_Container.insertAdjacentHTML(
          "beforeend",
          Get_HTML_Template(i, "red")
        );
        break;

      case i == 0:
        let Not_Enough_HTML = `
    <div class="Message">
        <p>
          ‼️ There's no more bottles of 🍺 on the 🧱, there's no more bottles of 🍺. <br>😭 Help me now, 🏃 to the liquor store to buy 99 bottles of 🍺.
        </p>
    </div>`;

        Message_Container.insertAdjacentHTML("beforeend", Not_Enough_HTML);
        break;
    }
  }
}

Start_Song();
