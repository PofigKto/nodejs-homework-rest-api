const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    ststus: "succses",
    code: 201,
    data: result,
  });
};

module.exports = addContact;