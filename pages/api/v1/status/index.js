function status(request, response) {
  response.status(200).json({
    conteudo: "Tudo certo com o status.",
  });
}

export default status;
