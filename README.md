# FlavorForecast

FlavorForecast is a React web application that allows users to find weather information for their current location and get recipe suggestions based on the weather conditions. The app integrates three APIs: Geolocation API to get the user's location, WeatherAPI to fetch weather data, and the Edamam Recipe API to provide recipe suggestions. Additionally, the navigation bar background dynamically changes based on the weather conditions.

## Table of Contents

- [Features](#features)
- [API Integration](#api-integration)
  - [Geolocation API](#geolocation-api)
  - [WeatherAPI](#weatherapi)
  - [Edamam Recipe API](#edamam-recipe-api)
- [Changing Navigation Bar Background](#changing-navigation-bar-background)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### **Weather Information:**
  - Get real-time weather data for your current location.
 
### **Recipe Suggestions:**
  - Receive recipe suggestions based on the weather conditions.

### **Dynamic Navigation:**
  - The navigation bar background color changes according to the current weather.
 
## API Integration

- **Geolocation API**
  - The Geolocation API is used to obtain the user's current location. This information is essential for fetching weather data and recipe suggestions relevant to the user's region.

- **WeatherAPI**
  - The WeatherAPI is used to retrieve weather data for the user's location, including temperature, humidity, and weather conditions. The data is displayed in the app, and it influences the recipe suggestions.

- **Edamam Recipe API**
  - The Edamam Recipe API is utilized to provide recipe suggestions tailored to the current weather conditions. Recipes are fetched and displayed based on the user's location and the weather.
 
## Changing Navigation Bar Background

The navigation bar background dynamically changes based on the current weather conditions. For example, it will show fall leaves during the Fall, snow during the winter, or rain for rainy days. This provides a visual indicator of the current weather to the user.


## Getting Started

### Prerequisites

Make sure you have the following software and tools installed on your system:

- Node.js and NPM: You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/PriscillaOng12/FlavorForecast.git
   ```
   
2. Navigate to the project's root

   ```bash
   cd FlavorForecast
   ```

3. Install the required dependencies

   ```bash
   npm install
   ```

4. Replace the API keys in the code (follow instructions on the comments in the code)

5. Start the development server:
   
   ```bash
   npm start
   ```

## Usage

1. Open the app in your web browser.
2. The app will request permission to access your location. Grant permission to get your current location.
3. Once your location is obtained, the app will display the weather conditions for your area and provide recipe suggestions based on the weather.

## Contributing

Contributions to enhance the functionality of this web app are very much appreciated. To contribute, follow these steps:

Fork the repository on GitHub.
Clone your fork to your local machine.
Create a new branch for your feature or bug fix.
Make your changes and test them thoroughly.
Commit your changes and push them to your fork.
Create a pull request to the main repository.

## License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project as per the terms of the MIT License.




