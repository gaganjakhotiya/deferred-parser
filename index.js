var Stringify = require('javascript-stringify')

module.exports = function(source){
	if (source.indexOf("module.exports") !== -1) {
		var o = "", l = source.match(/(require\(["|'][-|_|\w|\d|\.|\/|\\]+\S\))/g);
		l && l.forEach(function(r, i){
			o += "var _r" + i + " = " + r + ";\n"
			source = source.replace(r, '_r' + i)
		})
		var d = "(function(){" + source.replace(/(,?\s*module\.exports)\s*=/, ";return ") + "}())";
		o += "module.exports = eval(" + Stringify(d).replace(/"/g, '\\\'') + ")";
	}
	return o || source
}