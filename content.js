chrome.runtime.onMessage.addListener(function (message) {
    if (message === 'git') {
        const links = document.querySelectorAll("a");
        const array = []
        const base = '/github.com/';
    
        for (const link of links) {
            const url = link.href;
            if (url.includes(base)) array.push(url);
            
        };
            
        function makeList() {
            let list = '<h1>Links</h1><ul>';
                for (let i=0; i < array.length; i++) {
                    list += '<li id>'+ '<a href=\'https://youtu.be/dQw4w9WgXcQ\'>' + array[i] + '</a><button on>FORK</button><button>CLONE</button></li> ';
                };
                list += '</ul>'
                const w = window.open("");
                w.document.write(list); 
        }
        makeList();
    }
})



