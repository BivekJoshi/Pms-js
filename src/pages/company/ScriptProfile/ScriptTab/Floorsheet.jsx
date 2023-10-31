import { useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import NewFilter from "../../../../components/newFilter/NewFilter";
import CustomTable from "../../../../components/customTable/CustomTable";
import toast from "react-hot-toast";
import CustomPagination from "../../../../components/customPagination/CustomPagination";
import { fetchPaginatedTable } from "../../../../redux/actions/paginatedTable";
import { FLOOR_SHEET_DETAILS } from "../../../../api/urls/urls";

const Floorsheet = ({ companyData }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [tableShow, setTableShow] = useState(false);
  const tableData = useSelector((store) => store?.paginatedTable?.data);
  const isLoading = useSelector((store) => store?.paginatedTable?.processing);

  const totalData = useSelector((store) => store?.paginatedTable?.table);
  const totalPages = useSelector((store) => store?.paginatedTable?.pages);
  const currentPage = useSelector((store) => store?.paginatedTable?.page);

  const pageSize = useSelector((store) => store?.paginatedTable?.itemPerPage);

  const [params, setParams] = useState();

  const filterMenuItem = [
    {
      label: t("Date From"),
      name: "trDate",
      type: "date-picker",
      required: true,
      md: 6,
      sm: 12,
    },
  ];
  const handleSearch = (formValues) => {
    const trDate = formValues.trDate
      ? new Date(formValues.trDate).getTime() / 1000
      : null;
    if (trDate) {
      const updatedFormValues = {
        ...formValues,
        script: companyData?.companyInfo?.symbol,
        trDate,
      };
      setParams(updatedFormValues);

      try {
        dispatch(
          fetchPaginatedTable(
            FLOOR_SHEET_DETAILS,
            updatedFormValues,
            null,
            "unique"
          )
        );
        setTableShow(true);
      } catch (error) {
        toast.error(error);
      }
    } else {
      toast.error("Please provide both date values...");
    }
  };
  const columns = useMemo(
    () => [
      {
        id: 1,
        accessorKey: "trDate",
        header: "Date",
        size: 200,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "amount",
        header: "Amount",
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "buyer",
        header: "Buyer",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "quantity",
        header: "Quantity",
        size: 100,
        sortable: false,
      },

      {
        id: 5,
        accessorKey: "rate",
        header: "Rate",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "seller",
        header: " Seller",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "symbol",
        header: "Symbol",
        size: 100,
        sortable: false,
      },
    ],
    []
  );

  return (
    <>
      <NewFilter
        inputField={filterMenuItem}
        searchCallBack={handleSearch}
        // validate={filterDateValidationSchema}
      />
      {tableShow ? (
        <>
          <CustomTable
            title="Market Date"
            columns={columns}
            isLoading={isLoading}
            data={Object.values(tableData)}
            pageSize={pageSize}
            // onRowClick={handleRowClick}
            headerBackgroundColor="#401686"
            headerColor={theme.palette.text.alt}
            enablePagination={false}
            enableEditing={false}
            enableColumnResizing={false}
            enableColumnActions={false}
            enableColumnFilters={false}
            enableSorting={false}
            enableBottomToolbar={false}
            enableTopToolbar={false}
          />
          <div
            style={{
              paddingTop: "16px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CustomPagination
              pages={totalPages}
              activePage={currentPage}
              handleChangePage={(newPage) => {
                dispatch(
                  fetchPaginatedTable(
                    FLOOR_SHEET_DETAILS,
                    updatedFormValues,
                    newPage,
                    null,
                    "unique",
                    totalData,
                    params
                  )
                );
              }}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Floorsheet;
