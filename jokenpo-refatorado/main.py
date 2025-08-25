from enum import Enum
import random

from utils import decide_winner, get_winning_message, GameResult

class PlayChoice(Enum):
    PEDRA = "pedra" 
    PAPEL = "papel" 
    TESOURA = "tesoura"

# Opções possíveis
opcoes = ["pedra", "papel", "tesoura"]

def is_option_valid(option) -> bool:
    return option in opcoes

# Entrada do usuário
jogador = input("Escolha pedra, papel ou tesoura: ").lower()

# Validação da entrada
if not is_option_valid(jogador):
    print("Opção invalida")
    quit()

# Jogada da máquina
maquina = random.choice(opcoes)
print(f"A máquina escolheu: {maquina}")

result = decide_winner(jogador, maquina)
message = get_winning_message(result)
print(message)

# - Qual a pior forma de testar isso? CMD e automação de mouse
# - Como tornar esse código mais testável? (Dividir e conquistar)
# - Como escrever os testes
