function sum(till){
    // console.log(till)
    let sum = 0;
    for (let i = 0; i < till; i++) {
      sum += i;
    }
  return sum
}

addEventListener("message",e=>{
    let till=e.data;
    let s=sum(till)
    postMessage(s)
    close()
})