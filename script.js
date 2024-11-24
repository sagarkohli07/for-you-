$(document).ready(function () {
    const envelope = $('#envelope');
    const btnOpen = $('#open');
    const btnReset = $('#reset');
    const letterWords = $('.letter .words');
    const responseButtons = $('.response-buttons');
    const background = $('.background');
  
    // Open envelope and show letter content
    function openEnvelope() {
      envelope.addClass('open').removeClass('close');
      letterWords.removeClass('hidden').fadeIn(1000);
  
      // Trigger heart animations
      triggerHearts();
  
      // Delay buttons appearance
      setTimeout(() => {
        responseButtons.addClass('fade-in');
      }, 3000); // Adjust this delay if needed
    }
  
    // Reset everything
    function resetEnvelope() {
      envelope.addClass('close').removeClass('open');
      letterWords.addClass('hidden').fadeOut(500);
      responseButtons.removeClass('fade-in').hide();
      background.html('');
    }
  
    // Heart animations
    function triggerHearts() {
      for (let i = 0; i < 50; i++) {
        const size = Math.random() * 20 + 10 + 'px';
        const left = Math.random() * 100 + '%';
        const duration = Math.random() * 3 + 2 + 's';
        const delay = Math.random() * 2 + 's';
  
        let heart = $('<div class="heart"></div>');
        heart.css({
          left: left,
          animationDuration: duration,
          animationDelay: delay,
        });
        background.append(heart);
  
        // Remove heart after animation
        heart.on('animationend', () => {
          heart.remove();
        });
      }
    }
  
    // Button functionality
    $('#loveToo').click(() => alert('Yay! I love you too! ❤️'));
    $('#dontLove').click(() => alert('Oh no... 💔'));
  
    // Attach events
    btnOpen.click(openEnvelope);
    btnReset.click(resetEnvelope);
  });
  