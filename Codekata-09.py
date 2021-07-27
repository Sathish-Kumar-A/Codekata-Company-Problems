userInput=input()
arr=[]
for i in userInput:
    arr.append(i)
for i in range(len(userInput)):
    flag=0
    for j in range(len(userInput)):
        if arr[i] == arr[j] or arr[i]==arr[j].lower():
            flag+=1
    if flag>1:
        arr[i] = arr[i].upper()
    print(arr[i],end="")
