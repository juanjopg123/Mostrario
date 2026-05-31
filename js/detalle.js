// PARAMETROS URL
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

// PRODUCTOS

const productos = {

    sofacarrito: {
        nombre: "Sofá Cama Carrito",
        imagenes: [
            "./upload/sofacama-carrito.jpg",
            "./upload/sofacama-carrito-2.jpg",
        ],
        precio: "$1.600.000",
        descripcion: "Se convierte en cama en segundos, ideal para espacios multifuncionales.",
        medidas: "160cm x 90cm"
    },
    sofaversalle: {
        nombre: "Sofá Versalle",
        imagenes: [
            "./upload/sofa-versalles.jpg",
        ],
        precio: "$2.200.000",
        descripcion: "Líneas curvas y tapizado suave que combinan elegancia y comodidad.",
        medidas: "2m x 90cm"
    },
    sofachesterbrazosredondos: {
        nombre: "Sofá Chester Brazos Redondos",
        imagenes: [
            "./upload/sofa-chester-brazo-redondo.png",
        ],
        precio: "$2.400.000",
        descripcion: "Capitoné clásico con brazos redondeados, una pieza de carácter y distinción.",
        medidas: "2m x 90cm"
    },
    sofachester2: {
        nombre: "Sofá Chester 2 Puestos",
        imagenes: [
            "./upload/sofa-chester-normal.jpg",
            "./upload/sofa-chester-2puestos-2.jpg",
            "./upload/Sofá chester 2 puestos-4.jpg",
            "./upload/sala-chester.jpg"
        ],
        precio: "$1.600.000",
        descripcion: "Capitoné compacto para 2 personas, perfecto para espacios íntimos.",
        medidas: "2m x 80cm"
    },
    sofachester3puestos: {
        nombre: "Sofá Chester 3 Puestos",
        imagenes: [
            "./upload/sala-chester-3puestos2.jpg",
        ],
        precio: "$1.800.000",
        descripcion: "Capitoné clásico para 3 personas, comodidad y elegancia en cada detalle.",
        medidas: "240cm x 80cm"
    },
    sofapuntos: {
        nombre: "Sofá Puntos",
        imagenes: [
            "./upload/sofa-puntos.jpg",
        ],
        precio: "$1.100.000",
        descripcion: "Tapizado con textura de puntos, moderno y acogedor para tu sala.",
        medidas: "140cm x 80cm"
    },
    sofacuadrado: {
        nombre: "Sofá Cuadrado",
        imagenes: [
            "./upload/sofa-cuadrado.jpg",
        ],
        precio: "$1.200.000",
        descripcion: "Líneas rectas y minimalistas, diseño contemporáneo para cualquier espacio.",
        medidas: "140cm x 80cm"
    },
    salaisabelina: {
        nombre: "Sala Isabelina",
        imagenes: [
            "./upload/sala-isabelina.jpg",
        ],
        precio: "$2.100.000",
        descripcion: "Estilo clásico con detalles tallados y tapizado en tela de alta calidad.",
    },
    salaesquinera: {
        nombre: "Sala Esquinera",
        imagenes: [
            "./upload/sala esquinera.jpg",
            "./upload/sala esquinera1.png",
            "./upload/sala esquinera2.png"
        ],
        precio: "$2.800.000",
        descripcion: "Maximiza tu espacio con un diseño en L, cómodo y perfecto para reuniones.",
        medidas: "230cm x 180cm"
    },
    salachester3puestos: {
        nombre: "Sala Chester 3 Puestos",
        imagenes: [
            "./upload/sala-chester-3puestos.jpg",
            "./upload/sala-chester-3puestos2.jpg",
            "./upload/sala-chester-3puestos3.jpg"
        ],
        precio: "$2.600.000",
        descripcion: "Capitoné clásico para 3 personas, elegancia y confort en cada detalle.",
        medidas: "240cm x 80cm"
    },
    salachester2puestos: {
        nombre: "Sala Chester 2 Puestos",
        imagenes: [
            "./upload/sala-chester.jpg",
        ],
        precio: "$2.400.000",
        descripcion: "Capitoné compacto para 2 personas, ideal para espacios íntimos y acogedores.",
        medidas: "2m x 80cm"
    },
    salavenecia: {
        nombre: "Sala Venecia",
        imagenes: [
            "./upload/sala venecia.jpg",
        ],
        precio: "$3.200.000",
        descripcion: "Inspirada en el lujo veneciano, con tapizado premium y un diseño sofisticado.",
        medidas: "Sofa + 2 Sillas"
    },
    camaisabelacapitoneada: {
        nombre: "Cama Isabela Capitoneada",
        imagenes: [
            "./upload/cama-isabela-capitoneada.jpg",
            "./upload/Cama isabela capitoneada-2.jpg",
            "./upload/Cama isabela capitoneada-3.jpg",
        ],
        precio: "$1.800.000",
        descripcion: "Espaldar capitoneado de lujo con acabados finos y un diseño romántico.",
        medidas: "140cm x 190cm"
    },
    camabastidores: {
        nombre: "Cama Bastidores",
        imagenes: [
            "./upload/cama-bastidores.png",
            "./upload/cama-bastidores2.jpg",
            "./upload/cama-bastidores3.jpg",
            "./upload/Cama Bastidores-4.jpg",
        ],
        precio: "$1.400.000",
        descripcion: "Estructura con bastidores decorativos, elegante y de gran durabilidad.",
        medidas: "140cm x 190cm"
    },
    camacapitoneadabaul: {
        nombre: "Cama Capitoneada + Baúl",
        imagenes: [
            "./upload/cama-capitoneada-baul2.jpg",
            "./upload/cama-capitoneada-baul.jpg",
            "./upload/Cama capitoneada + baúl-3.jpg",
        ],
        precio: "$1.600.000",
        descripcion: "Capitoneado clásico con baúl integrado al pie, estilo y almacenamiento en uno.",
        medidas: "140cm x 190cm - baul 140 x 45 precio baúl $450000"
    },
    camacapitoneadaorejas: {
        nombre: "Cama Capitoneada Con Orejas",
        imagenes: [
            "./upload/cama-capitoneada-orejas.jpg",
            "./upload/cama-capitoneada-orejas2.jpg",
            "./upload/cama-capitoneada-orejas3.jpg",
        ],
        precio: "$1.750.000",
        descripcion: "Espaldar capitoneado con orejas laterales, diseño envolvente y sofisticado.",
        medidas: "140cm x 190cm"
    },
    comedorhueco: {
        nombre: "Comedor Hueco",
        imagenes: [
            "./upload/comedor-hueco.jpg",
            "./upload/comedor-hueco-2.jpg",
            "./upload/comedor-hueco-3.jpg",
        ],
        precio: "$2.400.000",
        descripcion: "Sillas con respaldo calado, diseño moderno y liviano para tu comedor.",
        medidas: "4 Puestos"
    },
    comedorlordalto: {
        nombre: "Comedor Lord Alto",
        imagenes: [
            "./upload/comedor-lord-alto.jpg",
            "./upload/comedor-lord-alto-2.jpg",
            "./upload/comedor-lord-alto-3.jpg",
        ],
        precio: "$2.600.000",
        descripcion: "Sillas altas estilo lord, tapizadas y con presencia elegante en la mesa.",
        medidas: "4 Puestos"
    },
    comedorsinbrazo: {
        nombre: "Comedor Sin Brazo",
        imagenes: [
            "./upload/comedor-sin-brazo.jpg",
        ],
        precio: "$2.200.000",
        descripcion: "Diseño limpio sin brazos, cómodo y fácil de integrar en cualquier espacio.",
        medidas: "4 Puestos"
    },
    comedorlordredondo: {
        nombre: "Comedor Lord Redondo",
        imagenes: [
            "./upload/comedor-lord-redondo.jpg",
        ],
        precio: "$2.700.000",
        descripcion: "Mesa redonda con sillas lord tapizadas, perfecta para reuniones íntimas.",
        medidas: "4 Puestos"
    },
    comedorconbanqueta: {
        nombre: "Comedor Con Banqueta",
        imagenes: [
            "./upload/comedor-con-banqueta.jpg",
        ],
        precio: "$2.400.000",
        descripcion: "Incluye banqueta a juego, una opción versátil y con estilo propio.",
        medidas: "3 sillas + 1 banqueta"
    },
    esquinerocruz: {
        nombre: "Esquinero Cruz",
        imagenes: [
            "./upload/esquinero-cruz.jpg",
            "./upload/Esquinero cruz-3.jpg",
            "./upload/Esquinero cruz-2.jpg",
        ],
        precio: "$1.800.000",
        descripcion: "Ideal para salas grandes y familias.",
        medidas: "2m x 150cm"
    },
    esquinerocojinesdecorativos: {
        nombre: "Esquinero Cojines Decorativos",
        imagenes: [
            "./upload/Esquinero Cojines Decorativos-3.jpg",
            "./upload/Esquinero Cojines Decorativos-2.jpg",
            "./upload/esquinero-cojines-decorativos.jpg",
            "./upload/Esquinero-Cojines-Decorativos-4.jpg",
        ],
        precio: "$2.000.000",
        descripcion: "Confort y estilo en un solo mueble.",
        medidas: "220cm x 160cm"
    },
    esquinerop: {
        nombre: "Esquinero P",
        imagenes: [
            "./upload/esquinero-p.jpg",
            "./upload/Esquinero p-2.jpg",
            "./upload/Esquinero p-3.jpg",
        ],
        precio: "$1.800.000",
        descripcion: "Perfecta para relajarte después de un largo día.",
        medidas: "140cm x 160cm"
    },
    silladecorativaverlle: {
        nombre: "Silla Decorativa Verlle",
        imagenes: [
            "./upload/sillas-decorativas-verlle2.jpg",
            "./upload/sillas-decorativas-verlle.jpg",
        ],
        precio: "$1.200.000",
        descripcion: "Silla de acento con tapizado elegante, ideal para habitaciones y salas de lectura.",
        medidas: "-"
    },
    sillaredonda: {
        nombre: "Silla Redonda",
        imagenes: [
            "./upload/silla-redonda.jpg",
        ],
        precio: "$1.400.000",
        descripcion: "Forma circular envolvente con tapizado suave, un toque moderno para cualquier rincón.",
        medidas: "1m x 1m"
    },
    sillacama: {
        nombre: "Silla Cama",
        imagenes: [
            "./upload/sillacama.png",
            "./upload/Sillacama2.png",
        ],
        precio: "$1.100.000",
        descripcion: "Se despliega en cama individual, perfecta para espacios pequeños o cuartos de huéspedes.",
        medidas: "1m x 90cm"
    },
    sillapuntos: {
        nombre: "Silla Puntos",
        imagenes: [
            "./upload/silla-puntos.jpg",
        ],
        precio: "$650.000",
        descripcion: "Tapizado con textura de puntos, diseño juvenil y acogedor a un precio accesible.",
        medidas: "90cm x 80cm"
    },
    silladecorativa: {
        nombre: "Silla Decorativa",
        imagenes: [
            "./upload/silla-decorativaa.png",
        ],
        precio: "$850.000",
        descripcion: "Pieza decorativa de carácter, perfecta para complementar cualquier estilo de interior.",
        medidas: "-"
    },
    espaldarberlincapitoneado: {
        nombre: "Espaldar Berlín Capitoneado",
        imagenes: [
            "./upload/espaldar-berlin-capitoneado.jpg",
            "./upload/espaldar-berlin-capitoneado2.jpg",
            "./upload/espaldar-berlin-capitoneado3.jpg",
            "./upload/espaldar-berlin-capitoneado4.jpg",
        ],
        precio: "$600.000",
        descripcion: "Capitoneado clásico estilo Berlín, sofisticado y de gran presencia en el dormitorio.",
        medidas: "140cm x 150cm"
    },
    espaldarliso: {
        nombre: "Espaldar Liso",
        imagenes: [
            "./upload/espaldar-liso.jpg",
            "./upload/espaldar-liso2.jpg",
            "./upload/espaldar-liso-3.jpg",
        ],
        precio: "$480.000",
        descripcion: "Acabado liso y limpio, ideal para quienes prefieren un estilo minimalista y moderno.",
        medidas: "140cm x 150cm"
    },
    espaldarchocolatina: {
        nombre: "Espaldar Chocolatina",
        imagenes: [
            "./upload/espaldar-chocolatina.jpg",
            "./upload/espaldar-chocolatina1.jpg",
            "./upload/espaldar-chocolatina2.jpg",
        ],
        precio: "$480.000",
        descripcion: "Diseño en cuadros pequeños tipo chocolatina, textura llamativa y muy elegante.",
        medidas: "140cm x 150cm"
    },
    espaldarmadera: {
        nombre: "Espaldar Madera",
        imagenes: [
            "./upload/espaldar-madera.jpg",
        ],
        precio: "$550.000",
        descripcion: "Estructura con detalles en madera, aporta calidez y un toque natural al cuarto.",
        medidas: "140cm x 150cm"
    },
    espaldarcuadros: {
        nombre: "Espaldar Cuadros",
        imagenes: [
            "./upload/espaldar-cuadros.jpg",
        ],
        precio: "$600.000",
        descripcion: "Patrón de cuadros en relieve, diseño geométrico que destaca en cualquier habitación.",
        medidas: "140cm x 150cm"
    },
    espaldarorejascapitoneado: {
        nombre: "Espaldar Orejas Capitoneado",
        imagenes: [
            "./upload/espaldar-orejas-capitoneado.jpg",
            "./upload/Espaldar-orejas-capitoneado1.png",
            "./upload/Espaldar-orejas-capitoneado2.png",
            "./upload/Espaldar-orejas-capitoneado3.png",
        ],
        precio: "$500.000",
        descripcion: "Capitoneado con orejas laterales, diseño envolvente con un toque clásico y acogedor.",
        medidas: "140cm x 150cm"
    },
    espaldarpuntiado: {
        nombre: "Espaldar Puntiado",
        imagenes: [
            "./upload/espaldar-puntiado.jpg",
        ],
        precio: "$400.000",
        descripcion: "Puntadas decorativas en relieve que añaden textura y personalidad al dormitorio.",
        medidas: "140cm x 150cm"
    },
    espaldarbastidores: {
        nombre: "Espaldar Bastidores",
        imagenes: [
            "./upload/espaldar-bastidores.jpg",
        ],
        precio: "$400.000",
        descripcion: "Marco con bastidores decorativos, estructura elegante con acabado artesanal.",
        medidas: "160cm x 90cm"
    },
    espaldarbotones: {
        nombre: "Espaldar Botones",
        imagenes: [
            "./upload/espaldar botones.jpg",
            "./upload/espaldar botones2.jpg",
            "./upload/espaldar botones3.jpg",
        ],
        precio: "$390.000",
        descripcion: "Botones decorativos distribuidos en el tapizado, detalle clásico y muy solicitado.",
        medidas: "140cm x 150cm"
    },
};

