# Angular Tic-tac-toe Game

A simple Tic-tac-toe game built with Angular 19.2.0, featuring Jest for testing.

## Project Overview

This project is a classic Tic-tac-toe implementation where:
- Two players (X and O) take turns
- The game detects winning combinations
- Players can restart the game at any time

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Technical Stack

- **Framework**: Angular ~19.2.0
- **Testing**: Jest ^29.7.0
- **Language**: TypeScript ~5.8.0

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MimozaDili/angular-tic-tac-toe.git
```

2. Navigate to the project directory:
```bash
cd angular-tic-tac-toe
```

3. Install dependencies:
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode. Open [http://localhost:4200](http://localhost:4200) to view it in the browser.
- `npm test` - Launches the Jest test runner
- `npm run test:watch` - Runs tests in watch mode
- `npm run build` - Builds the app for production to the `dist` folder
- `npm run watch` - Builds the app in watch mode for development

## Testing

The project uses Jest for testing. Test files are located next to the components they test with the `.spec.ts` extension.

To run tests:
```bash
npm test
```

For continuous testing during development:
```bash
npm run test:watch
```

## Project Structure

```
my-angular-app/
├── src/
│   ├── app/
│   │   ├── tic-tac-toe/
│   │   │   ├── tic-tac-toe.component.ts
│   │   │   ├── tic-tac-toe.component.spec.ts
│   │   │   ├── tic-tac-toe.component.html
│   │   │   └── tic-tac-toe.component.css
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   └── environments/
├── jest.config.js
├── package.json
└── tsconfig.json
```

## Dependencies

### Main Dependencies
- @angular/animations: ~19.2.0
- @angular/common: ~19.2.0
- @angular/compiler: ~19.2.0
- @angular/core: ~19.2.0
- @angular/forms: ~19.2.0
- @angular/platform-browser: ~19.2.0
- @angular/platform-browser-dynamic: ~19.2.0
- @angular/router: ~19.2.0
- rxjs: ~7.8.0
- zone.js: ~0.15.0

### Development Dependencies
- Jest: ^29.7.0
- jest-preset-angular: ^13.1.6
- ts-jest: ^29.4.0
- TypeScript: ~5.8.0

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Mimoza Dili
