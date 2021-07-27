userInput=input()
string=""
maxString=""
for i in range(len(userInput)):
    if userInput[i] not in string:
        string+=userInput[i]
    else:
        if len(maxString)<len(string):
            maxString=string
            print(maxString)
        string=""
if len(maxString)<len(string):
    maxString=string
print(len(maxString))
