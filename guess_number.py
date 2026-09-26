import random


secret_number = random.randint(1, 100)
attempts = 0

print("Guess the number between 1 and 100.")

while True:
    try:
        guess = int(input("Enter your guess: "))
    except ValueError:
        print("Please enter a whole number.")
        continue

    attempts += 1

    if guess == secret_number:
        print(f"Correct! You got it in {attempts} attempts.")
        break
    if guess > secret_number:
        print("2 high")
    else:
        print("2 low")