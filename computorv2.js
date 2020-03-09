let lstvar = {}
let lstfct = {}

const pars = require('./src/parseur');
const test = require('./src/tester');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
process.stdout.write("> ")
rl.on('line', (input) => {
	if (input == 'exit')
		rl.close();
	let clrinput = input.replace(/\s/g, '').split('=')
	console.log(clrinput)
	switch (clrinput.length) {
		case 1:
			// if(issolvable(clrinput[0]))
				// solv(clrinput[0])
			// else
				console.error("input invalid")
			break;
		case 2:
			let assi = pars.isassignable(clrinput[0])
			switch (assi[0]) {
				case 'v':
					let type = test.gettype(clrinput[1])
					if(type != null)
						console.error("input valid !!!!!!!!!!!!!!!")
					// 	lstvar[clrinput[0]] = [type, solv(clrinput[1],type)]
					else
						console.error("input invalid")
					break;
				case 'f':
						// if(isfunction(clrinput[1]))
						// 	lstvar[clrinput[0]] = tofunction(clrinput[1])
						// else
							console.error("input invalid")
					break;
				default:
					// if(issolvable( clrinput[0] + "-(" + clrinput[1] +")" ))
					// 	console.log(solv(clrinput[0] + "-(" + clrinput[1] +")"))
					// else
						console.error("input invalid")
					break;
			}
			break;
		default:
			console.error("input invalid")
			break;
	}
	process.stdout.write("> ")
});