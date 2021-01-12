from os import listdir

output = open('scripts/beta_game.js', 'a')
to_file = '\nvar sprites = {'
file_list = listdir('sprites')
for name in file_list:
    string = name[:-4] + ' : '
    file = open('sprites/' + name)
    string += '['
    for line in file:
        string += '"' + line.strip('\n') + '"' + ','
    string = string[:-1]
    to_file += string + '], '

to_file += "};\n"

output.write(to_file)
output.close()