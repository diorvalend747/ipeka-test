export const formattedAmount = (amount) =>
  amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

export const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export function formatDateToMonthYear(date) {
  const options = { year: "numeric", month: "long" };
  const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(date);
  return formattedDate;
}

export function formatCurrentDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = Intl.DateTimeFormat("id-ID", options).format(date);
  return formattedDate;
}
