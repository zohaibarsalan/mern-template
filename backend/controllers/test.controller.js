export const getUsers = async (req, res) => {
  const users = [
    'Julius',
    'Constantine',
    'Augustus',
    'Alexander',
    'Perseus',
    'Achilles',
    'Heracles',
  ];
  res.status(200).json({ message: users });
};
