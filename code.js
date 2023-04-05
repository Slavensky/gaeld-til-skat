const test = () => {

    var randomNumber = Math.floor(Math.random() * 1000000);
    var sign = Math.random()

    let gaeld = document.getElementById('gaeld')
    
    if (sign <= 0.5) {
        gaeld.innerHTML = `Du skylder <b>${randomNumber}</b> kr. til skat.`;
    } else {
        gaeld.innerHTML = `Tillykke! Du skal have <b>${randomNumber}</b> kr. tilbage i skat.`
    }
}