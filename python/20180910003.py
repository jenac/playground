import numpy as np
import statsmodels.api as sm
y=[1,2,3,4,2,3,4]
x=range(1,8)
x=sm.add_constant(x)
results=sm.OLS(y,x).fit()
print(results.params)
