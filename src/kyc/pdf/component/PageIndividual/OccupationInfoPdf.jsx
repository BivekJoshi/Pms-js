import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";
import { RadioButton } from "../ReuseStyle/CheckboxComponent";


const styles = StyleSheet.create({
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: "14px",
    padding: "5px",
    margin: "12px 0px 5px 0px",
  },
  subTable: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    fontSize: "8px",
    padding: "4px 0 0 6px",
  },
  occupationRow: {
    border: "1px solid #DEE2E6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "4px 0 0 6px",
    width: "75%",
  },
  occupationRows: {
    border: "1px solid #DEE2E6",
    padding: "3px 0 0 10px",
    width: "25%",
    display: "flex",
    justifyContent: "center",
    fontSize: 8,
    alignItems: "center",
  },
  width: {
    width: "30%",
    fontSize: "8px",
  },
  occupationFinancial: {
    border: "1px solid #DEE2E6",
    display: "flex",
    flexDirection: "column",
    width: "75%",
    padding: "0 0 0 6px",
  },
  fullRow: {
    border: "1px solid #DEE2E6",
    width: "100%",
    fontSize: 8,
  },
  account: {
    display: "flex",
    flexDirection: "row",
    padding: "0 0 0 6px",
  },
  incomeRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    // width: "70%",
    padding: "4 0 0 6px",
  },
  incomeWidth: {
    width: "50%",
    fontSize: 8,
  },
  transaction: {
    display: "flex",
    flexDirection: "row",
    padding: "4 0 0 6px",
  },
});

const occupations = [
  { value: "SERVICE", label1: "सेवा", label2: "(Service)" },
  {
    value: "Government Services",
    label1: "सरकारी",
    label2: "(Government Service)",
  },
  {
    value: "Public Sector",
    label1: "सार्वजनिक क्षेत्र",
    label2: "(Public sector)",
  },
  {
    value: "Private Sector",
    label1: "निजी क्षेत्र",
    label2: "(Private Sector)",
  },
  { value: "BUSINESS", label1: "व्यापार", label2: "(Business)" },
  { value: "FARMER", label1: "कृषि", label2: "(Agriculture)" },
  { value: "PROFESSIONAL", label1: "व्यावसायिक", label2: "(Professional)" },
  { value: "RETIRED", label1: "सेवा निवृत", label2: "(Retired)" },
  { value: "HOUSEWIFE", label1: "गृहिणी", label2: "(House Wife)" },
  { value: "STUDENT", label1: "विद्यार्थी", label2: "(Student)" },
  { value: "OTHERS", label1: "अन्य", label2: "(Others)" },
];

const occupationsBusiness = [
  { value: "MA", label: "उत्पादन (Manufacturing)" },
  { value: "SO", label: "सेवामुखी (Service oriented)" },
  { value: "O", label: "अन्य (Others)" },
];

const occupationsFinancial = [
  { value: "100000", label: "रु १,००,००० सम्म \n (Upto Rs. 1,00,000)" },
  {
    value: "200000",
    label:
      "रु १,००,००१ देखि रु २,००,००० सम्म \n (From Rs. 1,00,001 to Rs. 2,00,000)",
  },
  {
    value: "500000",
    label:
      "रु २,००,००१ देखि रू ५,००,००० सम्म \n ( From Rs. 2,00,001 to Rs. 5,00,000)",
  },
  { value: "600000", label: "रू ५,००,००० भन्दा माथि \n (Above Rs. 5,00,000)" },
];

const occupationsTmsFinancial = [
  { value: "100000", label: "रु ५,००,००० सम्म (Upto Rs. 5,00,000)" },
  {
    value: "500000",
    label:
      "रु ५,००,००१ देखि रु १०,००,००० सम्म \n (From Rs. 5,00,001 to Rs. 10,00,000)",
  },
  {
    value: "600000",
    label: "रू १०,००,००० भन्दा माथि (Above Rs. 10,00,000)",
  },
];

const occupationsTransaction = [
  { value: true, label: "गराउने (Yes)" },
  { value: false, label: "नगराउने (No)" },
];

const occupationsAccount = [
  { value: "DAILY", label: "दैनिक(Daily)" },
  { value: "WEEKLY", label: "साप्ताहिक(Weekly)" },
  { value: "15DAYS", label: "पाक्षिक(15 days)" },
  { value: "MONTHLY", label: "मासिक(Monthly)" },
];

