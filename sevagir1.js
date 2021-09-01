let gladiators = [];
let firstGamer;
let secondGamer;
let i = 0;
let gamers = [];

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

  // firstGamer = gladiators[Math.floor(Math.random() * gladiators.length)];
  // secondGamer = gladiators[Math.floor(Math.random() * gladiators.length)];
  // gamers.push(firstGamer, secondGamer);
  // console.log("gamers", gamers);
  // console.log("gamers.length", gamers.length)

  // for(const i = 0; i< gamers.length; i++){
  //     console.log("gamers.length", gamers.length)
  // }

  // if(firstGamer != secondGamer){
  //     console.log(firstGamer, "firstGamer");
  //     console.log(secondGamer, "secondGamer");
  // } else if(firstGamer == secondGamer) {
  //     console.log("Try again.")
  // }

  // for(let i = 0; i < gamers.length; i++){
  //     if(firstGamer != secondGamer){
  //         console.log(firstGamer, "firstGamer");
  //         console.log(secondGamer, "secondGamer");
  //         gamers.length = 0;
  //         var index1 = gladiators.indexOf(firstGamer);
  //         var index2 = gladiators.indexOf(secondGamer);
  //         if((index1 > -1) && (index2 > -1)) {
  //             gladiators.splice(index1, 1);
  //             gladiators.splice(index2, 1);
  //             console.log("gladiators", gladiators);
  //         }
  //     } else if(firstGamer == secondGamer) {
  //         console.log("Try again!")
  //         gamers.length = 0;
  //     }
  // }

  // console.log("gladiators", gladiators);
  // console.log(firstGamer.Power, "firstGamer.Power");
}

// function start() {
//   if (firstGamer.Power < secondGamer.Life) {
//     secondGamer.Life -= firstGamer.Power;
//     console.log("Second gamer life is ", secondGamer.Life);
//   } else if (firstGamer.Power >= secondGamer.Life) {
//     var index = gladiators.indexOf(secondGamer);
//     if (index > -1) {
//       gladiators.splice(index, 1);
//       console.log("Gamer2", secondGamer.name);
//     }
//   }

//   if (secondGamer.Power < firstGamer.Life) {
//     firstGamer.Life -= secondGamer.Power;
//     console.log("First gamer life is ", firstGamer.Life);
//   } else if (secondGamer.Power >= firstGamer.Life) {
//     var index = gladiators.indexOf(firstGamer);
//     if (index > -1) {
//       gladiators.splice(index, 1);
//       console.log("Gamer1", firstGamer.name);
//     }
//   }
// }

