console.log('epiVerse.js loaded');

// Managing state for epiVerse

localStorage.epiVerse=localStorage.epiVerse||JSON.stringify({
    created:Date(),
    lastUpdate:Date(),
    //href:location.href,
    hash:location.hash
});

//clean hash
(function(){
    function deHash(hs){
        if(hs.length>0){
            if(hs[0]=='#'){
                hs=hs.slice(1)
            }
        }
        return hs
    }
    let epiV=JSON.parse(localStorage.epiVerse)
    epiV.hash=deHash(epiV.hash)
    localStorage.epiVerse=JSON.stringify(epiV)
})()
