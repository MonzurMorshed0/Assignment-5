document.getElementById('history-button')
.addEventListener('click', function(){
    document.getElementById('donate-button').classList.remove('bg-[#B4F461]', 'font-semibold', 'hover:bg-[#B4F461]');
    document.getElementById('donate-button').classList.add('bg-white', 'font-medium') ;
    document.getElementById('history-button').classList.add('bg-[#B4F461]', 'font-semibold', 'hover:bg-[#B4F461]') ;
    document.getElementById('history-button').classList.remove('bg-white', 'font-medium') ;
    document.getElementById('donate-section').classList.add('hidden') ;
})
document.getElementById('donate-button')
.addEventListener('click', function(){
    document.getElementById('history-button').classList.remove('bg-[#B4F461]', 'font-semibold', 'hover:bg-[#B4F461]') ;
    document.getElementById('history-button').classList.add('bg-white', 'font-medium') ;
    document.getElementById('donate-button').classList.add('bg-[#B4F461]', 'font-semibold', 'hover:bg-[#B4F461]') ;
    document.getElementById('donate-button').classList.remove('bg-white', 'font-medium') ;
    document.getElementById('donate-section').classList.remove('hidden') ;
})