class Propietario {
  constructor(nombreDueno, direccion, telefono) {
    this._nombreDueno = nombreDueno;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  datosPropietario() {
    return {
      nombre: this._nombreDueno,
      direccion: this._direccion,  
      telefono: this._direccion,
    }
  }
}

class Animal extends Propietario {
  constructor(nombreDueno, direccion, telefono, tipo) {
    super(nombreDueno, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}

class Mascota extends Animal {
  constructor(nombreDueno, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombreDueno, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(newNombre) {
    this._nombreMascota = newNombre;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set enfermedad(newEnfermedad) {
    this._enfermedad = newEnfermedad;
  }
} 

document.addEventListener('click', function(event) {
  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('form button')) return;

  // Don't follow the link
	event.preventDefault();

	// Log the clicked element in the console
	console.log('target:', event.target);
  let misDatos = {
    propietario: document.getElementById('propietario').value,
    telefono: document.getElementById('telefono').value,
    direccion: document.getElementById('direccion').value,
    nombreMascota: document.getElementById('nombreMascota').value,
    tipo: document.getElementById('tipo').value,
    enfermedad: document.getElementById('enfermedad').value,
  }
  
  let mascota = new Mascota(
    misDatos.propietario,
    misDatos.direccion,
    misDatos.telefono,
    misDatos.tipo,
    misDatos.nombreMascota,
    misDatos.enfermedad
  );

  console.log('mascota:', mascota);
  
}, false);
