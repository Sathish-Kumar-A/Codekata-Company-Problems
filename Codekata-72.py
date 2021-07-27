arrcount=int(input())
arr=[int(x) for x in input().split()]
sum=0
for i in range(len(arr)):
    for j in range(0,i):
        if arr[i]>arr[j]:
            sum += arr[j]
print(sum)
