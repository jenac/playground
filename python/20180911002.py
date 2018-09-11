import pandas as pd
from numpy.random import randn
x = pd.date_range('1/1/2013', periods=252)
data = pd.Series(randn(len(x)), index=x)
print(data.head())
print(data.tail())
