var database = [
	{
		username:"victor",
		password:"23uiuef"
	}
];

var newsfeed = [
	{
		username:"david",
		timeline:"life in dubai"
	},

	{
		username:"onyx",
		timeline:"have not seen my dad for a long time"
	},

	{
		username:"victoria",
		timeline:"the real baddie"
	},
];



var usernamePrompt = prompt("username?");
var passwordPrompt = prompt("password?");

function SignIn (username,password){

   if (username===database[0].username && 
   	   password===database[0].password){
      console.log(newsfeed);
     }
      else{
   	alert("wrong deteils");
  }
  };

SignIn(usernamePrompt,passwordPrompt);







