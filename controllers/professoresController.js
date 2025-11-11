let professores = [
  {
    id: "1",
    nome: "Prof. Carlos",
    idade: 40,
    departamento: "Matemática",
    turmas: [
      { codigo: "9A", disciplina: "MAT101", alunos: ["João", "Maria", "Pedro"] },
      { codigo: "10A", disciplina: "MAT201", alunos: ["Ana", "Luiz"] }
    ]
  },
  {
    id: "2",
    nome: "Prof. Ana",
    idade: 35,
    departamento: "História",
    turmas: [
      { codigo: "9A", disciplina: "HIS101", alunos: ["João", "Pedro"] },
      { codigo: "10B", disciplina: "HIS201", alunos: ["Maria", "Carlos", "Luiza"] }
    ]
  },
  {
    id: "3",
    nome: "Prof. João",
    idade: 50,
    departamento: "Ciências",
    turmas: [
      { codigo: "9A", disciplina: "CIE101", alunos: ["João", "Maria"] },
      { codigo: "9B", disciplina: "CIE101", alunos: ["Pedro", "Luiz"] }
    ]
  }
];

exports.listarProfessores = (req, res) => {
  res.json(professores);
};

exports.buscarProfessorPorId = (req, res) => {
  const prof = professores.find(p => p.id === req.params.id);
  if (!prof) return res.status(404).send("Id não existente");
  res.json(prof);
};

exports.listarTurmasDoProfessor = (req, res) => {
  const prof = professores.find(p => p.id === req.params.id);
  if (!prof) return res.status(404).send("Id não existente");
  res.json(prof.turmas);
};

exports.atualizarProfessor = (req, res) => {
  const prof = professores.find(p => p.id === req.params.id);
  if (!prof) return res.status(404).send("Id não existente");
  const { nome, idade, departamento } = req.body;
  if (nome) prof.nome = nome;
  if (idade) prof.idade = idade;
  if (departamento) prof.departamento = departamento;
  res.json(prof);
};

exports.adicionarTurma = (req, res) => {
  const prof = professores.find(p => p.id === req.params.id);
  if (!prof) return res.status(404).send("Id não existente");
  const { codigo, disciplina, alunos } = req.body;
  prof.turmas.push({ codigo, disciplina, alunos });
  res.status(201).json(prof.turmas);
};

exports.listarPorDepartamento = (req, res) => {
  const resultado = professores.filter(p => p.departamento.toLowerCase() === req.params.departamento.toLowerCase());
  res.json(resultado);
};

exports.removerProfessor = (req, res) => {
  const index = professores.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).send("Id não existente");
  professores.splice(index, 1);
  res.status(204).send();
};