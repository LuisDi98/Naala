const addPricesToModel = (modelName: string, categories: any[]) => {
  return categories.map((category: { questions: any[]; title : string }) => ({
    ...category,
    questions: category.questions.map((question: { options: any[]; text : string; id: string | number; }) => ({
      ...question,
      options: question.options.map((option: { name: string; image: string; }) => ({
        ...option,
        price: modelPricing[modelName][question.id][option.name] || 0, // Obtener precio de modelPricing
        image: option.image || null, // Agregar imagen si existe
      })),
    })),
  }));
};

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
  12: { "Si": 747, "No": 0 },
  13: { "Si": 841, "No": 0 },
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
    12: { "Si": 747, "No": 0 },
    13: { "Si": 841, "No": 0 },
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
    12: { "Si": 747, "No": 0 },
    13: { "Si": 841, "No": 0 },
  },
  Modelo_3A: {
    ...model3Pricing,
  },
  Modelo_3B: {
    ...model3Pricing,
  },
  Modelo_3C: {
    ...model3Pricing,
  },
};

const baseModelData = {
  categories: [
    {
      title: "Acabados de Muebles",
      questions: [
        {
          id: 1,
          text: "¿Qué tipo de acabados de muebles prefiere?",
          options: [
            { name: "Caramel" },
            { name: "Roble Rustico" },
            { name: "Roble provenza"}
          ],
        },
        {
          id: 2,
          text: "Desea que se le empotre la plantilla y el horno?",
          options: [
            { name: "Ambos" },
            { name: "Ninguno" }
          ],
        },
      ],
    },
    {
      title: "Previstas Eléctricas",
      questions: [
        {
          id: 3,
          text: "¿Desea añadir una linea neutro adicional?",
          options: [
            { name: "Si" },
            { name: "No" }
          ],
        },
        {
          id: 4,
          text: "Desea una toma corriente de 220 v en la cochera?",
          options: [
            { name: "Si" },
            { name: "No" }
          ],
        },
        {
          id: 5,
          text: "Desea una salida de calor para la secadora?",
          options: [
            { name: "Si" },
            { name: "No" }
          ],
        }
      ],
    },
    {
      title: "Acabados",
      questions: [
        {
          id: 6,
          text: "Como desea el enchape del piso general?",
          options: [
            { name: "Belen marfil" },
            { name: "Dessert blanco" }
          ],
        },
        {
          id: 7,
          text: "Como desea el enchape de piso de bano cuarto principal?",
          options: [
            { name: "Liso neve satin" },
            { name: "Space neve satin" }
          ],
        },
        {
          id: 8,
          text: "Como desea el enchape de piso de bano auxiliar?",
          options: [
            { name: "Opcion 1" },
          ],
        },
        {
          id: 9,
          text: "Como desea el enchape de paredes de ducha de cuarto principal?",
          options: [
            { name: "Opcion 1" },            ],
        },
        {
          id: 10,
          text: "Como desea el enchape de paredes de ducha de bano auxiliar?",
          options: [
            { name: "Opcion 1" },
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
            { name: "Cuarto Principal" },
            { name: "Isla" },
            { name: "Sala primer nivel" },
            { name: "Escaleras" },
            { name: "Habitacion 1" },
            { name: "Habitacion 2" },
          ],
        },
        {
          id: 12,
          text: "Desea que se le construya una bodega bajo las gradas?",
          options: [
            { name: "Si" },
            { name: "No" },
          ],
        },
        {
          id: 13,
          text: "Desea que se le suministre un calentador de agua de 12 Kw?",
          options: [
            { name: "Si" },
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

export const modelsData = [
  {
    model: "Modelo_1",
    image: "/modelo-1.jpg",
    categories: addPricesToModel("Modelo_1", baseModelData.categories),
  },
  {
    model: "Modelo_2",
    image: "/modelo-2.jpg",
    categories: addPricesToModel("Modelo_2", [...baseModelData.categories, model2AdditionalQuestions]),
  },
  {
    model: "Modelo_3A",
    image: "/modelo-3.jpg",
    categories: addPricesToModel("Modelo_3A", baseModelData.categories),
  },
  {
    model: "Modelo_3B",
    image: "/modelo-3.jpg",
    categories: addPricesToModel("Modelo_3B", baseModelData.categories),
  },
  {
    model: "Modelo_3C",
    image: "/modelo-3.jpg",
    categories: addPricesToModel("Modelo_3C", baseModelData.categories),
  },
];
