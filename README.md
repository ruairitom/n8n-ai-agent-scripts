# n8n-ai-agent-scripts

A utility repository containing reusable helper functions designed for use within [`n8n`](https://n8n.io) workflows. These TypeScript functions are tailored to streamline automation logic, particularly where AI-like decision-making or smart payload processing is required.

---

Contents

| File                      | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| `classifyEmail.ts`        | Classifies an email string into one of: `"complaint"`, `"enquiry"`, `"feedback"`, or `"unknown"` |
| `calculateDelayHours.ts`  | Calculates the number of hours between `now` and a deadline ISO timestamp   |
| `simplifyWebhook.ts`      | Cleans up noisy webhook JSON payloads and extracts key fields               |
| `examples/n8n-workflow-usage.md` | Markdown file showing how to import and use these scripts inside `n8n` code nodes |
| `tsconfig.json`           | TypeScript configuration for compiling/test running                        |

---

Use Cases

These utilities are meant to be dropped into an `n8n` **Function** or **Code** node to improve workflow logic:

- Calculate how late a task is and trigger an escalation
- Classify customer support emails in real time
- Clean messy incoming data from webhooks before storing or parsing

---

Getting Started

1. Clone the Repository

```bash
git clone https://github.com/ruairitom/n8n-ai-agent-scripts.git
cd n8n-ai-agent-scripts

2. (Optional) Install Dependencies
Only needed if you plan to add tests or extend functionality locally.
pnpm install

Example Usage in n8n
Inside a Function node, you can paste any helper code (or import it using a custom node build):
// Example: classifyEmail.ts
function classifyEmail(text) {
  const lower = text.toLowerCase();

  if (lower.includes("not happy") || lower.includes("unacceptable")) return "complaint";
  if (lower.includes("can you tell me") || lower.includes("i want to know")) return "enquiry";
  if (lower.includes("thank you") || lower.includes("great service")) return "feedback";

  return "unknown";
}

return {
  classification: classifyEmail($json.body),
};
More examples can be found in examples/n8n-workflow-usage.md.

License
MIT — see LICENSE

Contributing
This is a minimal showcase repo — but PRs and extensions welcome! Especially if you have:

- Custom Function node scripts you use often
- AI-enhanced workflow utilities
- Better TypeScript improvements
