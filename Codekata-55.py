bowlers=[]
for i in range(6):
    bowlers.append(input())
runs=[]
for i in range(6):
    runs.append([int(x) for x in input().split()])
maxRun=0
maxBowler=bowlers[0]
for k in range(len(runs)):
    sum=0
    for i in runs[k]:
        sum+=i
    if(sum>maxRun):
        maxRun=sum
        maxBowler=bowlers[k]
print(maxBowler)

