console.log('UI populated by index.js')

/* dev
http://localhost:8000/epiverse/#url=https://episphere.github.io/gpt/export.js&ui=chatUI
https://epiverse.github.io/#url=https://episphere.github.io/caterpillar/caterpillar.js&ui=ui
http://localhost:8000/epiverse#url=https://episphere.github.io/caterpillar/caterpillar.js&ui=ui
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
    // turn this into a whitelist
    if((!!parms.url.match(/^https:\/\/episphere.github.io/)||(!!parms.url.match(/^http:\/\/localhost:8000/)))){
        (await import(parms.url))[parms.ui](div)
        // select function
    // console
    let consoleArray = [
        {
            name:"Simple Chat",
            parms: "url=https://episphere.github.io/gpt/export.js&ui=chatUI"
        },
        {
            name:"Caterpillar",
            parms: "url=https://episphere.github.io/caterpillar/caterpillar.js&ui=ui"
        }
    ];
    let selConsole = document.getElementById('selConsole')
    consoleArray.forEach(c=>{
        let opt = document.createElement('option')
        opt.textContent=opt.value=c.name
        selConsole.appendChild(opt)
    })
    selConsole.onchange=function(evt){
        location.hash = consoleArray.filter(c=>(c.name==selConsole.value))[0].parms
        setTimeout(location.reload,3000)
    }
        
        //debugger
            
        //selConsole.onchange(evt=>{
            //debugger
        //})
    }else{
        alert(`origin not allowed: ${location.origin+location.pathname}`)
    }
    //
    
})()

