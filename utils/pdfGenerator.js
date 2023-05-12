import jsPDF from "jspdf";
import {
  formattedAmount,
  formatDateToMonthYear,
  formatCurrentDate,
} from "@/utils/helper";
import IPEKALOGO from "../public/ipeka_logo.png";

export const generateReceipt = (dataPayment, toStudent, bankCode) => {
  // Create a new jspdf document
  const doc = new jsPDF();

  // Define the watermark text and color
  const watermarkText = "Sekolah Kristen IPEKA";
  const watermarkColor = "#CCCCCC";

  // Set the font size and color for the watermark
  doc.setFontSize(30);
  doc.setTextColor(watermarkColor);
  //   doc.addImage(IPEKALOGO, "PNG", 10, 10, 50, 50);

  // Get the width and height of the page
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Calculate the x and y position for the watermark
  const textWidth =
    (doc.getStringUnitWidth(watermarkText) * doc.internal.getFontSize()) /
    doc.internal.scaleFactor;
  const textHeight = doc.internal.getLineHeight() / doc.internal.scaleFactor;
  const x = (pageWidth - textWidth) / 2;
  const y = (pageHeight - textHeight) / 2 / 2;

  // Add the watermark to each page of the document
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(watermarkText, x, y);
  }

  // Set the font size and color for the regular text
  doc.setFontSize(12);
  doc.setTextColor("#000000");

  // Add the receipt details to the document
  const receiptNumber = toStudent?.studentName;
  const date = formatCurrentDate(new Date(dataPayment?.date));
  const totalAmount = formattedAmount(dataPayment?.amount);
  const bank = bankCode?.bankCode;
  const period = formatDateToMonthYear(dataPayment?.period);

  doc.text(`Struk Pembayaran Uang Sekolah`, 20, 20);
  doc.text(`Nama Siswa/Siswi : ${receiptNumber}`, 20, 50);
  doc.text(`Periode : ${period}`, 20, 60);
  doc.text(`Tanggal Pembayaran : ${date}`, 20, 70);
  doc.text(`Kode Bank : ${bank}`, 20, 80);

  let startY = 90;

  // Add the total amount to the document
  doc.text(`Total amount: ${totalAmount}`, 20, startY + 10 + 10);

  // Save the document
  doc.save("receipt.pdf");
};
