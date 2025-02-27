import React from "react";
import styles from "./TablaDinamica.module.css";
import useFetchData from "./useFetchData";

const TablaDinamica = () => {
  const { data, loading, error } = useFetchData();

  return (
    <div className={styles.contenedor}>
      
      {/* ✅ Contenedor único para textos y tabla (garantiza alineación uniforme) */}
      <div className={styles.contenedorContenido}>
        
        {/* ✅ Contenedor de textos antes de la tabla */}
        <div className={styles.textosSuperiores}>
          <h2 className={styles.titulo}>Tarifas Horarias de Energía</h2>
          <p className={styles.descripcion}>
            Consulta los precios del kWh según la hora del día para Península, Baleares y Ceuta/Melilla.
          </p>
          <h3 className={styles.subtitulo}>Precios por Hora</h3>
        </div>

        {/* ✅ Contenedor de la tabla */}
        <div className={styles.tablaContainer}>
          {loading ? (
            <p className={styles.mensaje}>Cargando datos...</p>
          ) : error ? (
            <p className={styles.error}>Error al cargar los datos.</p>
          ) : (
            <>
              <table className={styles.tabla}>
                <thead>
                  <tr>
                    {data.length > 0 &&
                      Object.keys(data[0]).map((key) => (
                        <th key={key}>{key.toUpperCase()}</th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {Object.values(item).map((value, i) => (
                        <td key={i}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ✅ Pie de tabla ahora independiente y alineado con la tabla */}
              <p className={styles.pie}>Fuente: Datos oficiales del mercado energético</p>
            </>
          )}

          {/* ✅ Párrafo final debajo del pie de tabla */}
          <p className={styles.textoFinal}>
            Estos precios reflejan las tarifas oficiales del mercado regulado de electricidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TablaDinamica;
