import NewFilter from '../../components/newFilter/NewFilter';
import toast from 'react-hot-toast';
import { ACCOUNT_TRANSACTION } from '../../api/urls/urls';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/actions/genericData';
import CustomTable from '../../components/customTable/CustomTable';

const Research = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((store) => store?.generic);

  const filterMenuItem = [
    {
      label: 'Date From',
      name: 'dateFrom',
      type: 'date-picker',
      required: true,
      md: 4,
      sm: 12,
    },
    {
      label: 'Date To',
      name: 'dateTo',
      type: 'date-picker',
      required: true,
      md: 4,
      sm: 12,
      max: new Date().toISOString().slice(0, 10),
    },
  ];

  const handleSearch = (formValues) => {
    const epochDateFrom = formValues.dateFrom
      ? new Date(formValues.dateFrom).getTime() / 1000
      : null;
    const epochDateTo = formValues.dateTo
      ? new Date(formValues.dateTo).getTime() / 1000
      : null;

    try {
      dispatch(
        fetchData(
          ACCOUNT_TRANSACTION +
            `?dateFrom=${epochDateFrom}&dateTo=${epochDateTo}`
        )
      );
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div>
      <NewFilter inputField={filterMenuItem} searchCallBack={handleSearch} />

      <CustomTable
        title='Transaction Report'
        // columns={columns}
        // data={}
        // isLoading={isLoading}
      />
    </div>
  );
};

export default Research;
