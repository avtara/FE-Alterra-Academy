let nilai1 = [0, 1, 2, 3, 4, 5];
let nilai2 = nilai1.reduce((acc, cur) => acc + cur);
console.log(nilai2);

let filterValue = [-4,3,2,-21,1]
let resFil = filterValue.filter(x => x > 0);
console.log(resFil);

let datas = [
	{name: "daniel", age: 45},
	{name: "john", age: 30},
	{name: "robert", age: null},
	{name: "jen", age: undefined},
	{name: null, age: undefined}
]

let dataFil = datas.filter(data => data.age > 0);
console.log(dataFil);

let konfersiMenit = x => {
	console.log(`${Math.floor(x/60)}:${Math.floor(x % 60).toString().padStart(2,'0')}`);
}

konfersiMenit(88);
konfersiMenit(53);
konfersiMenit(120);
konfersiMenit(124);

function inputHarusGenap(angka) {
	if (angka % 2 == 0) {
		return "Valid";
	} else {
		throw new Error("Invalid !");
	}
}

try {
	console.log(inputHarusGenap(7))
} catch (err) {
	console.error(err)
}

try {
	console.log(inputHarusGenap(4))
} catch (err) {
	console.error(err)
}


function perkalianUnik(datas) {
	var difficult_tasks = [];
	datas.forEach(function (data) {
	    let temp = datas.filter(x => x != data)
        difficult_tasks.push(temp.reduce((acc, cur) => acc + cur));
});
	return difficult_tasks;
}

console.log(perkalianUnik([1, 2, 3]));