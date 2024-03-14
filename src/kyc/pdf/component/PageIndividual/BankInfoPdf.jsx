import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
// import { getBankList } from "../../../api/queries.api";
import { useState } from "react";
import { useEffect } from "react";
import { RadioButton } from "../ReuseStyle/CheckboxComponent";

const styles = StyleSheet.create({
  text: {
    fontSize: "8px",
  },
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: "14px",
    padding: "5px",
    margin: "12px 0px 5px 0px",
  },
  table: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
  },
  fullRow: {
    border: "1px solid #DEE2E6",
    padding: "2px 0 0 10px",
    width: "50%",
    display: "flex",
    fontSize: "8px",
    justifyContent: "center",
  },
  familyRow: {
    border: "1px solid #DEE2E6",
    padding: "6px 0 0 10px",
    width: "35%",
    display: "flex",
    justifyContent: "center",
    fontSize: "8px",
    alignItems: "center",
  },
  bankRows: {
    border: "1px solid #DEE2E6",
    padding: "4px 0 0 12px",
    width: "65%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexstart",
    fontSize: "8px",
    textTransform: "capitalize",
    alignItems: "center",
    gap: "6px",
  },
 
  
  button: {
    padding: 4,
    borderRadius: "50%",
    border: "1px solid #000",
    margin: "0 4px",
    display: "flex",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "green",
    padding: "4px",
    borderRadius: "50%",
    border: "1px solid #000",
    margin: "0 4px",
    display: "flex",
    alignItems: "center",
  },
});

const BankInfoPdf = ({ data }) => {
  // for bank details data part
  const bankData = data && data?.bankDetails;
  const [bankList, setBankList] = useState([]);

//   useEffect(() => {
//     const fetchBankList = async () => {
//       try {
//         const data = await getBankList();
//         setBankList(data);
//       } catch (error) {
//       }
//     };

//     if (bankList.length === 0) {
//       fetchBankList();
//     }
//   }, []);

  const bankName =
    bankList && bankList?.find((d) => d?.value === bankData?.bankName)?.label;

  return (
    <View>
      <Text style={styles.header}>
        बैंक खाताको विवरण (Bank Account Details)
      </Text>

      <View style={styles.table}>
        <Text style={styles.fullRow}>
          बैंक खाताको किसिम (Types of Bank Account)
        </Text>
        <View style={styles.bankRows}>
          <RadioButton
            label1="बचत खाता (Saving Account)"
            checked={bankData?.accountType === "S" ? true : false}
          />
          <RadioButton
            label1="चल्ती खाता (Current Account)"
            checked={bankData?.accountType === "C" ? true : false}
          />
        </View>
      </View>
      <View style={styles.table}>
        <Text style={styles.fullRow}>
          बैंक खाता नं. (Bank Account No.)
        </Text>
        <Text style={styles.bankRows}>{bankData?.accountNumber}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.familyRow}>
          बैंक खाताभएको बैंकको नाम (Name of Bank)
        </Text>
        <Text style={styles.bankRows}>{bankName}</Text>
      </View>
      <View style={styles.table}>
        <Text style={styles.familyRow}>
          बैंक खाताभएको बैंकको ठेगाना (Address of Bank)
        </Text>
        <Text style={styles.bankRows}>{bankData?.branchAddress}</Text>
      </View>
    </View>
  );
};

export default BankInfoPdf;
