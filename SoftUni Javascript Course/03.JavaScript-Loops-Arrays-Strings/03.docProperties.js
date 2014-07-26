function displayProperties(value) {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();
    return properties.join("<br />");
}
window.onload = function () {
    var div = document.getElementById("main");
    div.innerHTML = displayProperties(document);
}