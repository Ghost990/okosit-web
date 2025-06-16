# OkosIT Website

A modern, responsive website for OkosIT built with Next.js 13 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional UI with responsive design for all device sizes
- **Dark/Light Mode**: Theme switching with persistent user preference
- **Multilingual Support**: Hungarian and English language support with language switcher
- **SEO Optimized**: Meta tags, dynamic titles, and descriptions for better search engine visibility
- **Performance Optimized**: Fast loading times with optimized assets and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA attributes

## Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Switching**: next-themes
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/okosit-web-next.git
cd okosit-web-next
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
okosit-web-next/
├── app/                   # Next.js App Router pages
├── components/            # React components
├── contexts/              # React contexts (theme, language)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
├── translations/          # Language files
│   ├── en.ts              # English translations
│   └── hu.ts              # Hungarian translations
└── types/                 # TypeScript type definitions
```

## Multilingual Support

The website supports multiple languages with a language switcher component. Currently supported languages:

- Hungarian (default)
- English

### How It Works

1. **Language Provider**: The `LanguageProvider` in `contexts/language-context.tsx` manages the current locale state and provides it to all components.

2. **Translation Files**: All user-facing text is stored in language-specific files:
   - `translations/hu.ts` - Hungarian translations
   - `translations/en.ts` - English translations

3. **useTranslations Hook**: Components use the `useTranslations` hook to access translated text based on the current locale.

4. **Language Switcher**: The `LanguageSwitcher` component allows users to change the language, which is persisted in localStorage.

5. **HTML Lang Attribute**: The `<html>` element's `lang` attribute is dynamically updated based on the selected language.

For more details on translations, see the [Translation Guide](./docs/translation-guide.md).

## Customization

### Themes

The website uses Tailwind CSS for styling with a custom color palette defined in `tailwind.config.js`. The theme colors can be customized by modifying this file.

### Content

Most of the website content is stored in the translation files and can be updated there. For more complex content changes, modify the corresponding components.

## Deployment

The website is optimized for deployment on Vercel, but can be deployed to any hosting service that supports Next.js.

### Vercel Deployment

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure environment variables if needed
4. Deploy

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspiration from modern IT service websites
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
