const addPricesToModel = (modelName: string, categories: any[]) => {
  return categories.map((category: { questions: any[]; title: string; image: string }) => ({
    ...category,
    image: category.image?.replace("<Model>", modelName) || category.image,
    questions: category.questions.map((question: { options: any[]; text: string; id: string | number; }) => ({
      ...question,
      options: question.options.map((option: { name: string; image: string }) => ({
        ...option,
        price: modelPricing[modelName][question.id][option.name] || 0,
        image: option.image?.replace("<Model>", modelName) || option.image,
      })),
    })),
  }));
};


function mergeCategories(baseCategories: { title: string; questions: { id: number; text: string; options: ({ name: string; image: string; } | { name: string; image?: undefined; })[]; }[]; }[], additionalCategories: { title: string; questions: { id: number; text: string; options: { name: string; }[]; }[]; }) {
  // Asegurarse de que additionalCategories es un array
  const additionalCategoriesArray = Array.isArray(additionalCategories) ? additionalCategories : [additionalCategories];

  const merged = [...baseCategories, ...additionalCategoriesArray].reduce((acc, category) => {
      const existingCategory = acc.find((cat: { title: any; }) => cat.title === category.title);
      if (existingCategory) {
          // Combinar preguntas si la categoría ya existe
          existingCategory.questions = existingCategory.questions.concat(category.questions);
      } else {
          // Agregar nueva categoría
          acc.push(category);
      }
      return acc;
  }, []);

  return merged;
}

const model3Pricing = {
  1: { "Caramel": 0, "Roble Rustico": 0, "Roble provenza": 0 },
  2: { "Ambos": 649,"Ninguno": 0 },
  3: { "Si": 174, "No": 0 },
  4: { "Si": 193, "No": 0 },
  5: { "Si": 207, "No": 0 },
  6: { "Belen marfil": 0, "Dessert blanco": 0 },
  7: { "Liso neve satin": 0, "Space neve satin": 0 },
  8: { "Opcion 1": 0 },
  9: { "Opcion 1": 0 },
  10: { "Opcion 1": 0 },
  11: { "Cuarto Principal": 41, "Isla": 41, "Sala primer nivel": 41, "Escaleras": 41, "Habitacion 1": 41, "Habitacion 2": 41 },
  12: { "Cuarto Principal": 41, "Isla": 41, "Sala primer nivel": 41, "Escaleras": 41, "Habitacion 1": 41, "Habitacion 2": 41 },
  13: { "Si": 747, "No": 0 },
  14: { "Si": 841, "No": 0 },
}

// Diccionario de precios por modelo
const modelPricing : any = {
  Modelo_1: {
    1: { "Caramel": 0, "Roble Rustico": 0, "Roble provenza": 0 },
    2: { "Ambos": 649, "Ninguno": 0},
    3: { "Si": 98, "No": 0 },
    4: { "Si": 193, "No": 0 },
    5: { "Si": 207, "No": 0 },
    6: { "Belen marfil": 0, "Dessert blanco": 0 },
    7: { "Liso neve satin": 0, "Space neve satin": 0 },
    8: { "Opcion 1": 0 },
    9: { "Opcion 1": 0 },
    10: { "Opcion 1": 0 },
    11: { "Cuarto Principal": 41, "Isla": 41, "Sala primer nivel": 41, "Escaleras": 41, "Habitacion 1": 41, "Habitacion 2": 41 },
    12: { "Cuarto Principal": 41, "Isla": 41, "Sala primer nivel": 41, "Escaleras": 41, "Habitacion 1": 41, "Habitacion 2": 41 },
    13: { "Si": 747, "No": 0 },
    14: { "Si": 841, "No": 0 },
  },
  Modelo_2: {
    1: { "Caramel": 0, "Roble Rustico": 0, "Roble provenza": 0 },
    2: { "Ambos": 649, "Ninguno": 0 },
    3: { "Si": 497, "No": 0 },
    4: { "Si": 973, "No": 0 },
    5: { "Ambos": 649, "No": 0 },
    6: { "Belen marfil": 0, "Dessert blanco": 0 },
    7: { "Liso neve satin": 0, "Space neve satin": 0 },
    8: { "Opcion 1": 0 },
    9: { "Opcion 1": 0 },
    10: { "Opcion 1": 0 },
    11: { "Cuarto Principal": 41, "Isla": 41, "Sala primer nivel": 41, "Escaleras": 41, "Habitacion 1": 41, "Habitacion 2": 41 },
    12: { "Cuarto Principal": 41, "Isla": 41, "Sala primer nivel": 41, "Escaleras": 41, "Habitacion 1": 41, "Habitacion 2": 41 },
    13: { "Si": 747, "No": 0 },
    14: { "Si": 841, "No": 0 },
  },
  Modelo_3: {
    ...model3Pricing,
  },
  
};

