class Gym {
     
    constructor(){};
    boom1(){
        let timer=null;
       if(timer===null){
           timer= setInterval(()=>{
               console.log('boom');
           },1000);
       }else {
           clearInterval(timer);
           timer=null;
       } 
    }
}
module.exports= Gym;