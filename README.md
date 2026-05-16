# Ecolodge H100

Modern hotel booking website for Azure Haven Hotel, built with Next.js App Router, React, and Tailwind CSS.

## Features

- Responsive luxury hotel layout for desktop, tablet, and mobile
- Home, Rooms, Booking, About, and Contact pages
- Sticky navigation with mobile menu
- Reusable components for navbar, footer, rooms, amenities, testimonials, and booking form
- Room filtering by type and price range
- Booking form with basic validation and confirmation message
- No database, payments, or external booking system required

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local site:

```text
http://localhost:3000
```

4. Create a production build:

```bash
npm run build
```

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com) and choose **Add New Project**.
3. Import the repository.
4. Keep the default framework preset as **Next.js**.
5. Use the default build settings:

```text
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

6. Click **Deploy**.

## Notes

- Room and hotel content is currently stored in local files under `data/`.
- The booking form displays a local confirmation message only.
- Replace placeholder contact details, map placeholder, and image URLs before production launch.
