import os
os.system('cls' if os.name == 'nt' else 'clear')

print("hello world")
print("-------------------------------------")

#nesne tabanlı programlamanın faydaları nelerdir?
"""Nesne tabanlı programlama sayesinde programlar daha anlaşılır, düzenli ve bakımı kolay hale gelir. OOP sayesinde, kod tekrar kullanımı ve modüler hale gelir. Bu da programların geliştirilmesini ve bakımını kolaylaştırır. Ayrıca, OOP sayesinde kod paylaşımı ve işbirliği daha kolay hale gelir """


#! Everything in Python is class

def print_types(data):
    for i in data:
        print (i, type(i))

test =[122, "victor", [1,2,3], (1,2,3), {1,2,3}, True, lambda x:x]
print_types(test)

















print("---------------------------------------------------------")