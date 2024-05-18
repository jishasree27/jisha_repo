document.getElementById('convertButton').addEventListener('click', async () => {
    const usdAmount = document.getElementById('usdAmount').value;
    if (usdAmount === '') {
        alert('Please enter an amount');
        return;
    }

    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        const rate = data.rates.INR;
        const inrAmount = (usdAmount * rate).toFixed(2);
        document.getElementById('result').innerText = `${usdAmount} USD = ${inrAmount} INR`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        alert('Error fetching exchange rate');
    }
});
