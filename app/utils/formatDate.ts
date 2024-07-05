export function formatDate(timestamp: any) {
  const unixTimestamp = timestamp * 1000;

  // Create a new Date object using the timestamp
  const date = new Date(unixTimestamp);
  // Get the day, month, and year from the date
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Format the date in DD/MM/yyyy
  return `${day}/${month}/${year}`;
}
