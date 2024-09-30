/**
 * Fichier javascript qui recoit les requetes sur le port 8080 et affiche les pages de mon site
 * web selon la requete recue
 *
 * @summary Programme js du serveur de mon site web
 * @author Laurent <laurent2002@gmail.com>
 *
 */


var express = require('express');
var app = express();

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://127.0.0.1:1883');

var module1 = 0;
var module2 = 0;
var module3 = 0;
var module4 = 0;
var module5 = 0;
var module6 = 0;

app.set('view engine', 'ejs');

client.on('connect', function () {
    console.log("MQTT connecté !");
    client.publish('MODULE', 'le serveur js vous dit bonjour');
});

client.subscribe('MODULE/#');


app.get('/', function(req, res) {
    res.send("<!DOCTYPE html>"
        +"<html lang='fr'>"
        +"<head>"
        +"<meta charset='UTF-8'>"
        +"<title>Super Awesome</title>" 
        +"<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>"
        +"<style>"
        +"body    { padding-top:50px; }"
        +"</style>"
        +"</head>"
        +"<body class='container'>"
        +"<header>"
        +"<nav class='navbar navbar-default' role='navigation'>"
        +"<div class='container-fluid'>"
        +"<div class='navbar-header'>"
        +"<a class='navbar-brand' href='#'>"
        +"<span class='glyphicon glyphicon glyphicon-tree-deciduous'></span>"
        +"EJS Is Fun"
        +"</a>"
        +"</div>"
        +"<ul class='nav navbar-nav'>"
        +"<li><a href='/'>Home</a></li>"
        +"<li><a href='/about'>About</a></li>"
        +"<li><a href='/contact'>Contact</a></li>"
        +"<li><a href='/module/controle'>Controle</a></li>"
        +"<li><a href='/module/reset'>Reset</a></li>"
        +"</ul>"
        +"</div>"
        +"</nav>"
        +"</header>"
        +"<main>"
        +"<div class='jumbotron'>"
        +"<h1>This is great</h1>"
        +"<p>Welcome to templating using EJS</p>"
        +"</div>"
        +"</main>"
        +"<footer>"
        +"<p class='text-center text-muted'>© Copyright 2014 The Awesome People</p>"
        +"</footer>"
        +"</body>"
        +"</html>");
});

app.get('/contact', function(req, res) {
    res.send("<!DOCTYPE html>"
        +"<html lang='fr'>"
        +"<head>"
        +"<meta charset='UTF-8'>"
        +"<title>Super Awesome</title>" 
        +"<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>"
        +"<style>"
        +"body    { padding-top:50px; }"
        +"</style>"
        +"</head>"
        +"<body class='container'>"
        +"<header>"
        +"<nav class='navbar navbar-default' role='navigation'>"
        +"<div class='container-fluid'>"
        +"<div class='navbar-header'>"
        +"<a class='navbar-brand' href='#'>"
        +"<span class='glyphicon glyphicon glyphicon-tree-deciduous'></span>"
        +"EJS Is Fun"
        +"</a>"
        +"</div>"
        +"<ul class='nav navbar-nav'>"
        +"<li><a href='/'>Home</a></li>"
        +"<li><a href='/about'>About</a></li>"
        +"<li><a href='/contact'>Contact</a></li>"
        +"</ul>"
        +"</div>"
        +"</nav>"
        +"</header>"
        +"<main>"
        +"<table class='table'>"
        +"<thead>"
        +"<tr>"
        +"<th scope='col'>Nom</th>"
        +"<th scope='col'>Prenom</th>"
        +"<th scope='col'>Addresse postale</th>"
        +"<th scope='col'>Courriel</th>"
        +"<th scope='col'>Telephone</th>"
        +"</tr>"
        +"</thead>"
        +"<tbody>"
        +"<td>Gauthier</td>"
        +"<td>Laurent</td>"
        +"<td>383 boul. du Coteau, St-Therese</td>"
        +"<td>laurent2002@gmail.com</td>"
        +"<td>450-621-4471</td>"
        +"</tbody>"
        +"</table>"
        +"</main>"
        +"<footer>"
        +"<p class='text-center text-muted'>© Copyright 2014 The Awesome People</p>"
        +"</footer>"
        +"</body>"
        +"</html>");
});

app.get('/module/:numero',function(req, res, next) {
    if(!isNaN(req.params.numero))
    {
        console.log("allo");
        if(req.params.numero == 1)
        {
            console.log(req.params.numero);
            module1 = !module1;
            res.render('pages/modules.ejs', {module: req.params.numero, etat: module1});
        }
        else if(req.params.numero == 2)
        {
            console.log(req.params.numero);
            module2 = !module2;
            res.render('pages/modules.ejs', {module: req.params.numero, etat: module2});
        }
        else if(req.params.numero == 3)
        {
            console.log(req.params.numero);
            module3 = !module3;
            res.render('pages/modules.ejs', {module: req.params.numero, etat: module3});
        }
        else if(req.params.numero == 4)
        {
            console.log(req.params.numero);
            module4 = !module4;
            res.render('pages/modules.ejs', {module: req.params.numero, etat: module4});
        }
        else if(req.params.numero == 5)
        {
            console.log(req.params.numero);
            module5 = !module5;
            res.render('pages/modules.ejs', {module: req.params.numero, etat: module5});
        }
        else if(req.params.numero == 6)
        {
            console.log(req.params.numero);
            module6 = !module6;
            res.render('pages/modules.ejs', {module: req.params.numero, etat: module6});
        }
        else
        {
            console.log(req.params.numero);
            res.render('pages/modules.ejs', {module: "inconnu" , etat: 0});
        }
    }
    else
    {
        next();
    }
});

app.get('/module/reset', function(req, res) {
    module1 = 0;
    module2 = 0;
    module3 = 0;
    module4 = 0;
    module5 = 0;
    module6 = 0;
    res.render('pages/controle.ejs', {module1: module1, module2: module2, module3: module3, module4: module4, module5: module5, module6: module6});
});

app.get('/module/controle', function(req, res) {
    res.render('pages/controle.ejs', {module1: module1, module2: module2, module3: module3, module4: module4, module5: module5, module6: module6});
});

// app.use(function(req, res) {
//     res.writeHead(404);
//     res.send("Page introuvable!");
// });

app.listen(8080);