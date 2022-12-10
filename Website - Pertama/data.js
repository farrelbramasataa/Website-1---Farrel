const nama = "farreli alvin fiqri";
let usia = 21;

function generateBiodata() {
    let generasi;

    if(usia > 1 && usia < 10) { 
        return generasi = "generasi orok";
    } 
    else if (usia > 10 && usia < 18) {
        console.log('ANDA REMAJA')
    }
    else if (usia > 18 && usia < 27) {
        console.log('ANDA DEWASA');
    }
    else {
        console.log('ANDA TUA BANGET COY')
    }
    console.log('generasi saya adalah', generasi);
}

console.log(nama);
console.log(nama);

generateBiodata();