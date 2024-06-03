// src/api/simulacion.js
export const obtenerDatosSimulacion = async () => {
    // Implementa la lógica para obtener los datos de la simulación
    // Aquí puedes retornar datos simulados o hacer una llamada a un API si tienes un backend
    return [
      {
        tiempo: 0,
        evento: 'LlegadaCliente',
        nroCliente: 1,
        stock: 10,
        empleadosLibres: 2,
        colaClientes: [],
        eventosCola: [],
      },
      // Agrega más filas de datos según tu simulación
    ];
  };
  