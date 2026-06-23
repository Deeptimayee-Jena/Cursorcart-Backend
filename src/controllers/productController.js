const prisma = require("../db/prisma");

const getProducts = async (req, res) => {
  try {
    const cursor = req.query.cursor;
    const category = req.query.category;
    const limit = parseInt(req.query.limit) || 2;

    const products = await prisma.product.findMany({
      where: category
        ? {
            category: category,
          }
        : {},

      take: limit + 1,

      ...(cursor && {
        cursor: {
          id: BigInt(cursor),
        },
        skip: 1,
      }),

      orderBy: {
        id: "desc",
      },
    });

    let nextCursor = null;

    if (products.length > limit) {
      const nextItem = products.pop();
      nextCursor = nextItem.id.toString();
    }

    res.json({
      data: products.map((p) => ({
        ...p,
        id: p.id.toString(),
      })),
      nextCursor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getProducts };