import express from "express";
import {
  getProductById,
  getProducts,
} from "../controller/product-controller.js";
import { userSignUp, userLogIn } from "../controller/user-controller.js";
import { addItemInCart } from "../controller/cart-controller.js";
// import { userForm } from '../controller/form-controller.js';
// import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';
import Form from '../model/formSchema.js'
const router = express.Router();

//login & signup
router.post("/signup", userSignUp);
router.post("/login", userLogIn);
// router.post('/form',userForm);
router.post("/contact", async (req, res) => {
  const FullName = req.body.FullName;
  const Email=req.body.Email;
  const Phone=req.body.Phone;
  const companyName = req.body.companyName;
  const YourMessage=req.body.YourMessage;

  const formData = new Form({
    name: FullName,
    email: Email,
    phone: Phone,
    company: companyName,
    message: YourMessage
  });

  try {
    await formData.save();
    res.send("inserted data..");
  } catch (err) {
    console.log(err);
  }
});

// router.get("/products", getProducts);
// router.get("/product/:id", getProductById);
router.get("/products", getProducts);
router.get("/product/:id", getProductById);


router.post("/cart/add", addItemInCart);

// router.post('/payment', addPaymentGateway);
// router.post('/callback', paymentResponse);

export default router;
