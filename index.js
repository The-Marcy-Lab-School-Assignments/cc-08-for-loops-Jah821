//1
function countToTwenty(){
  for (let i = 1; i <= 20; i++){
      console.log(i)
  }
}

//2
function countFromTwenty(){
  for (let i = 20; i >= 1; i--){
      console.log(i)
  }
}

//3
function countToN(number){
  for (let i = 1; i <= number; i++){
      console.log(i)
  }
}


//4
function countFromN(number){
  for (let i = number; i >= 1; i--){
      console.log(i)
  }
}

//5
function countEveryOdd(number){
  for (let i = 1; i <= number; i+=2){
      console.log(i)
  }
}

//  remainder operator function countEveryOdd(num){
//    for (let i =1; i <= num; i++){
  //      if(i % 2 === 1){
    //        console.log(i)
//    }
//}

countEveryOdd(25)