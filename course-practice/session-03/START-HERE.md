# Start here · Open Shed Session 3

**Build the first text-based AI Coach** · Classroom walk-along · Mac and Windows

This practice uses fictional inputs and scripted replies to show how the server checks a Coach answer before presenting it. It uses the public starter from Session 3, edition `open-shed-session-03-assessed-v1`, package 1. Your assigned workbook in **My coursework → Session 3** governs assessment.

## 1. Open the exercise

1. Download the **Session 3 practice ZIP** from [Open Shed Session 3](https://ai-agentic-project-hub.neo-dabuda.chatgpt.site/course/open-shed?session=3).
2. On a Mac, double-click the ZIP to extract it. On Windows, right-click it and choose **Extract All**. Use a fresh location if you already have a practice copy.
3. Open the extracted `open-shed-session-03-practice` folder in Codex. On Windows you may need to open a second folder inside the first one. Open the folder where you can see `README.md`, `LEARNER.md`, `scripts` and `practice` together.
4. Ask Codex to read `README.md`, `LEARNER.md`, `src/scenarios.mjs`, and the two `practice/accept-answer` files. Have it explain what the answer checker should accept before changing any code.

## 2. Run the unchanged starter

Use the trainer-prepared **Node 22.14.0**. Run **Start Session 3.command** on a Mac or **Start Session 3.cmd** on Windows. In the Codex terminal, you can also run `node run-session-3.mjs` from the practice folder. The launcher runs only the checks in the next box, never installs dependencies, and makes no provider calls. If your system blocks the launcher, follow the manual steps below without overriding its warning.

For the manual route, open a terminal in the folder containing `README.md`. Run each line separately. If the first command shows a different version, stop and ask your trainer for Node 22.14.0. If setup or the core checks fail, keep the output and ask for help before editing.

```text
node --version
node scripts/check-setup.mjs
node --import ./scripts/offline-guard.mjs --test "test/*.test.mjs"
node --import ./scripts/offline-guard.mjs scripts/demo.mjs
node --import ./scripts/offline-guard.mjs --test practice/accept-answer.test.mjs
```

| Check | Expected in the untouched starter |
| --- | --- |
| Setup | `v22.14.0` and `"ready": true` |
| Core tests | **26 pass, 0 fail** |
| Local mock demo | Valid answer, one correction, and exhausted stop. Zero provider requests and actual usage `null`. |
| Separate practice tests | **3 pass, 6 fail by design**. Save the actual output before editing. |

## 3. Repair one file and check it again

Read the public contract in `LEARNER.md` and explain one rejection, such as an unexpected field. Agree on the change before editing. Change only `practice/accept-answer.mjs`. Preserve the supplied tests, scenarios, adapter and limits.

Rerun the practice check first, then the unchanged core command and mock demo. The targets after repair are **9 practice tests passing** and **26 core tests passing**. Record your actual results and review your diff. Explain why valid-looking JSON can still contain an unsupported claim.

## 4. Keep your evidence

Save the commands and their actual output, the one-file change, and your explanation. Local mocks use prewritten replies. Any hosted observation is a separate, owner-led activity. Record it as pending if it did not take place.

For assessed work, follow your assigned workbook and the trainer-approved repository checkpoint. The workbook covers your own branch, full commit SHA and own-repository PR, along with the contract, tests, model observation or blocker, review, AI disclosure and your personal declaration. A walkthrough does not submit work or award a grade.

If you get stuck, take your step, expected result and actual output to [Hub Help and questions](https://ai-agentic-project-hub.neo-dabuda.chatgpt.site/help). Leave out keys, passwords and other people's information.
