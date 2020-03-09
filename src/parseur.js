
module.exports = {
	isassignable: function(input) {
		let test = /^var[\d\w]+$/.test(input)
		if (test)
			return ['v',test.slice(3)]
		test = /^fun[\w]+\([^,][\w,]+[^,]\)$/.test(input)
		// test = /^fun[\w]+\([^,]/.test(input)
		if (test){
			let tmp = input.split(/[\(\)]/)
			return ['f',tmp[0].slice(3),tmp[1].split(',')]
		}
		return [null]
	}
}