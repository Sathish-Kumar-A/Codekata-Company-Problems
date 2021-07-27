n,k=input().split()
arr=[int(x) for x in input().split()]
flag=0
for i in arr:
    for j in arr:
        if(i+j ==int(k)):
            print("yes")
            flag=1
            break
    if(flag==1):
        break
if(flag==0):
    print("no")
