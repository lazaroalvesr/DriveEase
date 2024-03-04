import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-car.vercel.app/",
});

// carAll = Listar todos os carros
// create = criar carro
// unique = listar unico carro por ID
// delete = delete carro

// categoryAll = Listar todas as categorias
// category = Listar Unica categoria  por ID

// brandAll = Listar todas as brand
// brand = Listar Unica brand  por ID
