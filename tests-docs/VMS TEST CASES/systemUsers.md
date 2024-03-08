# Positive Test Cases

## Valid User Creation:
- **Description:** Verify that a new user can be successfully created with all required fields filled correctly.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, and Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - User is successfully created without errors.
  - The new user appears in the system with the provided information.

# Negative Test Cases

## User Creation with Missing Information:
- **Description:** Verify that creation fails when a required field (Username) is missing.
- **Steps:**
  1. Provide valid values for FullName, Email, Password, PasswordConfirmation, PhoneNumber, and Role.
  2. Leave Username blank.
  3. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user to fill in the Username field as it is required.

## User Creation with Duplicate Email:
- **Description:** Verify that creation fails when attempting to create a user with an email that already exists in the system.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, and Role.
  2. Use an email that already exists for another user.
  3. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user that the provided Email already exists and suggests providing a unique Email.

## User Creation with Weak Password:
- **Description:** Verify that creation fails when the provided password does not meet minimum strength requirements.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, a weak Password, PasswordConfirmation, PhoneNumber, and Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user that the Password must meet minimum strength requirements.

## User Creation with Invalid Role:
- **Description:** Verify that creation fails when an invalid role is provided.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, and an invalid Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System
