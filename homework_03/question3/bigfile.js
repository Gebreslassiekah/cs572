var fs= require('fs');
let writefile= fs.createWriteStream(__dirname+'/write.txt');
for(let i=0;i<1e6;i++){
    writefile.write('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quae illo quo architecto iusto consequatur et quia ad aperiam enim soluta animi, cum voluptatibus accusamus recusandae. Odit cumque beatae tenetur.')
}
writefile.end();
