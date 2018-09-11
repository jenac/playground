import pandas as pd
from numpy.random import randn
df=pd.DataFrame(randn(8, 1), columns = ['A'], dtype = 'float32') 
print(df)
