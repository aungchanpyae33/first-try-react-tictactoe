let currentPlayer = "O";

import { CheckWinner } from "./Helpers/Winning";
import DisplayText, { Change } from "./Helpers/DisplayText";

// inintial value to add later string
const arrayAdd = ["", "", "", "", "", "", "", "", ""];

export function Layout() {
  return (
    <>
      {/* create 9 array and loop */}
      {[...Array(9)].map((_, i) => (
        <div
          key={`click${i}`}
          id={`click${i}`}
          className="cell"
          onClick={() => handleClick(i)}
        ></div>
      ))}
      <button
        id="restart"
        className="btn btn-primary m-2"
        onClick={() => {
          arrayAdd.fill("");
          document.querySelectorAll(".cell")!.forEach((item) => {
            item.textContent = "";
            item.classList.remove("changeBg");
          });
          currentPlayer = "O";
          DisplayText("#win", "");
          document.querySelector("#win")!.classList.remove("btn-warning");
        }}
      >
        restart
      </button>
    </>
  );
}

const handleClick = (i: number) => {
  if (arrayAdd[i]) {
    return; // if not empty string return early
  }
  if (CheckWinner(arrayAdd)) {
    return;
  }
  DisplayText("#turn", `${currentPlayer} turn`);
  currentPlayer = Change(currentPlayer);
  DisplayText(`#click${i}`, currentPlayer);
  arrayAdd[i] = currentPlayer; //put value string in empty string
  CheckWinner(arrayAdd);
};
