var button = document.getElementById('btnHideOddRows');
button.onclick = function () {
    var oddRows = document.querySelectorAll('tr:nth-child(odd)');
    for (var i = 0; i < oddRows.length; i++) {
        oddRows[i].parentNode.removeChild(oddRows[i]);
    }
};