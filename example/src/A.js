import A from './B.js'

const B = `2 + 2 = ${2+2}`

function C(){
	this.val = `2 + 2 = ${2+2}`
}

C.prototype.do = function(a){
	return a + '  ____  ' + this.val
}

var x = new C()

module.exports = x.do(A)