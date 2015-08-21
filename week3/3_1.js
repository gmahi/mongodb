/**
 * New node file
 *
 */

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/school', function (err, db) {
	if(err) throw err;
	var state = "";
	var data = db.collection('students');
	var cursor = data.find({});

	cursor.each(function(err, doc) {
		if(err) throw err;
		if(doc==null ){
			return db.close();	
		}
		
		var index = getIndex(doc.scores);
		
		console.log(index);
		
		if (index != -1) {
			doc.scores.splice(index, 1);
			
			db.collection('students').save(doc, function(err, saved){
				console.dir("succesfull saved "+ saved + "document");
			});	
			
		}
		
		

			
	});
			
});

//function to get index of the scores document with smallest homework score

function getIndex(list) {
	
	
	var minScore = 200;
	var index = -1;

	for(var i= 0; i< list.length; i++){
		
		if (list[i].type == "homework"  ){
	       
			
			if ( list[i].score  < minScore  ) {
				index = i;
		        minScore = list[i].score;
			}
	        
			
			//console.log(scores[i].score);
		}
		
	}
	
	return index;
	
}









	

