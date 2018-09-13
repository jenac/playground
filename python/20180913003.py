#read binary file
import array
infile=open("tmp.bin", "rb") 
s=infile.read()                # read all bytes into a string 
d=array.array("f", s)          # "f" for float 
print(d)
infile.close()
