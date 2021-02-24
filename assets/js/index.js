$(document).ready(function(){

    $('.toggle').click(function(){
        
            const toggleMenu = document.querySelector('.toggle');
            const glassMorp = document.querySelector('.glass');

            toggleMenu.classList.toggle('active')
            glassMorp.classList.toggle('show');      
    });
});