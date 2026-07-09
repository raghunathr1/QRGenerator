import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const downloadPDF = async () => {

  const input = document.getElementById("certificate-preview");

  if (!input) {
    alert("Certificate not found.");
    return;
  }

  const canvas = await html2canvas(input, {
    scale: 3,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("landscape", "mm", "a4");

  const pdfWidth = pdf.internal.pageSize.getWidth();

  const pdfHeight = pdf.internal.pageSize.getHeight();

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pdfWidth,
    pdfHeight
  );

  pdf.save("Kalley-CodeLabs-Certificate.pdf");

};

export default downloadPDF;