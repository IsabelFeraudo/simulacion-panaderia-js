import { CANTIDAD_DE_FILAS_A_SIMULAR } from './components/SimulacionFormulario'

// lugaresDeEstacionamiento = [
//    { tipo: utilitario, ocupados: 0 },
//    { tipo: utilitario, ocupados: 0 },
//    { tipo: peque, ocupados: 0 }
// ]

// FinDeEstadia: auto35
// auto35 = { tamaño: peque, lugar: Lugar1{ tipo: utilitario, ocupados: 1 } }
// auto36 = { tamaño: peque, lugar: Lugar1{ tipo: utilitario, ocupados: 2 } }
//
// auto35 = { tamaño: peque, lugar: { tipo: utilitario, ocupados: 0 } }
//
// auto35 = { tamaño: peque, lugar: null }

// LlegadaVehiculo: auto36
// auto36 = { tamaño: utilitario, lugar: { tipo: utilitario, ocupados: 0 }, }

// auto35 = { tamaño: peque, lugar: null }

class Auto {
  constructor(nro, tamano, estado, lugar) {
    this.nro = nro
    this.tamano = tamano // pequeño
    this.estado = estado // estacionado, esperandoPagar, pagando
    this.lugar = lugar // { tipo: grande }
  }
}

class Lugar {
  constructor(tamano, ocupados) {
    this.tamano = tamano // grande, pequeño, utilitario
    this.ocupados = ocupados // 0, 1, 2
  }
}

class TrabajoPractico {
  // constructor(cantidadFilasASimular) {
  //   this.CANTIDAD_DE_FILAS_A_SIMULAR = cantidadFilasASimular
  //   this.resultados = []
  // }

  comenzarEjecucion() {
    const lugaresPequenos = Array.from({ length: 10 }, () => new Lugar('pequeño', 0))
    const lugaresGrandes = Array.from({ length: 6 }, () => new Lugar('grande', 0))
    const lugaresUtilitarios = Array.from({ length: 4 }, () => new Lugar('utilitario', 0))

    const datos = {
      lugaresDeEstacionamiento: [...lugaresPequenos, ...lugaresGrandes, ...lugaresUtilitarios],
      cajaOcupada: false,
      cantAutosIngresados: 0,
      cantAutosPagaron: 0,
      acumuladorPlata: 0,
    }
    // const datos = {
    //   colaEventos: [],
    //   empleadosLibres: 2,
    //   colaClientes: [],
    //   stock: this.STOCK_INICIAL,
    //   clientes: 0,
    //   clientesTristes: 0,
    // }

    // this.inicializarEventos(datos)

    // for (let fila = 1; fila < this.CANTIDAD_DE_FILAS_A_SIMULAR; fila++) {
    //   const eventoInminente = this.encontrarEventoMasProximo(datos)

    //   eventoInminente.ocurreEvento(datos)

    //   const filaDatos = {
    //     tiempo: eventoInminente.tiempo,
    //     evento: eventoInminente.constructor.name,
    //     nroCliente: eventoInminente.nroCliente,
    //     stock: datos.stock,
    //     empleadosLibres: datos.empleadosLibres,
    //     colaClientes: [...datos.colaClientes],
    //     eventosCola: datos.colaEventos.map(evento => ({
    //       tiempo: evento.tiempo,
    //       evento: evento.constructor.name,
    //       nroCliente: evento.nroCliente,
    //     })),
    //   }

    //   if (fila >= this.FILA_A_SIMULAR_DESDE && fila < this.FILA_A_SIMULAR_DESDE + this.CANTIDAD_FILAS_A_MOSTRAR) {
    //     this.resultados.push({ ...filaDatos, nroFila: fila })
    //   }
    // }
  }

  // encontrarEventoMasProximo(datos) {
  //   const eventoEncontrado = datos.colaEventos.reduce(
  //     (eventoMinimo, evento) => (evento.tiempo < eventoMinimo.tiempo ? evento : eventoMinimo),
  //     datos.colaEventos[0]
  //   )

  //   datos.colaEventos = datos.colaEventos.filter(evento => evento !== eventoEncontrado)

  //   return eventoEncontrado
  // }

  // inicializarEventos(datos) {

  // }

  // getResultados() {
  //   return this.resultados
  // }
}

