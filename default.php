<!DOCTYPE html>
<html>

<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<script src="https://code.jquery.com/jquery-3.1.0.slim.min.js" integrity="sha256-cRpWjoSOw5KcyIOaZNo4i6fZ9tKPhYYb6i5T9RSVJG8=" crossorigin="anonymous"></script>
<script>Events = new Array();
Events = <?php require("getEvents.php"); ?>;
for (var i = 0; i < Events.length; i++) {
	Events[i].Date = new Date(Events[i].Date);
};
</script>
<script src="controls.js"></script>
<link href="style.css" rel="stylesheet" type="text/css">
</head>

<body>
<table id="calDisplay"><thead style="text-align:center"></thead>
<tr><th>Týden</th><th scope="col">Pondělí</th><th scope="col">Úterý</th><th scope="col">Středa</th><th scope="col">Čtvrtek</th><th scope="col">Pátek</th><th scope="col">Sobota</th><th scope="col">Neděle</th></tr>
<tr><th>1</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>2</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>3</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>4</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>5</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><th>6</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>
<div id="controls"><a href="#" onclick="calControls.prevMonth();">Předchozí měsíc</a> <a href="#" onclick="calControls.nextMonth();">Další měsíc</a></div>
<div id="legenda">Jednotlivé dny v kalendáři mají následující barvy:<p>Volný den</p><p>Událost</p><p>Dnešek</p><p>Dnešní událost</p></div>
<br>
<div id="eventDetails"></div>
</body>

</html>