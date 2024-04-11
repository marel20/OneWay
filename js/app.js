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
  
  

  