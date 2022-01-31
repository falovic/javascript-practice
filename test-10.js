// Demo : Functions

var hesapA = {
    ad: "Karl Marx",
    hesapNo: "10000001",
    bakiye: 2000,
    ekHesap: 1000,
}

var hesapB = {
    ad: "Adam Smith",
    hesapNo: "10000002",
    bakiye: 5000,
    ekHesap: 3000,
}

var hesapC = {
    ad: "John Keynes",
    hesapNo: "10000003",
    bakiye: 3000,
    ekHesap: 2000,
}

function paraCek(hesap, miktar) {
    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye >= miktar) {
        console.log("Paranızı alabilirsiniz.")

    } else {
        var toplam = hesap.bakiye + hesap.ekHesap;

        if (toplam >= miktar) {
            if (confirm("Ek hesabınızı kullanmak ister misiniz?")) {
                console.log("Paranızı alabilirsiniz.");

                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekHesap = hesap.ekHesap - ekhesap;

            } else {
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} ₺ bulunmamaktadır.`);
            }
        } else {
            console.log("Üzgünüz bakiye yetersiz.");
        }
    }
}

paraCek(hesapA, 2000)
paraCek(hesapA, 3000)