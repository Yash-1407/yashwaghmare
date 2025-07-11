import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Enhanced PDF content with updated CV information
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
/F2 6 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 2000
>>
stream
BT
/F1 24 Tf
50 720 Td
(YASH WAGHMARE) Tj
0 -30 Td
/F2 12 Tf
(+41/140 New Budhwar Peth, Solapur | yashuwaghmare19@gmail.com | 9623033519) Tj
0 -15 Td
(GitHub: Yash-1407 | LinkedIn: yash-waghmare) Tj
0 -30 Td
/F1 16 Tf
(OBJECTIVE) Tj
0 -20 Td
/F2 11 Tf
(Third-year B.Tech CSE student with leadership experience as CORE Committee) Tj
0 -12 Td
(President and UG research in network security. Completed AI and data science) Tj
0 -12 Td
(internships, developing Python-based solutions. Seeking MNC opportunity to apply) Tj
0 -12 Td
(strong algorithms background and collaborative problem-solving to drive innovation.) Tj
0 -25 Td
/F1 16 Tf
(EDUCATION) Tj
0 -20 Td
/F2 12 Tf
(B.Tech in Computer Science - N B Navale Sinhgad College of Engineering) Tj
0 -12 Td
(GPA: 8.10 | Present | Solapur) Tj
0 -15 Td
(HSC - S.E.S Junior College of Science | 54% | 2022 | Solapur) Tj
0 -12 Td
(SSC - Padmashree Sumatibai English Medium Technical School | 75.40% | 2020) Tj
0 -25 Td
/F1 16 Tf
(EXPERIENCE) Tj
0 -20 Td
/F2 12 Tf
(HR Intern - Helium Tech | Feb 2025 - March 2025 | Solapur) Tj
0 -12 Td
(• Gained hands-on experience in social media marketing and content creation) Tj
0 -12 Td
(• Received mentorship and feedback from marketing professionals) Tj
0 -15 Td
(AI Intern - Edunet Foundation | Dec 2024 – Jan 2025 | Solapur) Tj
0 -12 Td
(• 4-week virtual internship focused on integrating AI with modern analytics) Tj
0 -12 Td
(• Collaborated with Microsoft offering training in AI and Azure cloud services) Tj
0 -15 Td
(UG Scholar - CRTD | June 2023 – June 2024 | Solapur) Tj
0 -12 Td
(• Participated in ongoing research initiatives and advanced technologies) Tj
0 -12 Td
(• Accessed educational events enhancing knowledge in engineering domains) Tj
0 -25 Td
/F1 16 Tf
(PROJECTS) Tj
0 -20 Td
/F2 12 Tf
(Agrocraft - Ecommerce Website for Farmers) Tj
0 -12 Td
(• Full-stack web application for farmers to register and sell products directly) Tj
0 -12 Td
(• Implemented secure authentication, product management, and order tracking) Tj
0 -15 Td
(Athena - AI ChatBot) Tj
0 -12 Td
(• Developed NLP based Chatbot using Python and ChatGPT API) Tj
0 -12 Td
(• Enables experimentation with cutting-edge AI technologies) Tj
0 -15 Td
(Quickbites - QR-based Restaurant Solution) Tj
0 -12 Td
(• Digital restaurant solution using QR codes for menu, orders, and payments) Tj
0 -12 Td
(• Minimizes wait times and human errors, enhancing customer satisfaction) Tj
0 -25 Td
/F1 16 Tf
(TECHNICAL SKILLS) Tj
0 -20 Td
/F2 12 Tf
(Languages: Python, C Programming, Java, MySQL) Tj
0 -12 Td
(Technologies: AWS Cloud, Firebase, React.js, Node.js, Machine Learning) Tj
0 -12 Td
(Specializations: Network Security, AI/ML, Full-Stack Development) Tj
0 -25 Td
/F1 16 Tf
(ACHIEVEMENTS) Tj
0 -20 Td
/F2 11 Tf
(• Winner of Umang 2K23 • Winner of Quiz 2023 • CORE Committee President) Tj
0 -12 Td
(• Coordinated 1st International Conference on Silk Fibroin • Vice-Captain Football Team) Tj
0 -12 Td
(• Project of Honor in MIT Hackathon • Coordinated 10+ successful events) Tj
0 -12 Td
(• 1st Prize in STP workshop quiz (2 times) • Developed 10+ real-time projects) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica-Bold
>>
endobj

6 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000002326 00000 n 
0000002390 00000 n 
trailer
<<
/Size 7
/Root 1 0 R
>>
startxref
2449
%%EOF`

    return new NextResponse(pdfContent, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Yash_Waghmare_CV.pdf"',
      },
    })
  } catch (error) {
    console.error("Resume serving error:", error)
    return NextResponse.json({ error: "Failed to serve resume" }, { status: 500 })
  }
}
