var clip = nw.Clipboard.get();

getClipText = function(){
    var clipData = [];
    var clipCnt = 0;
    var text = clip.get('text');
    //clip.clear();
    clipData[clipCnt++] = text;
    return clipData;
}