// CONTENEDOR

const contenedor = document.getElementById("detalle-producto");

// VALIDAR PRODUCTO

if (!productos[id]) {

    contenedor.innerHTML = `

        <div class="producto-no-encontrado">
            <h2>Producto no encontrado</h2>
            <a href="./index.html" class="btn-volver">
                Volver al inicio
            </a>
        </div>
    `;

} else {

    const producto = productos[id];
    // CREAR MINIATURAS
    let miniaturas = "";
    producto.imagenes.forEach((imagen, index) => {
        miniaturas += `
            <img
                src="${imagen}"
                alt="${producto.nombre}"
                class="miniatura ${index === 0 ? "active" : ""}"
                onclick="cambiarImagen('${imagen}', this)"
            >
        `;
    });

    // HTML

    contenedor.innerHTML = `

        <div class="detalle-container">
            <div class="detalle-galeria">

                <div class="imagen-principal">
                    <img
                        id="imagenPrincipal"
                        src="${producto.imagenes[0]}"
                        alt="${producto.nombre}"
                    >
                </div>

                <div class="miniaturas-container">
                    ${miniaturas}
                </div>
            </div>

            <div class="detalle-info">
                <span class="detalle-categoria">
                    Muebles Premium
                </span>

                <h1 class="detalle-titulo">
                    ${producto.nombre}
                </h1>

                <p class="detalle-precio">
                    ${producto.precio}
                </p>

                <p class="detalle-descripcion">
                    ${producto.descripcion}
                </p>

                <div class="detalle-extra">
                    <div class="extra-item">
                        <span>
                            <strong>Medidas:</strong>
                            ${producto.medidas}
                        </span>
                    </div>

                    <div class="extra-item">
                        <span>
                            Garantía de calidad
                        </span>
                    </div>
                </div>

                <div class="detalle-botones">
                    <a
                        href="https://api.whatsapp.com/send?phone=573052792408&text=Hola,%20quiero%20información%20sobre%20${producto.nombre}"
                        target="_blank"
                        class="btn-whatsapp"
                    >
                        <i class="fa-brands fa-whatsapp"></i>
                        Consultar por WhatsApp
                    </a>
                    <a href="./index.html" class="btn-volver-productos">Volver al inicio</a>
                </div>
            </div>
        </div>
    `;
}

function cambiarImagen(imagen, elemento) {

    // CAMBIAR IMAGEN PRINCIPAL
    const imagenPrincipal =
        document.getElementById("imagenPrincipal");
    imagenPrincipal.src = imagen;
    // REMOVER ACTIVE
    const miniaturas =
        document.querySelectorAll(".miniatura");

    miniaturas.forEach(img => {

        img.classList.remove("active");

    });
    // AGREGAR ACTIVE
    elemento.classList.add("active");
}