let count = 1, total = 0;

function generateInvoiceDetails() {
  const invoiceNo = 'INV-' + String(Math.floor(Math.random() * 100000)).padStart(5, '0');
  const today = new Date().toLocaleDateString();

  document.getElementById('invoiceNumber').value = invoiceNo;
  document.getElementById('invoiceDate').value = today;
}

function addItem() {
  const name = document.getElementById('customerName').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();

  const nameRegex = /^[a-zA-Z ]{2,}$/;
  const phoneRegex = /^[6-9][0-9]{9}$/;

  if (!nameRegex.test(name)) {
    alert('Please enter a valid name (letters only, min 2 characters).');
    return;
  }

  if (address.length < 5) {
    alert('Please enter a valid address (min 5 characters).');
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid 10-digit Indian phone number.');
    return;
  }

  const product = document.getElementById('productName').value.trim();
  const qty = parseInt(document.getElementById('productQty').value);
  const price = parseFloat(document.getElementById('productPrice').value);
  const gst = parseFloat(document.getElementById('productGST').value) || 0;

  if (!product || isNaN(qty) || isNaN(price)) {
    alert('Enter valid product details.');
    return;
  }

  const subtotal = price * qty + (price * qty * gst / 100);
  total += subtotal;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${count}</td>
    <td>${product}</td>
    <td>${qty}</td>
    <td>₹${price.toFixed(2)}</td>
    <td>${gst}%</td>
    <td>₹${subtotal.toFixed(2)}</td>
    <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this, ${subtotal})">🗑️</button></td>
  `;
  document.getElementById('invoiceTable').appendChild(row);
  document.getElementById('invoiceTotal').innerText = total.toFixed(2);
  count++;

  ['productName', 'productQty', 'productPrice', 'productGST'].forEach(id => document.getElementById(id).value = '');
}

function deleteRow(btn, sub) {
  btn.closest('tr').remove();
  total -= sub;
  document.getElementById('invoiceTotal').innerText = total.toFixed(2);
}

function resetInvoice() {
  document.getElementById('invoiceTable').innerHTML = '';
  document.getElementById('invoiceTotal').innerText = '0.00';
  document.getElementById('customerInfoPrint').innerHTML = '';
  document.getElementById('invoiceTablePrint').innerHTML = '';
  count = 1;
  total = 0;
  generateInvoiceDetails();
}

function copyToPrintArea() {
  const name = document.getElementById('customerName').value.trim();
  const address = document.getElementById('customerAddress').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const invoiceNo = document.getElementById('invoiceNumber').value;
  const invoiceDate = document.getElementById('invoiceDate').value;

  document.getElementById('customerInfoPrint').innerHTML = `
    <p><strong>Invoice No:</strong> ${invoiceNo}</p>
    <p><strong>Date:</strong> ${invoiceDate}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Phone:</strong> ${phone}</p>`;
  
  const originalRows = document.querySelectorAll('#invoiceTable tr');
  const printTable = document.getElementById('invoiceTablePrint');
  printTable.innerHTML = '';
  originalRows.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length === 7) {
      const tr = document.createElement('tr');
      for (let i = 0; i < 6; i++) {
        tr.innerHTML += `<td>${cells[i].innerText}</td>`;
      }
      printTable.appendChild(tr);
    }
  });

  document.getElementById('invoiceTotalPrint').innerText = total.toFixed(2);
}

function generatePDF() {
  copyToPrintArea();
  const el = document.getElementById('printArea');
  el.style.display = 'block';
  html2pdf().from(el).save('invoice.pdf').then(() => {
    el.style.display = 'none';
  });
}

function generateInvoice() {
  copyToPrintArea();
  const content = document.getElementById("printArea").innerHTML;
  const win = window.open('', '', 'width=800,height=600');
  win.document.write(`
    <html>
      <head>
        <title>Invoice Print</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; padding: 20px; }
          .table { width: 100%; border-collapse: collapse; }
          .table, .table th, .table td { border: 1px solid #dee2e6; }
          .table th { background-color: #343a40; color: white; }
          .text-end { text-align: right; }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        ${content}
      </body>
    </html>
  `);
  win.document.close();
  setTimeout(() => window.location.href = 'success.html', 1000);
}

// Initialize invoice details on load
window.onload = function() {
  generateInvoiceDetails();
};


// function generateInvoice() {
//     copyToPrintArea();
  
//     const printContent = document.getElementById("printArea").innerHTML;
//     const originalTitle = document.title;
  
//     const win = window.open('', '', 'width=800,height=600');
//     win.document.write(`
//       <html>
//         <head>
//           <title>Invoice Print</title>
//           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
//           <style>
//             body { font-family: 'Inter', sans-serif; padding: 20px; }
//             .table { width: 100%; border-collapse: collapse; }
//             .table, .table th, .table td { border: 1px solid #dee2e6; }
//             .table th { background-color: #343a40; color: white; }
//             .text-end { text-align: right; }
//           </style>
//         </head>
//         <body onload="window.print(); window.close();">
//           ${printContent}
//         </body>
//       </html>
//     `);
//     win.document.close();

//     setTimeout(() => window.location.href = 'success.html', 1000);
//   }
  