//Hora
function obtenerFechaHora() {
  const fechaHora = new Date();

  const dia = fechaHora.getDate();
  const mes = fechaHora.getMonth() + 1;
  const año = fechaHora.getFullYear();

  const hora = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const segundos = fechaHora.getSeconds();

  const fechaHoraFormateada = `${dia}/${mes}/${año} ${hora}:${minutos}:${segundos}`;

  const elementoFechaHora = document.getElementById('fecha-hora-actual');
  elementoFechaHora.textContent = fechaHoraFormateada;
}

function actualizarSegundos() {
  const elementoSegundos = document.getElementById('segundos-actuales');
  const fechaHora = new Date();
  const segundos = fechaHora.getSeconds();
  elementoSegundos.textContent = segundos.toString().padStart(2, '0');
}

obtenerFechaHora();
setInterval(() => {
  obtenerFechaHora();
  actualizarSegundos();
}, 1000);

//------------------Apartado de noticias-------------------//
//Noticias - Chile

//Noticias - Francia

  var apiKey = '103cb46335a4498eb77b025c9466efbc';
  var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=fr&' +
            'apiKey=' + apiKey;
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var noticias = data.articles;
      var noticiasContainer = document.getElementById('noticias-container-fr');
      var anteriorButton = document.getElementById('anterior-fr');
      var siguienteButton = document.getElementById('siguiente-fr');
      var tituloIndex = 0;
      var intervalId;
  
      function mostrarTitulares() {
        noticiasContainer.innerHTML = '';
  
        for (var i = tituloIndex; i < tituloIndex + 3; i++) {
          if (noticias[i]) {
            var titulo = noticias[i].title;
            var fuente = noticias[i].source.name;
  
            var elementoNoticia = document.createElement('div');
            elementoNoticia.innerHTML = '<h4>' + titulo + '</h4>' +
                                        '<p>Fuente: ' + fuente + '</p>';
  
            noticiasContainer.appendChild(elementoNoticia);
          }
        }
      }
  
      function desplazamientoAutomatico() {
        intervalId = setInterval(function() {
          if (tituloIndex + 3 < noticias.length) {
            tituloIndex += 3;
          } else {
            tituloIndex = 0;
          }
          mostrarTitulares();
        }, 20000); // 20 segundos
      }
  
      anteriorButton.addEventListener('click', function() {
        clearInterval(intervalId);
        tituloIndex = Math.max(tituloIndex - 3, 0);
        mostrarTitulares();
        desplazamientoAutomatico();
      });
  
      siguienteButton.addEventListener('click', function() {
        clearInterval(intervalId);
        if (tituloIndex + 3 < noticias.length) {
          tituloIndex += 3;
        } else {
          tituloIndex = 0;
        }
        mostrarTitulares();
        desplazamientoAutomatico();
      });
  
      mostrarTitulares();
      desplazamientoAutomatico();
    })
    .catch(function(error) {
      console.error(error);
    });
  




//Noticias - Gran Bretaña

  var apiKey = '103cb46335a4498eb77b025c9466efbc';
  var url = 'https://newsapi.org/v2/top-headlines?' +
            'country=gb&' +
            'apiKey=' + apiKey;
  
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var noticias = data.articles;
      var noticiasContainer = document.getElementById('noticias-container-gb');
      var anteriorButton = document.getElementById('anterior');
      var siguienteButton = document.getElementById('siguiente');
      var tituloIndex = 0;
      var intervalId;
  
      function mostrarTitulares() {
        noticiasContainer.innerHTML = '';
  
        for (var i = tituloIndex; i < tituloIndex + 3; i++) {
          if (noticias[i]) {
            var titulo = noticias[i].title;
            var fuente = noticias[i].source.name;
  
            var elementoNoticia = document.createElement('div');
            elementoNoticia.innerHTML = '<h4>' + titulo + '</h4>' +
                                        '<p>Fuente: ' + fuente + '</p>';
  
            noticiasContainer.appendChild(elementoNoticia);
          }
        }
      }
  
      function desplazamientoAutomatico() {
        intervalId = setInterval(function() {
          if (tituloIndex + 3 < noticias.length) {
            tituloIndex += 3;
          } else {
            tituloIndex = 0;
          }
          mostrarTitulares();
        }, 20000); // 20 segundos
      }
  
      anteriorButton.addEventListener('click', function() {
        clearInterval(intervalId);
        tituloIndex = Math.max(tituloIndex - 3, 0);
        mostrarTitulares();
        desplazamientoAutomatico();
      });
  
      siguienteButton.addEventListener('click', function() {
        clearInterval(intervalId);
        if (tituloIndex + 3 < noticias.length) {
          tituloIndex += 3;
        } else {
          tituloIndex = 0;
        }
        mostrarTitulares();
        desplazamientoAutomatico();
      });
  
      mostrarTitulares();
      desplazamientoAutomatico();
    })
    .catch(function(error) {
      console.error(error);
    });
  



