from funcs import random_generator, save_pass


def main():
    print("""
                Password Generator
                ------------------
        1.- Generate a new agenda.
        2.- Generate a quick and anonymous password.
        3.- Check all your saved passwords.
        4.- Exit.
    """)
    ans = int(input("Type in the option: "))
    should_top = True
    while should_top:
        if ans == 4:
            should_top = False
        elif ans == 1:
            length = int(input("Enter the length which your password: "))
            possibly_pass = random_generator(length)
            question = input(f"You might want this one: {possibly_pass}\nWanna save?: ")
            if question.lower() == "yes":
                book_title = input("Enter the title for this agenda: ")
                title_for_pass = input("Enter a title for this password: ")
                if " " in book_title:
                    book_title = book_title.replace(" ", "-")
                done = save_pass(book_title, title_for_pass, possibly_pass)
                if done:
                    print("Passwords successfully saved!\nThanks for using pass-gen.")
                    break
            elif question.lower() == "no":
                print("Ok then.")
                continue
            else:
                print("Invalid response.")
                continue


if __name__ == "__main__":
    main()
