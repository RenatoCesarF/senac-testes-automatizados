import { situacaoAluno } from "../main";

//Grupo de testes para essa função específica
describe("Função situacaoAluno", () => {
  //Descrição do teste em questão, de uma das classes
  it("Deve retornar reprovado sem exame quando input for entre 0 - 4", () => {
    //checagem do resultado dependendo da entrada - Embutido diretamente no expect
    expect(situacaoAluno(0)).toBe("Reprovado sem direito a exame")

    //Rodo a função a ser testada com a entrada desejada
    const result = situacaoAluno(4)
    //checagem com 4, separado, guardo o valor e depois checo
    expect(result).toBe("Reprovado sem direito a exame")
  })
})


// | classe    | Saida                           |
// | --------- | ------------------------------- |
// | 0 - 4     | "Reprovado sem direito a exame" |
// | 5.0 - 5.9 | "Reprovado com direito a exame" |
// | 6 - 9.9   | "Aprovado"                      |
// | 10        | "Aprovado e condecorado"        |
