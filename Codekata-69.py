experimentCount=int(input())
experimentResult=[str(x) for x in input().split()]
for i in experimentResult:
    for j in range(len(i)):
        if (len(i) == 2 and (i[j] + i[j + 1] == "78") or (len(i) == 1) and (i[j] == 1 or i[j] == 4)):
            print("+")
            break
        elif (len(i) >= 2 and i[j] + i[j + 1] == "35"):
            print("-")
            break
        elif(len(i)>=3 and i[j]=="9"):
            print("*")
            break
        elif(len(i)>=3 and (i[j]+i[j+1]+i[j+2]=="190")):
                print("?")
                break
