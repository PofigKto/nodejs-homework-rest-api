const { Contact } = require("../../models");


const listContacts = async (req, res) => {
  const data = await Contact.find({});
  res.status(200).json({
    ststus: "succses",
    code: 200,
    data,
  });
};

module.exports = listContacts;