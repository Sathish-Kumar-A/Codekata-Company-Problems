n=int(input())
tmp=[]
tmp2=[]
arr=["a","e","i","o","u","A","E",'I',"O","U"]
for i in range(n):
    tmp.append(input())
for i in tmp:
    for j in i:
        if(j in arr):
            tmp2.append(i)
            break;
if(len(tmp2)==n):
    print("yes")
else:
    print("no")
