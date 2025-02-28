const categories = [
    {
      id: "novedades",
      name: "Novedades",
      subcategories: [],
    },
    {
      id: "luzbarata",
      name: "Luz Barata",
      subcategories: [
        { id: "lipstick", name: "Lipstick" },
        { id: "lipgloss", name: "Lip Gloss" },
        { id: "liquidlipstick", name: "Liquid Lipstick" },
        { id: "lipliner", name: "Lip Liner" },
        { id: "lipprimer", name: "Lip Primer" },
      ],
    },
    {
      id: "instalacionesElectricas",
      name: "Instalaciones Eléctricas",
      subcategories: [
        { id: "montajeselectricos", name: "Montajes Eléctricos" },
        { id: "boletinyproyectos", name: "Boletín y Proyectos" },
        { id: "reparacionesdeaverias", name: "Reparaciones de Averías" },
        { id: "mantenimientoselectricos", name: "Mantenimientos Eléctricos" },
        { id: "domotica", name: "Domótica" },
        { id: "telecomunicaciones", name: "Telecomunicaciones" },
      ],
    },
    {
      id: "placasSolares",
      name: "Placas Solares",
      subcategories: [
        { id: "comofunciona", name: "Como Funciona" }, /* Mirar ejemplo en: "https://www.holaluz.com/placas-solares"*/
      ],
    },
    {
      id: "cargadoresCoches",
      name: "Cargadores Coches",
      subcategories: [
        { id: "eyeliner", name: "Eyeliner" },
        { id: "mascara", name: "Mascara" },
        { id: "eyeshadow", name: "Eyeshadow" },
        { id: "brows", name: "Brows" },
        { id: "lashes", name: "Lashes" },
      ],
    },
    {
      id: "camarasSeguridad",
      name: "Cámaras de Seguridad",
      subcategories: [
        { id: "eyebrushes", name: "Eye Brushes" },
        { id: "facebrushes", name: "Face Brushes" },
        { id: "lipbrushes", name: "Lip Brushes" },
        { id: "brushcleanser", name: "Brush Cleanser" },
        { id: "beautyblenders", name: "Beauty Blenders" },
      ],
    },
    /* {
      id: "tools",
      name: "TOOLS",
      subcategories: [
        { id: "applicators", name: "Applicators" },
        { id: "makeupbags", name: "Makeup Bags" },
        { id: "accessories", name: "Accessories" },
        { id: "containers", name: "Containers" },
        { id: "lashes", name: "Lashes" },
      ],
    },
    {
      id: "blog",
      name: "BLOG",
      subcategories: [],
    }, */
  ];
  
  export default categories;
  