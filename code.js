const test = () => {

    var randomNumber = Math.floor(Math.random() * 1000000);

    document.getElementById('gaeld').innerHTML = `Du skylder ${randomNumber} kr. til skat.`;
}