function unesiBroj(operation) {
    var unosBroj = prompt("Insert number between 1 and 999:");
    var broj = parseInt(unosBroj);
    var result;

    if (!isNaN(broj) && broj >= 1 && broj <= 999) {
        switch (operation) {
            case 'sqrt':
                result = Math.sqrt(broj);
                break;
            case 'sin':
                result = Math.sin(broj)
                break;
            case 'cos':
                result = Math.cos(broj)
                break;
            case 'round':
                result = Math.round(broj)
                break;
            default:
                alert('Nepodržana operacija');
                return;
        }

        alert('Result: ' + result);
    } else if (isNaN(broj)) {
        alert("this is not a number");
    } else {
        alert("The number must be between 1 and 999");
    }
}