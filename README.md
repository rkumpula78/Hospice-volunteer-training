# Hospice Volunteer Training Program

A comprehensive web-based training platform for hospice volunteers, providing interactive modules, assessments, and certification tracking.

## Features

- **Interactive Training Modules**: 11 comprehensive modules covering essential hospice care topics
- **Progress Tracking**: Real-time progress monitoring and completion status
- **Knowledge Assessments**: Module quizzes and final assessment
- **Certificate Generation**: Automatic certificate generation upon completion
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User Management**: Individual user tracking and progress saving

## Project Structure

```
volunteer-training/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── data/
│   ├── hospice_communication_skills_guide.csv
│   ├── hospice_volunteer_training_checklist.csv
│   └── hospice_volunteer_training_modules.csv
├── images/
│   └── hospice_training_modules.png
└── index.html
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic internet connection for loading Font Awesome icons

### Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd volunteer-training
   ```

3. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

4. Open your browser and visit:
   ```
   http://localhost:8000
   ```

## Usage

1. **Login/Registration**
   - Enter your full name, email, and organization details
   - Set your training start date

2. **Training Modules**
   - Navigate through modules using the sidebar
   - Complete each module's content and quiz
   - Track your progress in real-time

3. **Final Assessment**
   - Take the comprehensive final assessment
   - Score 80% or higher to pass

4. **Certificate**
   - Generate and print your completion certificate
   - Certificate includes your name, completion date, and score

## Development

### Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (Vanilla)
- Font Awesome for icons
- CSV for data storage

### Customization

- **Styling**: Modify `css/style.css` to change the appearance
- **Content**: Update CSV files in the `data/` directory to modify training content
- **Functionality**: Edit `js/app.js` to modify application behavior

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icon set
- Hospice care professionals for content guidance
- Open source community for inspiration and tools

## Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ for hospice care volunteers 