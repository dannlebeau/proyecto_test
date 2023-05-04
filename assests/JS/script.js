 //Las Ultimas Noticias
 (function() {
 function actualizarEnlace() {
    var fecha = new Date(document.getElementById("fecha").value);
    var fecha_enlace = fecha.toISOString().slice(0, 10);
    console.log(fecha_enlace)
    document.getElementById("enlace").href = "https://www.lun.com/Pages/NewsDetail.aspx?dt=" + fecha_enlace + "&EsAviso=0&PaginaId=1&bodyid=0";
  }

  function actualizarImagen() {
    var fecha = new Date(document.getElementById("fecha").value);
    fecha.setUTCHours(0, 0, 0, 0); // establecer la zona horaria de la fecha a UTC
    console.log("Fecha en UTC:", fecha.toUTCString());
    console.log("Fecha en zona horaria local:", fecha.toLocaleString());
    var mes = fecha.toLocaleString('default', { month: 'short' });
    var fecha_img = fecha.getFullYear() + "/" + mes.toLowerCase() + "/" + (fecha.getDate() < 10 ? '0' : '') + fecha.getDate();
    //var fecha_img = fecha.getFullYear() + "/" + mes.toLowerCase() + "/" + fecha.getDate().toString().padStart(2, '0');
    console.log(fecha_img)

    //fecha_img = fecha_img.replace(/\//g, '/');
    //fecha.setDate(fecha.getDate() + 1); // Agregamos un día a la fecha
    fecha.setDate(fecha.getDate() + 1); // Agregamos un día a la fecha
    mes = fecha.toLocaleString('default', { month: 'short' }); // Actualizamos el valor de mes
    
    var dia = fecha.getDate().toString().padStart(2, '0');
    var mes_num = (fecha.getMonth() + 1).toString().padStart(2, '0');
    
    var url_final = "https://images.lun.com/lunservercontents/NewsPaperPages/" + fecha.getFullYear() + "/" + mes.toLowerCase() + "/" + dia + "/LUCST01LU" + dia + mes_num + "_550.jpg";
    console.log(url_final)
    document.getElementById("imagen").src = url_final;
  }

    var paralelepipedo = "Dann LeBeau"
    console.log(paralelepipedo)

  function actualizarEnlaces() {
    actualizarEnlace();
    actualizarImagen();
  }

  //Funcion de reseteo a hoy

  function setearHoy() {
    var hoy = new Date();
    var dd = String(hoy.getDate()).padStart(2, '0');
    var mm = String(hoy.getMonth() + 1).padStart(2, '0'); // Enero es 0
    var yyyy = hoy.getFullYear();
    var fecha = yyyy + '-' + mm + '-' + dd;
    document.getElementById('fecha').value = fecha;
    actualizarEnlaces(); //link LUN
  } 
 })();  


  
  // Hoy por hoy

