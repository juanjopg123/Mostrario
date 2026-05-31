// PARAMETROS URL
const params = new URLSearchParams(window.location.search);
const categoria = params.get("categoria");

// TITULO
const titulo = document.getElementById("titulo-categoria");
titulo.textContent = categoria ? categoria.toUpperCase() : "PRODUCTOS";

// PRODUCTOS
const productos = {
    sofas: [
        { id: "sofacarrito", nombre: "Sofá Cama Carrito", imagen: "./upload/sofacama-carrito.jpg", precio: "$1.600.000", descripcion: "Se convierte en cama en segundos, ideal para espacios multifuncionales." },
        { id: "sofaversalle", nombre: "Sofá Versalle", imagen: "./upload/sofa-versalles.jpg", precio: "$2.200.000", descripcion: "Líneas curvas y tapizado suave que combinan elegancia y comodidad." },
        { id: "sofachesterbrazosredondos", nombre: "Sofá Chester Brazos Redondos", imagen: "./upload/sofa-chester-brazo-redondo.png", precio: "$2.400.000", descripcion: "Capitoné clásico con brazos redondeados, una pieza de carácter y distinción." },
        { id: "sofachester2", nombre: "Sofá Chester 2 puestos", imagen: "./upload/sofa-chester-normal.jpg", precio: "$1.600.000", descripcion: "Capitoné compacto para 2 personas, perfecto para espacios íntimos." },
        { id: "sofachester3puestos", nombre: "Sofá Chester 3 puestos", imagen: "./upload/sala-chester-3puestos2.jpg", precio: "$1.800.000", descripcion: "Capitoné clásico para 3 personas, comodidad y elegancia en cada detalle." },
        { id: "sofapuntos", nombre: "Sofá Puntos", imagen: "./upload/sofa-puntos.jpg", precio: "$1.100.000", descripcion: "Tapizado con textura de puntos, moderno y acogedor para tu sala." },
        { id: "sofacuadrado", nombre: "Sofá Cuadrado", imagen: "./upload/sofa-cuadrado.jpg", precio: "$1.200.000", descripcion: "Líneas rectas y minimalistas, diseño contemporáneo para cualquier espacio." }
    ],
    salas: [
        { id: "salaisabelina", nombre: "Sala Isabelina", imagen: "./upload/sala-isabelina.jpg", precio: "$2.100.000", descripcion: "Estilo clásico con detalles tallados y tapizado en tela de alta calidad." },
        { id: "salaesquinera", nombre: "Sala Esquinera", imagen: "./upload/sala esquinera.jpg", precio: "$2.800.000", descripcion: "Maximiza tu espacio con un diseño en L, cómodo y perfecto para reuniones." },
        { id: "salachester3puestos", nombre: "Sala Chester 3 puestos", imagen: "./upload/sala-chester-3puestos.jpg", precio: "$2.600.000", descripcion: "Capitoné clásico para 3 personas, elegancia y confort en cada detalle." },
        { id: "salachester2puestos", nombre: "Sala Chester 2 puestos", imagen: "./upload/sala-chester.jpg", precio: "$2.400.000", descripcion: "Capitoné compacto para 2 personas, ideal para espacios íntimos y acogedores." },
        { id: "salavenecia", nombre: "Sala Venecia", imagen: "./upload/sala venecia.jpg", precio: "$3.200.000", descripcion: "Inspirada en el lujo veneciano, con tapizado premium y un diseño sofisticado." },
    ],
    camas: [
        { id: "camaisabelacapitoneada", nombre: "Cama Isabela Capitoneada", imagen: "./upload/cama-isabela-capitoneada.jpg", precio: "$1.800.000", descripcion: "Espaldar capitoneado de lujo con acabados finos y un diseño romántico." },
        { id: "camabastidores", nombre: "Cama Bastidores", imagen: "./upload/cama-bastidores.png", precio: "$1.400.000", descripcion: "Estructura con bastidores decorativos, elegante y de gran durabilidad." },
        { id: "camacapitoneadabaul", nombre: "Cama Capitoneada + Baúl", imagen: "./upload/cama capitoneada + baúl-3.jpg", precio: "$1.600.000", descripcion: "Capitoneado clásico con baúl integrado al pie, estilo y almacenamiento en uno." },
        { id: "camacapitoneadaorejas", nombre: "Cama Capitoneada Con Orejas", imagen: "./upload/cama-capitoneada-orejas.jpg", precio: "$1.750.000", descripcion: "Espaldar capitoneado con orejas laterales, diseño envolvente y sofisticado." }
    ],
    comedores: [
        { id: "comedorhueco", nombre: "Comedor Hueco", imagen: "./upload/comedor-hueco.jpg", precio: "$2.400.000", descripcion: "Sillas con respaldo calado, diseño moderno y liviano para tu comedor." },
        { id: "comedorlordalto", nombre: "Comedor Lord Alto", imagen: "./upload/comedor-lord-alto.jpg", precio: "$2.600.000", descripcion: "Sillas altas estilo lord, tapizadas y con presencia elegante en la mesa." },
        { id: "comedorsinbrazo", nombre: "Comedor Sin Brazo", imagen: "./upload/comedor-sin-brazo.jpg", precio: "$2.200.000", descripcion: "Diseño limpio sin brazos, cómodo y fácil de integrar en cualquier espacio." },
        { id: "comedorlordredondo", nombre: "Comedor Lord Redondo", imagen: "./upload/comedor-lord-redondo.jpg", precio: "$2.700.000", descripcion: "Mesa redonda con sillas lord tapizadas, perfecta para reuniones íntimas." },
        { id: "comedorconbanqueta", nombre: "Comedor Con Banqueta", imagen: "./upload/comedor-con-banqueta.jpg", precio: "$2.400.000", descripcion: "Incluye banqueta a juego, una opción versátil y con estilo propio." }
    ],
    esquineros: [
        { id: "esquinerocruz", nombre: "Esquinero Cruz", imagen: "./upload/esquinero-cruz.jpg", precio: "$1.800.000", descripcion: "Ideal para salas grandes y familias." },
        { id: "esquinerocojinesdecorativos", nombre: "Esquinero Cojines Decorativos", imagen: "./upload/Esquinero Cojines Decorativos-3.jpg", precio: "$2.000.000", descripcion: "Confort y estilo en un solo mueble." },
        { id: "esquinerop", nombre: "Esquinero P", imagen: "./upload/esquinero-p.jpg", precio: "$1.800.000", descripcion: "Perfecta para relajarte después de un largo día." }
    ],
    sillas: [
        { id: "silladecorativaverlle", nombre: "Silla Decorativa Verlle", imagen: "./upload/sillas-decorativas-verlle2.jpg", precio: "$1.200.000", descripcion: "Silla de acento con tapizado elegante, ideal para habitaciones y salas de lectura." },
        { id: "sillaredonda", nombre: "Silla Redonda", imagen: "./upload/silla-redonda.jpg", precio: "$1.400.000", descripcion: "Forma circular envolvente con tapizado suave, un toque moderno para cualquier rincón." },
        { id: "sillacama", nombre: "Silla Cama", imagen: "./upload/sillacama.png", precio: "$1.100.000", descripcion: "Se despliega en cama individual, perfecta para espacios pequeños o cuartos de huéspedes." },
        { id: "sillapuntos", nombre: "Silla Puntos", imagen: "./upload/silla-puntos.jpg", precio: "$650.000", descripcion: "Tapizado con textura de puntos, diseño juvenil y acogedor a un precio accesible." },
        { id: "silladecorativa", nombre: "Silla Decorativa", imagen: "./upload/silla-decorativaa.png", precio: "$850.000", descripcion: "Pieza decorativa de carácter, perfecta para complementar cualquier estilo de interior." }
    ],
    espaldares: [
        { id: "espaldarberlincapitoneado", nombre: "Espaldar Berlin Capitoneado", imagen: "./upload/espaldar-berlin-capitoneado.jpg", precio: "$600.000", descripcion: "Capitoneado clásico estilo Berlín, sofisticado y de gran presencia en el dormitorio." },
        { id: "espaldarliso", nombre: "Espaldar Liso", imagen: "./upload/espaldar-liso.jpg", precio: "$480.000", descripcion: "Acabado liso y limpio, ideal para quienes prefieren un estilo minimalista y moderno." },
        { id: "espaldarchocolatina", nombre: "Espaldar Chocolatina", imagen: "./upload/espaldar-chocolatina.jpg", precio: "$480.000", descripcion: "Diseño en cuadros pequeños tipo chocolatina, textura llamativa y muy elegante." },
        { id: "espaldarmadera", nombre: "Espaldar Madera", imagen: "./upload/espaldar-madera.jpg", precio: "$550.000", descripcion: "Estructura con detalles en madera, aporta calidez y un toque natural al cuarto." },
        { id: "espaldarcuadros", nombre: "Espaldar Cuadros", imagen: "./upload/espaldar-cuadros.jpg", precio: "$600.000", descripcion: "Patrón de cuadros en relieve, diseño geométrico que destaca en cualquier habitación." },
        { id: "espaldarorejascapitoneado", nombre: "Espaldar Orejas Capitoneado", imagen: "./upload/espaldar-orejas-capitoneado.jpg", precio: "$500.000", descripcion: "Capitoneado con orejas laterales, diseño envolvente con un toque clásico y acogedor." },
        { id: "espaldarpuntiado", nombre: "Espaldar Puntiado", imagen: "./upload/espaldar-puntiado.jpg", precio: "$400.000", descripcion: "Puntadas decorativas en relieve que añaden textura y personalidad al dormitorio." },
        { id: "espaldarbastidores", nombre: "Espaldar Bastidores", imagen: "./upload/espaldar-bastidores.jpg", precio: "$400.000", descripcion: "Marco con bastidores decorativos, estructura elegante con acabado artesanal." },
        { id: "espaldarbotones", nombre: "Espaldar Botones", imagen: "./upload/espaldar botones.jpg", precio: "$390.000", descripcion: "Botones decorativos distribuidos en el tapizado, detalle clásico y muy solicitado." }
    ]
};

// CONTENEDOR
const contenedor = document.getElementById("contenedor-productos");

// VALIDAR CATEGORIA
if (!productos[categoria]) {
    contenedor.innerHTML = `<div class="no-productos"><h2>Categoría no encontrada</h2></div>`;
} else {
    productos[categoria].forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto-card">
                <div class="producto-img">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
                <div class="producto-info">
                    <p class="producto-categoria">${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</p>
                    <h2>${producto.nombre}</h2>
                    <p class="descripcion">${producto.descripcion}</p>
                    <div class="producto-footer">
                        <div class="precio-wrap">
                            <span class="precio-label">Desde</span>
                            <p class="precio">${producto.precio}</p>
                        </div>
                        <a href="./detalle.html?id=${producto.id}" class="btn-ver">Ver más →</a>
                    </div>
                </div>
            </div>
        `;
    });
}