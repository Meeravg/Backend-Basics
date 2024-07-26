const path = require("path");
const fs=require('fs');
const { error, log } = require("console");
const operation = process.argv[2];
const file = process.argv[3];
const content = process.argv[4];
const readTheFile=(file)=>{
    fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    })
}
const deleteTheFile =(file)=>{
    fs.unlink(file,(err)=>{
        if(err){
            console.log(err);
        }
    })
}


const createTheFile=(file)=>{
    fs.writeFile(file,'hello i am create file',(err)=>{
        if(err){
            console.log(err);
        }
    })
}
const appendTheFile=(file)=>{
    fs.appendFile(file,'appending new content file found answer'+'\r\n',(err)=>{
        if(err){
            console.log(err);
        }
    })
}
const renameTheFile=(file)=>{
    fs.rename(file,'hello.txt',(err)=>{
        if(err){
            console.log(err);
        }
    })
}

const listTheFile=(file)=>{
    fs.readdir(file, (err, data) => {
        if (err) {
          console.log(err);
         
        }else{

            
           data.forEach(fil => {
            console.log(fil);
          }); 
          
        }
    });
}
switch (operation) {
  // complete the fillowing function.
    case 'read':
      if(file){
        readTheFile(file)
      }
      break
      case 'delete':
       if(file){
        deleteTheFile(file)
       }
       break
       case 'create':
        if(file){
            createTheFile(file)
        }
        break
        case 'append':
            if(file){
                appendTheFile(file)
            }
            break
            case 'rename':
                if(file){
                    renameTheFile(file)
                }
                break
                case 'list':
                    if(file){
                        listTheFile(file)
                    }
                    break

  default:
    console.log(`Invalid operation '${operation}'`);
}