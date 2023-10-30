import React, { useMemo , useState} from "react";
import NewFilter from "../../../../components/newFilter/NewFilter";
import { useTranslation } from "react-i18next";
import CustomTable from "../../../../components/customTable/CustomTable";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { STOCK_PRICE_DETAILS } from "../../../../api/urls/urls";
import toast from "react-hot-toast";
import { fetchPaginatedTable } from "../../../../redux/actions/paginatedTable";

const PriceHistory = ({ companyData }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const dispatch = useDispatch();
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
            STOCK_PRICE_DETAILS,
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
        accessorKey: "date",
        header: "Date",
        size: 100,
        sortable: false,
      },
      {
        id: 2,
        accessorKey: "ltp",
        header: "LTP",
        size: 120,
        sortable: false,
      },
      {
        id: 3,
        accessorKey: "change",
        header: "% Change",
        size: 100,
        sortable: false,
      },
      {
        id: 4,
        accessorKey: "high",
        header: "High",
        size: 100,
        sortable: false,
      },

      {
        id: 5,
        accessorKey: "low",
        header: "Low",
        size: 100,
        sortable: false,
      },
      {
        id: 6,
        accessorKey: "open",
        header: "Open",
        size: 100,
        sortable: false,
      },
      {
        id: 7,
        accessorKey: "quantity",
        header: "Qty.",
        size: 100,
        sortable: false,
      },
      {
        id: 8,
        accessorKey: "turnover",
        header: "Turnover",
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
    </>
  );
};

export default PriceHistory;