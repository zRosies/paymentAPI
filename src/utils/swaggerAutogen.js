const swaggerAutogen = require("swagger-autogen");

// How to autogen using swagger-autogen
const doc = {
  info: {
    title: "Payment API",
    description:
      "Veloster Payment API developed to deliver emails confirmation to customers",
    host: "http://localhost:8080",
  },
};

const outputPlace = "./src/utils/swaggerDoc.json";
const routePath = ["./src/routes/index.js"];

swaggerAutogen(outputPlace, routePath, doc);
