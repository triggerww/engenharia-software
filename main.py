import argparse

def main():
    parser = argparse.ArgumentParser(
        description='Cumprimenta alguém.'
    )
    parser.add_argument(
        "nome",
        nargs='?',
        default='mundo',
        help='Nome da pessoa a ser cumprimentada'
    )
    args = parser.parse_args()
    print(f'Olá {args.nome}!')

if __name__ == '__main__':
    main()