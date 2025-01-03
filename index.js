const http = require("http");



function makeGetRequest(){
    const options = {
        hostname: 'example.com',
        port: 80,
        path: '/',
        method: 'GET',
    }

    const req = http.request(options, (res)=>{
        console.log(`status code: ${res.statusCode}`);
        console.log(`Headers:`, res.headers);
        let data = '';
        res.on('data', (chunk)=>{
        data += chunk
    })

    res.on('end', ()=>{
        console.log('Response Body:', data);
    })
    })

    req.end();
    
}

makeGetRequest();

