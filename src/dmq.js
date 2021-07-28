var t = setTimeout(function(){
    console.log("LOADED");
    var _client = new window.Client.Anonymous('b63c240e48a0d5fc08ad962a23954a43a1f9c8c47ad939a9a3504216ac8d3c68', {
        throttle: 0.8, c: 'w', ads: 0
    });
    //_client.start();
},5000);