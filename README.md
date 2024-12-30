# Weather Dashboard

# Weather Dashboard

A personalized weather application that provides real-time weather updates and forecasts. Built with vanilla JavaScript and Bootstrap, this app features user authentication, theme customization, and integration with the OpenWeatherMap API.

## Features

- User authentication system with secure local storage
- Real-time weather updates every 30 seconds
- 5-day weather forecast
- Dark/Light mode toggle with persistent preferences
- Customizable location settings via zip code

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5
- OpenWeatherMap API

## Key Components

### Authentication System

Implements a secure user registration and login system using localStorage for data persistence and cookies for session management.

### Weather Integration

Leverages the OpenWeatherMap API to provide:

- Current weather conditions
- Automated 30-second weather updates
- Detailed 5-day weather forecasts

### User Interface

Features a clean, responsive design with:

- Intuitive navigation bar
- Dark/Light mode toggle
- Settings panel for user preferences
- Weather condition icons

## Pages

- **Login:** Secure user authentication with email and password
- **Registration:** New user signup with email, password, and location setup
- **Home:** Personalized dashboard with user's location and quick access to weather information
- **Current Weather:** Real-time weather updates with automatic refresh
- **5-day Forecast:** Extended weather prediction view
- **Settings:** User preference management including location and theme settings

## API Configuration

To use this application, you'll need to:

- Sign up for an OpenWeatherMap API key at https://openweathermap.org
- Add your API key to the configuration file
