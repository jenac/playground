#write binary file
import array
import numpy as np
outfile = "tmp.bin"
fileobj = open(outfile, mode='wb')
outvalues = array.array('f')
data=np.array([1,2,3])
outvalues.fromlist(data.tolist())
outvalues.tofile(fileobj)
fileobj.close()
