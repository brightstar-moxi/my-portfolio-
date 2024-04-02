// Using Next.js API Routes (Advanced):

// If you need more control or want to handle PDF downloads via an API route, you can create a custom route.
// For example, create an API route named download-pdf.js:

// // pages/api/download-pdf.js
// import { readFile } from "fs/promises";
// import path from "path";

// export default async function handler(req, res) {
//   const filePath = path.join(process.cwd(), "public", "resume.pdf");
//   const fileContents = await readFile(filePath);

//   res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
//   res.setHeader("Content-Type", "application/pdf");
//   res.send(fileContents);
// }
// Then, link to this route in your component:

// <a href="/api/download-pdf">Download PDF</a>
// Adjust the route path and file name as needed2.