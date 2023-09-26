# Session signup

Write a program to create HTML Sign Up form where store all the information in session storage

## Instructions

1. All the inputs should have labels.
2. You should have an `input` with the type of `text` and id of `name`, the label should be `Name`
3. Another input should have the type of `email` and id of `email`, the label should be `Email`
4. Another input should have the type of `password` and id of `password`, the label should be `Password`
5. Another input should have the type of `password` and id of `confirm-password`, the label should be `Confirm Password`
6. All the inputs should be required
7. Finally, there should be a submit button with the id of `submit`
8. When the button is clicked, check if the password and confirm password match, if they do, save the data in `session-storage`. Keys and values should be as follows:

- `name` should store value in the name field
- `email` should store value in email field
- `password` should store value in the password field
  Finally, show an alert with the text `Sign up successful!`.

9. If the passwords don't match, show an alert with the text as `Passwords do not match`

## Styling instructions

1. form should have the `background-color` as `#f8f9fa`, `border` as `1px solid #ccc`, `border-radius` of `4px`, `padding` of `2rem` and a `width` of `300px`
2. labels should have a `margin-bottom` of `0.5rem` and a `font-size` of `1.2rem`. It should be bold
3. All the inputs should have the `width` as `100%`, a `border` of `border: 1px solid #ccc`, `padding` of `0.5rem`, `border-radius` of `4px`. The bottom margin should be `1rem`
4. The submit button should have a `background-color` of `#007bff` and the text color of `white`. It should have a `padding` of `0.75rem 1.5rem`, no border and a `border-radius` of `4px`. Text should be bold.
