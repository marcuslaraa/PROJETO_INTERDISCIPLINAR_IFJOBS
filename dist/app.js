"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsuarioRepository_1 = require("./repository/UsuarioRepository");
const CandidatoAlunoRepository_1 = require("./repository/CandidatoAlunoRepository");
const ExperienciaProfissionalRepository_1 = require("./repository/ExperienciaProfissionalRepository");
const cria = new UsuarioRepository_1.UsuarioRepository();
const cria2 = new CandidatoAlunoRepository_1.CandidatoAlunoRepository();
const cria3 = new ExperienciaProfissionalRepository_1.ExperienciaProfissionalRepository();
cria.createTable();
cria2.createTable();
cria3.createTable();
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.listen(PORT, () => { console.log('API rodando na porta 3000'); });
