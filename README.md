# MedClinic

Find more details about MedClinic on my Medium article: [Introducing MedClinic: Revolutionizing Healthcare Management](https://medium.com/@bharghavasagarmandadi2022/introducing-medclinic-revolutionizing-healthcare-management-e8e32817a78d).

Explore MedClinic at: [https://medclinic-kappa.vercel.app/](https://medclinic-kappa.vercel.app/).

MedClinic is a web application that streamlines the process of scheduling medical appointments, managing patient records, and conducting virtual video consultations between doctors and patients.

## Getting Started

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install` after checking into the respective server and client folder.

## Testing Credentials 

- **Admin**:
  - Username: admin
  - Password: admin123

- **Patient**:
  - Username: priya
  - Password: 1234

- **Doctor**:
  - Username: shankar
  - Password: 1234

## Running the Application in local environment

-  Install all the required dependencies for both the server and client with a single command npm run install:all in the root folder. Afterward, start both the server and client simultaneously by running npm start.
- The client application will be accessible at http://localhost:3000. The server will run on a different port, and the client will proxy requests to it.

## Features

- **User Authentication**: Patients and Admin can log in to their accounts.
- **Appointments**: Patients can schedule appointments with doctors. Doctors can approve or cancel appointments.
- **Medical Records**: Doctors can manage patients' medical records and prescriptions.
- **Video Consultations**: Virtual video consultations are available for approved appointments.

## Dependencies

- Node.js
- Express
- SQLite
- React JS
- Redux
- Tailwind CSS
- Third-party APIs for video consultations (Jitsi Meet)

## Notes

- Make sure you have installed all the npm dependencies before running.

## Contributing

Contributions to the project are welcome! Please submit any bug reports, feature requests, or pull requests through GitHub.
