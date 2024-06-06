const yup = require("yup");

const schema = yup.object().shape({
  // Setting the pattern for the client:{} object in the payload.
  client: yup.object().shape({
    name: yup.string().required("Name field must be a string"),
    phone: yup
      .string()
      .matches(
        /^\(\d{3}\) \d{3}-\d{4}$/,
        "Phone field must be in a US phone number format"
      ),
    email: yup
      .string()
      .email("Email field must be in a email format")
      .required(),
    address: yup
      .string()
      .required("Address field is required must be a string"),
  }),
  // Setting the pattern for the Payment:{} object in the payload.
  paymentInfo: yup.object().shape({
    quantity: yup
      .number("Quantity must be an interger")
      .min(1, "Quantity must be > 0")
      .required(),
    delivery: yup.bool().default(false),
    date: yup.string().required(),
    fee: yup.number("Fee field must be a number").required(),
    price: yup.number("Price field must be a number").required(),
    carsName: yup.string().required("CarsName field must be a string"),
    method: yup.string().required(),
  }),
});

async function validation(req, res, next) {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log(JSON.stringify(error));
    res.status(400).json({ errors: error.errors });
  }
}

module.exports = validation;
