import Layout from "../../components/layout";
import Link from "next/link";
const Reports = () => {
  return (
    <Layout>
      <div>
        <div className="text-center w-1/2 mx-auto py-6 text-2xl font-bold">
          <h3>Reports</h3>
        </div>
        <div className="px-12 underline text-blue-700">
          <ul>
            <li>
              <Link href="/reports/commodity-ton-totals">
                <a>Commodity Ton Totals</a>
              </Link>
            </li>
            <li>
              <Link href="/reports/total-tons-hauled">
                <a>Total Tons Hauled</a>
              </Link>
            </li>
            <li>
              <Link href="/reports/status-report-sold">
                <a>Status Report Sold</a>
              </Link>
            </li>
            <li>
              <Link href="/reports/status-report-purchase">
                <a>Status Report Purchase</a>
              </Link>
            </li>
            <li>
              <Link href="/reports/invoices">
                <a>Invoices</a>
              </Link>
            </li>
            <li>
              <Link href="reports/accounts-receivable">
                <a>Accounts Receivable</a>
              </Link>
            </li>
            <li>
              <Link href="reports/settlements">
                <a>Settlements</a>
              </Link>
            </li>
            <li>
              <Link href="reports/inventory-balance">
                <a>Inventory Balance</a>
              </Link>
            </li>
            <li>
              <Link href="reports/inventory-reduction">
                <a>Inventory Reduction</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
