# task 1
count = int(input("Kоличество мальчиков и девочек:"))
ice_cream = int(input("количество фруктового мороженого:"))
if ice_cream % count == 0:
    print("give")
else:
    print("no give")

# task 2

officer = int(input("Количество преступников: "))
if officer < 5:
    print("«Я смогу сам»")
elif 5 <= officer <= 10:
    print("«Помоги мне, Бэтмен»")
else:
    print("«Удачи тебе!»")

# task 3
#(a and b) or ((not a) and (not b))


year = int(input("Write a year(1900-3000):"))
if 1900 <= year <= 3000:
    if (year % 4 == 0 and year % 400 == 0) or (year % 100 != 0):
        print("Високосный")
    else:
        print("Обычный")
else:
    print("Error")