//Indicadores economicos

function obtenerIndicadores() {
  fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
      // Extrae los valores de todas las variables de la API
      const dolar = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.dolar.valor);
      const euro = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.euro.valor);
      const uf = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.uf.valor);
      const ipc = data.ipc.valor;
      const ivp = data.ivp.valor;
      const tpm = data.tpm.valor;
      const libra_cobre = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.libra_cobre.valor);
      const tasa_desempleo = data.tasa_desempleo.valor;
      const bitcoin = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(data.bitcoin.valor);

      // Agrega los indicadores al HTML
      const indicadoresContainer = document.querySelector('.indicadores');
      indicadoresContainer.innerHTML = `
        <p>Dólar: ${dolar}</p>
        <p>Euro: ${euro}</p>
        <p>UF: ${uf}</p>
        <p>IPC: ${ipc}%</p>
        <p>IVP: $${ivp}</p>
        <p>TPM: ${tpm}%</p>
        <p>Libra de Cobre: ${libra_cobre}</p>
        <p>Tasa de Desempleo: ${tasa_desempleo}%</p>
        <p>Bitcoin: ${bitcoin}</p>
      `;
    })
    .catch(error => console.error(error));
}

// Ejecutar la función cada 5 segundos (5000 milisegundos)
setInterval(obtenerIndicadores, 5000);

//Abrir pestañas Chile

function abrirBiobiochile() {
  window.open("https://www.biobiochile.cl");
}

function abrirCooperativa() {
  window.open("https://www.cooperativa.cl");
}

function abrirDiarioOficial(){
  window.open("https://www.diariooficial.interior.gob.cl/#close");
}

function abrirleychile(){
  window.open("https://www.bcn.cl/leychile/");
}  
function abrirFinanciero(){
  window.open("https://www.df.cl/")
}

function abrirhoyxhoy(){
  window.open("https://www.hoyxhoy.cl/");
}
function abrirpublimetro(){
  window.open("https://www.publimetro.cl/");
}

function abrirDiarioantofagasta(){
  window.open("https://www.diarioantofagasta.cl/")
}
 
function abrirElMostrador(){
  window.open("https://www.elmostrador.cl/")
}

function abrirLaNacion(){
  window.open("https://www.lanacion.cl/")
}

//Abrir pestañas Inglaterra

function abrirNottingham(){
  window.open("https://www.nottinghampost.com/")
}

function abrirDailyMail(){
  window.open("https://www.dailymail.co.uk/home/index.html")
}

function abrirExpress(){
  window.open("https://www.express.co.uk/")
}

function abrirTheTimes(){
  window.open("https://www.thetimes.co.uk/")
}

function abrirDailyrecord(){
  window.open("https://www.dailyrecord.co.uk/")
}



//Abrir pestañas Francia

function abrirLeMonde(){
  window.open("https://www.lemonde.fr/")
}

function abrirLeParisien(){
  window.open("https://www.leparisien.fr/")
}

function abrir20minutes(){
  window.open("https://www.20minutes.fr/")
}

function abrirLeTelegramme(){
  window.open("https://www.letelegramme.fr/")
}

function abrirLaMarseillaise(){
  window.open("https://www.lamarseillaise.fr/")
}

//Abrir Pestañas TV Nacional

function abrircanal13(){
  window.open("https://www.13.cl/en-vivo")

}

function abrirChv(){
  window.open("https://www.chilevision.cl/senal-online")
}

