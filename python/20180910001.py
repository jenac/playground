import numpy as np
import pandas as pd
dates=pd.date_range('20130101',periods=5)
np.random.seed(12345)
x=pd.DataFrame(np.random.rand(5,2),index=dates,columns=('A','B'))
print(x)
print(x.describe())