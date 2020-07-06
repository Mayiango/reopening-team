# -*- coding: utf-8 -*-
"""
Created on Tue Jun 23 09:40:49 2020

@author: Pranjal Soni
"""

import re

from bs4 import BeautifulSoup as bs
soup = bs(open("National Reopen Guidelines Directory - Castlight health.html",encoding="utf8"), features="lxml")


td = soup.select('.menu')
statenames = td[0].getText().split('\n')[1:-1]

right_content = soup.select('.cnt')


stay_at_home_order =  []
current_reopening_phase_overview = []
social_distancing = []
school_closure_status = []

for i in range(len(right_content)):
    stay_at_home_order.append(right_content[i].select('div')[2].getText().strip())


for i in range(len(right_content)):
    c = right_content[i].select('div')[11].getText().strip("")
    c = re.sub(r'(\r\n|\r|\n)','',c)
    c = re.sub(r'\s+', ' ', c)
    current_reopening_phase_overview.append(c)



for i in range(len(right_content)):
    s = right_content[i].select('div')[27].getText().strip("")
    s = re.sub(r'(\r\n|\r|\n)','',s)
    s = re.sub(r'\s+', ' ', s)
    social_distancing.append(s)
    
for i in range(len(right_content)):
    school_closure_status.append(right_content[i].select('div')[43].getText().strip())


import json

data = {}

for i in range(55): 
    data[statenames[i]] = []
    data[statenames[i]].append({
        'stay_at_home_order': stay_at_home_order[i],
        'current_reopening_phase_overview': current_reopening_phase_overview[i],
        'social_distancing': social_distancing[i],
        'school_closure_status' :school_closure_status[i]
    })

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)




