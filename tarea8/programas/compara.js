const num1Input = document.getElementById('num1');
            const num2Input = document.getElementById('num2');
            const compareBtn = document.getElementById('compareBtn');
            const resultDisplay = document.getElementById('result');

            compareBtn.addEventListener('click', () => {
                const num1 = parseFloat(num1Input.value);
                const num2 = parseFloat(num2Input.value);

                if (isNaN(num1) || isNaN(num2)) {
                    resultDisplay.textContent = 'Por favor, introduce dos números válidos.';
                    resultDisplay.style.color = '#d9534f'; 
                    return;
                }

                resultDisplay.style.color = '#333'; 
                if (num1 > num2) {
                    resultDisplay.textContent = `El Número 1 (${num1}) es mayor que el Número 2 (${num2}).`;
                } else if (num2 > num1) {
                    resultDisplay.textContent = `El Número 2 (${num2}) es mayor que el Número 1 (${num1}).`;
                } else {
                    resultDisplay.textContent = 'Ambos números son iguales.';
                }
            });