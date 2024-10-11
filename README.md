# Student Details Lookup

A single-page web application that retrieves student details from a google sheet and renders the information based on the student's roll number searched. This application is built using ReactJS, ExpressJS, NodeJS, and integrates with Google Sheets.

## Key Features

- Retrieve and display student details based on roll number input.
- Google Sheet hosted on Google Drive for data storage.
- Real-time rendering of student information on a clean, responsive user interface.
- Data security features to preserve the privacy of student information.
- Built using modern web technologies like React, Express, Node.
- Added support for CSV parsing with **Papaparse**.
- Cross-origin requests handled using **CORS**.

## Installation Instructions

### Backend Setup (Root Directory)

1. Clone the repository:
   ```bash
   git clone https://github.com/dsaikiran01/student-details-lookup.git
   cd student-details-lookup
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
   Backend dependencies include:
   - `express` for the backend server.
   - `axios` for making HTTP requests.
   - `googleapis` for interacting with Google Sheets.
   - `cors` for handling cross-origin resource sharing.

3. Set up Google Drive API access:
   - Enable the Google Sheets API and generate credentials for the project.
   - Place your credentials in a `.env` file in the root directory.
   - Example `.env` file:
     ```plaintext
     GOOGLE_SHEETS_API_KEY=your_api_key
     ```

4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend Setup (Inside `student-details-frontend/` folder)

1. Navigate to the frontend folder:
   ```bash
   cd student-details-frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
   Frontend dependencies include:
   - `react` for building the UI.
   - `axios` for making HTTP requests to the backend.
   - `papaparse` for handling CSV parsing from the Google Sheets data.

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage Instructions

- Once both servers are running (frontend and backend), the application can be accessed through the frontend.
- Open the browser and navigate to the local server URL (e.g., `http://localhost:3000`). 
- Enter the student's roll number in the search bar, and the details will be fetched from the Google Drive-hosted Google Sheet and displayed.

## Visual Previews

- **Screenshots:**
  1. Student Details Lookup - Roll Number Search Interface
![Screenshot from 2024-10-11 14-38-40](https://github.com/user-attachments/assets/4a1ed76d-f78e-46a3-b448-f47f7fe8fae9)

  2. Fetched Student Details Display
![Screenshot from 2024-10-11 14-40-16](https://github.com/user-attachments/assets/f7759556-4b41-4826-ad07-6f9e746ef2f1)

- **Demo GIF:**  
  A demo GIF showcasing the workflow of searching for a student's details will be added here.
![student_details](https://github.com/user-attachments/assets/7066ffce-32e3-4fe3-a429-eb43f703b05e)

## Additional Information

- **Known Issues:** Ensure the Google Sheets API credentials are correctly set up to avoid any connection issues.
- **Future Enhancements:** Adding more security measures, improving error handling for invalid roll numbers, and refining UI/UX.
