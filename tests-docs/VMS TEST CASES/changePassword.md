1. ModelName = Profile

 # ModelAttributes
 Name-Not Null,
 New Password - Not Null,
 PasswordConfirmation - Not Null



# Valid Profile Creation - All Fields Provided:
* **Description:** Verify that a new profile can be successfully created with all required fields filled correctly.

* **Steps:**
  1. Provide a valid Name for the profile.
  2. Provide a valid New Password.
  3. Confirm the password by providing a valid Password Confirmation.
  4. Attempt to create the profile.

* **Expected Outcome:**
  - Profile is successfully created without errors.
  - The new profile appears in the system with the provided Name and associated password.

# Negative Test Cases
## Invalid Profile Creation - Missing Name:

* **Description:** Verify that profile creation fails when the required "Name" field is missing.

* **Steps:**
  1. Leave the "Name" field empty.
  2. Provide a valid New Password.
  3. Confirm the password by providing a valid Password Confirmation.
  4. Attempt to create the profile.

* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user to fill in the "Name" field as it is required.
  - No profile should be created without the essential "Name" information.

## Invalid Profile Creation - Missing New Password:

* **Description:** Verify that profile creation fails when the required "New Password" field is missing.

* **Steps:**
  1. Provide a valid Name for the profile.
  2. Leave the "New Password" field empty.
  3. Confirm the password by providing a valid Password Confirmation.
  4. Attempt to create the profile.

* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user to fill in the "New Password" field as it is required.
  - No profile should be created without the essential "New Password" information.

## Invalid Profile Creation - Passwords Do Not Match:

* **Description:** Verify that profile creation fails when the "New Password" and "Password Confirmation" fields do not match.

* **Steps:**
  1. Provide a valid Name for the profile.
  2. Provide a valid New Password.
  3. Provide a different value for Password Confirmation.
  4. Attempt to create the profile.

* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user that the "New Password" and "Password Confirmation" do not match.
  - No profile should be created with mismatched password fields.
