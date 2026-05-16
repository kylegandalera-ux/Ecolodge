# H100 Ecolodge

Modern hotel booking website for H100 Ecolodge, built with Next.js App Router, React, and Tailwind CSS.

## Features

- Responsive luxury hotel layout for desktop, tablet, and mobile
- Home, Rooms, Booking, About, and Contact pages
- Sticky navigation with mobile menu
- Reusable components for navbar, footer, rooms, amenities, testimonials, and booking form
- Room filtering by type and price range
- Booking form with basic validation and confirmation message
- Real H100 Ecolodge room photos and current room rates
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
4. Make sure the Vercel project root is this folder, `create-a-modern-hotel-booking-website`.
5. Keep the framework preset as **Next.js**.
6. Use the default build settings:

```text
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

7. Click **Deploy**.

## If You See 404 Not Found

- Open `http://localhost:3000`, not a file path like `app/page.tsx`.
- Run the app from this exact project folder:

```bash
cd create-a-modern-hotel-booking-website
npm install
npm run dev
```

- On Vercel, set the project root directory to `create-a-modern-hotel-booking-website` if your repository contains a parent folder.
- If Vercel was deployed before these files were added, redeploy the latest commit.

## Notes

- Room and hotel content is currently stored in local files under `data/`.
- The booking form displays a local confirmation message only.
- Replace the Google Maps placeholder with an embedded map before production launch.
