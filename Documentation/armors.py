
# Di = int(input("Dégâts infligés : "))
Di = 100
A = int(input("Armure: "))

Ds = Di * (100 / (100 + A))
R = (1 - Ds / Di) * 100
print(f"La fonction est la suivante : Dégâts subis = Dégâts infligés * 100 / 100 + Armure")
print(f"La fonction est la suivante : Dégâts subis = {Di} * (100 / (100 + {A}))")
print(f"Dégâts subis = {Ds} au lieu de {Di}")
print(f"Une armure de {A} représente donc une réduction de dégâts de : {R}%")