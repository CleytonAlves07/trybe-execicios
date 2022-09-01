const { request } = require('express');
const express = require('express');
const { Book, User } = require('./models');

const app = express();

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });
    // Importante: a propriedade through: { attributes: [] } deve estar presente, pois sem ela, em cada book, apareceriam todos seus respectivos users. Tente fazê-lo sem e veja a diferença no resultado!

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;