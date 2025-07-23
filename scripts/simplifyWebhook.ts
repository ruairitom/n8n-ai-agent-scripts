export function simplifyWebhook(data: Record<string, any>) {
  return {
    name: data?.user?.name || "Unknown",
    message: data?.payload?.text || "",
    receivedAt: new Date().toISOString()
  };
}
