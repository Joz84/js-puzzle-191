
const button = document.getElementById("show-hint");

const hint = document.querySelector(".hint");

button.addEventListener("click", (event)=>{
  hint.classList.add("active");
});


const tiles = document.querySelectorAll("td");
tiles.forEach((tile) => {
  tile.addEventListener("click", (event) => {
    const column = tile.cellIndex;
    const row = tile.parentElement.rowIndex;
    const empty = document.querySelector(".empty");
    const emptyColumn = empty.cellIndex;
    const emptyRow = empty.parentElement.rowIndex;
    const deltaColumn = Math.abs(column - emptyColumn);
    const deltaRow = Math.abs(row - emptyRow);
    if ((deltaColumn === 0 && deltaRow === 1) || (deltaColumn === 1 && deltaRow === 0)) {
      const text = tile.innerText;
      empty.innerText = text;
      empty.classList.remove("empty");
      tile.innerText = "";
      tile.classList.add("empty");
    }
    const result = Array.from(tiles).map((tile)=>{ return tile.innerText}).join();
    if (result === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
      alert("you win");
      location.reload();
    }
  });
});
