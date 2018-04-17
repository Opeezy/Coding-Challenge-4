console.time('Day1 Challenge');

const fs = require('fs');

const startFloor = 0;
let floorUp = 0;
let floorDown = 0;


fs.readFile('./input.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
	} else {
		const directions = data.split("");
		directions.forEach(direction => {
			if (direction === '(') {
				floorUp++;
			} else if (direction === ')') {
				floorDown++;
			} else {
				return
			}			
		})
		console.log(`Santa will have to climb ${startFloor + floorUp - floorDown} floors.`);
	}
})
	
console.timeEnd('Day1 Challenge');