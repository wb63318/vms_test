 1. ModelName = UserAdministration

 # ModelAttributes
 FullName-Not Null
 Email-Null,No duplicates
 Username-Not Null,No duplicates
 Password-Not null,No duplicates
 PasswordConfirmation-Not null
 PhoneNumber-Null,No duplicates
 Region-Not null
 District-Not null
 Role-Not null

# Positive Test Case

## Valid User Creation
- **Description:** Verify that a new user can be successfully created with all required fields filled correctly.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, Region, District, and Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - User is successfully created without errors.
  - The new user appears in the system with the provided information.

# Negative Test Cases

## User Creation with Missing Information
- **Description:** Verify that creation fails when a required field (Username) is missing.
- **Steps:**
  1. Provide valid values for FullName, Email, Password, PasswordConfirmation, PhoneNumber, Region, District, and Role.
  2. Leave Username blank.
  3. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user to fill in the Username field as it is required.

## User Creation with Duplicate Email
- **Description:** Verify that creation fails when attempting to create a user with an email that already exists in the system.
- **Steps:**
  1. Provide valid values for FullName, an existing Email, Username, Password, PasswordConfirmation, PhoneNumber, Region, District, and Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user that the provided Email already exists and suggests providing a unique Email.

## User Creation with Weak Password
- **Description:** Verify that creation fails when the provided password does not meet minimum strength requirements.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, a weak Password, PasswordConfirmation, PhoneNumber, Region, District, and Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user that the Password must meet minimum strength requirements.

## User Creation with Invalid Role
- **Description:** Verify that creation fails when an invalid role is provided.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, Region, District, and an invalid Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user that the provided Role is not valid.

## User Creation with Duplicate Username
- **Description:** Verify that creation fails when attempting to create a user with a username that already exists in the system.
- **Steps:**
  1. Provide valid values for FullName, an existing Username, Email, Password, PasswordConfirmation, PhoneNumber, Region, District, and Role.
  2. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user that the provided Username already exists and suggests providing a unique Username.

## User Creation with Missing Region
- **Description:** Verify that creation fails when a required field (Region) is missing.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, District, and Role.
  2. Leave Region blank.
  3. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user to fill in the Region field as it is required.

## User Creation with Missing District
- **Description:** Verify that creation fails when a required field (District) is missing.
- **Steps:**
  1. Provide valid values for FullName, Email, Username, Password, PasswordConfirmation, PhoneNumber, Region, and Role.
  2. Leave District blank.
  3. Attempt to create the user.
- **Expected Outcome:**
  - Creation fails.
  - System prompts the user to fill in the District field as it is required.





#### Positive Test Case

1. **Valid User Creation - All Fields Provided**:

   - **Description**: Verify that a new user can be successfully created with all required and optional fields filled correctly.

   - **Steps**:
     1. Provide a valid FullName for the user.
     2. Optionally provide a valid Email, Username, Password, PasswordConfirmation, PhoneNumber, Region, District, and Role.
     3. Attempt to create the user.

   - **Expected Outcome**:
     - User is successfully created without errors.
     - The new user appears in the system with the provided information.

#### Negative Test Cases

2. **Invalid User Creation - Missing FullName**:
   - **Description**: Verify that user creation fails when the required "FullName" field is missing.
   - **Steps**:
     1. Leave the "FullName" field empty.
     2. Optionally provide valid values for other fields.
     3. Attempt to create the user.
   - **Expected Outcome**:
     - Creation fails.
     - The system prompts the user to fill in the "FullName" field as it is required.
     - No user should be created without the essential "FullName" information.

3. **Invalid User Creation - Duplicate Username**:
   - **Description**: Verify that user creation fails when attempting to use a Username that already exists in the system.
   - **Steps**:
     1. Provide a valid FullName.
     2. Choose a Username that already exists for another user.
     3. Optionally provide valid values for other fields.
     4. Attempt to create the user.
   - **Expected Outcome**:
     - Creation fails.
     - System prompts the user that the provided Username already exists, suggesting a unique Username.

4. **Invalid User Creation - Mismatched Password and Password Confirmation**:
   - **Description**: Verify that user creation fails when the "Password" and "Password Confirmation" fields do not match.
   - **Steps**:
     1. Provide a valid FullName.
     2. Provide a new Password and a different value for Password Confirmation.
     3. Optionally provide valid values for other fields.
     4. Attempt to create the user.
   - **Expected Outcome**:
     - Creation fails.
     - The system prompts the user that the "Password" and "Password Confirmation" do not match.

5. **Invalid User Creation - Missing Region**:
   - **Description**: Verify that user creation fails when the required "Region" field is missing.
   - **Steps**:
     1. Provide a valid FullName.
     2. Optionally provide valid values for other fields.
     3. Leave the "Region" field empty.
     4. Attempt to create the user.
   - **Expected Outcome**:
     - Creation fails.
     - The system prompts the user to fill in the "Region" field as it is required.
     - No user should be created without the essential "Region" information.
