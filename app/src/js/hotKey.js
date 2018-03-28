registerGlobalKey = function(key, active_func){
    var option = {
    key : key,
    active : function() {
    },
    failed : function(msg) {
    }
  };
  var shortcut = new nw.Shortcut(option);
  nw.App.registerGlobalHotKey(shortcut);
  shortcut.on('active', active_func);
  shortcut.on('failed', ()=>{alert(msg);});
  return shortcut;
}

unregisterGlobalKey = function (shortcut){
    nw.App.unregisterGlobalHotKey(shortcut);
}

registerGlobalKey("F1", function (){
    console.log('press f1');
    var win = nw.Window.get();
    win.minimize();
});

registerGlobalKey("F2", function (){
    console.log('press f2');
    var win = nw.Window.get();
    win.maximize();
});

registerGlobalKey("F3", function (){
    var win = nw.Window.get();
    win.restore();
});

registerGlobalKey("F4", function (){
    var win = nw.Window.get();
    win.enterFullscreen();
});

registerGlobalKey("CTRL+F4", function (){
    var win = nw.Window.get();
    win.close(true);
});

registerGlobalKey("F6", function (){
    var win = nw.Window.get();
    win.setShowInTaskbar(false);
});

var progress = 0;
registerGlobalKey("F7", function (){
    progress += 0.2;
    var win = nw.Window.get();
    win.setProgressBar(progress);
});

registerGlobalKey("CTRL+P", function (){
    var win = nw.Window.get();
    win.getPrinters( function(param){
      alert(JSON.stringify(param));
    } );    
});

registerGlobalKey("F8", function (){
    var win = nw.Window.get();
    win.setAlwaysOnTop(true);
});

registerGlobalKey("F9", function (){
    var win = nw.Window.get();
    win.setAlwaysOnTop(false);
});