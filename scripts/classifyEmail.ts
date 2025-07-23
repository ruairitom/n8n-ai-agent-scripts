export function classifyEmail(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("not happy") || lower.includes("disappointed")) return "complaint";
  if (lower.includes("how do I") || lower.includes("can you")) return "enquiry";
  if (lower.includes("thank you") || lower.includes("great job")) return "feedback";
  return "unknown";
}
