// Display public index
exports.auth_index = asyncHandler(async (req, res, next) => {
  res.status(200).json({ msg: "API publica" });
});
