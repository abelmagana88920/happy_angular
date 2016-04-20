module.exports = function() {
  return {
        api: function() {
            return '/api/';
	},
        properCase : function(text){      
		newText='';
		for(i=0; i<text.length; i++) 
		    if (i==0) newText += text[0].toUpperCase();     
			 else newText += text[i];
		return newText;
  	}
  }
}
