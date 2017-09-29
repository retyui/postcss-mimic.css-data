var fs = require('fs');
require('css-parse-keyframes').files('./node_modules/mimic/mimic.css',(err,result)=>{
	if(err){
		console.log(err);
		return;
	}
	fs.writeFileSync('./index.json', JSON.stringify(result,null, 4));
});