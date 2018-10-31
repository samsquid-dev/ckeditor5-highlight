file = open('colors.txt', mode='r', encoding='utf-8')

color_codes = []
color_names = []

for line in file.readlines():
    if len(line.strip()) > 0:  # skip empty lines
        line = line.replace('\n', '')
        strs = line.split(':')
        color_name = strs[0].replace(':', '')
        color_code = strs[1].strip()
        color_codes.append(color_code)
        color_names.append(color_name)


from jinja2 import Environment, FileSystemLoader, select_autoescape


def camelcase(inp):
    inp = inp.replace(' ', '')
    temp = inp.split('-')
    ret = ''
    for t in temp[1:]:
        ret = ret+t.title()
    return temp[0]+ret


def sentencecase(inp):
    inp = inp.replace(' ', '')
    temp = inp.split('-')
    ret = ''
    for t in temp:
        ret = ret+t.title()+' '
    return ret[:-1]


env = Environment(
    loader=FileSystemLoader('./templates'),
    autoescape=select_autoescape(['html', 'xml'])
)
env.globals.update(zip=zip)
env.globals.update(camelcase=camelcase)
env.globals.update(sentencecase=sentencecase)

template = env.get_template('highlight.css.template')

rendered = template.render(color_names=color_names, color_codes=color_codes)

out = open('theme/highlight.css', mode='w', encoding='utf-8')
out.write(rendered)
out.close()

template = env.get_template('highlightediting.js.template')

rendered = template.render(color_names=color_names, color_codes=color_codes)

out = open('src/highlightediting.js', mode='w', encoding='utf-8')
out.write(rendered)
out.close()
