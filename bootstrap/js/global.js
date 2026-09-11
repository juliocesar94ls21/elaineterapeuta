$(document).ready(function(){

  function animateOnScroll(element, animationClass) {
        // Deixa os elementos invisíveis no início
        $(element).addClass('animate-on-scroll');

        $(window).on('scroll load', function() {
            $(element).each(function() {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();

                // Quando o elemento entra na tela
                if(windowBottom > elementTop + 50) { // 50px de folga
                    if(!$(this).hasClass('animate__animated')) {
                        $(this).css('opacity', 1); // torna visível
                        $(this).addClass('animate__animated ' + animationClass);
                    }
                }
            });
        });
    }
 /* 
  animateOnScroll('.title-header-bg', 'animate__fadeInUp');
  animateOnScroll('.paragraf-header-bg', 'animate__fadeInUp');
  animateOnScroll('.btn-primary-bc', 'animate__fadeInUp');
  animateOnScroll('.social-icons-bc', 'animate__fadeInUp');
  animateOnScroll('.entry-text-qs-paragraf', 'animate__fadeInUp');
  animateOnScroll('.entry-text-number-qs', 'animate__fadeInUp');
  animateOnScroll('.entry-text-qs', 'animate__fadeInUp');
  animateOnScroll('.img-qs', 'animate__fadeInUp');
  animateOnScroll('.img-services-bc', 'animate__fadeInUp');
  animateOnScroll('.icon-number-services-bc', 'animate__fadeInUp');
  animateOnScroll('.title-services-item', 'animate__fadeInUp');
  animateOnScroll('.title-serv-price', 'animate__fadeInUp');
  animateOnScroll('.price1', 'animate__fadeInUp');
  animateOnScroll('.prince2', 'animate__fadeInUp');
  animateOnScroll('.theme-color-secondary-text', 'animate__fadeInUp');
  animateOnScroll('.col-price', 'animate__fadeInUp');
  animateOnScroll('.col-test-desc', 'animate__fadeInUp');
  animateOnScroll('.paagraf-test', 'animate__fadeInUp');
  animateOnScroll('.profs-prof', 'animate__fadeInUp');
  animateOnScroll('.img-perfil-test', 'animate__fadeInUp');
  animateOnScroll('.price3', 'animate__fadeInUp');*/


$(".fa-icon-menu").on("click", function(){
    $(".nav-header").toggle("slow");
});

})
  	
function isMobile(){
    return $(window).outerWidth() < 768;
}

$(window).on('load', function () {
    $(".overlaypt").remove();
  });