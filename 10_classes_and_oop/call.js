function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
     /*
  ****** From ChatGPT *
SetUsername.call(this, username);:
call method ke pehle argument (this) se, aap specify karte hain ki SetUsername function ke andar this keyword ka value kya hona chahiye.
Is case mein, this naye object ko refer kar raha hai jo createUser function ke execution ke dauran banaya gaya tha.
SetUsername function ke andar, this.username = username; statement naye object ke username property ko set karta hai.
console.log("called"); statement execute hota hai, aur console pe "called" print hota hai.
  */
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);