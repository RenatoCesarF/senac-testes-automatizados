import { situacaoAluno } from "../main";

//Grupo de testes para essa função específica
describe("Função situacaoAluno", () => {
  //Descrição do teste em questão, de uma das classes
  it("Deve retornar reprovado sem exame quando input for entre 0 - 4", () => {
    //checagem do resultado dependendo da entrada - Embutido diretamente no expect
    expect(situacaoAluno(0)).toBe("Reprovado sem direito a exame")

    //Rodo a função a ser testada com a entrada desejada
    const result = situacaoAluno(4)
    expect(result).toBe("Reprovado sem direito a exame")
  })

  it("Deve retornar reprovado com exame quando input for entre 5 - 5.9", () => {
    expect(situacaoAluno(5)).toBe("Reprovado com direito a exame")

    const result = situacaoAluno(5.9)
    expect(result).toBe("Reprovado com direito a exame")
  })

  it("Deve retornar aprovado quando input for entre 6 - 9.9", () => {
    expect(situacaoAluno(6)).toBe("Aprovado")

    const result = situacaoAluno(9.9)
    expect(result).toBe("Aprovado")
  })

  it("Deve retornar aprovado e condecorado quando input for 10", () => {
    expect(situacaoAluno(10)).toBe("Aprovado e condecorado")
  })

  describe("Classes Invalidas", () => {
    it("Deve retornar invalido para input -1", () => {
      expect(situacaoAluno(-1)).toBe("Invalido")
    })

    it("Deve retornar invalido para input 100", () => {
      expect(situacaoAluno(100)).toBe("Invalido")
    })
  })
})


// | classe    | Saida                           |
// | --------- | ------------------------------- |
// | 0 - 4     | "Reprovado sem direito a exame" |
// | 5.0 - 5.9 | "Reprovado com direito a exame" |
// | 6 - 9.9   | "Aprovado"                      |
// | 10        | "Aprovado e condecorado"        |
