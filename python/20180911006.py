import pandas as pd
x=pd.read_csv('http://chart.yahoo.com/table.csv?s=IBM',usecols=[0,6],index_col=0)
print(type(x))
print(x.head())
