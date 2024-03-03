const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertToFButton = document.getElementById("convertToF");
const convertToCButton = document.getElementById("convertToC");

convertToFButton.addEventListener("click", function () {
    const celsiusTemp = parseFloat(celsiusInput.value);
    const fahrenheitTemp = celsiusTemp * 9 / 5 + 32;
    fahrenheitInput.value = isNaN(fahrenheitTemp) ? "" : fahrenheitTemp.toFixed(2);
});

convertToCButton.addEventListener("click", function () {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;
    celsiusInput.value = isNaN(celsiusTemp) ? "" : celsiusTemp.toFixed(2);
});
