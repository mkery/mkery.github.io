// JavaScript Document


/*
	<div class="artDetailContainer">
		<div class="prevArrow inactive"><</div>
		<img class="artDetail" src="images/portfolio/marybethkery_2012_redbaby_small.jpg" width="2448" height="3264" alt=""/>
		<div class="nextArrow">></div>
	</div>
	
*/
var artList = ["images/portfolio/marybethkery_2012_redbaby_small.jpg",
			  "images/portfolio/marybethkery_2014_cake_small.jpg",
			  "images/portfolio/marybethkery_2015_dishwashers.jpg",
			  "images/portfolio/marybethkery_2013_our_unidentical_faces_small.jpg",
			  "images/portfolio/marybethkery_2013_page_lulu_small.jpg",
			  "images/portfolio/marybethkery_2014_jkery.jpg",
			  "images/portfolio/marybethkery_2013_page_playground_small.jpg",
			  "images/portfolio/marybethkery_2014_johnblue_small.jpg",
			  "images/portfolio/marybethkery_2015_inthekitchen.jpg",
			  "images/portfolio/marybethkery_2014_cake6.jpg"];

$(document).on('click', '.art', function(ev){
	'use strict';
	ev.stopPropagation();
	var blurCover = $('.blurCover');
	blurCover.css('visibility', 'visible');
	
	var artID = parseInt(this.id);
	var artContainer = $('<div class="artDetailContainer">');
	var prevArrow = $('<div class="prevArrow"><</div>');
	var nextArrow = $('<div class="nextArrow">></div>');
	if(artID === 0)
	{
		prevArrow.addClass('inactive');
	}
	else if(artID === artList.length - 1)
	{
		nextArrow.addClass('inactive');
	}
	var image = $('<img class="artDetail"/>').attr('src', artList[artID]).attr('id', artID);
	artContainer.append(prevArrow);
	artContainer.append(image);
	artContainer.append(nextArrow);
	blurCover.append(artContainer);
	
	$('.container').addClass('artFocus');
});

$(document).on('click', '.artDetailContainer', function(ev){
	'use strict';
	ev.stopPropagation();
});

$(document).on('click', '.prevArrow', function(){
	'use strict';
	var art = $('.artDetail');
	var newId = parseInt(art.attr('id')) - 1;
	if(newId > -1)
	{
		art.attr('src', artList[newId]).attr('id', newId);
		if(newId === 0)
		{
			$(this).addClass('inactive');
		}
		$('.nextArrow').removeClass('inactive');
	}
});


$(document).on('click', '.nextArrow', function(){
	'use strict';
	var art = $('.artDetail');
	var newId = parseInt(art.attr('id')) + 1;
	console.log('YEAH!', art, newId);
	if(newId < artList.length)
	{
		art.attr('src', artList[newId]).attr('id', newId);
		if(newId === artList.length - 1)
		{
			$(this).addClass('inactive');
		}
		$('.prevArrow').removeClass('inactive');
	}
});


$(document).on('click', '.blurCover', function(){
	'use strict';
	var blurCover = $('.blurCover');
	blurCover.css('visibility', 'hidden');
	blurCover.html('');
	$('.container').removeClass('artFocus');
});