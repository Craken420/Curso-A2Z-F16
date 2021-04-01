var symbols = {
    'color': ['orange', 'blue', 'white', 'black'],
    'animal': ['unicorn', 'raven', 'sparrow', 'scorpion', 'coyote', 'eagle'],
    'natureNoun': ['ocean', 'mountain', 'forest', 'cloud', 'river', 'tree', 'sky', 'sea'],
    'name': ['Arjun', 'Yuuma', 'Darcy', 'Mia', 'Chiaky', 'Izzi', 'Azra', 'Lina']
}

var grammar = tracery.createGrammar(symbols);

var textExpansion = grammar.flatten('The #color# #animal# of the #natureNoun# is called #name#')

console.log(textExpansion)