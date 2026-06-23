const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const categories = [
    "Mobile",
    "Laptop",
    "Audio",
    "Camera",
    "Watch"
  ];

  const products = [];

  for (let i = 1; i <= 200000; i++) {
    products.push({
      name: `Product ${i}`,
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 100000) + 1000
    });
  }

  const chunkSize = 5000;

  for (let i = 0; i < products.length; i += chunkSize) {
    await prisma.product.createMany({
      data: products.slice(i, i + chunkSize)
    });

    console.log(`Inserted ${i + chunkSize}`);
  }

  console.log("200000 Products Inserted");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });