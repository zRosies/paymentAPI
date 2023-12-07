const mongodb = require("../connection/db");

const createPurchase = async (req, res) => {
  const purchaseInfo = {
    client: {
      name: req.body.client.name,
      phone: req.body.client.phone,
      email: req.body.client.email,
      address: req.body.client.address,
    },
    paymentInfo: {
      carsNum: req.body.paymentInfo.carsNum,
      delivery: req.body.paymentInfo.delivery,
      date: req.body.paymentInfo.date,
      fee: req.body.paymentInfo.fee,
      price: req.body.paymentInfo.price,
      carsName: req.body.paymentInfo.carsName,
    },
  };

  try {
    const result = await mongodb
      .getDb()
      .db("Veloster")
      .collection("carRental")
      .insertOne(purchaseInfo);

    if (result && result.insertedId) {
      res.status(201).json({ message: `${result.insertedId} added to the database` });
    } else {
      res.status(400).json({ message: "No data found or error during insertion" });
    }
  } catch (error) {
    console.log("Error querying the database:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createPurchase };
