"use strict";
function averageScore(one,two,three){
  return (one+two+three)/3;
}

const scoreKoalas = averageScore(1,1,1);
const scoreDolphine = averageScore(12,15,14);
console.log(scoreDolphine,scoreKoalas);

function winner(scoreKoalas, scoreDolphine){
  if(scoreKoalas>(2*scoreDolphine)){
    return`kolas won`;
  }
  else if(scoreDolphine>(2*scoreKoalas)){
    return`Dolphine won`;
  }
  else if(scoreKoalas===scoreDolphine){
    return`ties a tie`;
  }
  else{
    return `on one own`;
  }
}
console.log(winner(scoreDolphine,scoreKoalas));
