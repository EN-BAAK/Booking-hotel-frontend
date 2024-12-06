# Booking-Hotel-Frontend

A frontend application for a hotel booking system, designed specifically for large screens. Built using **React**, **Vite**, **TypeScript**, and **TailwindCSS**.

> **Note:** This project is based on the tutorial from [Chris Blakely's YouTube channel](https://www.youtube.com/@ChrisBlakely). Huge thanks to Chris for the original code and guidance!

---

## Features

### Pages

#### 1. **Login Page**

- Users can log in to their accounts.

#### 2. **Register Page**

- Users can register a new account.

#### 3. **Home Page**

- **Header**:
  - Search bars for finding hotels.
  - Login/Logout button.
- **Sidebar**:
  - Filters to refine search results.
- **Hotels Section**:
  - Displays a list of hotels based on search and filter criteria.

#### 4. **Hotel Page**

- Displays detailed information about a specific hotel.
- Includes a feature to pay for and book a hotel.

#### 5. **My Hotels**

- Shows all hotels added by the user.
- Option to create a new hotel.

#### 6. **My Bookings**

- Lists all hotels where the user has made bookings.

#### 7. **Create Hotel**

- Allows users to add a new hotel to the system.

---

## How to Use

### Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Navigate to the repo directory: `cd ./repo`
3. Install dependencies using `npm install`
4. Create a .env file in the root directory and add the following environment variables:
   ```
   VITE_API_BASE_URL=<your-api-base-url>
   VITE_STRIPE_PUB_KEY=<your-stripe-public-key>
   ```
5. Build the project using `npm build`
6. Clone frontend repository: `git clone https://github.com/EN-BAAK/Booking-hotel-server.git`
7. In the frontend project, copy the dist folder: `cp -r dist <path-to-backend-project>`
8. Follow the usages steps in readme file of server repo
