const _ = require('lodash');

const anggota_kelas = ["budi", "sita", "ayu", "rena", "omen"];
let mengumpulkan_tugas = ["rena", "omen"]

let chunk = _.chunk(anggota_kelas, 2);
console.log(chunk);

let join = _.join(anggota_kelas, '-');
console.log(join);

let pullAll = _.pullAll(anggota_kelas, mengumpulkan_tugas);
console.log(pullAll);

let reverse = _.reverse(anggota_kelas);
console.log(reverse);

function countingValleys(s) {
    let steps = s.split("");
    let valleyCount = 0;
    let currentSeaLevel = 0;
    let valleyStatus = false;
    _.forEach(steps, function (step) {
        step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
        if (currentSeaLevel < 0 && !valleyStatus) {
            valleyCount++;
            valleyStatus = true
        } else if (currentSeaLevel >= 0 && valleyStatus) {
            valleyStatus = false
        }
    }); 
    return valleyCount;
}

countingValleys("UDDDUDUU");

class Orang {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    perkenalanDiri() {
        return `Halo, saya ${this.nama}. ${this.umur > 17 ? 'Saya sudah Dewasa' : 'Saya masih di bawah umur'}`
    }
}

class Pelajar extends Orang {
    constructor(nama, umur) {
        super(nama, umur)
        this.pekerjaan = "Siswa/Mahasiswa"
    }
}

class Pekerja extends Orang {
    constructor(nama, umur, pekerjaan) {
        super(nama, umur)
        this.pekerjaan = pekerjaan;
    }

    perkenalanProfesi() {
        return `Hi, saya seorang ${this.pekerjaan}`
    }
}

const ana = new Orang('Ana', 10);
const ini = new Pelajar('ini', 18);
const budi = new Pekerja('Budi', 28, "Koki");

console.log(ana.perkenalanDiri());
console.log(ini.perkenalanDiri());
console.log(ini.pekerjaan);
console.log(budi.perkenalanDiri());
console.log(budi.perkenalanProfesi());
console.log(budi.pekerjaan);