const OccupationInfoPdf = ({ data }) => {
  // for Occupation details data part
  const occupationData = data && data?.occupationDetails;
  const boStatement = data && !data?.boStatement;

  const getIncomeRangeLabel = (financialDetails) => {
    const selectedIncome = Number(financialDetails);

    switch (true) {
      case selectedIncome <= 100000:
        return 100000;
      case selectedIncome > 100000 && selectedIncome <= 200000:
        return 200000;
      case selectedIncome > 200000 && selectedIncome <= 500000:
        return 500000;
      default:
        return 600000;
    }
  };

  const getIncomeRangeTmsLabel = (financialTmsDetails) => {
    const selectedIncome = Number(financialTmsDetails);

    switch (true) {
      case selectedIncome >= 0 && selectedIncome <= 100000:
        return 100000;
      case selectedIncome > 500000 && selectedIncome <= 1000000:
        return 500000;
      case selectedIncome > 1000000:
        return 600000;
      default:
        return 100000;
    }
  };

  const getStatementPeriod = (statementPeriod) => {
    switch (true) {
      case statementPeriod === "15DAYS":
        return "15DAYS";
      case statementPeriod === "MONTHLY":
        return "MONTHLY";
      case statementPeriod === "DAILY":
        return "DAILY";
      case statementPeriod === "WEEKLY":
        return "WEEKLY";
    }
  };

  return (
    <>
      <View>
        <Text style={styles.header}>पेशागत विवरण (Details Of Occupation)</Text>

        {/* first Row */}
        <View style={styles.table}>
          <View style={styles.subTable}>
            <Text style={styles.occupationRows}>पेशा (Occupation)</Text>
            <View style={styles?.occupationRow}>
              {occupations.map((occupation) => (
                <View style={styles.width}>
                  <RadioButton
                    key={occupation?.value}
                    // checked={occupationData?.occupation === occupation?.value}
                    label1={occupation?.label1}
                    label2={occupation?.label2}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Second Row */}
        <View style={styles.table}>
          <View style={styles.subTable}>
            <Text style={styles.occupationRows}>
              व्यापारको प्रकार (Types of Business)
            </Text>
            <View style={styles?.occupationRow}>
              {occupationsBusiness.map((occupation) => (
                <View style={styles.width}>
                  <RadioButton
                    key={occupation?.value}
                    // checked={occupationData?.businessType === occupation?.value}
                    label1={occupation?.label}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* third Row */}
        <View style={styles.table}>
          <View style={styles.subTable}>
            <Text style={styles.occupationRows}>
              संस्थाको नाम (Organization's Name)
            </Text>
            <View style={styles?.occupationRow}>
              <Text style={styles.text}>{occupationData?.orgName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.table}>
          <View style={styles.subTable}>
            <Text style={styles.occupationRows}>ठेगाना ( Address)</Text>
            <View style={styles?.occupationRow}>
              <Text style={styles.text}>{occupationData?.address}</Text>
            </View>
          </View>
        </View>

        {/* fourth Row */}
        {data?.user?.nature === "TMS" && data?.user?.clientType === "I" ? (
          <View style={styles.table}>
            <View style={styles.subTable}>
              <Text style={styles.occupationRows}>
                आर्थिक विवरण (Financial Details)
              </Text>
              <View style={styles?.occupationFinancial}>
                <Text style={styles.text}>
                  आयको सीमा वार्षिक विवरण (Income Limit Annual Details)
                </Text>
                <View style={styles.incomeRow}>
                  {occupationsTmsFinancial.map((occupation) => (
                    <View style={styles.incomeWidth}>
                      <RadioButton
                        key={occupation?.value}
                        // checked={
                        //   getIncomeRangeTmsLabel(
                        //     occupationData?.financialDetails
                        //   ) === Number(occupation?.value)
                        // }
                        label1={occupation?.label}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.table}>
            <View style={styles.subTable}>
              <Text style={styles.occupationRows}>
                आर्थिक विवरण (Financial Details)
              </Text>
              <View style={styles?.occupationFinancial}>
                <Text style={styles.text}>
                  आयको सीमा वार्षिक विवरण (Income Limit Annual Details)
                </Text>
                <View style={styles.incomeRow}>
                  {occupationsFinancial.map((occupation) => (
                    <View style={styles.incomeWidth}>
                      <RadioButton
                        key={occupation?.value}
                        // checked={
                        //   getIncomeRangeLabel(
                        //     occupationData?.financialDetails
                        //   ) === Number(occupation?.value)
                        // }
                        label1={occupation?.label}
                      />
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        )}

        {data?.user?.nature === "DP" ? (
          <>
            <View style={styles.table}>
              <View style={styles.subTable}>
                <View style={styles.fullRow}>
                  <Text style={styles.text}>
                    निक्षेप सदस्यले हितग्राहीको खातामा भएको घटबढ स्वचालित रुपमा
                    (Standing instruction for the automatic transactions)
                  </Text>

                  <View style={styles.transaction}>
                    {occupationsTransaction.map((occupation) => (
                      <View style={styles.width}>
                        <RadioButton
                          key={occupation?.value}
                        //   checked={
                        //     data?.boStatement
                        //       ?.isStandingInstructionForAutomaticTxn ===
                        //     occupation?.value
                        //   }
                          label1={occupation?.label}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.table}>
              <View style={styles.subTable}>
                <View style={styles.fullRow}>
                  <Text style={styles.text}>
                    खाताको विवरण प्राप्त गर्ने (Account Statement)
                  </Text>
                  <View style={styles.account}>
                    {occupationsAccount.map((occupation) => (
                      <View style={styles.width}>
                        <RadioButton
                          key={occupation?.value}
                        //   checked={
                        //     getStatementPeriod(
                        //       data?.boStatement?.accountStatementPeriod
                        //     ) === occupation?.value
                        //   }
                          label1={occupation?.label}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            </View>
          </>
        ) : (
          ""
        )}
      </View>
    </>
  );
};

export default OccupationInfoPdf;
