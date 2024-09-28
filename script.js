// JS for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Popup handling
    let joinPopup = document.getElementById('popupModal');
    let suggestionsPopup = document.getElementById('suggestionsPopup');
    let sustainabilityPopup = document.getElementById('sustainabilityPopup');
    
    let joinBtn = document.getElementById('joinPopupBtn');
    let suggestionsBtn = document.getElementById('suggestionsPopupBtn');
    let sustainabilityBtn = document.getElementById('sustainabilityPopupBtn');
    
    let closeBtns = document.querySelectorAll('.close');

    // Show popups
    joinBtn?.addEventListener('click', function() {
        joinPopup.style.display = 'block';
    });

    suggestionsBtn?.addEventListener('click', function() {
        suggestionsPopup.style.display = 'block';
    });

    sustainabilityBtn?.addEventListener('click', function() {
        sustainabilityPopup.style.display = 'block';
    });

    // Close popups
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            joinPopup.style.display = 'none';
            suggestionsPopup.style.display = 'none';
            sustainabilityPopup.style.display = 'none';
        });
    });

    // Close popup on outside click
    window.addEventListener('click', function(event) {
        if (event.target === joinPopup) {
            joinPopup.style.display = 'none';
        }
        if (event.target === suggestionsPopup) {
            suggestionsPopup.style.display = 'none';
        }
        if (event.target === sustainabilityPopup) {
            sustainabilityPopup.style.display = 'none';
        }
    });

    console.log("AgroBalance JS loaded!");
});
