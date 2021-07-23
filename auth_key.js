const fs = require('fs');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('key_button').addEventListener('click', onClick, false)
    function onClick () {
        const token = prompt('Enter Access Token')
        fs.writeFileSync(`${__dirname}/token.json`, JSON.stringify({token: token}));
    }
}, false)