const baseModelData = {
  categories: [
    {
      title: "Acabados de Muebles",
      image: "/Naala_assets/Acabados_de_Muebles/bg_4.png",
      questions: [
        {
          id: 1,
          text: "¿Qué tipo de acabados de muebles prefiere?",
          options: [
            { name: "Caramel", image: "/Naala_assets/Acabados_de_Muebles/CARAMEL.jpg" },
            { name: "Roble Rustico", image: "/Naala_assets/Acabados_de_Muebles/Roble Rustico.jpg" },
            { name: "Roble provenza", image: "/Naala_assets/Acabados_de_Muebles/Roble Provenzal.jpeg"},
          ],
        },
        {
          id: 2,
          text: "Desea que se le empotre la plantilla y el horno?",
          options: [
            { name: "Ambos"},
            { name: "Ninguno" }
          ],
        },
      ],
    },
    {
      title: "Previstas Eléctricas",
      image: "/Naala_assets/base_bg.png",
      questions: [
        {
          id: 3,
          text: "¿Desea añadir una linea neutro adicional?",
          options: [
            { name: "Si", image: "/Naala_assets/base_bg.png", },
            { name: "No", image: "/Naala_assets/base_bg.png",}
          ],
        },
        {
          id: 4,
          text: "Desea una toma corriente de 220 v en la cochera?",
          options: [
            { name: "Si", image: "/Naala_assets/Previstas_Electricas/<Model>/Tomacorriente-220-adicional.png", },
            { name: "No" }
          ],
        },
        {
          id: 5,
          text: "Desea una salida de calor para la secadora?",
          options: [
            { name: "Si", image: "/Naala_assets/Previstas_Electricas/<Model>/Salida de aire caliente.png", },
            { name: "No" }
          ],
        }
      ],
    },
    {
      title: "Acabados",
      image: "/Naala_assets/base_bg.png",
      questions: [
        {
          id: 6,
          text: "Como desea el enchape del piso general?",
          options: [
            { name: "Norwich Perla Mate", image: "/Naala_assets/Acabados/Norwich Perla Mate.jpg" },
            { name: "Norwich Blanco Mate", image: "/Naala_assets/Acabados/Norwich Blanco Mate.jpg" },
            { name: "Belen Marfil", image: "/Naala_assets/Acabados/Belen Marfil.jpg" },
          ],
        },
        {
          id: 7,
          text: "Como desea el enchape de piso de bano cuarto principal?",
          options: [
            { name: "Norwich Perla Mate", image: "/Naala_assets/Acabados/Norwich Perla Mate.jpg" },
            { name: "Norwich Blanco Mate", image: "/Naala_assets/Acabados/Norwich Blanco Mate.jpg" },
            { name: "Belen Marfil", image: "/Naala_assets/Acabados/Belen Marfil.jpg" },
          ],
        },
        {
          id: 8,
          text: "Como desea el enchape de piso de bano auxiliar?",
          options: [
            { name: "Norwich Perla Mate", image: "/Naala_assets/Acabados/Norwich Perla Mate.jpg" },
            { name: "Norwich Blanco Mate", image: "/Naala_assets/Acabados/Norwich Blanco Mate.jpg" },
            { name: "Belen Marfil", image: "/Naala_assets/Acabados/Belen Marfil.jpg" },
          ],
        },
        {
          id: 9,
          text: "Como desea el enchape de paredes de ducha de cuarto principal?",
          options: [
            { name: "Beach Grey", image: "/Naala_assets/Acabados/Beach Gray.jpg" },
            { name: "Malaya beige", image: "/Naala_assets/Acabados/Malaya beige.jpg" },
            { name: "Absolute White", image: "/Naala_assets/Acabados/Absolute White.jpg" },           ],
        },
        {
          id: 10,
          text: "Como desea el enchape de paredes de ducha de bano auxiliar?",
          options: [
            { name: "Beach Grey", image: "/Naala_assets/Acabados/Beach Gray.jpg" },
            { name: "Malaya beige", image: "/Naala_assets/Acabados/Malaya beige.jpg" },
            { name: "Absolute White", image: "/Naala_assets/Acabados/Absolute White.jpg" },   
          ],
        }
      ]
    },
    {
      title: "Equipamiento",
      
      questions: [
        {
          id: 11,
          text: "Desea que se le refuerce el cielo raso?",
          
          options: [
            { name: "Cuarto Principal", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso.png" },
            { name: "Isla", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso.png" },
            { name: "Sala primer nivel", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso.png" },
            { name: "Escaleras", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso.png" },
            { name: "Habitacion 1", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso.png" },
            { name: "Habitacion 2", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso.png" },
          ],
        },
        {
          id: 12,
          text: "Desea que se le refuerce el cielo raso del segundo nivel?",
          options: [
            { name: "Cuarto Principal", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso 2do nivel.png" },
            { name: "Isla", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso 2do nivel.png" },
            { name: "Sala primer nivel", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso 2do nivel.png" },
            { name: "Escaleras", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso 2do nivel.png" },
            { name: "Habitacion 1", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso 2do nivel.png" },
            { name: "Habitacion 2", image: "/Naala_assets/Equipamiento/<Model>/Refuerzo en cielorraso 2do nivel.png" },
          ],
        },
        {
          id: 13,
          text: "Desea que se le suministre un calentador de agua de 12 Kw?",
          options: [
            { name: "Si", image: "/Naala_assets/Equipamiento/<Model>/Calentador de agua.png" },
            { name: "No" },
          ],
        },
      ]
    }
  ],
}

const model2AdditionalQuestions = {
  title: "Acabados de Muebles",
  questions: [
    {
      id: 6,
      text: "¿Desea que coloque un mueble aéreo sobre el fregadero?",
      options: [{ name: "Si" }, { name: "No" }],
    },
    {
      id: 7,
      text: "¿Desea que coloque un mueble aéreo sobre la refrigeradora?",
      options: [{ name: "Si" }, { name: "No" }],
    },
  ],
};

const model3AdditionalQuestions = {
  title: "Equipamiento",
  
  questions: [
    {
      id: 14,
      text: "Desea que se le construya una bodega bajo las gradas?",
      options: [
        { name: "Si", image: "" },
        { name: "No", image: "" },
      ],
    }
  ]
}

// Función para realizar una clonación profunda del objeto evitando modificar el original
function deepClone(obj : any) {
    return JSON.parse(JSON.stringify(obj));
}

// Modificación de la creación de los modelos para evitar compartir la misma referencia
export const modelsData = [
  {
    model: "Modelo_1",
    image: "/Naala_assets/base_bg.png",
    categories: addPricesToModel("Modelo_1", deepClone(baseModelData.categories)),
  },
  {
    model: "Modelo_2",
    image: "/Naala_assets/base_bg.png",
    categories: addPricesToModel(
      "Modelo_2",
      mergeCategories(deepClone(baseModelData.categories), deepClone(model2AdditionalQuestions))
    ),
  },
  {
    model: "Modelo_3",
    image: "/Naala_assets/base_bg.png",
    categories: addPricesToModel("Modelo_3", deepClone(baseModelData.categories)),
  },
];
