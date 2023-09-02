const mongoose = require('./conexao'); 
const Schema = mongoose.Schema;

const LivroSchema = new Schema({
  _id: Schema.Types.ObjectId,
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String],

});

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
