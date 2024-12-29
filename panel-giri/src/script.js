document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    if (username === 'admin' && password === '12345') {
        

        window.location.href = 'https://codepen.io/nisasedaylmz/pen/JoPoGBW'; 
    } else {
        errorMessage.textContent = 'Kullanıcı adı veya şifre hatalı!';
    }
});