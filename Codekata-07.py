userInput=int(input())
arr=[int(x) for x in input().split()]
minIndex=0
maxIndex=len(arr)-1
max1=min(arr)
min=max(arr)
for i in range(len(arr)):
    if arr[i]<min:
        min=arr[i]
        minIndex=i
    if arr[i]>max1:
        max1=arr[i]
        maxIndex=i
print(abs(minIndex-maxIndex))
