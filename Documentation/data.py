import matplotlib.pyplot as plt

# Liste des valeurs d'armure (de 0 à 300 par tranches de 10)
armor_values = list(range(0, 301, 10))

# Ancienne formule : dégâts subis = 1 - Armure / (100 + Armure)
damage_taken_old = [(armor / (100 + armor)) * 100 for armor in armor_values]

# Nouvelle formule : dégâts subis = 1 - Armure / (90 + Armure)
damage_taken_new = [(armor / (50 + armor)) * 100 for armor in armor_values]

# Troisième formule : dégâts subis = Armure / (70 + Armure)
damage_taken_third = [(armor / (30 + armor)) * 100 for armor in armor_values]

# Création du graphique
plt.figure(figsize=(10, 6))
plt.plot(armor_values, damage_taken_old, label="Armure", marker='.', linestyle='-', color='gray')
plt.plot(armor_values, damage_taken_new, label="Résistances", marker='.', linestyle='-', color='green')
plt.plot(armor_values, damage_taken_third, label="test", marker='.', linestyle='-', color='orange')

# Labels et titre
plt.xlabel("Armure")
plt.ylabel("Dégâts subis (en %)")
plt.title("Pourcentage de réductions des dégâts en fonction de l'armure")
plt.legend()
plt.grid(True)

# Affichage
plt.show()