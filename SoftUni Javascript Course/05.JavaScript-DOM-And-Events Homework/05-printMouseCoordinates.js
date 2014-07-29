var output = document.getElementById('result');
window.onmousemove = function(e) {
    output.innerHTML += 'X: ' + e.clientX + '; Y: ' + e.clientY + '; Time: ' + new Date() + '\n';
    output.scrollTop = output.scrollHeight;
};