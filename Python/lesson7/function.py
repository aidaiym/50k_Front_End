# task1
def myarf(a, b, c):
    arf = (a+b+c)/3
    print(arf)


myarf(2, 3, 4)

# task2


def mysum(x1, x2, x3, x4, x5, y1, y2, y3, y4, y5):
    coordinates1 = x1 + x2 + x3 + x4 + x5
    coordinates2 = y1 + y2 + y3 + y4 + y5
    print('[', coordinates1, ', ', coordinates2, ']')


mysum(x1=int(input("x1:")), x2=int(input("x2:")), x3=int(input("x3:")), x4=int(input("x4:")), x5=int(input("x5:")),
      y1=int(input("y1:")), y2=int(input("y2:")), y3=int(input("y3:")), y4=int(input("y4:")), y5=int(input("y5:")))

# task3


def mymult(myint, mystr):
    all = int * str
    print(all)


mymult(myint=int(input("Write integer: ")), mystr=(input("Write string: ")))