function abrirMega(){
  window.open("https://www.meganoticias.cl/senal-en-vivo/mega/")
}

function abrirTvn(){
  window.open("https://www.tvn.cl/en-vivo")
}

function abrirUCV(){
  window.open("https://ucvtv.cl/tv-directo.php")
}

function abrirRed(){
  window.open("https://www.lared.cl/senal-online")
}

function abrirDiputado(){
  window.open("https://www.camara.cl/prensa/television.aspx")
}

function abrirSenado(){
  window.open("https://tv.senado.cl/")
}

//Las Ultimas Noticias

(function() {
  function actualizarEnlace() {
    var fecha = new Date(document.getElementById("fecha").value);
    var fecha_enlace = fecha.toISOString().slice(0, 10);
    console.log(fecha_enlace);
    document.getElementById("enlace").href =
      "https://www.lun.com/Pages/NewsDetail.aspx?dt=" +
      fecha_enlace +
      "&EsAviso=0&PaginaId=1&bodyid=0";
  }

  function actualizarImagen() {
    var fecha = new Date(document.getElementById("fecha").value);
    fecha.setUTCHours(0, 0, 0, 0); // establecer la zona horaria de la fecha a UTC
    console.log("Fecha en UTC:", fecha.toUTCString());
    console.log("Fecha en zona horaria local:", fecha.toLocaleString());
    var mes = fecha.toLocaleString("default", { month: "short" });
    var fecha_img =
      fecha.getFullYear() +
      "/" +
      mes.toLowerCase() +
      "/" +
      (fecha.getDate() < 10 ? "0" : "") +
      fecha.getDate();
    console.log(fecha_img);

    fecha.setDate(fecha.getDate() + 1); // Agregamos un día a la fecha
    mes = fecha.toLocaleString("default", { month: "short" }); // Actualizamos el valor de mes

    var dia = fecha.getDate().toString().padStart(2, "0");
    var mes_num = (fecha.getMonth() + 1).toString().padStart(2, "0");

    var url_final =
      "https://images.lun.com/lunservercontents/NewsPaperPages/" +
      fecha.getFullYear() +
      "/" +
      mes.toLowerCase() +
      "/" +
      dia +
      "/LUCST01LU" +
      dia +
      mes_num +
      "_550.jpg";
    console.log(url_final);
    document.getElementById("imagen").src = url_final;
  }

  function actualizarEnlaces() {
    actualizarEnlace();
    actualizarImagen();
  }

  function setearHoy() {
    var hoy = new Date();
    var dd = String(hoy.getDate()).padStart(2, "0");
    var mm = String(hoy.getMonth() + 1).padStart(2, "0"); // Enero es 0
    var yyyy = hoy.getFullYear();
    var fecha = yyyy + "-" + mm + "-" + dd;
    document.getElementById("fecha").value = fecha;
    actualizarEnlaces(); //link LUN
  }

  setearHoy(); // Llama a la función setearHoy al cargar la página

  // Asignar las funciones a los eventos correspondientes
  document.getElementById("fecha").addEventListener("change", actualizarEnlaces);
  document.getElementById("enlace").addEventListener("click", actualizarImagen);
})();

//Publimetro
(function() {
  function actualizarEnlace_2() {
    var fecha = new Date(document.getElementById("fecha").value);
    var dia = ("0" + (fecha.getDate() +1)).slice(-2);
    var mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
    var anio = fecha.getFullYear();
    var fecha_enlace = anio + mes + dia;
    console.log(fecha_enlace);
    var enlace = document.getElementById("enlace_2");
    enlace.href = "https://www.readmetro.com/es/chile/santiago/" + fecha_enlace + "/1/";
    enlace.target = "_blank";
  }

  // Resto del código

  function actualizarEnlaces_1() {
    actualizarEnlace_2();
    // Resto de funciones para actualizar enlaces
  }

  // Resto del código

  // Asignar las funciones a los eventos correspondientes
  document.getElementById("fecha").addEventListener("change", actualizarEnlaces_1);
  document.getElementById("enlace_2").addEventListener("click", actualizarEnlace_2);
})();

// La Tercera

