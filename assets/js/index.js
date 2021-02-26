$(document).ready(function(){

    $('.toggle').click(function(){
        
            const toggleMenu = document.querySelector('.toggle');
            const glassMorp = document.querySelector('.glass');

            toggleMenu.classList.toggle('active');
            glassMorp.classList.toggle('show');      
    }); 

    $('.nav-home').click(function(){

        $('.toggle').removeClass('active');
        $('.glass').removeClass('show');
    });

    $('.nav-about').click(function(){

        $('.toggle').removeClass('active');
        $('.glass').removeClass('show');
    });
    
    $('.nav-project').click(function(){

        $('.toggle').removeClass('active');
        $('.glass').removeClass('show');
    });

    $('.nav-skill').click(function(){

        $('.toggle').removeClass('active');
        $('.glass').removeClass('show');
    });

    $('.nav-contact').click(function(){

        $('.toggle').removeClass('active');
        $('.glass').removeClass('show');
    });
});