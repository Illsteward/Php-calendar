"use strict"
console.log("Entering fill script.");

var calControls = {

 	today: new Date(),

	fill: function() {
	console.log("Nulling existing table.");
	for (var i = 0; i < document.getElementsByTagName("td").length; i++)
	{
			$("td").eq(i).html(null);
			$("td").eq(i).removeClass("today");
			$("td").eq(i).removeClass("occupied");
			$("td").eq(i).click(null);
	};
	console.log("Setting month name.");
	$("thead").html(calControls.getMonthName(calControls.today.getMonth()));
	console.log("Printing current month.");
	calControls.displayEvents();
	},
		
	displayEvents: function() {
	
			var firstDay = new Date(calControls.today.getFullYear(), calControls.today.getMonth(),0);
			var lastDay = new Date(calControls.today.getFullYear(), calControls.today.getMonth() + 1, 0);
			var thisDay = 1;
	
			for (i = firstDay.getDay(); thisDay < lastDay.getDate()+1; i++) {
			$("td").eq(i).html(thisDay);
			console.log("Checking for events...")
			if (new Date().getMonth() == calControls.today.getMonth()) {
				if (new Date().getDate() == thisDay) {
					$("td").eq(i).addClass("today");	};
			};
			for (var j = 0; j < Events.length; j++) {	
				if (Events[j].Date.getDate() == thisDay) {
					if (Events[j].Date.getMonth() == calControls.today.getMonth())
						$("td").eq(i).addClass("occupied");
						$("td").eq(i).attr("data-Date",Events[j].Date.getDate() + ". " + calControls.getMonthName(Events[j].Date.getMonth()) );
						$("td").eq(i).attr("data-Name",Events[j].Name);
						$("td").eq(i).attr("data-Desc",Events[j].Description);
						$("td").eq(i).click(
						function () {
							var target = event.target;
							$("#eventDetails").html("Vybraný den: " + target.dataset.date + "<br>Událost na tento den: " + target.dataset.name + "<br>" + "Popis: " + target.dataset.desc);
							});
						};
				};
			thisDay++;
		};
	},
	
	prevMonth: function() {
	calControls.today.setMonth(calControls.today.getMonth()-1);
	calControls.fill();
},

 	nextMonth: function() {
	calControls.today.setMonth(calControls.today.getMonth()+1);
	calControls.fill();
},

	getMonthName: function(month)
{
 switch(month)
 {
 case 0: return "Leden";
 case 1: return "Únor";
 case 2: return "Březen";
 case 3: return "Duben";
 case 4: return "Květen";
 case 5: return "Červen";
 case 6: return "Červenec";
 case 7: return "Srpen";
 case 8: return "Září";
 case 9: return "Říjen";
 case 10: return "Listopad";
 case 11: return "Prosinec";
 default: return "Undefined";
  };
}
};

$(calControls.fill);
