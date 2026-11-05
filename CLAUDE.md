# CLAUDE.md

Claude reads this file at the start of every session. It's your project's standing brief: who it's for, what it is, and the house rules. Fill in the sections marked ✏️ before you ask Claude to build anything, and update them as the project changes.

## ✏️ About this project

- **What we're building:** "Off the Map London", a one-page guide to good, non-touristy restaurants in London.
- **Who it's for:** Londoners looking for their next new local spot to try. They'll mostly check it on their phones, so design for mobile first.
- **What "done" looks like today:**
  - About 10 real restaurants, each with its name, area, type of food and a one-line description.
  - Filter buttons for area (e.g. "East London") and type of food (e.g. "Thai").
  - A "Tried it" tick on each restaurant, saved in the browser's localStorage. This only saves on that phone and in that browser.

### About the restaurant data
- The restaurants are **real**. This is an agreed exception to the "made-up data only" rule below. It covers public restaurant facts only and nothing else.
- Research the list from the web. Choose well-regarded places that aren't touristy, spread across different areas and cuisines.
- Write each one-line description in our own neutral words. Never copy reviews, quotes or star ratings from Google or anywhere else.
- Give each restaurant a "See reviews on Google Maps" link so people can read the live reviews there.
- Details can go out of date, so show a "Last checked: [month year]" note and ask me to check the list before sharing it.

## ✏️ Look and feel

- **Brand:** Off the Map London. Warm and cosy, like a bistro menu: a cream background with earthy colours such as terracotta and olive. Use Google Fonts, with a characterful serif for headings and a clean, readable font for body text.
- **Tone:** Warm, friendly and local, like a tip from a friend who lives here. Not salesy and not like a tourist guide.
- **Reference:** Cosy, independent restaurant menus and chalkboards.

## About me

I'm not a developer. Explain what you're doing in plain English, keep explanations short, and avoid jargon. If you use a technical term, explain it in a few words.

## House rules

### How the project is built
- Plain HTML, CSS and JavaScript only. No frameworks, no build step and no npm packages unless I ask for them.
- `index.html` is the home page. Keep the project to a handful of files.
- The site is hosted on Vercel, which serves these files exactly as they are. Nothing needs installing or compiling.
- There is no server or database. If something needs saving, use the browser's localStorage, and tell me plainly that it only saves on this device and this browser.

### Data and safety
- This site is public. Anyone with the link can see it, and the code is on GitHub.
- Use made-up data only. Never add real client, product, patient or colleague information, even if I paste it in by mistake. If I do, stop and point it out.
- Never add passwords, API keys or other secrets.
- Keep the footer line that says this is a training exercise.

### Quality
- Make it work well on a phone as well as a laptop.
- Make it accessible: good colour contrast, alt text on images, real headings and buttons.
- Fonts from Google Fonts are fine. Images should be ones you draw yourself (SVG or CSS) or plain placeholders.

### How to work with me
- Before a big change, tell me what you plan to do in two or three bullet points.
- After each change, tell me in one or two sentences what changed and how to see it.
- Commit with short, clear messages that a non-developer would understand.
- If I ask for something that breaks these rules, say so and suggest the nearest thing that doesn't.
