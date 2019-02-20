/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
	for (var i = 0; i < preferences.length; i++) {
		var first = i+1;
		var second = preferences[first - 1]
		var third = preferences[second - 1]
	    if (preferences[first - 1] != first && preferences[second - 1] != second && preferences[third - 1] != third) {
	    	if (preferences[third - 1] == first)
       			count++ 
       	}
} 
return count/3
};
