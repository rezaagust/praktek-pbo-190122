/*
    INPUT "jari" dengan number
    INPUT "PI" dengan 3.14
    COMPUTE "keliling lingkaran" sama dengan 2 x pi x jari
    DISPLAY hasil keliling lingkaran
    END */

    let jariLingkaran = 52;
    const pi = 3.14;

    function kelilingLingkaran(r, p) {
        return 2 * p * r;
    }

    let hasil = kelilingLingkaran(jariLingkaran, pi);
    console.log(`hasilnya adalah ${hasil}`);
