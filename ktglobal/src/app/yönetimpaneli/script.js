function showSection(sectionId) {
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
function deletePhoto(element) {
    if (confirm("Bu fotoğrafı silmek istediğinize emin misiniz?")) {
        element.remove();
        alert('Fotoğraf başarıyla silindi.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const deleteableImages = document.querySelectorAll('.deletable-image');
    
    deleteableImages.forEach(image => {
        image.addEventListener('click', function() {
            deletePhoto(image); 
        });
    });
});

document.getElementById('logout').addEventListener('click', function() {
     window.location.href ='https://codepen.io/nisasedaylmz/pen/WbeoPyj'; 
});