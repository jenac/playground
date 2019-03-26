import requests
s = requests.session()
r = s.get("https://finance.yahoo.com/quote/spy?p=spy")
r.text.find('CrumbStore') #returns 438696
r.text[438696:438796] # returns 'CrumbStore":{"crumb":"blusAuTOM1e"},"StreamStore":{"articleCategory":{"term":"","label":""},"pageCat'
c = s.get("https://query1.finance.yahoo.com/v7/finance/download/aapl?period1=1491004799&period2=1553616324&interval=1d&events=history&crumb=blusAuTOM1e")
c.text

from datetime import date, timedelta
ten = date.today() - timedelta(days=3650)
ten