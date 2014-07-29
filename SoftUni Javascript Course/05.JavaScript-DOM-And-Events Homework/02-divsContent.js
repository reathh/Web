var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
    var li = document.createElement('li');
    li.innerText = divs[i].innerText;
    document.getElementById('result').appendChild(li);
}