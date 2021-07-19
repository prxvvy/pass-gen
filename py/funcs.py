from random import sample
from string import ascii_lowercase, ascii_uppercase, digits, punctuation


def random_generator(length):
    lower = ascii_lowercase
    upper = ascii_uppercase
    digit = digits
    symbols = punctuation
    combined = lower + upper + digit + symbols
    return "".join(sample(combined, length))


def save_pass(file_name, pass_title, password):
    with open(f"{file_name}.temp.txt", "w", encoding="UTF8") as file_pass:
        file_pass.write(f"{pass_title};{password}")
    return True
