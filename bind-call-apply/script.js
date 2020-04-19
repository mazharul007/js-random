//call method 

let myObj = {
    name:'Mazharul Hoque',
    job:'Software Engineer',
    anotherObj:{
        name: 'john doe',
        value: function(){
            console.log(`My Name is ${this.name}`);
        }
    }
}

//console.log(myObj.anotherObj.value());
console.log(myObj.anotherObj.value.call(myObj));

// another example of call method

let JohnsAge={
    dob:1993,
    age:function(currentYear){
        console.log(`John is ${currentYear-this.dob} years old`);
    }
}
JohnsAge.age(2020);

let sirisAge ={
    dob:1996 
}

JohnsAge.age.call(sirisAge,2020);




// apply method
let mrX = {
    dob:1993,
    age:function(currentYear, msg){
        console.log(`Mr X is ${currentYear - this.dob} years old. ${msg}`);
    }
}
mrX.age(2020,'Mr X is a businessman');

let mrY = {
    dob:1998
}
mrX.age.apply(mrY,[2020,"He is a Cricketer"]);


//bind method
let fname ={
    name:'Mazharul',
    print:function(){
        console.log(`My first name is ${this.name}`);
    }
}

fname.print();

let nickName = {
    name:'Naumy'
}
let anotherFunc =fname.print.bind(nickName);
anotherFunc();





