export const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999,
    category: "smartphones",
    description: "El último iPhone con chip A16 Bionic y cámara profesional de 48MP.",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
    stock: 15
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 849,
    category: "smartphones",
    description: "Smartphone Android premium con cámara de 200MP y pantalla Dynamic AMOLED.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    stock: 20
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 1199,
    category: "laptops",
    description: "Laptop ultradelgada con chip M2, pantalla Liquid Retina de 13.6 pulgadas.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
    stock: 8
  },
  {
    id: 4,
    name: "Dell XPS 13",
    price: 999,
    category: "laptops",
    description: "Laptop premium con procesador Intel Core i7 y pantalla InfinityEdge.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
    stock: 12
  },
  {
    id: 5,
    name: "iPad Pro 12.9",
    price: 1099,
    category: "tablets",
    description: "Tablet profesional con chip M2 y pantalla Liquid Retina XDR.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
    stock: 10
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S8",
    price: 699,
    category: "tablets",
    description: "Tablet Android premium con S Pen incluido y pantalla Super AMOLED.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop",
    stock: 18
  },
  {
    id: 7,
    name: "AirPods Pro 2",
    price: 249,
    category: "audio",
    description: "Auriculares inalámbricos con cancelación activa de ruido mejorada.",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=300&fit=crop",
    stock: 25
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    price: 399,
    category: "audio",
    description: "Auriculares over-ear con la mejor cancelación de ruido del mercado.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop",
    stock: 15
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    price: 399,
    category: "wearables",
    description: "Smartwatch con chip S9, pantalla Always-On Retina más brillante.",
    image: "https://images.unsplash.com/photo-1510017098667-27dfc7150acb?w=300&h=300&fit=crop",
    stock: 22
  },
  {
    id: 10,
    name: "Samsung Galaxy Watch 6",
    price: 329,
    category: "wearables",
    description: "Smartwatch con seguimiento avanzado de salud y batería de larga duración.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
    stock: 16
  }
];

export const categories = [
  { id: "smartphones", name: "Smartphones", description: "Los últimos teléfonos inteligentes" },
  { id: "laptops", name: "Laptops", description: "Computadoras portátiles de alta gama" },
  { id: "tablets", name: "Tablets", description: "Tablets para trabajo y entretenimiento" },
  { id: "audio", name: "Audio", description: "Auriculares y dispositivos de audio" },
  { id: "wearables", name: "Wearables", description: "Dispositivos vestibles inteligentes" }
];

// Simulate async data fetching
export const getProducts = (categoryId = null) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        const filteredProducts = products.filter(product => product.category === categoryId);
        resolve(filteredProducts);
      } else {
        resolve(products);
      }
    }, 1000); // Simulate network delay
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(id));
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 800);
  });
};

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 500);
  });
};
