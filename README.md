# Invoice-Generator
InvoicePro is a modern, web-based invoice generator designed to help small businesses, freelancers, and admins generate professional invoices quickly and efficiently. Built with HTML, Bootstrap 5, and JavaScript, the app features a sleek UI, admin authentication, dynamic itemized billing, and PDF export functionality.

# 🧾 InvoicePro – Smart Invoice Generator

**InvoicePro** is a modern, responsive invoice generator built with HTML, CSS (Bootstrap), and JavaScript. It allows admins to securely create, preview, print, and download professional invoices in PDF format. Ideal for freelancers, small businesses, and students demonstrating frontend capabilities.

---

## 🔐 Features

* **Admin Login**: Secure access with persistent login using `localStorage`
* **Invoice Builder**:

  * Customer info + auto-generated invoice number and date
  * Itemized product entry with quantity, price, and GST
  * Live total updates
* **PDF Export**: Download clean, print-ready invoices
* **Print Support**: Only prints invoice content
* **Modern UI**: Responsive, styled with Bootstrap 5 & custom CSS

---

## 🗂 Project Structure

```
📁 invoice-generator/
├── index.html          # Landing page
├── create.html         # Main invoice builder (admin-only)
├── admin.html          # Admin login form
├── success.html        # Confirmation screen (optional)
├── style.css           # Project-wide styling
├── script.js           # Invoice logic (add/reset/print/PDF)
├── admin.js            # Admin login/session handling
└── README.md           # Project documentation
```

---

## ✅ Admin Credentials

```
Username: admin
Password: admin123
```

*(Modify inside `admin.js`)*

---

## 🚀 How to Run

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/invoice-pro.git
   cd invoice-pro
   ```
2. **Open `admin.html`** in your browser
3. Log in and start generating invoices!

---

## 📸 Screenshots

![a](https://github.com/user-attachments/assets/744946f3-6778-4d13-8b5d-1e80b6cf5a22)
![b](https://github.com/user-attachments/assets/2126ada9-7df7-40a4-be4f-4ddae1f12357)
![c](https://github.com/user-attachments/assets/50e726e6-b272-4acc-9e82-039c07d0baa9)
![d](https://github.com/user-attachments/assets/8c2b224a-3216-44b0-a238-638f334441c9)
![e](https://github.com/user-attachments/assets/4d27b3a7-c0db-4235-aaba-229de1df103c)



---

## 🛠 Technologies Used

* HTML5, CSS3, JavaScript
* Bootstrap 5
* html2pdf.js (for PDF export)

---

## 💡 Potential Enhancements

* Invoice history using `localStorage` or backend
* Email invoice to clients
* Export to Excel
* Add logo/branding in invoice
* Dark mode toggle
* Backend login & database (e.g., Node.js, MongoDB)

---

## 📄 License

MIT License © 2025 \[Himanshu kumar]

---

## 🙌 Acknowledgements

Thanks to open-source libraries like **Bootstrap** and **html2pdf.js** that made this project smoother.

---

> Feel free to fork and enhance this project or integrate it into your business or portfolio.
