from enum import Enum
import random

from utils import PlayChoice, decide_winner, get_winning_message, GameResult

opcoes = [PlayChoice.PEDRA, PlayChoice.PAPEL, PlayChoice.TESOURA ]

def run_game():
    play1 = get_player_input()

    if not is_option_valid(play1):
        print("Opção invalida")
        quit()

    # Jogada da máquina
    maquina = random.choice(opcoes)
    print(f"A máquina escolheu: {maquina.value}")

    result = decide_winner(play1, maquina)
    message = get_winning_message(result)
    print(message)


def is_option_valid(option) -> bool:
    return option in opcoes

def get_player_input() -> PlayChoice:
    jogador = input("Escolha pedra, papel ou tesoura: ").upper()
    return PlayChoice[jogador]

if __name__ == "__main__":
    run_game()
