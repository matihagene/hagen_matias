// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Web María Reina del Mar",
    about: "Sitio web con reservas y pasarela de pago online a través de tarjetas.",
    proyect: "Lofts María Reina del Mar",
}, {
    figure: "media/foto-02.jpg",
    title: "Juego Alta Tensión",
    about: "Juego de mesa de rapidez, en el que debes evitar electrocutarte.",
    proyect: "Taller Producto",
}, {
    figure: "media/foto-03.jpg",
    title: "a la Chilena",
    about: "Diseño editorial del libro, aprende a hablar como Chileno a la Chilena.",
    proyect: "Taller Producto",
}, {
    figure: "media/foto-04.jpg",
    title: "Tricota Bupa",
    about: "Tricota para ciclistas con auspicio de Clínica Bupa Santiago.",
    proyect: "Bupa",
}, {
    figure: "media/foto-05.jpg",
    title: "Wanna Drink?",
    about: "Diseño editorial de la portada de un libro / posavasos.",
    proyect: "Calidad II",
}, {
    figure: "media/foto-06.jpg",
    title: "Web Mauco Higiene",
    about: "sitio Web (one page) para una empresa de higiene y limpieza.",
    proyect: "Grupo Mauco",
}, {
    figure: "media/foto-07.jpg",
    title: "Arroz Doña Teresa",
    about: "Diseño de imagen de marca y branding para Arroz Doña Teresa.",
    proyect: "Calidad II",
}, {
    figure: "media/foto-08.jpg",
    title: "Grapa",
    about: "Diseño de bastones de trekking para adultos mayores.",
    proyect: "CONAF",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<h6>' + trabajos[i].proyect + '</h6>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});