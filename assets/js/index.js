$(document).ready(function(){

    $('.toggle').click(function(){
        
            const toggleMenu = document.querySelector('.toggle');
            toggleMenu.classList.toggle('active')

            const glassMorp = document.querySelector('.glass');
            glassMorp.classList.toggle('show');
    });
});