$(document).ready(function(){
	
	//randomly position clouds
	//function to generate a random number in a range
	function randomRange(min,max) {
		return Math.random() * (max-min) + min;
	}
	$(".cloud").each(function(){
		//x-axis position
		var xPos = randomRange(-32,100);
		var randXPos = Math.round(xPos);
		$(this).css({"left": randXPos + "%"});
		
		
		//make the clouds move
		if($(this).hasClass('large')){
			
			var distanceLeft = 105 - randXPos;
			var lowestSpeed = 50000;
			var highestSpeed = 75000;
			//define the speed (transition time)
			var randomCloudSpeed = randomRange(lowestSpeed, highestSpeed);
			var cloudSpeed = Math.round(randomCloudSpeed);
			var adjustedSpeed = (cloudSpeed / 105) * distanceLeft;
			
			$(this).transition({
				x: distanceLeft + "%"
			}, adjustedSpeed, "linear", function(){
				cloudReset($(this), lowestSpeed, highestSpeed);
			});
		}else if($(this).hasClass('medium')){
			var distanceLeft = 105 - randXPos;
			var lowestSpeed = 120000;
			var highestSpeed = 150000;
			//define the speed (transition time)
			var randomCloudSpeed = randomRange(lowestSpeed, highestSpeed);
			var cloudSpeed = Math.round(randomCloudSpeed);
			var adjustedSpeed = (cloudSpeed / 105) * distanceLeft;
			
			$(this).transition({
				x: distanceLeft + "%"
			}, adjustedSpeed, "linear", function(){
				cloudReset($(this), lowestSpeed, highestSpeed);
			});
		}else{
			var distanceLeft = 105 - randXPos;
			var lowestSpeed = 160000;
			var highestSpeed = 180000;
			//define the speed (transition time)
			var randomCloudSpeed = randomRange(lowestSpeed, highestSpeed);
			var cloudSpeed = Math.round(randomCloudSpeed);
			var adjustedSpeed = (cloudSpeed / 105) * distanceLeft;
			
			$(this).transition({
				x: distanceLeft + "%"
			}, adjustedSpeed, "linear", function(){
				cloudReset($(this), lowestSpeed, highestSpeed);
			});
		}

	});
	
	function cloudReset(cloud, lowestSpeed, highestSpeed){
		cloud.css({"left": "auto"}).hide();
		cloud.transition({
			x: -132 + "%"
		}, function(){
			var newCloudSpeed = randomRange(lowestSpeed, highestSpeed);
			var speed = Math.round(newCloudSpeed);
			cloud.show().transition({
				x: 700 + "%"
			}, speed, "linear", function(){
				cloudReset(cloud, lowestSpeed, highestSpeed);
			});
		});
	}
	
	$(".small .string").each(function(){
		//y-axis position
		var yPos = randomRange(60,150);
		var randYPos = Math.round(yPos);
		$(this).css('height', randYPos);
	});
	$(".medium .string").each(function(){
		//y-axis position
		var yPos = randomRange(120,250);
		var randYPos = Math.round(yPos);
		$(this).css('height', randYPos);
	});
	$(".large .string").each(function(){
		//y-axis position
		var yPos = randomRange(220,350);
		var randYPos = Math.round(yPos);
		$(this).css('height', randYPos);
	});
	
	$('.cloud').each(function(){
		
	});

});
