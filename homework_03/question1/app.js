const dns = require('dns');
const util = require('util')

const promiseResolve= util.promisify(dns.resolve4);
//promiseResolve('www.mum.edu').then((data)=>console.log(data))
//.then((error)=> console.log(error));
async function ipaddress(){
    const d = await promiseResolve("www.mum.edu");
    console.log(d);
    return d;
}
ipaddress();
