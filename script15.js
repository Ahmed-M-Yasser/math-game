/// <reference path="Scripts/jquery-2.1.1.min.js" />
/// <reference path="Scripts/jquery-2.1.1.js" />
/// <reference path="Scripts/jquery-2.1.1.intellisense.js" />

var counter=0;
var result=0;
var userResult=0;

var adding=true;
var subtracting=false;
var multiplying=false;
var dividing=false;

var mixAddSub=false;

var time=0;

function showResult() {
	if(!gover){
	if (counter==5){
		
		$("#mainTest").prop('disabled','disabled');

		$("#operationTitle").fadeOut(); $("#levelTitle").fadeOut();
		$("#pop_up_con").fadeIn();
		$("#resultText").focus();
		//$("#gameCon").find("input,div,span").attr("disabled", "disabled");
		//$("#gameCon *").attr("disabled","disabled");
		/*$("#gameCon :input").attr("disabled", "true");
		$("#gameCon :.dis").attr("disabled", "true");*/
		popSound.play();

		counter=0;
	}
	}
}

function reset() {
	counter=0;
	randomN=0;
	result=0;

	gover=false;

	setTimer=15;

	$("#addID").css({"font-weight":"normal"});
	$("#subID").css({"font-weight":"normal"});
	$("#multID").css({"font-weight":"normal"});
	$("#divID").css({"font-weight":"normal"});
	$("#mixID").css({"font-weight":"normal"});
	
	$("#fetusID").css({"font-weight":"normal"});
	$("#babyID").css({"font-weight":"normal"});
	$("#youthID").css({"font-weight":"normal"});
	$("#manID").css({"font-weight":"normal"});
	$("#wiseID").css({"font-weight":"normal"});


	if(adding){
		defaultResult=0;

		time=(setTimer);
		$("#addID").css({"font-weight":"900"});
	}
	else if(subtracting){
		if(fste){defaultResult=10;} else if(fett){
			if(fetus){defaultResult=10;} else if(baby){defaultResult=15;} else if(youth){defaultResult=20;} else if(man){defaultResult=25;} else if(wise){defaultResult=30;}
		} else if(fttf){
			if(fetus){defaultResult=15;} else if(baby){defaultResult=20;} else if(youth){defaultResult=25;} else if(man){defaultResult=30;} else if(wise){defaultResult=40;}
		} else if(fftt){
			if(fetus){defaultResult=25;} else if(baby){defaultResult=30;} else if(youth){defaultResult=35;} else if(man){defaultResult=40;} else if(wise){defaultResult=50;}
		} else if(tom){
			if(fetus){defaultResult=50;} else if(baby){defaultResult=55;} else if(youth){defaultResult=65;} else if(man){defaultResult=75;} else if(wise){defaultResult=100;}
		}

		time=setTimer;
		$("#subID").css({"font-weight":"900"});
    }
    else if(multiplying){
    	defaultResult=1;

    	time=(setTimer);
		$("#multID").css({"font-weight":"900"});
    }
    else if(dividing){
    	
		if(fett){
			if(fetus){defaultResult=50;} else if(baby){defaultResult=100;} else if(youth){defaultResult=100;} else if(man){defaultResult=100;} else if(wise){defaultResult=200;}
		} else if(fttf){
			if(fetus){defaultResult=100;} else if(baby){defaultResult=150;} else if(youth){defaultResult=250;} else if(man){defaultResult=500;} else if(wise){defaultResult=750;}
		} else if(fftt){
			if(fetus){defaultResult=1000;} else if(baby){defaultResult=2500;} else if(youth){defaultResult=5000;} else if(man){defaultResult=7500;} else if(wise){defaultResult=10000;}
		} else if(tom){
			if(fetus){defaultResult=1250;} else if(baby){defaultResult=2550;} else if(youth){defaultResult=5250;} else if(man){defaultResult=7550;} else if(wise){defaultResult=15000;}
		}

		time=setTimer;
		$("#divID").css({"font-weight":"900"});
    }
    else if(mixAddSub){
    		defaultResult=0;

		time=(setTimer+10);
		$("#operation").html("MIX");
		$("#mixID").css({"font-weight":"900"});
    }
	$("#labelResult").html("");
	$("#resultText").val("");
	$("#main").css({"background-color":"","font-size":"","padding-top":"","height":"","color":""});
	$(".border").each(function () {
		window.setTimeout(function (){$(".border").fadeIn(); }, 500);
		$(".border").css({"border-color":"blue"});
		$(".border").attr({"data-clicked":"false"});
		$($(".border").children()[0]).css({"font-size":"85px"});
	});
	$("#over").fadeOut(10);

	$('#timer').html(time);

	started=false;
	clearInterval(count);

	v=2; vv=2; vvv=3; vvvv=1; vvvvv=2;

	if(fetus){
		setTimer=parseInt($("#timer").html())+20;
		$("#timer").html(setTimer);
		$("#fetusID").css({"font-weight":"900"});
	}
	else if(baby){
		setTimer=parseInt($("#timer").html())+15;
		$("#timer").html(setTimer);
		$("#babyID").css({"font-weight":"900"});
	}
	else if(youth){
		setTimer=parseInt($("#timer").html())+10;
		$("#timer").html(setTimer);
		$("#youthID").css({"font-weight":"900"});
	}
	else if(man){
		setTimer=parseInt($("#timer").html())+5;
		$("#timer").html(setTimer);
		$("#manID").css({"font-weight":"900"});
	}
	else if(wise){
		setTimer=parseInt($("#timer").html());
		$("#timer").html(setTimer);
		$("#wiseID").css({"font-weight":"900"});
	}


    $('#timer').css({"color":"blue"});


	$("#correction").fadeOut();

	inst_on=false;

	$("#operationTitle").fadeIn(); $("#levelTitle").fadeIn();

	window.setTimeout(function(){$("#correction").css({"left":"575px"});},1000);
}

