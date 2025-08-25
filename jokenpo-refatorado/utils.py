
from enum import Enum

class GameResult(Enum):
    TIE = 0
    PLAYER1 = 1
    PLAYER2 = 2

def get_winning_message(result: GameResult) -> str:
    match result:
        case GameResult.TIE:
            return "A partida empatou!!"
        case GameResult.PLAYER1:
            return "Jogador 1 Venceu!!!"
        case GameResult.PLAYER2:
            return "Jogador 2 Venceu!!!"
        case _:
            return "Unknown Status"


def decide_winner(player1: str, player2: str) -> GameResult:
    if player1 == player2:
        return GameResult.TIE

    if (
        (player1 == "pedra" and player2 == "tesoura") or
        (player1 == "papel" and player2 == "pedra") or
        (player1 == "tesoura" and player2 == "papel")
    ):
        return GameResult.PLAYER1

    return GameResult.PLAYER2