function run() {
  for (let i = 0; i < gladiators.length; i++) {
    firstGamer = gladiators[Math.floor(Math.random() * gladiators.length)];
    secondGamer = gladiators[Math.floor(Math.random() * gladiators.length)];
    gamers.push(firstGamer, secondGamer);
    console.log("gamers", gamers);
    console.log("gamers.length", gamers.length);

    for (let i = 0; i < gamers.length; i++) {
      if (firstGamer != secondGamer) {
        console.log(firstGamer, "firstGamer");
        console.log(secondGamer, "secondGamer");
        gamers.length = 0;
        var index1 = gladiators.indexOf(firstGamer);
        var index2 = gladiators.indexOf(secondGamer);
        if (index1 > -1 && index2 > -1) {
          gladiators.splice(index1, 1);
          gladiators.splice(index2, 1);
          console.log("gladiators", gladiators);
        }
      } else if (firstGamer == secondGamer) {
        console.log("Try again!");
        gamers.length = 0;
      }
    }

    while (firstGamer.Life >= 0 && secondGamer.Life >= 0) {
      firstGamer.Life = firstGamer.Life - secondGamer.Power;
      secondGamer.Life = secondGamer.Life - firstGamer.Power;
      console.log(firstGamer.Life, "firstGamer.Life");
      console.log(secondGamer.Life, "secondGamer.Life");
    }
    if (firstGamer.Life <= 0) {
      console.log(firstGamer.name, " is died!");
    }
    if (secondGamer.Life <= 0) {
      console.log(secondGamer.name, " is died!");
    }

    //xaxalu mas@

    // secondGamer.Life = secondGamer.Life - firstGamer.Power;
    // firstGamer.Life = firstGamer.Life - secondGamer.Power;
    // console.log(firstGamer.name, "firstGamer.Life", firstGamer.Life);
    // console.log(secondGame.name, "secondGamer.Life", secondGamer.Life);
    // if (firstGamer.Life > 0) {
    //   gladiators.push(firstGamer);
    //   console.log("gladiators", gladiators);
    // } else if (firstGamer.Life <= 0) {
    //   console.log("firstGamer", firstGamers.name);
    // }
    // if (secondGamer.Life > 0) {
    //   gladiators.push(secondGamer);
    //   console.log("gladiators", gladiators);
    // } else if (secondGamer.Life <= 0) {
    //   console.log("secondGamer", secondGamer.name);
    // }

    // for (let i = 0; i < gladiators.length; i++) {
    //   if (gladiators.length > 1) {
    // if (firstGamer.Power < secondGamer.Life) {
    //   secondGamer.Life -= firstGamer.Power;
    //   console.log(firstGamer.name, "'s life is ", firstGamer.Life);
    //   console.log(secondGamer.name, "'s life is ", secondGamer.Life);
    //   gladiators.push(firstGamer);
    //   gladiators.push(secondGamer);
    //   console.log("gladiators", gladiators);
    // } else if()
    // else if (firstGamer.Power >= secondGamer.Life) {
    //   var index = gladiators.indexOf(secondGamer);
    //   if (index > -1) {
    //     // gamers.splice(index, 1);
    //     gladiators.splice(index, 1);
    //     gamers.length = 0;
    //     // console.log("gamers.length", gamers.length);
    //     // console.log("gamers", gamers);
    //     console.log("gladiators", gladiators);
    //     console.log("Gamer2", secondGamer.name);
    //   }
    //   gladiators.push(firstGamer);
    //   gamers.length = 0;
    //   console.log("gladiators", gladiators);
    //   console.log("gladiators.length", gladiators.length);
    // }

    //   } else if (gladiators.length == 1) {
    //     console.log("Winner is ", gladiators[i].name);
    //   }
    // }
  }
}

//  function gamer1() {
//      if(firstGamer.Power < secondGamer.Life) {
//          secondGamer.Life = secondGamer.Life - firstGamer.Power;
//          console.log("Second gamer life is ", secondGamer.Life)
//      } else if(firstGamer.Power >= secondGamer.Life) {
//          var index = gladiators.indexOf(secondGamer);
//          if(index > -1) {
//              gladiators.splice(index, 1)
//              console.log("Gamer2",secondGamer.name)
//          }
//      }
//  }

//  function gamer2() {
//      if(secondGamer.Power < firstGamer.Life) {
//          firstGamer.Life = firstGamer.Life - secondGamer.Power;
//          console.log("First gamer life is ", firstGamer.Life);
//      } else if(secondGamer.Power >= firstGamer.Life) {
//          var index = gladiators.indexOf(firstGamer);
//          if(index > -1) {
//              gladiators.splice(index, 1);
//              console.log("Gamer1",firstGamer.name);
//          }
//      }
//  }

//////////////////////////////
//31-61 toxer

//for (let i = 0; i < gamers.length; i++) {

//   if (firstGamer != secondGamer) {
//     console.log(firstGamer, "firstGamer");
//     console.log(secondGamer, "secondGamer");
//     // gamers.length = 0;
//     // var index1 = gladiators.indexOf(firstGamer);
//     // var index2 = gladiators.indexOf(secondGamer);
//     // if (index1 > -1 && index2 > -1) {
//     //   gladiators.splice(index1, 1);
//     //   gladiators.splice(index2, 1);
//     //   console.log("gladiators", gladiators);
//     // }
//   } else if (firstGamer == secondGamer) {
//     console.log("Try again!");
//     // gamers.length = 0;
//   }
// }

// while (firstGamer.Life >= 0 && secondGamer.Life >= 0) {
////////////////////////////////////////////////////////////////
//   if (
//     firstGamer.Life >= 0 &&
//     secondGamer.Life >= 0 &&
//     firstGamer != secondGamer
//   ) {
//     firstGamer.Life = firstGamer.Life - secondGamer.Power;
//     secondGamer.Life = secondGamer.Life - firstGamer.Power;
//     console.log(firstGamer.Life, firstGamer.name, "firstGamer.Life");
//     console.log(secondGamer.Life, secondGamer.name, "secondGamer.Life");
//   }
