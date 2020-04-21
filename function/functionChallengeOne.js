// challenge one : Password Validator

// let isPasswordValid=(password,username)=>{
//     if(
//         password.length <8 ||
//         password.indexOf(' ') !== -1 ||
//         password.indexOf(username) !== -1 
//          ) {
//         return false;
//     }
//     return true;
// }

let isPasswordValid=(password,username)=>{   
           const isTooShort = password.length <8 ;
           const hasSpace = password.indexOf(' ') !== -1; 
           const tooSimilar =  password.indexOf(username) !== -1;

        //    if(isTooShort || hasSpace || tooSimilar) return false;
        //    return true;
        return isTooShort || hasSpace || tooSimilar;
        }       
console.log(isPasswordValid('hello123','naumy'));
console.log(isPasswordValid('naumy123','naumy'));
