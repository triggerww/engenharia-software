import sys

def main(argv):
    if len(argv) > 1:
        print(f'Olá {argv[1]}!')
    else:
        print('Olá Mundo!')

if __name__ == '__main__':
    main(sys.argv)