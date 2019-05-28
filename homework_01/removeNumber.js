Array.prototype.removeNum= function(num){
    let output = this;
  setTimeout(function(){
      let output1=output.filter(function(num1){
          return (num1!=num);
      });
      console.log(output1);
  },3000);
}
console.log('Start');
console.log([1,3,4,2,1,5].removeNum(1));
console.log('Finish');
