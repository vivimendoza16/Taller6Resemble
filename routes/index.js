const express = require('express');
const router = express.Router();
const resemble = require('resemblejs');
const fs = require("fs");
const exec=require('child_process').exec;
const cypress= require('cypress');

/* GET home page. */
router.get('/automatiza', function(req, res, next) {
exec('cypress run .');
  var fecha= new Date();
  var year=fecha.getFullYear();
  var month=fecha.getMonth()+1;
  var day=fecha.getDate();
  var hour=fecha.getHours();
  var minute=fecha.getMinutes();
  var seconds=fecha.getSeconds();
  var carpeta=year+'-'+month+'-'+day+'-'+hour+'-'+minute+'-'+seconds;
  fs.mkdirSync('./imagenes/'+carpeta);
  var salir=false;
  fs.copyFileSync('./cypress/screenshots/screen1.png','./imagenes/'+carpeta+'/screen1.png');
  fs.copyFileSync('./cypress/screenshots/screen2.png','./imagenes/'+carpeta+'/screen2.png');
 

  var diff = resemble('./imagenes/'+carpeta+'/screen1.png').compareTo('./imagenes/'+carpeta+'/screen2.png').ignoreLess()
  .outputSettings({
    boundingBox: {
      left: 100,
      top: 200,
      right: 200,
      bottom: 600
    }
  }).onComplete(function(data){
    console.log(data);
    var json = JSON.stringify(data);
    fs.writeFile('./imagenes/data.json', json);
    fs.writeFile('./imagenes/output.png', data.getBuffer());
  
  res.json({
    info: data,
    imagen1:'./imagenes/'+carpeta+'/screen1.png',
    imagen2:'./imagenes/'+carpeta+'/screen2.png',
    resultado:'./imagenes/'+carpeta+'/output.png',
  });
});
});

module.exports = router;
