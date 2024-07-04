const animales = [
    {id: 1, nombre: 'Tortuga Caiman', jaula: 1, tipo: 'reptil', peso: 80},
    {id: 2, nombre: 'Puma', jaula: 2, tipo: 'felino', peso: 100},
    {id: 3, nombre: 'Gato', jaula: 3, tipo: 'felino', peso: 5},
    {id: 4, nombre: 'Perro', jaula: 4, tipo: 'canino', peso: 50},
    {id: 5, nombre: 'Elefante', jaula: 5, tipo: 'elefántidos ', peso: 6000},
    {id: 6, nombre: 'Leon', jaula: 5, tipo: 'felino', peso: 190}
];

// a. Mostrar la cantidad de animales de la Jaula 5 cuyo peso sea menor a 3.
function contarAnimalesJaula5Menores3kg() {
    return animales.filter(animal => animal.jaula === 5 && animal.peso < 3).length;
}

// b. Listar cantidad de animales de tipo felinos que están entre las jaulas 2 a 5.
function contarFelinosEntreJaulas2y5() {
    return animales.filter(animal => animal.tipo === 'felino' && animal.jaula >= 2 && animal.jaula <= 5).length;
}

// c. Listar el nombre del animal de la Jaula 4 cuyo peso sea menor a 120.
function nombreAnimalJaula4Menor120() {
    const animal = animales.find(animal => animal.jaula === 4 && animal.peso < 120);
    return animal ? animal.nombre : 'No encontrado';
}

// d. Realizar una tabla con el id de cada animal, nombre, jaula, tipo de animal y su peso.
function generarTablaAnimales() {
    let tabla = '<table border="1"><tr><th>ID</th><th>Nombre</th><th>Jaula</th><th>Tipo</th><th>Peso</th></tr>';
    animales.forEach(animal => {
        tabla += `<tr>
            <td>${animal.id}</td>
            <td>${animal.nombre}</td>
            <td>${animal.jaula}</td>
            <td>${animal.tipo}</td>
            <td>${animal.peso}</td>
        </tr>`;
    });
    tabla += '</table>';
    return tabla;
}

// Mostrar los resultados en el navegador
document.getElementById('resultados').innerHTML = `
    <p>Cantidad de animales en la Jaula 5 con peso menor a 3: ${contarAnimalesJaula5Menores3kg()}</p>
    <p>Cantidad de felinos en las jaulas 2 a 5: ${contarFelinosEntreJaulas2y5()}</p>
    <p>Nombre del animal en la Jaula 4 con peso menor a 120: ${nombreAnimalJaula4Menor120()}</p>
    <h2>Tabla de Animales</h2>
    ${generarTablaAnimales()}
`;