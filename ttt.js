let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#ngame");
let msgC = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector("#draw");

let turn0 = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


  boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box")
        //player X
        if(turn0) {
            box.innerText = "X";
            turn0 = false;
        }
        //player 0
        else{
            box.innerText = "0";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
  })

  const disableBoxes = () => {
    for(let box of boxes){
      box.disabled = true;
    }
  }

  const showWinner = (winner) => {
    msg.innerText = `Congratulations, You are Winner`;
    msgC.classList.remove("hide");
    disableBoxes();
  }

  if (Array.from(boxes).every((box) => box.innerText !== "")) {
    msg.innerText = "It's a Draw!";
    msgC.classList.remove("hide");
    disableBoxes();
};


  const checkWinner = () => {
    for(let pattern of winPatterns){
      // console.log(pattern[0],pattern[1],pattern[2]);
      // console.log(boxes[pattern[0]].innerText,
      //   boxes[pattern[1]].innerText,
      //   boxes[pattern[2]].innerText
      //   );
      
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
          if(pos1 == pos2 && pos1 == pos3 && pos1 != ""){
            console.log("winner");
            showWinner();
        }

        

    }
  }
}

const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    msgC.classList.add("hide");
  }
}
const resetGame = () => {
  turn0 = true;
  enableBoxes();

}

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
