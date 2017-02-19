import A from './A.js'

const B = `1 + 1 = ${1+1}`
	, C = () => {
		return A + '  ____  ' + B
	}

document.querySelector("#content").innerHTML = C()