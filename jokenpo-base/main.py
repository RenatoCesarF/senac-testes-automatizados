
import random

# Opções possíveis
opcoes = ["pedra", "papel", "tesoura"]

# Entrada do usuário
jogador = input("Escolha pedra, papel ou tesoura: ").lower()

# Validação da entrada
if jogador not in opcoes:
    print("Opção inválida! Escolha entre pedra, papel ou tesoura.")
else:
    # Jogada da máquina
    maquina = random.choice(opcoes)
    print(f"A máquina escolheu: {maquina}")

    # Verificação do resultado
    if jogador == maquina:
        print("Empate!")
    elif (
        (jogador == "pedra" and maquina == "tesoura") or
        (jogador == "papel" and maquina == "pedra") or
        (jogador == "tesoura" and maquina == "papel")
    ):
        print("Você venceu!")
    else:
        print("Você perdeu!")

# - Qual a pior forma de testar isso? CMD e automação de mouse
# - Como tornar esse código mais testável? (Dividir e conquistar)
# - Como escrever os testes

