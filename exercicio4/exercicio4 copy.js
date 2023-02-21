
function normalizaParagrafo() {
  let paragraphRaw =
    "       este é um exemplo da paragrafo vou          colocar uns espaços pra      testar, mas deu problema com a vírgulagit remote - v \n Eu queria entender como fica na quebra de linha então do tentando fazer aqui também";
  let paragraphCut = paragraphRaw.split('\n');
  //remoção de espaços
  for (let i = 0; i < paragraphCut.length; i++) {

    let removedSpaces = paragraphCut[i].replace(/\s+/g, " ");

    let trimmedParagraph = removedSpaces.trim();

    //conversão do string em Array
    let paragraphArray = trimmedParagraph.split("");

    //primeira letra maiúscula
    let firstLetter = paragraphArray[0].toUpperCase();

    //Se tem ponto não faz nada. Se tem ponto, inclui ponto
    if (paragraphArray.includes(".", paragraphArray.length - 1) === false) {
      paragraphArray.push('.')
    }
    paragraphArray.splice(0, 1, firstLetter);
    let fraseCompleta = paragraphArray.join('');
    console.log(fraseCompleta);
  }
}

normalizaParagrafo();