function tamanoDeAuto(random) {
  if (random < 0.6) {
    return 'pequeño'
  } else if (random < 0.85) {
    return 'grande'
  } else {
    return 'utilitario'
  }
}

class EventoLlegadaAuto {
  constructor(tiempoActual) {
    // constructor es cuando creamos el evento
    this.randomTiempo = Math.random()
    this.tiempoDeOcurrencia = tiempoActual + 12 + this.randomTiempo * (14 - 12)
  }

  ocurreEvento(datos) {
    const nroAuto = datos.cantAutosIngresados + 1
    const randomTamano = Math.random()
    const tamano = tamanoDeAuto(randomTamano) // grande, pequeño, utilitario

    const autoQueLlega = new Auto(nroAuto, tamano)

    if (tamano === 'grande') {
      for (let i = 0; i < datos.lugaresDeEstacionamiento.length; i++) {
        if (lugarEstacionamiento.tamano === 'grande' && lugarEstacionamiento.ocupados === 0) {
          lugarEstacionamiento.ocupados = 1
          autoQueLlega.lugar = lugarEstacionamiento
          break
        }
      }
    }

    if (tamano == 'utilitario') {
      for (let i = 0; i < datos.lugaresDeEstacionamiento.length; i++) {
        if (lugarEstacionamiento.tamano === 'utilitario' && lugarEstacionamiento.ocupados === 0) {
          lugarEstacionamiento.ocupados = 2
          autoQueLlega.lugar = lugarEstacionamiento
          break
        }
      }
    }

    if (tamano == 'pequeño') {
      for (let i = 0; i < datos.lugaresDeEstacionamiento.length; i++) {
        if (lugarEstacionamiento.tamano === 'pequeño' && lugarEstacionamiento.ocupados === 0) {
          lugarEstacionamiento.ocupados = 1
          autoQueLlega.lugar = lugarEstacionamiento
          break
        }
      }

      for (let i = 0; i < datos.lugaresDeEstacionamiento.length; i++) {
        if (lugarEstacionamiento.tamano === 'utilitario' && lugarEstacionamiento.ocupados <= 1) {
          lugarEstacionamiento.ocupados += 1
          autoQueLlega.lugar = lugarEstacionamiento
          break
        }
      }
    }

    if (autoQueLlega.lugar) {
      autoQueLlega.estado = 'estacionado'
      datos.cantAutosIngresados + 1
      // generar evento fin estacionamiento para ese auto
    }

    // generar otra llegada
  }
}

function tiempoDeEstadia(random) {
  if (random < 0.5) {
    return 1
  } else if (random < 0.8) {
    return 2
  } else if (random < 0.95) {
    return 3
  } else {
    return 4
  }
}

class EventoFinEstacionamiento {
  constructor(tiempoActual) {
    this.randomTiempo = Math.random()
    this.tiempoDeOcurrencia = tiempoActual + tiempoDeEstadia(this.randomTiempo)
  }

  ocurreEvento(datos) {
    // datos.clientes += 1
    // datos.colaEventos.push(new LlegadaCliente(this.tiempo, datos.clientes + 1))
    // if (datos.stock === 0) {
    //   datos.clientesTristes += 1
    // } else if (datos.empleadosLibres > 0) {
    //   datos.colaEventos.push(new FinAtencion(this.tiempo, this.nroCliente))
    //   datos.empleadosLibres -= 1
    // } else {
    //   datos.colaClientes.push(this.nroCliente)
    //   datos.colaEventos.push(new ClienteSeRetiraPorTiempo(this.tiempo, this.nroCliente))
    // }
  }
}

class EventoFinCobro {
  constructor(tiempoActual) {
    this.tiempo = tiempoActual + 2
  }

  ocurreEvento(datos) {
    // datos.clientes += 1
    // datos.colaEventos.push(new LlegadaCliente(this.tiempo, datos.clientes + 1))
    // if (datos.stock === 0) {
    //   datos.clientesTristes += 1
    // } else if (datos.empleadosLibres > 0) {
    //   datos.colaEventos.push(new FinAtencion(this.tiempo, this.nroCliente))
    //   datos.empleadosLibres -= 1
    // } else {
    //   datos.colaClientes.push(this.nroCliente)
    //   datos.colaEventos.push(new ClienteSeRetiraPorTiempo(this.tiempo, this.nroCliente))
    // }
  }
}

export default TrabajoPractico
