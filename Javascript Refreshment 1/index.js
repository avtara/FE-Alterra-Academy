var a =5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
	let asal = "indonesia";
	return console.log(
		"perkenalkan nama saya " +
		nama +
		" nomor urut " +
		a + 
		" sekarang sedang mengikuti " +
		b +
		" berasal dari " +
		asal
	);
}

if (terdaftar === true) {
	console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; const tidak bisa di re-assign

console.log(`Array - ${lengkap_arr[2]}`)
// console.log("asal diakses " + asal);
console.log("a adalah = " + a)
console.log("b adalah = " + b)
perkenalan()

console.log("\n\n+++++++++++++++\n\n")
console.log("2.a. Karena value tidak sama walaupun typenya sudah sama, yaitu sama sama boolean")
console.log("2.b. Karena variable Const tidak dapat di re-assign")
console.log("2.c. Tidak, karena pendeklarasian nama berada di dalam scope fungsi perkenalan sehingga tidak dapat diakses dari luar scope ")

console.log("\n\n+++++++++++++++\n\n")
const foo = ["Budi", "Sita", "Ayu"]
let [a1, b1, c1] = foo;
console.log(a1, b1, c1)

console.log("\n\n+++++++++++++++\n\n")
let bdays = ['10-17','05-19','20-19']
bdays = bdays.map(function(x){ return x.replace("-","/") });
console.log(bdays)

console.log("\n\n+++++++++++++++\n\n")
let value = [1,2,3,4,5,6]
value = value.map(x => x * 2);
console.log(value);

console.log("\n\n+++++++++++++++\n\n")
let arr = [1.5, 2.56,5.1, 12.33]
arr = arr.map(x => Math.ceil(x));
console.log(arr); 
