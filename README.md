# IT313 Student Roster Card Renderer

## Problem
Show each enrolled student as a card with name, course, and units. A "Full Load" label shows only when `isFullLoad` is true, and the header shows the total student count from the array.

## Components
- **StudentCard** — shows one student using destructured props, with `{isFullLoad && <Text>Full Load</Text>}` and a note box.
- **StudentRoster** — holds the students in state, shows `{roster.length}`, and uses `.map()` with `key={student.id}` inside one `View`.
- **App.js** — entry point that shows `StudentRoster`.

## Key experiment
With `key={index}`, a typed note stays in the same position after reversing. With `key={student.id}`, the note follows its student.

## How to run
1. `npm install`
2. `npx expo start`
3. Press `a` for the emulator, or scan the QR code with Expo Go.
