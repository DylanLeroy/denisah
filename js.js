$(document).ready(function() {
            var audioElement = document.createElement('audio');
            var x=2;
            audioElement.setAttribute('src', 'ah.mp3');
            $.get();
            elementaudio = document.getElementById("kohlanta");
			elementaudio.volume=0.3;
			
			
            $('#logo').click(function() {
            	setTimeout(function(){audioElement.play()},0);
    			var $d1 = $("#logo");
    			$d1.removeClass("spinEffect");
   				setTimeout(function(){$d1.addClass("spinEffect")},0);
            });
  			$("#epic1").click(function() {
  				document.getElementById("epic1").play();
  			});
  			$("#epic2").click(function() {
  				document.getElementById("epic2").play();
  			});

			$("#epic3").click(function() {
  				document.getElementById("epic3").play();
  			});

			$("#epic4").click(function() {
  				document.getElementById("epic4").play();
  			});

        });