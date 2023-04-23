const database = require("../models"); // por padrão ele já procura pelo arquivo index.js

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }
  static async pegaUmPessoa(req, res) {
    const { id } = req.params; // ele já pega o id no corpo da requisiçã
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body; // armazenando pelo corpo da requisicao
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa); // criando conforme requisicao no corpo
      return res.status(201).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaPessoa(req, res) {
    const novasInfos = req.body;
    const {id} = req.params;

    try {
      await database.Pessoas.update(novasInfos, { where: { id: Number(id) } });
      const pessoaAtualizada = await database.Pessoas.findOne( { where: {
        id: Number(id) }});
        return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });
      return res.status(200).json({messagem: `ID ${id} deletado com sucesso`});
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
module.exports = PessoaController;
