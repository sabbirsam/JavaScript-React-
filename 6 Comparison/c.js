function myVoteReg() {
    const car = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let c = "";

    for (let i = 0; i < car.length - 1; i++) {
        c += car[i] + "<br>";
    }


    document.getElementById("sam").innerHTML = c;
    // console.log(day);

}

myVoteReg();