//const fetch = require("node-fetch");
 function promiseFun(){
const postesPromise = fetch("https://randomuser.me/api/");
postesPromise.then(data => data.json())
             .then(data=> {console.log(`${data.name},${data.location}`)})
             .catch((err)=>{console.error(err)})
   
}          
async function getDataAsyncAwait() 
        {
            //await the response of the fetch call
           let response = await fetch("https://randomuser.me/api/");
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
        getDataAsyncAwait()
.then(data => console.log(data));//log the data