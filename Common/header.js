var blockbtn = document.getElementById("options");

blockbtn.style.display = "none";

var flag = false;

function showOption() {
  if (!flag) {
    blockbtn.style.display = "block";
    flag = true;
  } else {
    blockbtn.style.display = "none";
    flag = false;
  }
}

document.getElementById("page").innerHTML = "Transaction";
