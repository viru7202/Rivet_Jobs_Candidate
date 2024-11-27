import React from "react";

function Invoice() {
  return (
    <>
      <div className="invoice-container">
        <div className="invoice-header">
          <div className="invoice-logo">
            <img src="Group 360.png" alt="Rivet Jobs Logo" />
          </div>
          <div className="invoice-details">
            <p>Rivet Jobs Ltd</p>
            <p>Denning House 1a, George Street,</p>
            <p>Wolverhampton, England, WV2 4DP</p>
            <p>Tel: 01902509440</p>
            <p>Email: info@rivetJobs.com</p>
            <p>Fax: +91-20-1224-3456</p>
            <p>VAT: 1236547890</p>
          </div>
        </div>

        <div className="invoice-info">
          <div>
            <p><strong>Date:</strong> 28/08/2024</p>
          </div>
          <div>
            <p><strong>Invoice Number:</strong> 1234567890</p>
          </div>
        </div>

        <div className="invoice-to">
          <p><strong>To</strong></p>
          <p>Lorem Ipsum</p>
          <p>Denning House 1a, George Street,</p>
          <p>Wolverhampton, England, WV2 4DP</p>
          <p>Tel: 01902509440</p>
          <p>Email: info@rivetJobs.com</p>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Reference Number</th>
              <th>Client Name</th>
              <th>Job Title</th>
              <th>Timesheet Date</th>
              <th>Business Unit</th>
              <th>Shift Type</th>
              <th>Supplier Charge</th>
              <th>Usage Fee</th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill()
              .map((_, index) => (
                <tr key={index}>
                  <td>PXP29-1/1</td>
                  <td>Smith Lorem Ipsum</td>
                  <td>Healthcare Assistant</td>
                  <td>1st Sept 2024</td>
                  <td>Parkview(NI) (#100)</td>
                  <td>Day / Night</td>
                  <td>£10.00</td>
                  <td>£10.00</td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="invoice-summary">
  <div className="summary-row">
    <div className="summary-label">Sub Total</div>
    <div className="summary-value">£10,000.00</div>
  </div>
  <div className="summary-row">
    <div className="summary-label">VAT</div>
    <div className="summary-value">£100</div>
  </div>
  <hr className="divider" />
  <div className="summary-row total">
    <div className="summary-label">Invoice Total</div>
    <div className="summary-value">£10,100.00</div>
  </div>
</div>

      </div>

      <style jsx>{`
      .invoice-summary {
      width: 40%;
      float: right;
  background-color: #f8fbff;
  padding: 15px;
  border: 1px solid #d1e3f8;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.summary-label {
  font-size: 14px;
  color: #0070c0;
  font-weight: 500;
}

.summary-value {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.divider {
  border: 0;
  border-top: 1px solid #0070c0;
  margin: 10px 0;
}

.summary-row.total {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

        .invoice-container {
          font-family: Arial, sans-serif;
          margin: 0 auto;
          padding: 20px;
          width: 80%;
          max-width: 800px;
          border: 1px solid #ddd;
          background-color: #fff;
        }

        .invoice-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #ddd;
          padding-bottom: 10px;
        }

        .invoice-logo img {
          max-width: 100%;
        }

        .invoice-details p {
          margin: 0;
          font-size: 12px;
          line-height: 1.6;
        }

        .invoice-info {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 14px;
        }

        .invoice-to {
          margin-top: 20px;
          font-size: 14px;
        }

        .invoice-table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
          font-size: 14px;
        }

        .invoice-table th,
        .invoice-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .invoice-table th {
          background-color: #f5f5f5;
          font-weight: bold;
        }

   

        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }

        .summary-item.total {
          font-weight: bold;
          font-size: 16px;
        }

        /* Print Styles */
        @media print {
          .invoice-container {
            width: 100%;
            border: none;
            padding: 0;
          }

          .invoice-header,
          .invoice-info,
          .invoice-to,
          .invoice-table,
          .invoice-summary {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </>
  );
}

export default Invoice;
