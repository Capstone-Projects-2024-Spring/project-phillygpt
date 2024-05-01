---
title: Frontend API Usage
sidebar_position: 2
---

# Frontend API Usage

This page provides detailed information on how APIs are integrated and utilized in the React frontend of the application, focusing on both external API services and internal context APIs.

## External APIs

### `useJsApiLoader`

<details open="True">
<summary>Responsible for loading the Google Maps JavaScript API dynamically. It ensures that the Google Maps services are properly loaded before attempting to render maps on the frontend.</summary>

#### Description
- This hook is part of the `@react-google-maps/api` library and is crucial for initializing Google Maps in React applications. It manages the script loading and provides a flag to indicate when the API is ready for use.

#### Parameters
- #### Object config
    - **id**: Identifier for the script tag.
    - **googleMapsApiKey**: The API key for accessing Google Maps services.

#### Returns
- #### Object state
    - **isLoaded**: Boolean indicating whether the Google Maps API has finished loading.
    - **loadError**: Contains error information if the API fails to load.

</details>

### `axios`

<details open="True">
<summary>Utilized for making HTTP requests to various backend services. This library facilitates communication between the frontend and the backend by handling network requests.</summary>

#### Description
- Axios is a HTTP client for the browser and Node.js. In the context of this application, it is used to send user queries and receive responses from our backend.

#### Example Usage
- **POST request**: Used to submit user input and receive a corresponding response from the backend.

#### Parameters
- **url**: Endpoint to which the request is sent.
- **data**: Payload of the request, typically containing user input or parameters.

#### Returns
- **Promise**: Represents the eventual completion or failure of the HTTP request, containing the response or error data.

</details>

## Context API

### `responseCtx` and `LoadingContext`

<details open="True">
<summary>Custom React contexts defined in the application to manage and distribute SQL response data and loading states across components.</summary>

#### Description
- These contexts are used to provide and manage data related to SQL queries and API responses, as well as UI loading states across different components. They are accessed using the `useContext` hook.

#### Provided Values
- **responseCtx**
    - **responseDataSQL**: The raw SQL response data.
    - **resultDataSQL**: Processed SQL data ready for display.
- **LoadingContext**
    - **isLoading**: Boolean flag indicating whether an API call is in progress.
    - **setLoading**: Function to update the loading state.

</details>

