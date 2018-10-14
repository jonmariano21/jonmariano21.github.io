var data = require('../data.json');

exports.addDescription = function(req, res){
  
	var emotion = req.query.emotion;
  var name = req.query.face;

  var date = new Date();
  date.setHours(date.getHours()-8);
  var year = date.getFullYear();
  var month = date.getMonth();
  var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
  var d = date.getDate();
  var day = date.getDay();
  var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  var h = date.getHours();
  if(h<10)
  {
    h = "0"+h;
  }
  var m = date.getMinutes();
  if(m<10)
  {
    m = "0"+m;
  }
  
  var s = date.getSeconds();
  if(s<10)
  {
    s = "0"+s;
  }
  
  var result = days[day]+'z'+months[month]+'z'+d+'z'+year+'z'+h+":"+m+":"+s;
  console.log(result);

	res.render('description', {"emotion" : emotion, "face" : name, "date" : result});


};

