const { request } = require('express');
const express = require('express');
const { Address, Employee } = require('./src/models');
const { Book, User } = require('./src/models');
const Sequelize = require('sequelize');
const config = require('./config/config');

const app = express();

app.use(express.json());

const sequelize = new Sequelize(config.development);

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
});

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});
app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Eager Loading - Usar quando sei que vou precisar de todos os dados;
    // const employee = await Employee.findOne({
    //     where: { id },
    //     include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number']} }],
    //   });
    
      // Lazy Loading - Com o lazy loading, podemos carregar apenas os dados da pessoa colaboradora e dos endereços, somente quando necessário, economizando recursos do banco.
    const employee = await Employee.findOne({ where: { id } }); 

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    
     if (req.query.includeAddresses === 'true') {
         const addresses = await Address.findAll({ where: { employeeId: id } });
         return res.status(200).json({ employee, addresses });
       }
    
    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});
app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;