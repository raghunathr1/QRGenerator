import QRCode from "qrcode";
import Certificate from "../models/certificate.js";

export const createCertificate = async (req, res) => {
  try {
    const year = new Date().getFullYear();

    // Last certificate find karo
    const lastCertificate = await Certificate.findOne()
      .sort({ createdAt: -1 });

    let nextNumber = 1;

    if (lastCertificate) {
      const lastId = lastCertificate.certificateId;

      // Example: KCL-2026-003
      const lastNumber = parseInt(lastId.split("-")[2]);

      nextNumber = lastNumber + 1;
    }

    const certificateId = `KCL-${year}-${String(nextNumber).padStart(3, "0")}`;

    // Verification URL
    const verificationURL = `https://qr-generator-chi-rosy.vercel.app/verify/${certificateId}`;

    // QR Code
    const qrCode = await QRCode.toDataURL(verificationURL);

    // Save Certificate
    const certificate = await Certificate.create({
      ...req.body,
      certificateId,
      qrCode,
    });

    res.status(201).json({
      success: true,
      message: "Certificate Generated Successfully",
      certificate,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyCertificate = async (req, res) => {
  try {
    const { certificateId } = req.params;

    const certificate = await Certificate.findOne({ certificateId });

    if (!certificate) {
      return res.status(404).json({
        success: false,
        message: "Certificate Not Found",
      });
    }

    res.status(200).json({
      success: true,
      certificate,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};