function actualizarEnlaces() {
  var fecha = document.getElementById("fecha").value;
  var partesFecha = fecha.split("-");
  var año = partesFecha[0];
  var mes = partesFecha[1].padStart(2, '0');
  var dia = partesFecha[2].padStart(2, '0');
  var urlImagen = "https://img.kiosko.net/" + año + "/" + mes + "/" + dia + "/cl/cl_tercera.750.jpg";
  document.getElementById("imagen_3").src = urlImagen;
  console.log(urlImagen)
}

function setearHoy() {
  var fechaHoy = new Date();
  var año = fechaHoy.getFullYear();
  var mes = (fechaHoy.getMonth() + 1).toString().padStart(2, '0');
  var dia = fechaHoy.getDate().toString().padStart(2, '0');
  var fechaActual = año + "-" + mes + "-" + dia;
  document.getElementById("fecha").value = fechaActual;
  actualizarEnlaces_3();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("fecha").valueAsDate = new Date(); // Establece la fecha actual en el campo de fecha
  actualizarEnlaces(); // Actualiza los enlaces con la fecha actual al cargar la página
});

var equipo ="Colo-Colo"
  console.log(equipo)


// El Mercurio

function actualizarEnlace_4() {
  var fecha = new Date(document.getElementById("fecha").value);
  fecha.setDate(fecha.getDate() + 1); // Agregar un día a la fecha

  var año = fecha.getFullYear();
  var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  var dia = fecha.getDate().toString().padStart(2, '0');
  var urlEnlace_4 = "https://digital.elmercurio.com/" + año + "/" + mes + "/" + dia + "/A";
  document.getElementById("enlace_4").href = urlEnlace_4;

  console.log("Enlace actualizado: " + urlEnlace_4);
}

function actualizarImagen_4() {
  var fecha = new Date(document.getElementById("fecha").value);
  fecha.setDate(fecha.getDate() + 1); // Agregar un día a la fecha

  var año = fecha.getFullYear();
  var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  var dia = fecha.getDate().toString().padStart(2, '0');
  var urlImagen_4 = "https://img.kiosko.net/" + año + "/" + mes + "/" + dia + "/cl/cl_mercurio.750.jpg";

  var imagen_4 = document.getElementById("imagen_4");
  if (imagen_4) {
    imagen_4.onload = function() {
      console.log("Imagen actualizada: " + urlImagen_4);
    };
    imagen_4.src = urlImagen_4;
  } else {
    console.log("Error: No se encontró el elemento de imagen.");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var fechaElement = document.getElementById("fecha");
  var enlace4Element = document.getElementById("enlace_4");
  var imagen4Element = document.getElementById("imagen_4");

  if (fechaElement && enlace4Element && imagen4Element) {
    fechaElement.valueAsDate = new Date(); // Establece la fecha actual en el campo de fecha
    actualizarEnlace_4(); // Actualiza el enlace al cargar la página
    actualizarImagen_4(); // Actualiza la imagen al cargar la página
    fechaElement.addEventListener("change", actualizarEnlace_4);
    fechaElement.addEventListener("change", actualizarImagen_4);

    console.log("Eventos asignados correctamente.");
  } else {
    console.log("Error: No se encontraron elementos HTML con los ID correspondientes.");
  }
});

// Diario Financiero
// Actualizar la imagen imagen_5
function actualizarImagen_5() {
  var fecha = new Date(document.getElementById("fecha").value);
  fecha.setDate(fecha.getDate() + 1); // Agregar un día a la fecha

  var año = fecha.getFullYear();
  var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  var dia = fecha.getDate().toString().padStart(2, '0');
  var urlImagen_5 = "https://img.kiosko.net/" + año + "/" + mes + "/" + dia + "/cl/cl_diario_financiero.750.jpg";

  var imagen_5 = document.getElementById("imagen_5");
  if (imagen_5) {
    imagen_5.onload = function() {
      console.log("Imagen actualizada: " + urlImagen_5);
    };
    imagen_5.src = urlImagen_5;
  } else {
    console.log("Error: No se encontró el elemento de imagen.");
  }
}

// Asignar la función al evento correspondiente
document.getElementById("fecha").addEventListener("change", actualizarImagen_5);

