
var nameForm = document.getElementById('nameForm');
var name = document.getElementById('name');

nameForm.addEventListener('click', function () {

    localStorage.setItem('name', name.value);
    document.getElementById('printName') = localStorage.getItem('name');
    
});

button.addEventListener('click', function () {
    localStorage.clear();
});