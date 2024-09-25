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
        const cardTitle = card.querySelector('.selected-card-title')
        let selectTitle = cardTitle.innerText;
        if (isNaN(amountToAdd) || amountToAdd <= 0) {
            alert("Invalid Donation Amount");
            return;
        }

        currentBalance += amountToAdd;
        cardBalance.innerText = currentBalance;
        amountInput.value = '';
        currentMainBalance -= amountToAdd;
        mainBalance.innerText = currentMainBalance;
        document.getElementById('my_modal_5').showModal();

        const container = document.getElementById('history-parent');
        const newDiv = document.createElement('div');
        newDiv.className = 'border-2 rounded-md mx-24 my-6 p-4';
        const title = document.createElement('h4');
        title.className = 'font-semibold text-xl';
        title.innerText = amountToAdd + ' Taka is Donated for ' + selectTitle;
        const paragraph = document.createElement('p');
        const currentDate = new Date();
        paragraph.className = 'bg-[#e0dad857]'
        paragraph.innerText = 'Date :' + currentDate.toString();
        newDiv.appendChild(title);
        newDiv.appendChild(paragraph);
        container.appendChild(newDiv);
        })
}