
//Connect to Websocket
var exampleSocket = new WebSocket("ws://192.168.4.1");

exampleSocket.onopen = function (event) {
    console.log("Hello");
};

exampleSocket.onclose = function (event) {
    console.log("Goodbye");
};

exampleSocket.onmessage = function (event) {
    // console.log(event.data);

    var val = parseInt(event.data, 10);
    Plotly.extendTraces('graph', {
        // y: [[rand()]]
        y: [[val]]
    }, [0])
    document.getElementById("response").innerHTML = val;
}

function sendCommand() {

    var x = document.getElementById("commandForm");

    var text = x.elements[0].value;
    console.log(text);
    exampleSocket.send(text);
}




function rand() {
    return Math.random();
}

function sinx(x) {
    return Math.sin(x);
}

Plotly.plot('graph', [{
    y: [0],
    mode: 'lines',
    line: { color: '#80CAF6' }
}]);

var cnt = 0;
