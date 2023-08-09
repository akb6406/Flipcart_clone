import Cart from '../model/cartSchema.js';

export const addItemInCart = async (request, response) => {
  const { productId, quantity } = request.body;
  const userId = request.user._id;

  try {
    const existingCartItem = await Cart.findOne({ user: userId, product: productId });

    if (existingCartItem) {
      // If the item already exists in the cart, update the quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      // If the item does not exist in the cart, create a new cart item
      const cartItem = new Cart({
        user: userId,
        product: productId,
        quantity: quantity
      });
      await cartItem.save();
    }

    return response.status(201).json({ message: 'Item added to cart successfully.' });
  } catch (error) {
    return response.status(500).json({ message: 'Something went wrong.' });
  }
};

export default addItemInCart;
