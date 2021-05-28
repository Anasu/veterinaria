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

