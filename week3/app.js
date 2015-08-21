/**
 * New node file
 */

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/weather', function (err, db) {
	if(err) throw err;
	var state = "";
	var operator = {'$set': {"month_high" : true}};
	var data = db.collection('data');
	var cursor = data.find({});
	cursor.sort([["State", 1], ["Temperature", -1]]);
	var options = {'sort': [["State", 1], ["Temperature", -1]]};
	var cursor =  data.find({}, {}, options);
	
	cursor.each(function(err, doc) {
		if(err) throw err;
		if(doc==null ){
			return db.close();
			
		}
		
		if(state != doc.State){
			state = doc.State
			doc["month_high"] = true;
			db.collection('data').save(doc, function(err, saved){
				console.dir("succesfull saved "+ saved + "document");
			});
			
		};
			
	});
			
});

