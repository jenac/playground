import pandas as pd
from numpy.random import randn
index = pd.date_range('1/1/2013', periods=8)
df = pd.DataFrame(randn(8, 3), index=index,columns=['A', 'B', 'C'])
print(df)
