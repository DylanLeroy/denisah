﻿$(document).ready(function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'ah.mp3');

            $.get();
            elementaudio = document.getElementById("kohlanta");
			elementaudio.volume=0.1;
			audioElement.volume=1;

            $('#logo').click(function() {
                audioElement.play();
            });
        });