let gladiators = [];
let firstGamer;
let secondGamer;
let i = 0;
let gamers = [];
let playing = false;

function count() {
  let value = document.getElementById("count").value;
  console.log(value, "input value");
  for (; i < value; i++) {
    console.log(i, "i");
    gladiators[i] = {
      Life: Math.floor(Math.random() * (100 - 80 + 1) + 80),
      Power: Math.floor(Math.random() * (10 - 5 + 1) + 5),
      name: "Gladiator" + i,
    };
  }

  console.log("gladiators", gladiators);
}

function run() {
  for (let i = 0; i < gladiators.length; i++) {
    while (gladiators.length > 1) {
      //   firstGamer = gamers[0];
      //   secondGamer = gamers[1];
      firstGamer = gladiators[Math.floor(Math.random() * gladiators.length)];
      secondGamer = gladiators[Math.floor(Math.random() * gladiators.length)];
      console.log(firstGamer, "firstGamer");
      console.log(secondGamer, "secondGamer");

      if (firstGamer.Life <= 0) {
        //   firstGamer.Life != firstGamer.Life - secondGamer.Power;
        var index = gladiators.indexOf(firstGamer);
        if (index > -1) {
          gladiators.splice(index, 1);
          console.log("gladiators", gladiators);
          console.log(firstGamer.name, " is died!");
        }
        playing = false;
      } else if (secondGamer.Life <= 0) {
        //   secondGamer.Life != secondGamer.Life - firstGamer.Power;
        var index = gladiators.indexOf(secondGamer);
        if (index > -1) {
          gladiators.splice(index, 1);
          console.log(secondGamer.name, " is died!");
        }
        playing = false;
      } else if (firstGamer != secondGamer) {
        playing = true;

        // if (firstGamer != secondGamer) {
        //   if (firstGamer.Life > 0 && secondGamer.Life > 0) {
        firstGamer.Life = firstGamer.Life - secondGamer.Power;
        secondGamer.Life = secondGamer.Life - firstGamer.Power;
        //   console.log(firstGamer.Life, firstGamer.name, "firstGamer.Life");
        //   console.log(secondGamer.Life, secondGamer.name, "secondGamer.Life");
        //}
        //   if (firstGamer.Life > 0) {
        //     firstGamer.Life = firstGamer.Life - secondGamer.Power;
        //   }
        //   if (secondGamer.Life > 0) {
        //     secondGamer.Life = secondGamer.Life - firstGamer.Power;
        //   }
        console.log(firstGamer.Life, firstGamer.name, "firstGamer.Life");
        console.log(secondGamer.Life, secondGamer.name, "secondGamer.Life");
      }

      ///////////////////////////////////////////////////////////////////////////////////////

      //   if (firstGamer.Life <= 0) {
      //     //   firstGamer.Life != firstGamer.Life - secondGamer.Power;
      //     var index = gladiators.indexOf(firstGamer);
      //     if (index > -1) {
      //       gladiators.splice(index, 1);
      //       console.log("gladiators", gladiators);
      //       console.log(firstGamer.name, " is died!");
      //     }
      //   }
      //   if (secondGamer.Life <= 0) {
      //     //   secondGamer.Life != secondGamer.Life - firstGamer.Power;
      //     var index = gladiators.indexOf(secondGamer);
      //     if (index > -1) {
      //       gladiators.splice(index, 1);
      //       console.log(secondGamer.name, " is died!");
      //     }
      //   }

      /////////////////////////////////////////////////////////////////////////////////////////
      // console.log(firstGamer.Life, firstGamer.name, "firstGamer.Life");
      // console.log(secondGamer.Life, secondGamer.name, "secondGamer.Life");
      // }(if-inn a)
      //    else if (firstGamer == secondGamer) {
      //     console.log("-----");
      //   }
    }
    if ((gladiators.length = 1 && gladiators[i].Life > 0)) {
      console.log(gladiators[i].name, " is winner!");
    }
    // else if (firstGamer == secondGamer) {
    //   console.log("-----");
    // }
  }
}
