// app/api/download/route.js

import fs from 'fs';
import path from 'path';

export async function get(req, res) {
  if (req.method === 'GET') {
    try {
      // Path to the file to be downloaded
      const filePath = path.resolve('public', 'Moses-cv.pdf');

      // Read the file asynchronously
      const fileStream = fs.createReadStream(filePath);
 
      // Set headers for the response
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=Moses-cv.pdf');

      // Pipe the file stream to the response asynchronously
      fileStream.pipe(res);

      // Respond with JSON indicating success
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error downloading file:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
