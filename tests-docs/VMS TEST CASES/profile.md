1. ModelName = Profile

 # ModelAttributes
 Name-Not Null,
 Email-Null,
 PhoneNumber-Null


# Positive Test Cases

## Valid Profile Creation:
* **Description:** Verify that a new profile can be successfully created with all required fields filled correctly.
* **Steps:**
  1. Provide a valid Name for the profile.
  2. Attempt to create the profile.
* **Expected Outcome:**
  - Profile is successfully created without errors.
  - The new profile appears in the system with the provided Name.

## Profile Creation with Email and PhoneNumber:
* **Description:** Verify that a new profile can be created with a valid Name, Email, and PhoneNumber.
* **Steps:**
  1. Provide a valid Name.
  2. Provide a valid Email.
  3. Provide a valid PhoneNumber.
  4. Attempt to create the profile.
* **Expected Outcome:**
  - Profile is successfully created without errors.
  - The new profile appears in the system with the provided Name, Email, and PhoneNumber.

# Negative Test Cases

## Invalid Profile Creation - Missing Name:
* **Description:** Verify that profile creation fails when the required "Name" field is missing.
* **Steps:**
  1. Leave the "Name" field empty.
  2. Attempt to create the profile.
* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user to fill in the "Name" field as it is required.
  - No profile should be created without the essential "Name" information.

## Invalid Profile Creation - Invalid Email:
* **Description:** Verify that profile creation fails when an invalid Email is provided.
* **Steps:**
  1. Provide a valid Name.
  2. Provide an invalid Email.
  3. Attempt to create the profile.
* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user that the provided Email is not valid.

## Invalid Profile Creation - Invalid PhoneNumber:
* **Description:** Verify that profile creation fails when an invalid PhoneNumber is provided.
* **Steps:**
  1. Provide a valid Name.
  2. Provide an invalid PhoneNumber.
  3. Attempt to create the profile.
* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user that the provided PhoneNumber is not valid.

## Invalid Profile Creation - Duplicate Email:
* **Description:** Verify that profile creation fails when attempting to create a profile with an Email that already exists in the system.
* **Steps:**
  1. Provide a valid Name.
  2. Provide an existing Email.
  3. Attempt to create the profile.
* **Expected Outcome:**
  - Creation fails.
  - The system prompts the user that the provided Email already exists and suggests providing a unique Email.
