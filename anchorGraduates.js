/* siapkan bahan */
let nama = "reza";
let nilai = 90;
let absen = 4;

/* algoritma kelulusan */
if(nilai > 70 && absen<5) {
    console.log(`${nama} mendapatkan ${nilai} dan absen hanya ${absen} jadi ${nama} dinyatakan lulus`);
} else {
    console.log(`maaf ${nama} anda tidak lulus`);
}

/* Pseucode
    INPUT "name" with any string
    INPUT "nilai" with any number
    INPUT "absen" with any number
    
    READ "name", "nilai", "absen" 
    IF nilai >70 AND absent <5
    DISPLAY "nama" "lulus"
    ELSE DISPLAY "nam" "tidak lulus"
    END IF */