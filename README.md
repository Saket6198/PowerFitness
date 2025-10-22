# 🚀 PowerFitness

A **production-grade** React Native fitness application built with cutting-edge technologies, featuring advanced animations, seamless API integration, and sophisticated navigation patterns.

![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NativeWind](https://img.shields.io/badge/NativeWind-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Native Reanimated](https://img.shields.io/badge/%F0%9F%A6%84-react%20native%20reanimated-blue?labelColor=blue&color=lightgray
)
![React Native Snap Carousel](https://img.shields.io/badge/React_Native_Snap_Carousel-FF9500?style=for-the-badge&logo=react&logoColor=white)

## 🏗️ Architecture & Tech Stack

### **Core Technologies**
- **React Native 0.81.4** with **New Architecture** enabled
- **Expo SDK 54** with **expo-router** file-based routing
- **TypeScript 5.9** for type safety
- **NativeWind** (Tailwind CSS for React Native)


### **Advanced Features**
- **React Native Reanimated** for complex animations
- **React Native Modal** with gesture-based interactions
- **React Native Gesture Handler** for touch optimizations
- **React Native Snap Carousel** for smooth image carousels
- **Responsive Screen** utilities for cross-device compatibility
- **Axios** for robust API communication

### **Navigation & State**
- **Expo Router** with typed routes and nested navigation
- **React Navigation Stack** with custom modal configurations
- **Context-based state management**

## 🎨 UI/UX Excellence

Find the source, report issues, or contribute via the repository above.

### **Animation System**
```tsx
// Complex staggered animations with spring physics
<Animated.View entering={FadeInDown.duration(600).delay(index*200).springify()}>
```

### **Modal Architecture**
- **Custom modal stack** with Android gesture support
- **Swipe-to-dismiss** with configurable thresholds
- **Backdrop press handling** with smooth animations
- **ScrollView integration** with gesture conflict resolution

### **Responsive Design**
- **Percentage-based dimensions** (hp/wp utilities)
- **Cross-platform compatibility** (iOS, Android, Web)
- **Adaptive layouts** with flexbox optimizations

## 🔧 Technical Implementation

### **File Structure**
```
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root navigation config
│   ├── index.tsx          # Landing page
│   ├── home.tsx           # Main dashboard
│   ├── exerciseDetails.tsx # Modal exercise viewer
│   └── exercises/
│       ├── _layout.tsx    # Exercise navigation
│       └── [name].tsx     # Dynamic body part pages
├── components/            # Reusable UI components
│   ├── BodyParts.jsx      # Animated body part grid
│   ├── ExerciseList.jsx   # Exercise card grid
│   └── ImageSlider.jsx    # Carousel component
├── api/                   # External API integration
├── constants/             # App configuration
└── assets/               # Static resources
```

### **API Integration**
```typescript
// Paginated REST API with error handling
const apiCall = async (bodyPart: string) => {
  const options = {
    method: "GET",
    url: `https://www.exercisedb.dev/api/v1/bodyparts/${bodyPart}/exercises?offset=0&limit=50`,
  };
  // Robust error handling with fallbacks
};
```

### **Navigation Patterns**
```tsx
// Complex modal navigation with gesture support
<JsStack.Screen
  name="exerciseDetails"
  options={{
    presentation: "modal",
    gestureEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
  }}
/>
```

## 🚀 Key Features

### **🏠 Dashboard**
- **Hero section** with gradient typography
- **Image carousel** with smooth transitions
- **Body parts grid** with staggered animations
- **Responsive profile avatar**

### **💪 Exercise Library**
- **10 body part categories** (chest, back, legs, etc.)
- **Dynamic exercise loading** via REST API
- **Real-time search** and filtering
- **Pagination support** for large datasets

### **📱 Exercise Details**
- **Full-screen modal** with gesture dismissal
- **Animated content reveal** with spring physics
- **Scrollable instructions** with gesture handling
- **High-quality exercise GIFs**

### **🎭 Animations**
- **FadeInDown** with configurable delays
- **Spring-based** entrance animations
- **Staggered grid layouts**
- **Gesture-driven transitions**

## 🛠️ Development Setup

### **Prerequisites**
- **Node.js** 18+
- **Expo CLI** installed globally
- **Android Studio** (for Android development)
- **Xcode** (for iOS development)

### **Installation**
```bash
# Clone repository
git clone https://github.com/Saket6198/PowerFitness.git
cd powerfitness

# Install dependencies
pnpm install

# Start development server
pnpm start

# Run on specific platform
pnpm android  # Android
pnpm ios      # iOS
pnpm web      # Web
```

### **Build Commands**
```bash
# Development builds
expo run:android
expo run:ios

# Production builds
eas build --platform android --profile production
eas build --platform ios --profile production
```

## 📊 Performance Optimizations

### **Bundle Optimization**
- **Tree shaking** with Expo's bundler
- **Lazy loading** for route-based code splitting
- **Image optimization** with Expo's asset system

### **Runtime Performance**
- **Reanimated animations** on UI thread
- **Gesture handler** optimizations
- **Memory-efficient** component architecture
- **Debounced API calls**

### **Platform Specific**
- **Android edge-to-edge** support
- **iOS predictive back gestures** disabled
- **Web static generation** enabled

## 🔒 Production Ready

### **Error Handling**
- **API failure fallbacks**
- **Loading state management**
- **Graceful degradation**
- **User feedback systems**

### **Type Safety**
- **Full TypeScript coverage**
- **Strict type checking**
- **Interface definitions**
- **Runtime validation**

### **Testing Strategy**
- **Component testing** setup
- **API integration tests**
- **E2E testing** with Detox
- **Performance monitoring**

## 📈 Analytics & Monitoring

### **Performance Metrics**
- **App startup time**
- **Animation frame rates**
- **Memory usage**
- **Network request latency**

### **User Analytics**
- **Exercise completion rates**
- **Navigation patterns**
- **Session duration**
- **Crash reporting**

