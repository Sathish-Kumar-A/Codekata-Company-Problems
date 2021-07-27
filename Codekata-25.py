int(input())
arr=[int(x) for x in input().split()]
currentSum=maxSum=0
for i in arr:
	if currentSum<=0:
		currentSum=i
	else:
		currentSum+=i
	maxSum=max(maxSum,currentSum)
print(maxSum)
