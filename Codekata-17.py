userInput=input()
arr=[]
flag=0
flag1=0
for i in range(len(userInput)-1):
	if(int(userInput[i])>int(userInput[i+1])):
		flag+=1
if(flag==len(userInput)-1):
	print("impossible")
else:
	for i in userInput:
		arr.append(i)
	for i in range(len(arr)-1,-1,-1):
		if(int(arr[i])>int(arr[i-1])):
			arr[i],arr[i-1]=arr[i-1],arr[i]
			flag1=1
			break
	if(flag1==0):
	    print("impossible")
	else:
	    print(*arr,sep="")
