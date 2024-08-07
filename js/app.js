//index
document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage;
    const contentElement = document.getElementById('content');

    const content = {
        en: `
            <div class="writer">
              <h1 class="text-center">
                Welcome to <br /><br />
                <span id="text-typed">ONE WAY</span>
              </h1>
            </div>
        `,
        pt: `
            <div class="writer">
              <h1 class="text-center">
                Bem-vindos a <br /><br />
                <span id="text-typed">ONE WAY</span>
              </h1>
            </div>
        `,
        es: `
            <div class="writer">
              <h1 class="text-center">
                Bienvenidos a <br /><br />
                <span id="text-typed">ONE WAY</span>
              </h1>
            </div>
        `
    };

    if (userLang.startsWith('en')) {
        contentElement.innerHTML = content.en;
    } else if (userLang.startsWith('pt')) {
        contentElement.innerHTML = content.pt;
    } else {
        contentElement.innerHTML = content.es;
        typeWriterEffect(document.getElementById('text-typed'));
    }

    function typeWriterEffect(element) {
        const text = element.innerHTML;
        element.innerHTML = "";
        let i = 0;
        const speed = 170; // Velocidad de escritura

        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    }
});

  document.addEventListener('DOMContentLoaded', function() {
    const flagEs = document.getElementById('flagEsp');
    const flagUs = document.getElementById('flagUs');
    const flagBr = document.getElementById('flagBr');
    const popup = document.getElementById('popup');
    const popupInfo = document.getElementById('popup-info');
    const closeBtn = document.querySelector('.close');

	const contentEs = `
	<h2>Bienvenido!</h2>
		<p>Nos han engañado. Durante toda nuestra vida, generación tras generación nos han hecho creer que es natural que el costo de vivir como ser humano suba, que sea más alto cada año. El hecho es que ocurre todo lo contrario, vivir debería costar menos cada año y la productividad humana mejora con el tiempo, no empeora. No retrocedemos como especie, es un truco para garantizar que aquellos que nos roban la productividad y el valor extra puedan seguir haciéndolo, este es el robo oculto, es la esclavitud inherente al sistema en el que nos vemos obligados a operar. Peor aún, nos han enseñado a ser leales a él, a defenderlo, a luchar por él, por eso, cuando algo como “este curso de One Way” aparece para liberarte… Te resistes! </p>

		<p>Si este concepto te parece extraño, si te sacude por dentro, debes estar presente el día de mañana, esto no es opcional, tu futuro está comprometido y cada vez queda menos tiempo. La ventana de oportunidad para construir riqueza generacional con Acciones, ETF's, Forex e inclusive Bitcoin,  es cada vez más pequeña y pronto desaparecerá. Es hora de despertar, merecemos algo mejor y por primera vez en mucho tiempo, está a nuestro alcance… Pero si esperas mucho… puede ser demasiado tarde. </p>
		
		<p>Mi curso te espera… Te veo trabajando conmigo y luchando contra los “Tiburones de Wall Street y el SISTEMA”.</p>

		<a href="home.html" class="btn-signUp">Quiero saber mas</a>
	`;

    const contentUs = `
        <h2>Welcome!</h2>
        <p>This section is reserved only for the moment in person, when Luciano Pozzi visits the Country of Brazil.
			Failure to correctly interpret indicators and strategies can affect your transactions. 
			At One Way we protect the entire community so that your transactions are successful. 
			If you want more information, you can contact the following number: 
			+54 9 341 610-6999
		</p>
    `;

    const contentBr = `
        <h2>Bem-vindo!</h2>
        <p>Esta seção é reservada apenas para o momento presencial, quando Luciano Pozzi visita o País Brasil.
			A falha na interpretação correta de indicadores e estratégias pode afetar suas transações. 
			Na One Way protegemos toda a comunidade para que suas transações sejam bem-sucedidas. 
			Se desejar mais informações, pode contactar o seguinte número: 
			+54 9 341 610-6999
		</p>
    `;

    function showPopup(content) {
        popupInfo.innerHTML = content;
        popup.classList.add('show');
    }

    function closePopup() {
        popup.classList.remove('show');
    }

	flagEs.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup(contentEs);
		setTimeout(function() {
			window.location.href = "home.html";
		}, 100000);
    });

    flagUs.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup(contentUs);
    });

    flagBr.addEventListener('click', function(event) {
        event.preventDefault();
        showPopup(contentBr);
    });

    closeBtn.addEventListener('click', function() {
        closePopup();
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });
  });


// btn-up
window.addEventListener('scroll', btnUp)

function btnUp() {
    const nav = document.getElementById('nav')
if(window.scrollY > nav.offsetHeight + 700) {
    this.document.getElementById('up').style.display = 'block';
} else {
    document.getElementById('up').style.display = 'none';
}
}


//navbar-hero
$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('header').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('header').hasClass('offcanvas-menu') ) {
					$('header').removeClass('offcanvas-menu');
				}
			}
		})

		$('header').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('header').hasClass('offcanvas-menu') ) {
				$('header').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('header').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('header').hasClass('offcanvas-menu') ) {
					$('header').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();

});

//carousel testimonials
var timer = 12000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%');
	// $("#c > li").eq(i + 4).addClass('active').css('left','80%');
	// $("#c > li").eq(i + 5).addClass('active').css('left','100%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','0.25s');
		$("#c > li").eq(i + 1).css('transition-delay','0.5s');
		$("#c > li").eq(i + 2).css('transition-delay','0.75s');
		$("#c > li").eq(i + 3).css('transition-delay','1s');
		// $("#c > li").eq(i + 4).css('transition-delay','1.25s');
		// $("#c > li").eq(i + 5).css('transition-delay','1.50s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.50s');
		$("#c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.75s');
		$("#c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','2s');
		$("#c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2.25s');
		// $("#c > li").eq(i + 4).css('left','100%').addClass('active').css('transition-delay','2.50s');
		// $("#c > li").eq(i + 5).css('left','125%').addClass('active').css('transition-delay','2.75s');
	
	}, timer);


  //count

  jQuery(document).ready(function() {
    function count($this){
      var current = parseInt($this.html(), 10);
      current = current + 249; /* Where 1 is increment */
  
      $this.html(++current);
      if(current >= 400000){
        $this.html($this.data('count'));
      } else {
        setTimeout(function(){count($this)}, 10);
      }
    }
  
    jQuery(".stat-count").each(function() {
      // jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
      jQuery(this).html('0');
      count(jQuery(this));
    });
  });
  
  
