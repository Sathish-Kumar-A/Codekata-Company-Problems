userInput=[int(x) for x in input().split()]
first=userInput[1]
second=userInput[2]
first1=userInput[0]//first
second1=userInput[0]//second
flag=0
if(userInput[0]%4!=0):
    print("no")
else:
    for i in range(1, first1):
        sum = (i * first)
        for j in range(1, second1):
            sum1 = (j * second)
            if (sum + sum1 == userInput[0] / 4):
                print("yes")
                flag = 1
                break
        if (flag == 1):
            break
    if flag == 0:
        print("no")
