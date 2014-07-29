var button = document.getElementById('like-btn');
var like = false;
button.onclick = function () {
    if (like) {
        button.innerText = 'Like';
    } else {
        button.innerText = 'Unlike';
    }
    like = !like;
};