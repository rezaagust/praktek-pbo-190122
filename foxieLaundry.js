/* INPUT "jumlah baju masuk" dengan 0
   INPUT "jumlah baju tersedia" dengan 20
   REPEAT "jumlah baju masuk" < "jumlah baju tersedia"
   DISPLAY baju masuk ke [jumlah baju]
   IF "jumlah baju masuk" = "jumlah baju tersedia"
   DISPLAY mesin otomatis menyala */

let jbt = 20;
let jbm = 0;

for (let i = 1; i<= jbt; i++) {
    if(jbm < jbt) {
        jbm += 1;
    }
    if(jbm === jbt) {
        console.log("mesin menyala")
        break;
    }
}