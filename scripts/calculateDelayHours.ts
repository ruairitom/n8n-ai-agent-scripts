export function calculateDelayHours(deadline: string): number {
  const now = new Date();
  const due = new Date(deadline);
  const diff = Math.max(0, (due.getTime() - now.getTime()) / (1000 * 60 * 60));
  return Math.ceil(diff);
}
