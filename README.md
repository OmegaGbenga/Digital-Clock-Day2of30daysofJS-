# Day 2: Digital Clock - 30 Days of JavaScript Challenge

## Overview
On **Day 2** of the **30 Days of JavaScript Challenge**, I created a **Digital Clock** using HTML, CSS, and JavaScript. The clock displays the current time, updating every second.

## Features
- **Real-Time Clock**: Displays the current hours, minutes, and seconds.
- **Dynamic Updates**: The time updates every second to match the current system time.

## Technologies Used
- **HTML**: Structuring the clock elements.
- **CSS**: Styling the clock.
- **JavaScript**: Fetching and displaying the current time.

## Challenges Faced
- **Leading Zeros**:
  - **Issue**: I attempted to add leading zeros to single-digit hours, minutes, and seconds (e.g., `09:05:03` instead of `9:5:3`). The logic did not work as intended.
  - **Current Status**: The time displays correctly, but without leading zeros (e.g., `9:5:3`).

## Files in this Project
- **index.html**: Contains the structure of the digital clock.
- **style.css**: Provides the styling for the clock.
- **main.js**: Includes the JavaScript logic for fetching and displaying the time.

## How It Works
1. **Fetching Time**: The `Date` object in JavaScript retrieves the current hours, minutes, and seconds.
2. **Updating the Clock**: The time values are dynamically updated every second using the `setInterval` function.

## Future Enhancements
- **Fix Leading Zeros**: Add proper logic to prepend zeros to single-digit time values for better readability.
- **AM/PM Indicator**: Implement a 12-hour format with AM/PM display.
- **Additional Features**: Add the current date or other enhancements.

## Installation & Usage
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/OmegaGbenga/Digital-Clock-Day2of30daysofJS-/tree/master
    ```
2. **Navigate to the Project Directory**:
    ```bash
    cd Digital-Clock-Day2of30daysofJS-
    ```
3. **Open the Application**:
    - Open `index.html` in your browser to view the clock.

## License
This project is part of the **30 Days of JavaScript Challenge**. Feel free to fork and use it as a learning resource.

---

*On to Day 3 for the next challenge!*
