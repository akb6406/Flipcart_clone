import Product from '../model/productSchema.js';

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error');
  }
};

export const getProductById = async (request, response) => {
  try {
    const product = await Product.findOne({ id: request.params.id });
    if (product) {
      response.json(product);
    } else {
      response.status(404).send('Product not found');
    }
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error');
  }
};
