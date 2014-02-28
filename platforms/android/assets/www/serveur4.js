


// Création du serveur

    // On lit notre fichier tchat.html
var server = require('http').createServer(function(req, res){
		res.end('chargement effectué');
});
 


// Variables globales
// Ces variables resteront durant toute la vie du seveur et sont communes pour chaque client (node server.js)
// Liste des messages de la forme { pseudo : 'Mon pseudo', message : 'Mon message' }
var messages = [];

//// SOCKET.IO ////

var io      =   require('socket.io').listen(server);




// Quand une personne se connecte au serveur
io.sockets.on('connection', function (socket) {
    // On donne la liste des messages (événement créé du côté client)
    socket.emit('recupererMessages', messages);
    // Quand on reçoit un nouveau message
    socket.on('nouveauMessage', function (mess) {
        // On l'ajoute au tableau (variable globale commune à tous les clients connectés au serveur)
        messages.push(mess);
        // On envoie à tout les clients connectés (sauf celui qui a appelé l'événement) le nouveau message
        socket.broadcast.emit('recupererNouveauMessage', mess);
    });
});

///////////////////

// Notre application écoute sur le port 8080
server.listen(8080);
console.log('Live Chat App running at http://localhost:8080/');
