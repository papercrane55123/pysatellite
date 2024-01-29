#!/usr/bin/env node

console.log(`        
 _   _      _ _        __        __         _     _ _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| | |        
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _' | |        
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |_|      
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_(_)       
`);

class Member{
        constructor(...args){
                this.args = args;
                if(this.args[0].length < 2){
                        return console.log("발표자 인원이 충족되지 않았으므로 해당 발표는 진행되지 않습니다.")
                                + process.exit();
                }
        }
        print(){
             console.log("발표자 : " + this.args[0][Math.floor(Math.random()*this.args[0].length)]);
        }
}

class Presenter extends Member{
        constructor(...args){
                super(...args)
        }
}


const presenter = new Presenter(process.argv.slice(2));
presenter.print();
// const array = process.argv.slice(2);
// console.log("발표자 : " + array[Math.floor(Math.random()*array.length)]);
