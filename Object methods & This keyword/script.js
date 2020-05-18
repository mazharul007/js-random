// shorthand object properties

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return { max, min, sum, avg };
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getStats(numbers));

// Computed property
const role = "Admin";
const person = "Mr. Walt";
const role2 = "Manager";
const person2 = "Skyler Walt";
const team = {
  [role]: person,
};

// old syntax
team[role2] = person2;

const addProp = (obj, k, v) => {
  return { ...obj, [k]: v };
};
const res = addProp(team, "Happy", ":)");
console.log(res);

// Adding methods to object:

const math = {
  mul(x, y) {
    x * y;
  },
  sqr(x) {
    x * x;
  },
};

console.log(math.sqr(6));
console.log(math.mul(10, 3.1416));


// using this in methods
const personX={
  firstName: 'Mazharul',
  middleName: 'Hoque',
  lastName : 'Naumy',
  fullName(){
    const {
      firstName,
      middleName,
      lastName
    }= this;
    return `${firstName} ${middleName} ${lastName}`;
  },

  personsBio(){
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is  a Jr. Software Engineer`);
  }
}
personX.personsBio();

// phrase generator 

const goodVibes ={
  phrases:[
    "Honest",
    "Positive",
    "Intelligent ",
    "Loyal"],
  pickPhrases(){
    const {
      phrases
    }=this;
    const idx = Math.floor(Math.random()* phrases.length);
    return phrases[idx]; 
  },
  start(){
    //console.log(this.pickPhases());
    this.timerId = setInterval(() => {
      console.log(this.pickPhrases());
    }, 3000);
  },
  stop(){
    clearInterval(this.timerId);
    console.log("Its over!");
  }
}
//goodVibes.start();

//objects method designing : deck of cards
const myDeck={
  deck:[],
  suits:['hearts','diamonds','clubs','spades'],
  values:'2,3,4,5,6,7,8,9,10,J,Q,K,A',
  drawnCard:[],
  initializeDeck(){
    const{
      suits,
      values,
      deck
    }=this;
      for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({
              suit,
              value
            })          
        }
      }
  },
  drawCard(){
    const card = this.deck.pop();
    this.drawnCard.push(card);
    return card;
  },
  drawMultipleCards(numberOfCards){
    const cards = [];
    for (let cards = 0; cards < numberOfCards; cards++) {
      cards.push(this.drawCard());
    }
    return card;
  }
}
myDeck.initializeDeck();
myDeck.deck;
