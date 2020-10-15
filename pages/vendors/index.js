import Layout from "../../components/layout";
import { useMemo, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listVendors } from "../../src/graphql/queries.ts";
import Link from "next/link";
import Table from "../../components/table";

const Vendors = ({ vendors }) => {
  const [vendorsState, setVendorsState] = useState([]);

  useEffect(() => {
    if (vendors) {
      setVendorsState(vendors.data.listVendors.items);
    }
  }, [vendors]);

  const columns = useMemo(
    () => [
      {
        Header: "Vendor #",
        accessor: "vendorNumber",
      },
      {
        Header: "Company Report Name",
        accessor: "companyReportName",
      },
      {
        Header: "Company Listing Name",
        accessor: "companyListingName",
      },
      {
        Header: "Address 1",
        accessor: "address1",
      },
      {
        Header: "Address 2",
        accessor: "address2",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip",
        accessor: "zipCode",
      },
      {
        Header: "Phone",
        accessor: "telephoneNum",
      },
      {
        Header: "Attention",
        accessor: "attention",
      },
      {
        Header: "Pre-Payment",
        accessor: "prepayment",
      },
      {
        Header: "Pre-Pay Amount",
        accessor: "prepaymentAmt",
      },
      {
        Header: "Edit",
        accessor: "id",
        Cell: ({ value }) => (
          <Link href="/vendors/edit/[id]" as={`/vendors/edit/${value}`}>
            <a className="text-blue-600 underline hover:text-blue-800 hover:no-underline">
              {" "}
              View
            </a>
          </Link>
        ),
      },
    ],
    []
  );

  return (
    <Layout>
      <div className="px-6">
        <div className="text-center w-1/2 mx-auto py-6 text-2xl font-bold">
          <h3>Vendors</h3>
        </div>
        <div className="my-6">
          <Link href="/vendors/create">
            <a className="px-3 py-2 border border-gray-800 shadow hover:bg-gray-800 hover:text-white">
              Create New
            </a>
          </Link>
        </div>
        <div>
          <Table data={vendorsState} columns={columns} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ preview = null }) {
  const vendors =
    (await API.graphql({
      query: listVendors,
      variables: {
        limit: 1000,
      },
    })) || [];

  return {
    props: {
      vendors,
      preview,
    },
    revalidate: 1,
  };
}

export default Vendors;
