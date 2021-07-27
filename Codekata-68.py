userInput=int(input())
arr=[1,2]
count=0
if userInput<=2:
    for i in arr:
        if userInput % i == 0:
            count += 1
else:
    for i in arr:
        if userInput % i == 0:
            count += 1
        for j in arr:
            if i + j == userInput or userInput % (i + j) == 0:
                count += 1

print(count)
