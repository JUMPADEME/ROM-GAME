// JavaScript source code
// script.js

<script>
        document.addEventListener('DOMContentLoaded', (event) => {
            var audio = document.getElementById('myAudio');
            audio.play().catch(error => {
        console.log('Playback prevented:', error);
            });
        });
</script>