function gameOver() {
			gameOverSound.play();
			$(".border").each(function () {
				$(".border").fadeOut();
				$(".border").css({"border-color":"transparent"});
			});
			window.setTimeout(function (){$("#main").fadeIn(); }, 1000);
			$("#main").css({"background-color":"yellow","font-size":"65px","padding-top":"0px","height":"420px","color":"red","width":"440"});
			window.setTimeout(function (){$("#over").fadeIn(); }, 10);
			clearInterval(count);

			$("#correction").fadeOut(20);

			window.setTimeout(function (){$("#pop_up_con").css({"display":"none"});},600);

			$("#operationTitle").fadeIn(); $("#levelTitle").fadeIn();

			gover=true;
			resOver=false;
}

$(document).ready(function () {

	var currentID="";

	v=2;
	vv=2;
	vvv=3;			//To do:
	vvvv=1;					//when result pop up shows up, disable each element in the background 	[Done]
	vvvvv=2;				//put a click sound when click on and thing clickable, and Tasfik sound when answering rightDiv 	[Done]
						//Think again about the numbers and levels -> [Level balancing]
	setTimer=15;		//think of a good background for the game [Design]
						//Take care of the Arabic design
	inst_on=true;		//I can make this game for Education and Employment purposes
						//Re-write the instructions
	gover=false;			//I may make the drop-down menu shows up when clicking on the ageGroupTitle [Done]

	resOver=false;

	var rs=$("#radioSound")[0];
	var wrong=$("#wrongSound")[0];
	var list=$("#listSound")[0];
	var popSound=$("#popSound")[0];
	popSound.play();
	var correct=$("#correctSound")[0];
	var gameOverSound=$("#gameOverSound")[0];

	$("#addRadio").fadeOut();

	$("#fetusRadio").attr({"checked":"checked"});
	fetus=true;
	$("#fetusID").css({"font-weight":"900"});
	$("#addID").css({"font-weight":"900"});

	 $("#wiseID").fadeOut(); $("#wiseRadio").fadeOut(); $("#manID").fadeOut(); $("#manRadio").fadeOut();

	var sol=true;

	$("#leftDiv").fadeOut(1); $("#rightDiv").fadeOut(1); $("#centerTop").fadeOut(1); $("#centerBottom").fadeOut(1); $("#centerCenter").fadeOut(1);

	$(".border").mouseup(function () {
		if($(this).attr("data-clicked")=="false"){
			if(adding){
				time=(setTimer);
				if(fetus){
					if(sol){z=1;} else if(fste){z=2;} else if(fett){z=5;} else if(fttf){z=10;} else if(fftt){z=60;} else if(tom){z=70;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(baby){
					if(sol){z=2;} else if(fste){z=3;} else if(fett){z=7;} else if(fttf){z=15;} else if(fftt){z=65;} else if(tom){z=75;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(youth){
					if(sol){z=2;} else if(fste){z=4;} else if(fett){z=9;} else if(fttf){z=20;} else if(fftt){z=75;} else if(tom){z=80;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(man){
					if(sol){z=5;} else if(fste){z=5;} else if(fett){z=11;} else if(fttf){z=25;} else if(fftt){z=85;} else if(tom){z=90;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else{
					if(sol){z=7;} else if(fste){z=9;} else if(fett){z=15;} else if(fttf){z=35;} else if(fftt){z=95;} else if(tom){z=100;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}

    			result+=randomN;
			}
			else if(subtracting){
				time=setTimer;

				if(fetus){
					if(fste){z=1;} else if(fett){z=2;} else if(fttf){z=3;} else if(fftt){z=5;} else if(tom){z=10;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(baby){
					if(fste){z=2;} else if(fett){z=3;} else if(fttf){z=4;} else if(fftt){z=6;} else if(tom){z=12;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(youth){
					if(fste){z=2;} else if(fett){z=4;} else if(fttf){z=5;} else if(fftt){z=7;} else if(tom){z=15;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(man){
					if(fste){z=2;} else if(fett){z=5;} else if(fttf){z=6;} else if(fftt){z=8;} else if(tom){z=20;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else{
					if(fste){z=2;} else if(fett){z=6;} else if(fttf){z=7;} else if(fftt){z=9;} else if(tom){z=25;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}

    			defaultResult-=randomN;
    			result=defaultResult;
			}
			else if(multiplying){
				time=(setTimer);
				
				
				if(fetus){
					if(fett){z=2;} else if(fttf){z=3;} else if(fftt){z=4;} else if(tom){z=5;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(baby){
					if(fett){z=2;} else if(fttf){z=3;} else if(fftt){z=5;} else if(tom){z=6;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(youth){
					if(fett){z=3;} else if(fttf){z=3;} else if(fftt){z=6;} else if(tom){z=6;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else if(man){
					if(fett){z=3;} else if(fttf){z=3;} else if(fftt){z=6;} else if(tom){z=8;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}
				else{
					if(fett){z=4;} else if(fttf){z=4;} else if(fftt){z=7;} else if(tom){z=10;}
					randomN=Math.floor(Math.random()*(z-1+1)+1);
				}

    			defaultResult*=randomN;
    			result=defaultResult;
			}
			else if(dividing){
				time=setTimer;

    				for (var i = (defaultResult)-vvvv ; i > 0; i--) {
    					if (defaultResult%i==0) {
    						dividable+=","+i;
    					}
    				}
    				if(dividable.split(",").length==3){
    					vvvv=0;
    				}

				denominator=dividable.split(",")[Math.floor(Math.random()*((dividable.split(",").length-vvv)-vv+1)+vv)];
				if((denominator>=1000)){
					if(tom){
						denominator/=2;
					}else{
						denominator/=50;
					}
				}
				if(dividable.split(",").length>=16){
					if((denominator==(0.5*defaultResult)) && (!tom)){
						denominator/=100;
					}
					else if((denominator==(0.1*defaultResult)) && (!tom)){
						if(fttf){
							denominator/=5;
						}
						else{
							denominator/=10;
						}
					}
				}
				if(youth){
					if(dividable.split(",").length>=16){
						if((denominator==(0.25*defaultResult))||(denominator==((1/5)*defaultResult))){
							denominator/=10;
						}
					}
				}
				randomN=denominator;
				vv=1; vvv=1;
    			
    			defaultResult/=denominator;
    			result=defaultResult;

    			dividable="";
			}
			else if(mixAddSub){
				time=(setTimer+15);
				randomN=Math.floor(Math.random()*(100-1+1)+1);

    			dividable="";

 				mixArray=1+","+2+","+3+","+4;
    			mixRandom=mixArray.split(",")[Math.floor(Math.random()*(v-0+1)+0)];
    			switch(mixRandom){
    				case "1":
						$("#operation").html("( + )");

						if(fftt){
							vfftt=50;
						}
						else{
							vfftt=100;
						}
    					randomN=Math.floor(Math.random()*(vfftt-1+1)+1);
    					defaultResult=result;

    					defaultResult+=randomN;
    					result=defaultResult;

    					v=3;
    					break;

    				case "2":
						$("#operation").html("( - )");

						if(fftt){
							vfftt=15;
						}
						else{
							vfftt=25;
						}
    					randomN=Math.floor(Math.random()*(vfftt-1+1)+1);
    					defaultResult=result;

    					defaultResult-=randomN;
    					result=defaultResult;

    					v=3;
    					break;
    				
    				case "3":
		$("#operation").html("( * )");

						if(fftt){
							vfftt=5;
						}
						else{
							vfftt=10;
						}
    					randomN=Math.floor(Math.random()*(vfftt-1+1)+1);
    					defaultResult=result;

    					defaultResult*=randomN;
    					result=defaultResult;

    					v=3;
    					break;
    			
    				case "4":
		$("#operation").html("( / )");

    						if(result<0){
    							defaultResult=Math.abs(result);
    							minusDenominator=true;
    						}
    						else{
    							defaultResult=result;
    							minusDenominator=false;
    						}

					for (var i = defaultResult - vvvv; i > 0; i--) {
    					if (defaultResult%i==0) {
    						dividable+=i+",";
    					}
    				}

    				if(dividable.split(",").length==2){
    					dividable+=defaultResult;
    					vvvvv=1;
    				}

					denominator=dividable.split(",")[Math.floor(Math.random()*((dividable.split(",").length-vvvvv)-0+1)+0)];
					
					if(denominator==0){
						randomN=denominator+1;
					}
					else{
						randomN=denominator;
					}

					randomN = Math.abs(randomN);

    				defaultResult/=randomN;
    				if(minusDenominator){
    					result=defaultResult * (-1);
    				}
    				else{
    					result=defaultResult;	
    				}
    					break;
    			}
			}

			if (counter<5) {
				if(randomN>=1000){
					$($(this).children()[0]).css({"font-size":"65px"});
				}
				else{
					$($(this).children()[0]).css({"font-size":"85px"});	
				}
				$($(this).children()[0]).html(randomN);
				$($(this).children()[0]).fadeIn();
				$($(this).children()[0]).fadeOut();	
				counter++;
				setTimeout(showResult, 2500);
				$(this).attr({"data-clicked":"true"});
			}
			else{
				gover=true;
				var i=1;

				clearInterval(count);

				$(".squares").each(function (){
					if($("#"+i).attr("data-clicked")=="true"){
						$("#"+i).css({"border-color":"red"});
						$(this).css({"border-color":"red"});
					}
					i++;
				});
				$(this).css({"border-color":"red"});
				wrong.play();
				$("#correction").html("You Only need 5 numbers");
				$("#correction").fadeIn();
				resOver=true;
				setTimeout(gameOver,1500);
			}

		}
		else{
			$(this).css({"border-color":"red"});
			wrong.play();
			gover=true;
			resOver=true;
			setTimeout(gameOver,1000)
		}

	if ( !started) {
	 	count = setInterval(function() {

    	var x = parseInt($('#timer').html());
    	if ((x !== 0)) {
      		$('#timer').html(x - 1);
      		if(x<=6 && x>1){
      		$('#timer').css({"color":"red"});
      		$('#timer').fadeOut();
      		$('#timer').fadeIn();
      		}
    	}
     	else {
      		clearInterval(count);
        	IncorrectAnswer();
    	}
  	}, 1000);
		started=true;
	}

	$("#startPoint").fadeOut();
	});

    $("#pop_up_bg").mouseup(function () {
        $("#pop_up_con").fadeOut();
        reset();
    });

    $("#btn").mouseup(function () {
		userResult=parseInt($("#resultText").val());
		if (userResult===result) {
			clearInterval(count);
			$("#labelResult").html("Correct");
			$("#labelResult").css({"color":"green"});
			$("#correction").html("Well Done");
			$("#correction").css({"left":"630px"});
			$("#correction").fadeIn();
			setTimeout(CorrectAnswer,1000);
        	//$("#pop_up_con").fadeOut();
        	correct.play();
		}
		else{
			wrong.play();
			$("#labelResult").html("Incorrect");
			$("#labelResult").css({"color":"red"});
			$("#correction").html("Correct answer is "+result);
			$("#correction").css({"left":"590px"});
			$("#correction").fadeIn();
			setTimeout(IncorrectAnswer,1000);
		}
    });
    $('#resultText').bind('keyup', function(e) {
    	if ( e.keyCode === 13 ) {
        	$("#btn").mouseup();
    	}
    	else if ( e.keyCode === 27 ) {
        	$("#pop_up_bg").mouseup();
    	}
	});

	$("#newGameBTN").mouseup(function () {
		if(!resOver){	
			$(".border").fadeOut(200);
			$(".border").fadeIn(200);
		reset();
		startPointFun();

		clearInterval(gameOver);

		rs.play();
	}
	});

	$("#instructions_con").mouseup(function () {
		$("#gameCon").fadeIn(300);			//300
		/*$("#centerCenter").css({"display":"inline-block;"}); $("#leftDiv").css({"display":"inline-block;"});
		$("#rightDiv").css({"display":"inline-block;"}); $("#centerTop").css({"display":"inline-block;"}); $("#centerBottom").css({"display":"inline-block;"});*/
		$("#centerCenter").fadeIn(10);
		$("#inst_parent").fadeOut(100);		//100
		$("#leftDiv").fadeIn(1500); $("#rightDiv").fadeIn(1500); $("#centerTop").fadeIn(1500); $("#centerBottom").fadeIn(1500);
		inst_on=false;
		$("#overLay").fadeOut();
		startPointFun();		//Copy the code to a new clean project & make the items fade in one by one slowly & Don't forget to
	});							//fix the instructions pop up width and height

	$(document).keypress(function(e) {
    	if(((e.which == 13)) && inst_on) {
        	$("#instructions_con").mouseup();
    	}
	});

	$("#startGame").mouseup(function(){
		$("#instructions_con").mouseup();
	});

	$("#inst_btn").mouseup(function () {
		reset();
		$("#inst_parent").fadeIn();
		$("#gameCon").fadeOut(1);
		$("#leftDiv").fadeOut(1); $("#rightDiv").fadeOut(1); $("#centerTop").fadeOut(1); $("#centerBottom").fadeOut(1);$("#centerCenter").fadeOut(1);
		$("#startGame").focus();
		inst_on=true;
		$("#overLay").fadeIn();
		popSound.play();
	});
	$('#startGame').bind('keyup', function(e) {
    	if ( e.keyCode === 13 ) {
        	$("#instructions_con").mouseup();
    	}
    });

	$(":radio").mousedown(function(){
		rs.play();
	});

	$("input:radio[name=xyz]").mousedown(function () {

		$("#operation").html($(this).val());
		var HTML=$("#operation").html();

		if (HTML=="( + )") {
			adding=true; subtracting=false; multiplying=false; dividing=false; mixAddSub=false;
			defaultResult=0;

			$("#addID").mousedown();
		}
		else if (HTML=="( - )") {
			adding=false; subtracting=true; multiplying=false; dividing=false; mixAddSub=false;
    		defaultResult=100;

			$("#subID").mousedown();
		}
		else if (HTML=="( * )") {
			adding=false; subtracting=false; multiplying=true; dividing=false; mixAddSub=false;
			defaultResult=1;

			$("#multID").mousedown();
		}
		else if (HTML=="( / )") {
			adding=false; subtracting=false; multiplying=false; dividing=true; mixAddSub=false;
    		
		if(youth){
			z=1000;
			defaultResult=z;
		}
		else if(man){
			z=5000;
			defaultResult=z;
		}
		else if(wise){
			z=10000;
			defaultResult=z;
		}

			$("#divID").mousedown();
		}
		else if (HTML=="MIX") {
			adding=false; subtracting=false; multiplying=false; dividing=false; mixAddSub=true;
    		defaultResult=0;

			$("#mixID").mousedown();
		}

		startPointFun();

		reset();
	$(this).next().css({"font-weight":"900"});
	});

	$("#addID").mousedown(function(){
		$("#operation").html("( + )");
		adding=true; subtracting=false; multiplying=false; dividing=false; mixAddSub=false;
		defaultResult=0;
		startPointFun();

		$("#addRadio").prop({"checked":"true"});

		reset();
	$("#addID").css({"font-weight":"900"});

    $("#pop_up_bg").mouseup();

	rs.play();
	});

	$("#subID").mousedown(function(){
		$("#operation").html("( - )");
		adding=false; subtracting=true; multiplying=false; dividing=false; mixAddSub=false;
		if(fste){defaultResult=10;} else if(fett){
			if(fetus){defaultResult=10;} else if(baby){defaultResult=15;} else if(youth){defaultResult=20;} else if(man){defaultResult=25;} else if(wise){defaultResult=30;}
		} else if(fttf){
			if(fetus){defaultResult=15;} else if(baby){defaultResult=20;} else if(youth){defaultResult=25;} else if(man){defaultResult=30;} else if(wise){defaultResult=40;}
		} else if(fftt){
			if(fetus){defaultResult=25;} else if(baby){defaultResult=30;} else if(youth){defaultResult=35;} else if(man){defaultResult=40;} else if(wise){defaultResult=50;}
		} else if(tom){
			if(fetus){defaultResult=50;} else if(baby){defaultResult=55;} else if(youth){defaultResult=65;} else if(man){defaultResult=75;} else if(wise){defaultResult=100;}
		}
		startPointFun();

		$("#subRadio").prop({"checked":"true"});

		reset();
	$("#subID").css({"font-weight":"900"});

    $("#pop_up_bg").mouseup();

	rs.play();
	});

	$("#multID").mousedown(function(){
		$("#operation").html("( * )");
		adding=false; subtracting=false; multiplying=true; dividing=false; mixAddSub=false;
		defaultResult=1;
		startPointFun();

		$("#multRadio").prop({"checked":"true"});

		reset();
	$("#multID").css({"font-weight":"900"});

    $("#pop_up_bg").mouseup();
    
	rs.play();
	});

	$("#divID").mousedown(function(){
		$("#operation").html("( / )");
		adding=false; subtracting=false; multiplying=false; dividing=true; mixAddSub=false;
		if(fett){
			if(fetus){defaultResult=50;} else if(baby){defaultResult=100;} else if(youth){defaultResult=200;} else if(man){defaultResult=400;} else if(wise){defaultResult=800;}
		} else if(fttf){
			if(fetus){defaultResult=100;} else if(baby){defaultResult=150;} else if(youth){defaultResult=250;} else if(man){defaultResult=500;} else if(wise){defaultResult=750;}
		} else if(fftt){
			if(fetus){defaultResult=1000;} else if(baby){defaultResult=2500;} else if(youth){defaultResult=5000;} else if(man){defaultResult=7500;} else if(wise){defaultResult=10000;}
		} else if(tom){
			if(fetus){defaultResult=1250;} else if(baby){defaultResult=2550;} else if(youth){defaultResult=5250;} else if(man){defaultResult=7550;} else if(wise){defaultResult=15000;}
		}
		startPointFun();

		$("#divRadio").prop({"checked":"true"});

		reset();
	$("#divID").css({"font-weight":"900"});

    $("#pop_up_bg").mouseup();
    
	rs.play();
	});

	$("#mixID").mousedown(function(){
		$("#operation").html("MIX");
		adding=false; subtracting=false; multiplying=false; dividing=false; mixAddSub=true;
		defaultResult=0;

		startPointFun();

		$("#mixAddSub").prop({"checked":"true"});

		reset();
	$("#mixID").css({"font-weight":"900"});

    $("#pop_up_bg").mouseup();
    
	rs.play();
	});



	$("#fetusID").mousedown(function(){
		fetusFunction();
		startPointFun();
    
		rs.play();

    $("#pop_up_bg").mouseup();
	});


	$("#babyID").mousedown(function(){
		babyFunction();
		startPointFun();
    
		rs.play();

    $("#pop_up_bg").mouseup();
	});


	$("#youthID").mousedown(function(){
		youthFunction();
		startPointFun();
    
		rs.play();

    $("#pop_up_bg").mouseup();
	});

	$("#manID").mousedown(function(){
		manFunction();
		startPointFun();
    
		rs.play();

    $("#pop_up_bg").mouseup();
	});

	$("#wiseID").mousedown(function(){
		wiseFunction();
		startPointFun();
    
		rs.play();

    $("#pop_up_bg").mouseup();
	});
	
	
	$("#fetusRadio").mousedown(function(){
		fetusFunction();
		startPointFun();
	});
	$("#babyRadio").mousedown(function(){
		babyFunction();
		startPointFun();
	});
	$("#youthRadio").mousedown(function(){
		youthFunction();
		startPointFun();
	});
	$("#manRadio").mousedown(function(){
		manFunction();
		startPointFun();
	});
	$("#wiseRadio").mousedown(function(){
		wiseFunction();
		startPointFun();
	});

	$("#ageGroupTitle").mouseenter(function (){
		$("#ageGroup").animate({"height":"140px"});
		$(".ageGroupItems").fadeIn();
	});
	$("#ageGroupTitle").mousedown(function (){
		$("#ageGroup").animate({"height":"140px"});
		$(".ageGroupItems").fadeIn();
		listDown=true;
	});

	$(document).mousedown(function (){
		if(!listDown){
			$("#ageGroup").animate({"height":"20px"});
			$(".ageGroupItems").fadeOut();
		}
		listDown=false;
	});

		$(".ageGroupItems").mousedown(function(){
			$("#ageGroupLabel").html($(this).html());
    		$("#pop_up_bg").mouseup();
			reset();
			$("#fetusRadio").prop({"checked":"true"});
			$("#fetusID").mousedown();
			$("#addID").mousedown();

			if(($("#ageGroupLabel").html())=="6 or Less"){
				sol=true; fste=false; fett=false; fttf=false; fftt=false; tom=false;
				$("#subCon").fadeOut(); $("#multCon").fadeOut(); $("#divCon").fadeOut(); $("#mixCon").fadeOut(); $("#addRadio").fadeOut(); $("#wiseID").fadeOut(); $("#wiseRadio").fadeOut(); $("#manID").fadeOut(); $("#manRadio").fadeOut();
			}
			else if(($("#ageGroupLabel").html())=="From 7 to 9"){
				sol=false; fste=true; fett=false; fttf=false; fftt=false; tom=false;
				$("#subCon").fadeIn(); $("#multCon").fadeOut(); $("#divCon").fadeOut(); $("#mixCon").fadeOut(); $("#addRadio").fadeIn(); $("#wiseID").fadeOut(); $("#wiseRadio").fadeOut(); $("#manID").fadeIn(); $("#manRadio").fadeIn();
			}
			else if(($("#ageGroupLabel").html())=="From 10 to 12"){
				sol=false; fste=false; fett=true; fttf=false; fftt=false; tom=false;
				$("#subCon").fadeIn(); $("#multCon").fadeIn(); $("#divCon").fadeIn(); $("#mixCon").fadeOut(); $("#addRadio").fadeIn(); $("#wiseID").fadeIn(); $("#wiseRadio").fadeIn(); $("#manID").fadeIn(); $("#manRadio").fadeIn();
			}
			else if(($("#ageGroupLabel").html())=="From 13 to 15"){
				sol=false; fste=false; fett=false; fttf=true; fftt=false; tom=false;
				$("#subCon").fadeIn(); $("#multCon").fadeIn(); $("#divCon").fadeIn(); $("#mixCon").fadeOut(); $("#addRadio").fadeIn(); $("#wiseID").fadeIn(); $("#wiseRadio").fadeIn(); $("#manID").fadeIn(); $("#manRadio").fadeIn();
			}
			else if(($("#ageGroupLabel").html())=="From 16 to 20"){
				sol=false; fste=false; fett=false; fttf=false; fftt=true; tom=false;
				$("#subCon").fadeIn(); $("#multCon").fadeIn(); $("#divCon").fadeIn(); $("#mixCon").fadeIn(); $("#addRadio").fadeIn(); $("#wiseID").fadeIn(); $("#wiseRadio").fadeIn(); $("#manID").fadeIn(); $("#manRadio").fadeIn();
			}
			else if(($("#ageGroupLabel").html())=="20 or More"){
				sol=false; fste=false; fett=false; fttf=false; fftt=false; tom=true;
				$("#subCon").fadeIn(); $("#multCon").fadeIn(); $("#divCon").fadeIn(); $("#mixCon").fadeIn(); $("#addRadio").fadeIn(); $("#wiseID").fadeIn(); $("#wiseRadio").fadeIn(); $("#manID").fadeIn(); $("#manRadio").fadeIn();
			}
		});

	$(".ageGroupItems").mouseenter(function(){
		list.play();
	})
});

var randomN="";

function IncorrectAnswer() {
	$("#pop_up_con").fadeOut();
	setTimeout(gameOver,245)
}
function CorrectAnswer() {
	$("#pop_up_con").fadeOut();
	clearInterval(count);
	setTimeout(reset,245)
}


function startPointFun() {
	$("#startPoint").html("Your start point is "+defaultResult);
	$("#startPoint").fadeIn();
	setTimeout(function (){$("#startPoint").fadeOut()},1500);
}


function fetusFunction(){
		fetus=true; baby=false; youth=false; man=false; wise=false;

		$("#fetusRadio").prop({"checked":"true"});

		reset();
		$("#fetusID").css({"font-weight":"900"});
}
function babyFunction(){
		fetus=false; baby=true; youth=false; man=false; wise=false;

		$("#babyRadio").prop({"checked":"true"});

		reset();
		$("#babyID").css({"font-weight":"900"});
}
function youthFunction(){
		fetus=false; baby=false; youth=true; man=false; wise=false;

		$("#youthRadio").prop({"checked":"true"});

		reset();
		$("#youthID").css({"font-weight":"900"});
}
function manFunction(){
		fetus=false; baby=false; youth=false; man=true; wise=false;

		$("#manRadio").prop({"checked":"true"});

		reset();
		$("#manID").css({"font-weight":"900"});
}
function wiseFunction(){
		fetus=false; baby=false; youth=false; man=false; wise=true;

		$("#wiseRadio").prop({"checked":"true"});

		reset();
		$("#wiseID").css({"font-weight":"900"});
}

var defaultResult=0;

var dividable=new array();
var denominator=0;

var started=false;

var count="";

var mixArray=new array();
var mixRandom=0;

var v=0;
var vv=0;
var vvv=0;
var vvvv=0;
var vvvvv=0;

var minusDenominator=false;

var fetus=true;
var baby=false;
var youth=false;
var man=false;
var wise=false;

var setTimer=0;

var inst_on=false;

var z=0;

var sol=true;
var fste=false;
var fett=false;
var fttf=false;
var fftt=false;
var tom=false;

gover=false;

var vfftt=0;

var listDown=false;

var resOver=false;