(function(){
  // highlight init
  hljs.initHighlightingOnLoad();



  // clipboard init
  var clipboard = new Clipboard('.btn', {
      target: function(trigger) {
        return document.getElementById('code');
      }
    });
    clipboard.on('success', function(e) {
        console.log(e);
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });
})();