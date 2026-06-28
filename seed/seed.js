import dotenv from "dotenv";


import connectDB from "../config/db.js";
import Category from "../models/Category.js";
import Product from "../models/Product.js";

dotenv.config();

connectDB();

const seedData = async () => {
  try {
    // Delete old data
    await Category.deleteMany();
    await Product.deleteMany();

    // Create Categories
    const categories = await Category.insertMany([
      {
        name: "Electronics",
        description: "Electronic Items",
        image: "https://via.placeholder.com/300"
      },
      {
        name: "Fashion",
        description: "Fashion Products",
        image: "https://via.placeholder.com/300"
      },
      {
        name: "Home & Kitchen",
        description: "Home Products",
        image: "https://via.placeholder.com/300"
      },
      {
        name: "Beauty",
        description: "Beauty Products",
        image: "https://via.placeholder.com/300"
      },
      {
        name: "Grocery",
        description: "Daily Grocery",
        image: "https://via.placeholder.com/300"
      }
    ]);

    const electronics = categories[0]._id;
    const fashion = categories[1]._id;
    const home = categories[2]._id;
    const beauty = categories[3]._id;
    const grocery = categories[4]._id;

    
      await Product.insertMany([
  // Electronics
  {
    name: "Apple iPhone 16",
    description: "Latest Apple smartphone with A18 chip",
    category: electronics,
    price: 79999,
    stock: 20,
    image: "https://picsum.photos/seed/iphone16/400/400"
  },
  {
    name: "Samsung Galaxy S25",
    description: "Flagship Android smartphone",
    category: electronics,
    price: 74999,
    stock: 15,
    image: "https://picsum.photos/seed/s25/400/400"
  },
  {
    name: "Sony WH-1000XM5",
    description: "Noise cancelling headphones",
    category: electronics,
    price: 24999,
    stock: 10,
    image: "https://picsum.photos/seed/sony/400/400"
  },
  {
    name: "Dell Inspiron 15",
    description: "15.6 inch laptop with Intel Core i5",
    category: electronics,
    price: 58999,
    stock: 12,
    image: "https://picsum.photos/seed/dell/400/400"
  },
  {
    name: "Apple Watch Series 10",
    description: "Premium smartwatch",
    category: electronics,
    price: 42999,
    stock: 14,
    image: "https://picsum.photos/seed/watch/400/400"
  },
  {
    name: "JBL Flip 6 Speaker",
    description: "Portable Bluetooth speaker",
    category: electronics,
    price: 8999,
    stock: 25,
    image: "https://picsum.photos/seed/jbl/400/400"
  },

  // Fashion
  {
    name: "Levi's Men's Jeans",
    description: "Slim fit blue jeans",
    category: fashion,
    price: 2499,
    stock: 30,
    image: "https://picsum.photos/seed/levis/400/400"
  },
  {
    name: "Nike Air Max Shoes",
    description: "Running shoes",
    category: fashion,
    price: 6999,
    stock: 20,
    image: "https://picsum.photos/seed/nike/400/400"
  },
  {
    name: "Adidas Hoodie",
    description: "Comfortable cotton hoodie",
    category: fashion,
    price: 2999,
    stock: 22,
    image: "https://picsum.photos/seed/adidas/400/400"
  },
  {
    name: "Puma Sports T-Shirt",
    description: "Quick dry fabric",
    category: fashion,
    price: 1299,
    stock: 40,
    image: "https://picsum.photos/seed/puma/400/400"
  },
  {
    name: "Ray-Ban Sunglasses",
    description: "UV protected sunglasses",
    category: fashion,
    price: 8499,
    stock: 10,
    image: "https://picsum.photos/seed/rayban/400/400"
  },
  {
    name: "Titan Analog Watch",
    description: "Classic men's watch",
    category: fashion,
    price: 5999,
    stock: 18,
    image: "https://picsum.photos/seed/titan/400/400"
  },

  // Home & Kitchen
  {
    name: "Prestige Pressure Cooker",
    description: "5L stainless steel cooker",
    category: home,
    price: 2499,
    stock: 20,
    image: "https://picsum.photos/seed/cooker/400/400"
  },
  {
    name: "Philips Mixer Grinder",
    description: "750W kitchen mixer",
    category: home,
    price: 3499,
    stock: 18,
    image: "https://picsum.photos/seed/mixer/400/400"
  },
  {
    name: "Milton Water Bottle",
    description: "1L stainless steel bottle",
    category: home,
    price: 699,
    stock: 50,
    image: "https://picsum.photos/seed/bottle/400/400"
  },
  {
    name: "Kent Water Purifier",
    description: "RO+UV water purifier",
    category: home,
    price: 14999,
    stock: 8,
    image: "https://picsum.photos/seed/kent/400/400"
  },
  {
    name: "LG Microwave Oven",
    description: "28L convection microwave",
    category: home,
    price: 11999,
    stock: 10,
    image: "https://picsum.photos/seed/microwave/400/400"
  },
  {
    name: "Cello Dining Set",
    description: "Premium dinner set",
    category: home,
    price: 1999,
    stock: 16,
    image: "https://picsum.photos/seed/dinner/400/400"
  },

  // Beauty
  {
    name: "Lakme Face Wash",
    description: "Gentle daily cleanser",
    category: beauty,
    price: 299,
    stock: 60,
    image: "https://picsum.photos/seed/lakme/400/400"
  },
  {
    name: "Maybelline Lipstick",
    description: "Matte finish lipstick",
    category: beauty,
    price: 499,
    stock: 45,
    image: "https://picsum.photos/seed/lipstick/400/400"
  },
  {
    name: "Nivea Body Lotion",
    description: "Deep moisture lotion",
    category: beauty,
    price: 399,
    stock: 35,
    image: "https://picsum.photos/seed/nivea/400/400"
  },
  {
    name: "Dove Shampoo",
    description: "Hair fall rescue shampoo",
    category: beauty,
    price: 349,
    stock: 50,
    image: "https://picsum.photos/seed/shampoo/400/400"
  },
  {
    name: "L'Oreal Serum",
    description: "Hair repair serum",
    category: beauty,
    price: 799,
    stock: 20,
    image: "https://picsum.photos/seed/serum/400/400"
  },
  {
    name: "Mamaearth Face Cream",
    description: "Vitamin C face cream",
    category: beauty,
    price: 449,
    stock: 30,
    image: "https://picsum.photos/seed/cream/400/400"
  },

  // Grocery
  {
    name: "Fortune Sunflower Oil 5L",
    description: "Healthy cooking oil",
    category: grocery,
    price: 999,
    stock: 40,
    image: "https://picsum.photos/seed/oil/400/400"
  },
  
]);

      // ...continue with the remaining products..
    console.log("seed connected succesfully");
      process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedData();