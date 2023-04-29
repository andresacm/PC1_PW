let temperatura = 0

function CalcularTemperatura(){
    const radios = document.getElementsByName("rdnTemp");
    const selected = Array.from(radios).find(radio => radio.checked).value;

    valor = document.getElementById("temp").value;
    temperatura = (valor * 9/5) + 32;
    temperatura = (valor - 32) * 5/9;
    alert("La temperatura calculada es " + temperatura + "°C")
}

