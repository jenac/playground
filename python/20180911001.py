from mpl_finance import quotes_historical_yahoo
ticker='DELL'
begdate=(2013,1,1)
enddate=(2013,11,9)
p=quotes_historical_yahoo(ticker, begdate, enddate,asobject=True, adjusted=True)
print(p)