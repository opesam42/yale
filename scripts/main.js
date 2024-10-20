hambuger = document.getElementById('menu-toggle');
main_nav = document.getElementById('main-nav');

hambuger.addEventListener('click', function(){
    main_nav.classList.toggle('hidden');

    hambuger.querySelector('i').classList.toggle('fa-bars');
    hambuger.querySelector('i').classList.toggle('fa-times')
})