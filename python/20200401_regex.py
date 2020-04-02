import re
phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') #r'' raw string
mo = phoneNumberRegex.search('My cell number: 612-222-1234, home is: 612-111-7890')
print(mo.group())

phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)') #group with ()
mo = phoneNumberRegex.search('My cell number: 612-222-1234, home is: 612-111-7890')
print(mo.group(1))
print(mo.group(2))
print(mo.group(3))
print(mo.groups())
areaCode, mid, last = mo.groups()
print(f"areaCode={areaCode}, mid={mid}, last={last}")

#escape ( and )
phoneNumberRegex = re.compile(r'(\(\d\d\d\))-(\d\d\d-\d\d\d\d)') #group with ()
mo = phoneNumberRegex.search('My cell number: 612-222-1234, home is: (612)-111-7890')
print(mo.groups())

#match multile
heroRegex = re.compile(r'Batman|Tina Fey')
mo1 = heroRegex.search('Batman and Tina Fey')
print(mo1.group())

mo2 = heroRegex.search('Tina Fey and Batmain')
print(mo2.group())

# ? for optional match
batRegex = re.compile(r'Bat(wo)?man')
mo3 = batRegex.search('The Adventures of Batman')
print(mo3.group())

mo4 = batRegex.search('The Adventures of Batwoman')
print(mo4.group())

# * for 0 or multiple times
batRegex = re.compile(r'Bat(wo)*man')
mo5 = batRegex.search('The Adventures of Batman')
print(mo5.group())

mo6 = batRegex.search('The Adventures of Batwowowowoman')
print(mo6.group())

# + for 1 or multiple times
batRegex = re.compile(r'Bat(wo)+man')
mo7 = batRegex.search('The Adventures of Batman')
print(mo7) #None no match

mo8 = batRegex.search('The Adventures of Batwowowowoman')
print(mo8.group())

# {n} for match exact n times
haRegex = re.compile(r'(Ha){3}')
mo9 = haRegex.search('Wa HaHaHa')
print(mo9.group())

mo10 = haRegex.search('Wa haha')
print(mo10)

# greedy match { a, b } means a to b times
greedyHaRegex = re.compile(r'(Ha){3,5}')
moa = greedyHaRegex.search('What HaHaHaHaHa')
print(moa.group()) # HaHaHaHaHa

# non greedy match
monGreedyHaRegex = re.compile(r'(Ha){3,5}?')
mob = monGreedyHaRegex.search('What HaHaHaHaHa')
print(mob.group()) #HaHaHa

# # find all
phoneNumberRegex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')
mc = phoneNumberRegex.findall('My cell number: 612-222-1234, home is: 612-111-7890')
print(mc)

phoneNumberRegex = re.compile(r'(\d\d\d)-(\d\d\d)-(\d\d\d\d)') #group with ()
md = phoneNumberRegex.findall('My cell number: 612-222-1234, home is: 612-111-7890')
print(md)

# https://docs.python.org/3/library/re.html
# \d
# \D
# \w
# \W
#

# customize char category
vowelRegex = re.compile(r'[aeiouAEIOU]')
me = vowelRegex.findall('Robocop eats baby food. BABY FOOD')
print(me)