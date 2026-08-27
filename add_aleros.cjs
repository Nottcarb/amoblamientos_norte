const fs = require('fs');

const rawFiles = [
  '\\\\src\\\\assets\\\\images\\\\aleros\\\\DSC_0492.jpg',
  '\\\\src\\\\assets\\\\images\\\\aleros\\\\DSC_0496.jpg',
  '\\\\src\\\\assets\\\\images\\\\aleros\\\\DSC_0497.jpg'
];

let itemsStr = `
  ,{
    id: 'dec-alero-01',
    sku: 'DEC-ALERO-01',
    name: 'Alero Estilo Industrial',
    category: 'decoracion',
    subcategory: 'aleros',
    subcategoryName: 'Aleros',
    categoryName: 'Decoración',
    shortDescription: 'Alero estructural de hierro y chapa o vidrio para exteriores.',
    fullDescription: 'Alero de diseño industrial confeccionado en hierro estructural. Brinda protección y estética a la fachada, ideal para ingresos de locales comerciales o residencias contemporáneas.',
    image: '/src/assets/images/aleros/DSC_0492.jpg',
    gallery: [
      '/src/assets/images/aleros/DSC_0492.jpg',
      '/src/assets/images/aleros/DSC_0496.jpg',
      '/src/assets/images/aleros/DSC_0497.jpg'
    ],
    dimensionsDefault: {
      lengthCm: 150,
      widthCm: 100,
      heightCm: 30
    },
    materialType: 'hierro_madera',
    materialLabel: 'Hierro estructural',
    features: [
      'Estructura de hierro reforzada',
      'Pintura electrostática epoxi apta exterior',
      'Diseño modular y resistente',
      'Apto para cubierta de chapa, vidrio o policarbonato'
    ],
    finishesAvailable: {
      woodOptions: [],
      metalOptions: ['Negro Microtexturado', 'Blanco Semimate', 'Gris Grafito']
    },
    minQuantityWholesale: 1,
    estimatedDaysToFabricate: '20 a 30 días hábiles',
    popularFor: 'Fachadas, Ingresos, Terrazas',
    isFeatured: true
  }`;

let content = fs.readFileSync('src/data/products.ts', 'utf8');
content = content.replace(/\];\s*$/, itemsStr + '\n];\n');
fs.writeFileSync('src/data/products.ts', content);
console.log('Aleros added successfully');
