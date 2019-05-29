
Array.prototype.pluck1=function(value){
    var arr1 =this;
    process.nextTick(()=>{ console.log(Math.max.apply(null, arr1));})
}
Array.prototype.pluck2=function(value){
   var arr2=this;
    setImmediate(()=>{console.log( Math.min.apply(null, arr2));})
}



//var arr=[1,2,3,4,5,6,7,8];

console.log('strart');
[1,2,3,4,5,6,7,8].pluck1(true);
[1,2,3,4,5,6,7,8].pluck2(false);
console.log('end');
//console.log(Math.max.apply(null,arr));

