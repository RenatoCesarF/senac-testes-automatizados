export function situacaoAluno(nota: number) {
  if (nota <= 4) {
    return "Reprovado sem direito a exame"
  }
  if (nota > 4 && nota < 6) {
    return "Reprovado com direito a exame"
  }
  if (nota == 10) {
    return "Aprovado e condecorado"
  }
  return "Aprovado"
}

// | classe    | Saida                           |
// | --------- | ------------------------------- |
// | 0 - 4     | "Reprovado sem direito a exame" |
// | 5.0 - 5.9 | "Reprovado com direito a exame" |
// | 6 - 9.9   | "Aprovado"                      |
// | 10        | "Aprovado e condecorado"        |
