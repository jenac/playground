import pandas as pd
url='http://insight.dev.schoolwires.com/HelpAssets/C2Assets/C2Files/C2ImportCalEventSample.csv'
x=pd.read_csv(url,index_col=0,parse_dates=True) 
print(x.head())