export function createComplaint(category, message) {
  return {
    category,
    message,
    createdAt: new Date(),
  };
}
