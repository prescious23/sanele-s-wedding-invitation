import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRCodeRSVP() {
  const googleFormURL = 'https://forms.gle/your-google-form-id';
  return (
    <div>
      <QRCodeCanvas value={googleFormURL} size={150} bgColor="#fff" fgColor="#d4af37" />
    </div>
  );
}
