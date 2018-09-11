import numpy as np
p=np.array([1, 1.1, 0.9, 1.05])
print(p[:-1])
print(p[1:])
ret=(p[1:]-p[:-1])/p[:-1]
print(ret)