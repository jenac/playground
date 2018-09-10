import pandas as pd
import numpy as np
x=pd.Series([0.1,0.02,-0.03,np.nan,0.130,0.125])
print(x)
m=np.mean(x)
round(m,4)
y=x.fillna(m)
print(y)

