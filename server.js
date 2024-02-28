const express = require('express');
const app = express();

app.listen(8080,function(){
  console.log('listening on 8080');
});

app.get('/pet',function(요청,응답){
  응답.send('はじめまして')
});

app.get('/bts',function(요청,응답){
  응답.send('bts')
});