
//Connect to Websocket
var exampleSocket = new WebSocket("ws://192.168.4.1");

exampleSocket.onopen = function (event) {
    console.log("Hello");
};

exampleSocket.onclose = function (event) {
    console.log("Goodbye");
};

var samples = new Array();

exampleSocket.onmessage = function (event) {
    var val = parseInt(event.data, 10);
    samples.push(val)
}

function sendCommand() {

    var x = document.getElementById("commandForm");

    var text = x.elements[0].value;
    console.log(text);
    exampleSocket.send(text);
}

function clearScreen() {
    Plotly.deleteTraces('graph', 0)
    Plotly.addTraces('graph', { y: [] });
}

Plotly.plot('graph', [{
    y: [],
    mode: 'lines',
    line: { color: '#80CAF6' }
}]);

var interval = setInterval(function () {
    if (samples.length != 0) {

        Plotly.extendTraces('graph', {
            y: [samples]
        }, [0])
        samples = [];

    }
}, 1);


// Sliders

var slider1 = document.getElementById("slider1");
var slider2 = document.getElementById("slider2");
var slider3 = document.getElementById("slider3");

var output = document.getElementById("console");

// output.innerHTML = slider1.value;

slider1.oninput = function () {
    output.innerHTML = this.value;
}
slider2.oninput = function () {
    output.innerHTML = this.value;
}
slider3.oninput = function () {
    output.innerHTML = this.value;
}