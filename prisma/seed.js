const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "iPhone 15",
        category: "Mobile",
        price: 79999,
      },
      {
        name: "Samsung S24",
        category: "Mobile",
        price: 74999,
      },
      {
        name: "HP Laptop",
        category: "Laptop",
        price: 59999,
      },
      {
        name: "Boat Earbuds",
        category: "Audio",
        price: 1999,
      },
    ],
  });

  console.log("Data Inserted Successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });