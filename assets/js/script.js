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

