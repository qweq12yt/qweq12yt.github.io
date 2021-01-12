from os import listdir

output = open('scripts/sprites.js', 'w')
to_file = 'var sprites = {'
file_list = listdir('sprites')
for name in file_list:
    string = name.strip('.txt') + ' : '
    file = open('sprites/' + name)
    string += '['
    for line in file:
        string += '"' + line.strip('\n') + '"' + ','
    string = string[:-1]
    to_file += string + '],'

to_file += "}"

output.write(to_file)
output.close()