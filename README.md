# Sanaap Agent Registration System

A modern, full-stack React application built with React Router v7 for agent registration and verification in the insurance industry. This application provides a complete registration flow for insurance agents with multi-step form validation, OTP verification, and status tracking.

## 🚀 Features

### Core Functionality

- **Multi-step Registration Process**: Complete agent registration flow with phone verification, OTP validation, personal details, and agency information
- **OTP Verification**: SMS-based one-time password verification system
- **Real-time Form Validation**: Client-side validation using Zod schemas with React Hook Form
- **Persistent State Management**: Registration data persistence across steps using Zustand
- **Status Tracking**: Real-time registration status monitoring (pending, approved, rejected)
- **RTL Support**: Full right-to-left language support for Persian/Farsi interface

### Technical Features

- **Server-Side Rendering (SSR)**: Built with React Router v7 for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Material-UI**: Modern, accessible UI components with custom RTL theme
- **React Query**: Efficient data fetching and caching
- **Form Management**: Advanced form handling with validation and error states
- **Toast Notifications**: User feedback system for actions and errors
- **Responsive Design**: Mobile-first responsive design

## 🏗️ Architecture

### Project Structure

```
├── app/
│   ├── api/                    # API layer and data fetching
│   │   ├── auth.ts            # Authentication endpoints
│   │   ├── user.ts            # User status and profile
│   │   ├── base.ts            # Base data (provinces, counties)
│   │   ├── app.ts             # Application-specific APIs
│   │   └── provider.tsx       # React Query provider
│   ├── components/            # Reusable UI components
│   │   ├── forms/             # Form components
│   │   ├── icons/             # Icon components
│   │   ├── layout.tsx         # Main layout wrapper
│   │   ├── select.tsx         # Custom select component
│   │   ├── countdown.tsx      # Countdown timer
│   │   └── toast.tsx          # Toast notification system
│   ├── routes/                # Application routes
│   │   ├── register/          # Registration flow pages
│   │   │   ├── phone-number.tsx
│   │   │   ├── otp.tsx
│   │   │   ├── name.tsx
│   │   │   └── details.tsx
│   │   └── main.tsx           # Main status page
│   ├── stores/                # State management
│   │   ├── auth.ts            # Authentication state
│   │   └── registration.ts    # Registration form state
│   ├── utils/                 # Utility functions
│   │   └── regex.ts           # Validation patterns
│   ├── root.tsx               # Root component and providers
│   ├── routes.ts              # Route configuration
│   ├── theme.ts               # Material-UI theme configuration
│   └── app.css                # Global styles
├── public/                    # Static assets
├── build/                     # Production build output
├── package.json               # Dependencies and scripts
└── vite.config.ts            # Vite configuration
```

### Technology Stack

- **Frontend**: React 19, TypeScript, React Router v7
- **UI Framework**: Material-UI v7 with RTL support
- **State Management**: Zustand with persistence
- **Data Fetching**: TanStack React Query
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Emotion with RTL plugins
- **Build Tool**: Vite with React Router plugin
- **Package Manager**: pnpm

## 🚦 Registration Flow

### Step 1: Phone Number Entry

- User enters mobile phone number
- Client-side validation using regex pattern
- API call to generate OTP

### Step 2: OTP Verification

- User enters 6-digit OTP received via SMS
- OTP validation against server
- Automatic navigation on success

### Step 3: Personal Information

- First name and last name collection
- Data stored in registration store

### Step 4: Agency Details

- Agent code verification
- Province and city selection (cascading dropdowns)
- Insurance branch selection
- Address and contact information
- Agency type selection (real/legal)
- Final registration submission

### Step 5: Status Monitoring

- Real-time status checking
- Display appropriate message based on status:
  - **Pending**: Waiting for confirmation
  - **Approved**: Registration successful
  - **Rejected**: Registration rejected with option to restart

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm


### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sanaap-code-challenge
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

### Available Scripts

- `pnpm dev` - Start development server with HMR
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm nuke` - Clean all build artifacts and dependencies

## 🌐 API Integration

### Authentication Endpoints

- `POST /api/v2/app/DEY/agent/verification/signup/create_otp/` - Generate OTP
- `POST /api/v2/app/DEY/agent/verification/signup/validate_otp/` - Validate OTP
- `POST /api/v2/app/DEY/agent/verification/signup/check_agency_code/` - Verify agent code
- `POST /api/v2/app/DEY/agent/verification/signup/` - Complete registration

### Data Endpoints

- `GET /api/v2/app/DEY/agent/app_user_status/` - Get user registration status
- `GET /base/provinces_wop/` - Get provinces list
- `GET /base/counties_wop/` - Get counties by province
- `GET /api/v2/app/selection_item/insurance_branch/wop_list/` - Get insurance branches

## 🎨 Theming and Styling

### RTL Support

- Complete right-to-left language support
- Custom Material-UI theme with RTL configuration
- Persian/Farsi typography with IRANSansFaNum font
- RTL-aware component styling

### Color Palette

- **Primary**: #017785 (Teal)
- **Secondary**: #f86534 (Orange)
- **Success**: #1CAE81 (Green)
- **Error**: #e14856 (Red)
- **Warning**: #FC9C2E (Orange)

### Typography

- Custom font size variants (12px to 96px)
- Optimized line heights for Persian text
- Consistent spacing and hierarchy

## 🔧 Configuration

### Environment Variables

The application uses environment variables for API configuration. Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=your_api_base_url
```

### TypeScript Configuration

- Strict type checking enabled
- Path mapping configured for clean imports
- React Router type generation

### Vite Configuration

- React Router plugin integration
- TypeScript path resolution
- Optimized build configuration

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-based responsive design
- Touch-friendly interface elements
- Optimized for various screen sizes

## 🔒 Security Features

- Input validation and sanitization
- Secure token storage with persistence
- CSRF protection through proper API integration
- XSS prevention through React's built-in protections

## 🧪 Development

### Code Quality

- TypeScript for type safety
- Prettier for code formatting
- ESLint for code linting
- Consistent code structure and patterns

### State Management

- Zustand for lightweight state management
- Persistent storage for form data
- Optimized re-renders with selective subscriptions

### Error Handling

- Comprehensive error boundaries
- User-friendly error messages
- Graceful fallbacks for API failures

## 📦 Production Build

The production build includes:

- Server-side rendering for optimal performance
- Code splitting and lazy loading
- Asset optimization and compression
- Static asset serving
- Production-ready server configuration

### Build Output

```
build/
├── client/          # Static assets
└── server/          # Server-side code
```
