 1. ModelName = ResetPassword

 # ModelAttributes
 UserName-Not null, No duplicates
 Password- Not Null ,No duplicates
 PasswordConfirmation-Not null ,No duplicates


# Positive Test Case
**Valid Password Reset:**
## Description:
Verify that a user can successfully reset their password with valid input.
## Steps:
1. Provide a valid existing UserName.
2. Enter a new Password.
3. Confirm the new Password by entering it in the PasswordConfirmation field.
4. Attempt to reset the password.
## Expected Outcome:
- Password is successfully reset without errors.
- User can now log in with the new password.

# Negative Test Cases
**Password Reset with Non-Existing UserName:**
## Description:
Verify that password reset fails when the provided UserName does not exist in the system.
## Steps:
1. Provide a non-existing UserName.
2. Enter a new Password.
3. Confirm the new Password by entering it in the PasswordConfirmation field.
4. Attempt to reset the password.
## Expected Outcome:
- Password reset fails.
- System prompts the user that the provided UserName does not exist.

**Password Reset with Weak Password:**
## Description:
Verify that password reset fails when the new password does not meet minimum strength requirements.
## Steps:
1. Provide a valid existing UserName.
2. Enter a weak Password.
3. Confirm the new Password by entering it in the PasswordConfirmation field.
4. Attempt to reset the password.
## Expected Outcome:
- Password reset fails.
- System prompts the user that the new Password must meet minimum strength requirements.

**Password Reset with Passwords Mismatch:**
## Description:
Verify that password reset fails when the new password and confirmation do not match.
## Steps:
1. Provide a valid existing UserName.
2. Enter a new Password.
3. Confirm the new Password with a different value in the PasswordConfirmation field.
4. Attempt to reset the password.
## Expected Outcome:
- Password reset fails.
- System prompts the user that the Password and PasswordConfirmation must match.

**Password Reset with Missing Password:**
## Description:
Verify that password reset fails when the new password is missing.
## Steps:
1. Provide a valid existing UserName.
2. Leave the Password field blank.
3. Confirm the new Password by entering it in the PasswordConfirmation field.
4. Attempt to reset the password.
## Expected Outcome:
- Password reset fails.
- System prompts the user to fill in the Password field as it is required.

**Password Reset with Missing UserName:**
## Description:
Verify that password reset fails when the UserName is missing.
## Steps:
1. Leave the UserName field blank.
2. Enter a new Password.
3. Confirm the new Password by entering it in the PasswordConfirmation field.
4. Attempt to reset the password.
## Expected Outcome:
- Password reset fails.
- System prompts the user to fill in the UserName field as it is required.
