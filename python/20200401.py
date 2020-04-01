import pprint
message = 'It was a bright cold day in April, and the clocks were striking thirteen.'
count = {} # empty dictionary

#count chars
for character in message:
    count.setdefault(character, 0)
    count[character] = count[character] + 1

#pretty print
pprint.pprint(count)

print('Hello'.center(20))
print('hello'.ljust(20))
print('hello'.rjust(20))


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



