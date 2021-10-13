const css = "color:orange;";

// No parameters + No Return
console.log("%c---------No Parameters + No Return", css);

function TellTheTime() {
  console.log(new Date());
}

TellTheTime();

// No parameters + Return
console.log("%c---------No Parameters + Return", css);

function GiveMeSoap() {
  return "soap";
}

const myHands = GiveMeSoap();
console.log(`what's on my hands? ${myHands}`);

// Parameters + No Return
console.log("%c--------- Parameters + No Return", css);

function GreetSomeone(someone) {
  console.log(`Hello ${someone}`);
}

GreetSomeone("Nina");

// Parameters + Return
console.log("%c---------Parameters + Return", css);

function GiveMeTortillas(number) {
  return Array(number).fill("tortilla");
}

const myTortillas = GiveMeTortillas(10);
console.log("Some tortillas", myTortillas);
