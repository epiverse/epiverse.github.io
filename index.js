console.log('UI populated by index.js')

/* dev
http://localhost:8000/epiverse/#url=https://episphere.github.io/gpt/export.js&ui=chatUI

*/

// default UI, note you can define your own
if(location.hash.length==0){
    location.hash='url=https://episphere.github.io/gpt/export.js&ui=chatUI'
}

(async function(){
    // get parms from location
    let parms={};
    (location.search+location.hash)
        .split(/[&?#]/g)
        .forEach(av=>{
            console.log('av:',av);
            if(av.match('=')){
                av=av.split('=')
                parms[av[0]]=av[1]
            }
        })
    console.log('parms:',parms)
    // open UI in the default div
    let div = document.body.querySelector('#epiVerseDiv');
    (await import(parms.url))[parms.ui](div)
    //
    
})()

