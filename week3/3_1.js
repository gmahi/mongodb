/**
 * New node file
 */

var doc = {
        "_id" : 20,
        "name" : "Tressa Schwing",
        "scores" : [
                {
                        "type" : "exam",
                        "score" : 42.17439799514388
                },
                {
                        "score" : 71.99314840599558,
                        "type" : "quiz"
                },
                {
                        "type" : "homework",
                        "score" : 81.23972632069464
                },
                {
                        "type" : "homework",
                        "score" : 48.33010230766873
                }
        ]
}

var scores = doc.scores;

var index = getIndex(scores);


if (index != -1) {
	scores.splice(index, 1);
}

console.log(index);
	
//console.log(minScore);

console.log(scores);




//var scores  = doc.scores;
//var minScore = 200;
//var index = -1;
//
//for(var i= 0; i< scores.length; i++){
//	
//	if (scores[i].type == "homework"  ){
//       
//		
//		if ( scores[i].score  < minScore  ) {
//			index = i;
//	        minScore = scores[i].score;
//		}
//        
//		
//		//console.log(scores[i].score);
//	}
//	
//}









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
	
	return index
	
}


	

