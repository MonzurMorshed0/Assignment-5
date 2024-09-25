const buttons = document.querySelectorAll('.donate-now-button');

for (const button of buttons) {
    button.addEventListener('click', function(event) {
        const card = event.target.closest('.card');
        const cardBalance = card.querySelector('.card-balance');
        let currentBalance = parseFloat(cardBalance.innerText);
        const amountInput = card.querySelector('.input');
        const amountToAdd = parseFloat(amountInput.value);
        const mainBalance = document.getElementById('balance');
        let currentMainBalance = parseFloat(mainBalance.innerText);

        if (isNaN(amountToAdd) || amountToAdd <= 0) {
            alert("Invalid Donation Amount");
            return;
        }

        currentBalance += amountToAdd;
        cardBalance.innerText = currentBalance;
        amountInput.value = '';
        currentMainBalance -= amountToAdd;
        mainBalance.innerText = currentMainBalance;
    });
}