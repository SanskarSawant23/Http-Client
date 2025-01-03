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

// makeGetRequest();

function makePostRequest(){
    const data = JSON.stringify({name:'Sanskar Sawant', job:'Developer'});

    const options = {
        hostname: 'jsonplaceholder.typicode.com',
        port: 80,
        path:'/posts',
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Content-Length': data.length,
        }
    }
    const req = http.request(options, (res)=>{
        console.log(`Status Code: ${res.statusCode}`);
        let response = '';
        res.on('data', (chunk)=>{
            response += chunk;
        })
        console.log(response);
    })
    req.on('error', (error)=>{
        console.error(`Error: ${error.message}`);
    });

    req.write(data);
    req.end();
}

makePostRequest();

