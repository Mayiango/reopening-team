import requests,bs4,re,unicodedata,json


res = requests.get('https://travel.state.gov/content/travel/en/traveladvisories/COVID-19-Country-Specific-Information.html')
Soup = bs4.BeautifulSoup(res.text,'lxml')
table = Soup.select('table')[0]

countries = []
links = []

for a in table.select('tr>td>a'):
    countries.append(a.getText())
    links.append(a['href'])
#print(table.select('tr>td>a')[0]['href'])


country_specific_information = []
entry_and_exit_requirements = []
quarantine_inforamation = []
local_resourses = []
local_resourse_links = []



TAG_RE = re.compile(r'<[^>]+>')
def remove_tags(text):
    return TAG_RE.sub('', text)


def get_info(list_name,first_element,next_element):
    if first_element == []:
        list_name.append("There's currently no information concerning this available")

    
    else:
        start = str(soup1).find(first_element[0]) + len(first_element[0])
        end = str(soup1).find(next_element[0])
        info = str(soup1)[start:end]
        info =  remove_tags(info)
        info = re.sub(r'(\r\n|\r|\n)',' ',info)
        list_name.append(unicodedata.normalize("NFKD",info))

       
for link in links:
    print(link)
    res1 = requests.get(link)
    try:
        soup1 =  bs4.BeautifulSoup(res1.text,'lxml').select('.content')[0]
    except:
        country_specific_information.append("There's currently no information concerning this available")
        entry_and_exit_requirements.append("There's currently no information concerning this available")
        quarantine_inforamation.append("There's currently no information concerning this available")
        local_resourses.append("There's currently no information concerning this available")
        local_resourse_links.append("There's currently no information concerning this available")
        continue
    
    
    csis = soup1.find_all(text=re.compile(('Country-Specific Information|COUNTRY-SPECIFIC INFORMATION')))
    eaers = soup1.find_all(text=re.compile('Entry and Exit Requirements|ENTRY AND EXIT REQUIREMENTS'))
    qis = soup1.find_all(text=re.compile('Quarantine Information|QUARANTINE INFORMATION'))
    lrs = soup1.find_all(text=re.compile('Local Resources|LOCAL RESOURCES'))
    ols = soup1.find_all(text=re.compile('Other links|OTHER LINKS'))
     

 
    elements = [csis,eaers,qis,lrs,ols]
    lists = [country_specific_information,entry_and_exit_requirements,quarantine_inforamation]
    for   i in range(len(lists)):
        try:
            get_info(lists[i],elements[i],elements[i+1])
        except IndexError:
            try:
                get_info(lists[i],elements[i],elements[i+2])
            except:
                lists[i].append("There's currently no information concerning this available")
    
    
   #Local Resources:
    local_resourse_link = []
    lrs = soup1.find_all(text=re.compile('Local Resources|LOCAL RESOURCES'))
    if lrs == []:
        local_resourses.append("There's currently no information concerning this available")
        local_resourse_links.append("There's currently no information concerning this available")
    else:
        local_resourse = lrs[0].parent.find_next('ul').getText()
        local_resourse = re.sub(r'(\r\n|\r|\n)',' ',local_resourse)
        local_resourses.append(str(unicodedata.normalize("NFKD",local_resourse)))
        for link in lrs[0].parent.find_next('ul').select('a'):
            local_resourse_link.append(link.getText()+' : '+link['href'])
        local_resourse_links.append(local_resourse_link)

        





data = {}

for i in range(len(country_specific_information)): 
    data[countries[i]] = []
    data[countries[i]].append({
        'country_specific_information': country_specific_information[i],
        'entry_and_exit_requirements': entry_and_exit_requirements[i],
        'quarantine_inforamation': quarantine_inforamation[i],
        'local_resourses' : local_resourses[i],
        'local_resourse_links' : local_resourse_links[i]
    })

import codecs

with codecs.open('covid_info.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False)