function enviar() {
    swal({
        title: "Está seguro?",
        text: "de enviar el mesaje",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        closeModal: false
    }).then(function(isConfirm) {
        if(isConfirm){
            swal("Su mensaje ha sido enviado", "Pronto nos contactaremos con usted", "success");
        }else{
            swal.close();
        }
    });
};
const button = document.getElementById("enviar");
button.addEventListener("click", SendEmail);
function SendEmail(evt){
    evt.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let error = document.getElementById("error");
    let expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    error.style.color = 'red'
      contentHTML = `
    <h1 class="card-title" >Asesoria Contable PS</h1>
    <ul>
    <li><b>Nombre Usuario:</b> ${nombre}</li>
    <li><b>Correo:</b> ${email}</li>
    <li><b>Teléfono:</b> ${telefono}</li>
    <li><b>Mensaje:</b> ${mensaje}</li>
    </ul> `;
    let mensajeError = [];

    if(nombre === null || nombre ===''){
       mensajeError.push('Ingresa tu nombre');
    }else if(telefono === null || telefono ===''){
        mensajeError.push('Ingresa tu número de teléfono');
    }else if(telefono.length >=11){
        mensajeError.push('tu número tiene más de 10 dígitos');
    }else if (email === null || email ===''){
        mensajeError.push('Ingresa tu correo');
    }else if (!expresion.test(email)){
        mensajeError.push('Correo no válido');
    }else if (mensaje === null || mensaje ===''){
        mensajeError.push('Ingresa algún mensaje');
    }else{
        Email.send({
            Host : "smtp.gmail.com",
            Username : 'kuky1993roger@gmail.com',
            Password : 'vuclgdlionoesojs',
            To : 'asesoria1contableps@gmail.com',
            From : `${email}`,
            Subject : "Consulta Asesoría",
            Body : contentHTML
        }).then(
          enviar()
        ).catch(err => {
            console.error("ERROR: ", err.message);
          });
    } error.innerHTML = mensajeError.join(', ');

}


