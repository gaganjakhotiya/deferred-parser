import A from './B.js'

const B = `2 + 2 = ${2+2}`
	, C = () => {
		return A + '  ____  ' + B
	}

module.exports = C()