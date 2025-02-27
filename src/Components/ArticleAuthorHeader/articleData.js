// Simulación del contenido del artículo (puedes reemplazarlo con tu contenido real)
const articleText = `
  Iberdrola ofrece una variedad de tarifas de luz para hogares y empresas en 2025. 
  Dependiendo del consumo y las necesidades del usuario, se pueden elegir diferentes planes, 
  como el Plan Estable, el Plan Noche, o el Plan Vehículo Eléctrico. Estas tarifas permiten 
  optimizar el consumo de energía y ahorrar en la factura de luz.
`;

// Función para calcular el tiempo de lectura y la fecha automáticamente
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return `${Math.ceil(wordCount / wordsPerMinute)} min de lectura`;
};

const getCurrentDate = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Mes con 2 dígitos
  const day = today.getDate().toString().padStart(2, '0'); // Día con 2 dígitos
  const year = today.getFullYear();
  return `${month}/${day}/${year}`; // Formato MM/DD/YYYY
};

// Datos del artículo
const articleData = {
  title: "¿Cuáles son las tarifas de Iberdrola? Planes de luz 2025",
  author: {
    name: "Raquel Ramiro Cortijo",
    profileUrl: "/equipo/raquel-ramiro",
    role: "Especialista en Contenidos de Energía",
    image: "https://via.placeholder.com/150", // Imagen temporal
  },
  updatedDate: getCurrentDate(), // Fecha generada automáticamente en formato MM/DD/YYYY
  readingTime: calculateReadingTime(articleText), // Tiempo de lectura calculado
  footer: {
    description:
      "Especialista en contenidos desde 2020 y en Selectra desde 2022. Juntando su pasión por la analítica y el posicionamiento web con su conocimiento en el sector energético, ofrece información relevante y de calidad a los usuarios sobre lo último en luz y gas.",
  },
  content: articleText, // Agregar el texto para referencia
};

export default articleData;
