/* INPUT "nama" dengan string
   INPUT "skor" dengan number
   
   READ "nama", "skor"
   IF skor >= 80 AND skor <= 100
   DISPLAY "skor A"
   ELSE IF skor >= 65 AND skor <= 79
   DISPLAY "skor B"
   ELSE IF skor >= 50 AND skor <= 64
   DISPLAY "skor C"
   ELSE IF skor >= 35 AND skor <= 49
   DISPLAY "skor D"
   ELSE IF skor >= 0 AND skor <= 34
   DISPLAY "skor E"
   ELSE DISPLAY "nilai invalid" */
   

let nama = "reza";
let skor = 86;

if (skor >= 80 && skor <= 100) {
   console.log(`${nama} mendapat nilai A`);
} else if(skor >= 65 && skor <= 79) {
   console.log(`${nama} mendapat nilai B`);
} else if(skor >= 50 && skor <= 65) {
   console.log(`${nama} mendapat nilai C`);
} else if(skor >= 35 && skor <= 49) {
   console.log(`${nama} mendapat nilai D`);
} else if(skor >= 0 && skor <= 34) {
   console.log(`${nama} mendapat nilai E`);
} else{
   console.log("nilai invalid");
}