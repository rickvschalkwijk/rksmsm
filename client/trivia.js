Template.triviaGame.rendered = function(){
var quizJSON = {
    "questions": [
        { // Question 1
            "q": "Waar is Rembrandt geboren??",
            "a": [
                {"option": "Leiden",            "correct": true},
                {"option": "Amsterdam",         "correct": false},
                {"option": "Monnickendam",      "correct": false}
            ],
            "correct": "<p><span>Dat is correct!</span> Rembrandt is geboren in Leiden!</p>",
            "incorrect": "<p><span>Uhh nee.</span> Rembrant is geboren in Leiden</p>" // no comma here
        },
        { // Question 2
            "q": "Wanneer is het Rijksmuseum geopend?",
            "a": [
                {"option": "1700",    "correct": false},
                {"option": "1750",     "correct": false},
                {"option": "1800",      "correct": true}
            ],
            "correct": "<p><span>Holy bananas!</span> Had niet verwacht dat je die goed zou hebben!</p>",
            "incorrect": "<p><span>Jammer.</span> Sorry. Het Rijksmuseum is in 1800 geopend.</p>" // no comma here
        },
        { // Question 3
            "q": "Wie heeft het melkmeisje geschilderd?",
            "a": [
                {"option": "Vermeer",        "correct": true},
                {"option": "Rembrandt",      "correct": false},
                {"option": "Mozart",         "correct": false}
            ],
            "correct": "<p><span>Nice!</span> Vermeer is de auteur van het melkmeisje.</p>",
            "incorrect": "<p><span>Nee.</span> Cultuur barbaar! Vermeer is de schilder van het melkmeisje.</p>" // no comma here
        },
        { // Question4
            "q": "Hoeveel zalen heeft het Rijksmuseum?",
            "a": [
                {"option": "Minder dan 100",     "correct": false},
                {"option": "Tussen 100 en 200",  "correct": false},
                {"option": "Meer dan 200",       "correct": true}
            ],
            "correct": "<p><span>Goed zo!</span> Het Rijksmuseum heeft ruim 200 zalen.</p>",
            "incorrect": "<p><span>Fout.</span> Het Rijksmuseum heeft ruim 200 zalen!.</p>" // no comma here
        },
         { // Question 5
            "q": "Waar heeft het Rijksmuseum een kleine dependance?",
            "a": [
                {"option": "Amsterdam Centraal",       "correct": false},
                {"option": "Luchthaven Schiphol",      "correct": true},
                {"option": "Euromast Rotterdam",       "correct": false}
            ],
            "correct": "<p><span>Nice!</span> Schiphol is het juiste antwoord.</p>",
            "incorrect": "<p><span>Nee.</span> Schiphol is het juiste antwoord.</p>" // no comma here
        },
         { // Question 6
            "q": "Een huishouden van '...'?",
            "a": [
                {"option": "Goud",        "correct": false},
                {"option": "Totale chaos","correct": false},
                {"option": "Jan Steen",   "correct": true}
            ],
            "correct": "<p><span>Yeaaahh!</span> In de 17e eeuw nadat Jan zijn vrouw overleed werd zijn huishouden een chaos.</p>",
            "incorrect": "<p><span>Fout.</span> Het goede antwoord is: 'Jan Steen'.</p>" // no comma here
        },
         { // Question 7
            "q": "Wat is de bezigheid van Wim Pijbes?",
            "a": [
                {"option": "Kunstschilder van landschappen",     "correct": false},
                {"option": "Directeur van het Rijksmuseum",      "correct": true},
                {"option": "Architect van o.a. het Rijksmuseum", "correct": false}
            ],
            "correct": "<p><span>Goed zo!</span> Wim Pijbes is de Directeur van het museum sinds Juni 2008.</p>",
            "incorrect": "<p><span>Nee fout!</span> Misschien moet je gaan verdiepen in de plekken die je bezoekt.</p>" // no comma here
        },
         { // Question 8
            "q": "Wat is de oorspronkelijke locatie van het Rijksmuseum",
            "a": [
                {"option": "Den-Haag",        "correct": true},
                {"option": "Amsterdam",      "correct": false},
                {"option": "Leiden",         "correct": false}
            ],
            "correct": "<p><span>Goed geantwoord!</span></p>",
            "incorrect": "<p><span>Fout.</span> Het goede antwoord moest zijn: Den-Haag.</p>" // no comma here
        },
         { // Question 9
            "q": "Welke kleur is het meisje van Jan Cornelisz Verspronck",
            "a": [
                {"option": "Oranje",        "correct": false},
                {"option": "Rood",          "correct": false},
                {"option": "Blauw",         "correct": true}
            ],
            "correct": "<p><span>Nice!</span> Je bent op de goede weg!</p>",
            "incorrect": "<p><span>Fout.</span> Het meisje van jan Cornelisz Verspronck is blauw.</p>" // no comma here
        },
         { // Question 10
            "q": "Welke kleur is de hoofddoek van het melkmeisje?",
            "a": [
                {"option": "Blauw",        "correct": false},
                {"option": "Geel",          "correct": false},
                {"option": "Wit",         "correct": true}
            ],
            "correct": "<p><span>Nice!</span> Haar hoofddoek is inderdaad wit.</p>",
            "incorrect": "<p><span>Nee.</span> Cultuur barbaar! Werp zo eens een goede blik op het schilderij als je binnen bent.</p>" // no comma here
        },
         { // Question 11
            "q": "Waar staat de molen van Jakob?",
            "a": [
                {"option": "Wijk bij Duurstede",        "correct": true},
                {"option": "Ransdorp",      "correct": false},
                {"option": "Haarlem",         "correct": false}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Incorrect.</span> Het goede antwoord moet zijn: 'Wijk bij Duurstede'.</p>" // no comma here
        },
         { // Question 12
            "q": "Hoe staat het Straatje ook wel bekend?",
            "a": [
                {"option": "Gezicht op huizen in Delft",        "correct": true},
                {"option": "Vooraanzicht van diverse handelaarswoningen",      "correct": false},
                {"option": "De Jeugdherinnering",         "correct": false}
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fout.</span></p>" // no comma here
        },
         { // Question 13
            "q": "Hoe breed is de nachtwacht?",
            "a": [
                {"option": "437 cm",        "correct": true},
                {"option": "1080 cm",      "correct": false},
                {"option": "357 cm",         "correct": false}
            ],
            "correct": "<p><span>Nice!</span> Aardig breed he!?.</p>",
            "incorrect": "<p><span>Fout.</span> De nachtwacht is 437 cm breed.</p>" // no comma here
        },
         { // Question 14
            "q": "Hoe hoog is de nachtwacht?",
            "a": [
                {"option": "720 cm",        "correct": false},
                {"option": "363 cm",      "correct": true},
                {"option": "412 cm",         "correct": false}
            ],
            "correct": "<p><span>YEAAAHH!</span> Volgens mijn ben jij een culturele genie.</p>",
            "incorrect": "<p><span>Nee.</span> De nachtwacht is 363 cm hoog, misschien nog wat meer cultuur snuiven.</p>" // no comma here
        },
         { // Question 15
            "q": "Rond welk jaar werdt Frans Hals geboren?",
            "a": [
                {"option": "1580",        "correct": true},
                {"option": "1600",      "correct": false},
                {"option": "1550",         "correct": false}
            ],
            "correct": "<p><span>Goed zo!</span> Frans Hals werd in 1582/1583 geboren te Antwerpen.</p>",
            "incorrect": "<p><span>Fout.</span> Frans Hals werd 1582/1583 geboren in Antwerpen.</p>" // no comma here
        },
         { // Question 16
            "q": "Hoeveel liften heeft het Rijksmuseum?",
            "a": [
                {"option": "24",        "correct": true},
                {"option": "16",      "correct": false},
                {"option": "8",         "correct": false}
            ],
            "correct": "<p><span>Goed zo!</span></p>",
            "incorrect": "<p><span>Fout.</span> Het Rijksmuseum heeft 24 liften.</p>" // no comma here
        }
    ]
};	
var questions = quizJSON.questions;
var score = 0;
var questionNbr = 1;
	function setupQuiz(){
        $('#points').prepend('<div class="point">' + score + '</div>');
    	var quiz = $('<ol class="questions"></ol>'),
    	questionBlock = $('<div></div>');
        count = 1;

    	for(i in questions){
    		if(questions.hasOwnProperty(i)){
    			
    			var question = questions[i];
    			var questionHTML = $('<li class="question" id="question' + (count - 1) + '"></li>');
    			questionHTML.append('<h3 id="questionTxt">' + question.q + '</h3>');
    		
    			var inputName = 'question' + (count - 1);

    			var answerHTML = $('<div class="answer"></div>');
    			var answers = question.a;

    			for(i in answers){
    				if(answers.hasOwnProperty(i)){
    					var answer = answers[i];
    					var optionId = inputName + '_' + i.toString();
    			
    					var input = '<input id="' + optionId + '" name="' + inputName +'" class="button questionBtn" value="' + answer.option + '" type="submit" />';  			
                	
                		var answerContent = $('<li></li>')
                        	    .append(input);
                          
                		answerHTML.append(answerContent);	
    				}
    			}
    			questionHTML.append(answerHTML);

    			var responceHTML = $('<ul class="responses"></ul>');
    			responceHTML.append('<li class="correct">' + question.correct + '</li>');
    			responceHTML.append('<li class="incorrect">' + question.incorrect + '</li>');

    			questionHTML.append(responceHTML);
    			quiz.append(questionHTML);

    			count++;
    		}
    	}
        questionBlock.append('<div class="questionNumber"> Vraag <span>' + questionNbr + '</span> van de ' + count + '</div>');
        $('#headWrap').prepend(questionBlock);
    	$('#triviaWrapper').append(quiz);
       
	};

    function setupHeader(questionNumber){
        
    }

    function checkAnswers(){
    	$(":submit").live('click', function(e){
    		var questionLI = $($('#' + e.currentTarget.id).parents('li.question')[0]);
            var questionTxt = $($('#' + e.currentTarget.id).parents('#questionTxt'));
            questionTxt.find('#questionTxt').fadeOut();
           
    		//disable buttons
    		//$(questionLI + " input[type=submit]").attr('disabled','disabled');
    		var answerInputs = $(this).val();
    		var answers = questions[parseInt(questionLI.attr('id').replace(/(question)/, ''))].a;
    		
    		var trueAnswers = [];
    		for(i in answers){
				if(answers.hasOwnProperty(i)){
					var answer = answers[i];
					if(answer.correct){
						trueAnswers.push(answer.option);
					}
				}
    		}
    		var selectedAnswers = [];
    		selectedAnswers.push(answerInputs);
    		var correctResponce = compareAnswers(trueAnswers, selectedAnswers);
    		if(correctResponce){
                score += 10;
                $('.point').empty();
                $('.point').prepend(score).fadeIn(300);
    			questionLI.addClass('correctResponce');
    		}
    		questionLI.find('.responses').show();
    		if(correctResponce){
    			questionLI.find('.correct').fadeIn(500);
    		}else{
    			questionLI.find('.incorrect').fadeIn(500);
    		}
    		nextQuestion(questionLI.first('li').get(0).id);
    	});
    };

    function compareAnswers(trueAnswers, selectedAnswers){
    	if(trueAnswers.length != selectedAnswers.length){
    		return false;
    	}
    	for(var i = 0, l = trueAnswers.length; i < 1; i++){
    		if(trueAnswers[i] !== selectedAnswers[i]){
    			return false;
    		}
    	}

    	return true;
    }

    function nextQuestion(currentQuestion){
        questionNbr++;
        $('.questionNumber span').empty().append(questionNbr);
    	var nextQuestion = $('#' + currentQuestion).next('.question');

    	if(nextQuestion.length){
    		$('#' + currentQuestion).delay(5000 ).fadeOut(300, function(){
    			nextQuestion.fadeIn(300);
    		})
    	}
    }

    function completeQuize(){
        Meteor.call('')
    }

    function startTrivia(){
    	var firstQuestion = $('.questions li').first();
    	if(firstQuestion.length){
    		firstQuestion.fadeIn(500);
    	}else{
            completeQuize();
        }
    }

    setupQuiz();
    startTrivia();
    checkAnswers();
};