exports.healthChecker = async (req, res) => {
  return res.status(200).json({ success: true });
};
