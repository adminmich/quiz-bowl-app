# Quiz Bowl

Online general-knowledge quiz app for grades 5 to 12.

- Subjects: Math, Science, English, History, Geography, or Mixed.
- Question types: multiple choice, fill in the blank, guess the word.
- Difficulty: Level 1 to Level 5 (higher = harder + less time).
- Sign-in remembered locally so students land back on the subject picker.
- Web Audio quiz-bowl sounds (start, correct, wrong, tick, time-up, victory).
- Timer per question with a visual bar and warning tone in the last 5 seconds.
- End-of-level results with review of every missed question and the correct answer.

## Run locally

```
npx serve public -l 3000
```

## Deploy

Deployed on Vercel; every push to `main` may be promoted with `npx vercel --prod`.
