userInput=[str(x) for x in input().split()]
given=userInput[0]
required=userInput[1]
string=""
for i in given:
    if i in required and i not in string:
        string+=i
cost=0
if(len(given)>len(string)):
    cost += len(given) - len(string)
if(len(string)<len(required)):
    cost+=len(required)-len(string)
print(cost)
