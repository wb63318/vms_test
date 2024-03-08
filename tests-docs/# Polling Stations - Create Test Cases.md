# Polling Stations - Test Cases

## Create

### Positive Test Case

#### Valid Input - All Fields Provided

- **Description:** Verify successful creation of a Polling Station with all required fields filled correctly.
- **Steps:**
  1. Provide valid values for Name, Polling Station, From letter, To letter, and Notes.
  2. Create the Polling Station.
- **Expected Outcome:**
  - Polling Station is successfully created without errors.
  - New Polling Station appears in the system with provided details.

### Negative Test Cases

#### Missing Name

- **Description:** Verify creation failure when Name field is missing.
- **Steps:**
  1. Leave Name field empty.
  2. Attempt to create the Polling Station.
- **Expected Outcome:**
  - Creation fails.
  - System prompts user to fill in the required Name field.

#### Missing Polling Station

- **Description:** Verify creation failure when Polling Station field is missing.
- **Steps:**
  1. Provide valid Name.
  2. Leave Polling Station field empty.
  3. Attempt to create the Polling Station.
- **Expected Outcome:**
  - Creation fails.
  - System prompts user to fill in the required Polling Station field.

---

## Edit

### Positive Test Case

#### Valid Input - Update From letter and To letter

- **Description:** Verify successful update of From letter and To letter.
- **Steps:**
  1. Retrieve existing Polling Station.
  2. Modify From letter and To letter attributes.
  3. Save changes.
- **Expected Outcome:**
  - From letter and To letter are successfully updated.
  - Updated Polling Station reflects changes in the system.

### Negative Test Cases

#### Non-existent Polling Station

- **Description:** Verify editing failure when updating a non-existent Polling Station.
- **Steps:**
  1. Attempt to retrieve a non-existent Polling Station.
  2. Modify attributes.
  3. Attempt to save changes.
- **Expected Outcome:**
  - Editing fails.
  - System notifies that the Polling Station does not exist.

#### Empty From letter or To letter

- **Description:** Verify editing failure when updating with empty From letter or To letter.
- **Steps:**
  1. Retrieve existing Polling Station.
  2. Set From letter or To letter to empty.
  3. Attempt to save changes.
- **Expected Outcome:**
  - Editing fails.
  - System prompts user to fill in the missing attributes.

---

## Search

### Positive Test Case

#### Search by Name

- **Description:** Verify successful search of Polling Stations by Name.
- **Steps:**
  1. Provide valid Name to search for.
  2. Perform search operation.
- **Expected Outcome:**
  - Polling Stations matching provided Name are retrieved successfully.
  - Search results display matching Polling Stations.

### Negative Test Cases

#### Search by Non-existent Name

- **Description:** Verify no Polling Stations found when searching for a non-existent Name.
- **Steps:**
  1. Provide non-existent Name.
  2. Perform search.
- **Expected Outcome:**
  - No Polling Stations found.
  - Search results display empty list.

