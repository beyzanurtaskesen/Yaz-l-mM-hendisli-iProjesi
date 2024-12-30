document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    
    fetch('http://localhost:3000/login', { // Node.js sunucu adresiniz
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'https://codepen.io/nisasedaylmz/pen/JoPoGBW'; 
        } else {
            errorMessage.textContent = data.message; // Hata mesajını göster
        }
    })
    .catch((error) => {
        console.error('Hata:', error);
        errorMessage.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
    });
});