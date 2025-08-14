import { situacaoAluno } from "../main";


describe("Função situacaoAluno", () => {
  it("deveria retornar reprovado sem exame quando for entre 0 - 4", () => {
    expect(situacaoAluno(0)).toBe("Reprovado sem direito a exame")
  })
})


// | classe    | Saida                           |
// | --------- | ------------------------------- |
// | 0 - 4     | "Reprovado sem direito a exame" |
// | 5.0 - 5.9 | "Reprovado com direito a exame" |
// | 6 - 9.9   | "Aprovado"                      |
// | 10        | "Aprovado e condecorado"        |
