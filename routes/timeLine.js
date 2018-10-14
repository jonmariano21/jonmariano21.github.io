// Get all of our friend data

var data = require('../data.json');

exports.addTimeLine = function(req, res) { 

	// Your code goes here
if(req.session.template){
    //Here instead explicitly render the index or index_alternate, we will render 
    //what we set before when the user visit the page for the first time
    if(!req.query.time){
      res.render('timeLine', data);
  }
  else{

  var current = req.query.time.split("z");
  var timestamp = current[0]+", "+current[1]+" "+current[2]+", "+current[3]+" at "+current[4] + ".";
  var newEntry = 
  {
    'name': req.query.face,
    'imageURL': req.query.image_url,
    'description': req.query.description,
    'date' : timestamp,
  }
  ;

  console.log("New Entry has been added:");

  console.log(newEntry);
  
  data["emotions"].unshift(newEntry);

    res.render(req.session.template, data);
  }
  }else{
    // made version A permanent
    var random_num = 1;
    if(random_num > 0.5){
      //Here we set the session for the user to use index.handlerbar
      req.session.template = "timeLine";
  if(!req.query.time){
      res.render('timeLine', data);
  }
  else{

  var current = req.query.time.split("z");
  var timestamp = current[0]+", "+current[1]+" "+current[2]+", "+current[3]+" at "+current[4] + ".";
  var newEntry = 
  {
    'name': req.query.face,
    'imageURL': req.query.image_url,
    'description': req.query.description,
    'date' : timestamp,
  }
  ;

  console.log("New Entry has been added:");

  console.log(newEntry);
  
  data["emotions"].unshift(newEntry);
  
  res.render('timeLine', data); 

}
    }else{
      //Here we set the session for the user to use index_alternate.handlerbar
      req.session.template = "timeLineAlt";
  if(!req.query.time){
      res.render('timeLineAlt', data);
  }
  else{

  var current = req.query.time.split("z");
  var timestamp = current[0]+", "+current[1]+" "+current[2]+", "+current[3]+" at "+current[4] + ".";
  var newEntry = 
  {
    'name': req.query.face,
    'imageURL': req.query.image_url,
    'description': req.query.description,
    'date' : timestamp,
  }
  ;

  console.log("New Entry has been added:");

  console.log(newEntry);
  
  data["emotions"].unshift(newEntry);
  
  res.render('timeLineAlt', data); 

}
    }
 
  }





}