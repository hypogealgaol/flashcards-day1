var app  = angular.module('Flashcards', []); 
/* angular.module takes the name of your application (very important!) 
and an array of dependencies for your application. For now, we have none, 
but get excited for upcoming workshops! */ 


//ng class allows you to add object that is css class

//properties and methods on this scope, the scope being the app var just created. 
app.controller('FlashCardController', function($scope) {

	//you have acess to scope using $scope
	//scope is just a Javascript object to which both the template and the controller have access.

	$scope.flashCard = {
		//properties
		question: "What is Angular?",
		answers: [

			//arr of objects
			{ text: 'what', correct: true},
			{ text: 'this', correct: true},
			{ text: 'do', correct: true}
		]
	};

	$scope.answerQuestion = function(theAnswer) {
		console.log(theAnswer); 
	}

}); 


app.controller('MainController', function($scope) {

	$scope.flashCards =  [
		{
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false },
        ]
        answered: false
    	},
    	{
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false },
        ]
         answered: false
    	},
    	{
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true },
        ]
         answered: false
    	}
	]

	$scope.answerQuestion = function(theAnswer, flashCard) {
		 
		


		console.log(theAnswer.correct); 
	
});
