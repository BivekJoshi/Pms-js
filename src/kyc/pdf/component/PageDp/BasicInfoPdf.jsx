import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
  Font,
} from "@react-pdf/renderer";
import React from "react";
import { Checkbox, RadioButton } from "../ReuseStyle/CheckboxComponent";
import AddressComponent from "../ReuseStyle/AddressComponent";
//   import { getPicCoresPorxyURL } from "../../../api/urls.api";
//   import dateConverter from "../../../helpers/DateConverter";
//   import PermanentAddressInfoPdf from "./PermanentAddressPdf";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
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
  boldText: {
    fontSize: "10px",
    fontWeight: "extrabold",
    margin: "4px 0px",
  },
  paragraphTextHeader: {
    fontSize: "13px",
    textAlign: "center",
  },
  paragraphText: {
    fontSize: "8px",
  },
  tableborder: {
    margin: "0px",
    border: "1px solid #DEE2E6",
    padding: "2px",
  },
});

const BasicInfoPdf = ({ userData }) => {
  // const imageUrl =
  //   getPicCoresPorxyURL() + userData?.clientDocument?.ppSizePhoto;

  const Tablebox = ({
    content1,
    content2,
    width1,
    width2,
    content3,
    width3,
  }) => (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          margin: "0px",
        },
      ]}
    >
      <View
        style={[
          styles.tableborder,
          styles.paragraphText,
          { width: width1 ? width1 : "35%", margin: "0px" },
        ]}
      >
        {content1}
      </View>
      {content2 && (
        <View
          style={[
            styles.tableborder,
            styles.paragraphText,
            { width: width2 ? width2 : "65%", margin: "0px" },
          ]}
        >
          {content2}
        </View>
      )}
      {content3 && (
        <View
          style={[
            styles.tableborder,
            styles.paragraphText,
            { width: width3 ? width3 : "0%" },
          ]}
        >
          {content3}
        </View>
      )}
    </View>
  );

  return (
    <>
      <View
        style={[
          styles,
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "16px",
          },
        ]}
      >
        <View style={[styles, { width: "17%" }]}></View>
        <View style={[styles, { textAlign: "center", width: "100%" }]}>
          <Text style={styles.text}>अनुसूची १२</Text>
          <Text style={styles.paragraphTextHeader}>
            (विनियम २० संग सम्बन्धित)
          </Text>
          <Text
            style={[
              styles.paragraphTextHeader,
              { textDecoration: "underline" },
            ]}
          >
            {userData?.user?.nature === "DP"
              ? "प्राकृतिक व्यक्तिको हितग्राही खाता खोल्ने निवेदन"
              : "प्राकृतिक व्यक्तिको परिचय विवरण"}
          </Text>
          <Text
            style={[
              styles.paragraphTextHeader,
              { textDecoration: "underline" },
            ]}
          >
            {userData?.user?.nature === "DP"
              ? "ACCOUNT OPENING FORM FOR INDIVIDUAL BENEFICIAL OWNER"
              : "DETAILS OF NATURAL PERSON"}
          </Text>
          {userData?.user?.nature === "DP" ? (
            <Text style={styles.boldText}>
              (दोश्रो संशोधन, २०७३ अनुसार संशोधित गरिएको)
            </Text>
          ) : (
            ""
          )}
        </View>
        {/* {imageUrl && (
            <View style={[{ width: "150px", height: "100px" }]}>
              <Image src={imageUrl} style={styles.image} />
            </View>
          )} */}
      </View>
      <Text style={styles.header}>
        कार्यालय प्रयोजनका लागि मात्र (For Official Use Only)
      </Text>
      <View>
        <Tablebox
          content1={
            <Text>आवेदन नं. (App No.): {userData?.user?.submissionNo}</Text>
          }
          content2={
            <Text>संकेत नं. (Ref No.): {userData?.user?.referenceNumber}</Text>
          }
          content3={<Text>मिति (Date): {userData?.user?.submittedDate}</Text>}
          width1="33.33%"
          width2="33.33%"
          width3="33.33%"
        />
        {userData?.user?.nature === "TMS" && (
          <Tablebox
            content1={<Text>हितग्राहीको खाता नं. (BOID No.):</Text>}
            content2={
              <Text>
                {"  "} {userData?.user?.boid}
              </Text>
            }
            width1="30%"
            width2="70%"
          />
        )}
      </View>
      <Text style={styles.boldText}>
        तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ । आफूसंग सरोकार नभएको
        विवरण उल्लेख गर्ने कोठामा तेर्सो धर्को तानिदिनु होला ।
      </Text>
      <Text style={styles.boldText}>
        Please complete all details and strike out the non-applicable
        fields/boxes.
      </Text>
      <View style={[styles, { display: "flex", flexDirection: "row" }]}>
        <Text style={styles.paragraphText}>
          निक्षेप सदस्यको नाम (Name of Depository Participant) :{" "}
        </Text>
        <Text
          style={[styles.paragraphText, { borderBottom: "1px dotted black" }]}
        >
          {userData?.user?.dpDetails && userData?.user?.dpDetails?.dpName}
        </Text>
      </View>
      <View style={[styles, { display: "flex", flexDirection: "row" }]}>
        <Text style={styles.paragraphText}>शाखा (Branch) : </Text>
        <Text
          style={[styles.paragraphText, { borderBottom: "1px dotted black" }]}
        >
          {" "}
          {userData?.user?.branch && userData?.user?.branch?.branchName}
        </Text>
      </View>
      {/*-----------------------For Checkbox-------------------------------------*/}
      <View style={[styles.paragraphText]}>
        <View
          style={[
            styles,
            { display: "flex", flexDirection: "row", gap: "35px" },
          ]}
        >
          <View style={[styles, { display: "flex", flexDirection: "column" }]}>
            <Text>खाताको किसिम :</Text>
            <Text>Types of Account:</Text>
          </View>
          <Checkbox
            label1="व्यक्तिगत"
            label2="Individual"
            checked={userData?.individualDetails?.isNrn ? false : true}
          />
          <Checkbox
            label1="गैर आवसीय नेपाली"
            label2="NRN"
            checked={userData?.individualDetails?.isNrn ? true : false}
          />
          <Checkbox label1="विदेशी" label2="Foreigner" checked={false} />
        </View>
      </View>
      {/*-----------------------For Checkbox-------------------------------------*/}

      <Text style={styles.header}>ग्राहकको विवरण (Client Details)</Text>
      <View>
        <Tablebox
          content1={<Text>नाम (Name in block letters)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              {userData?.individualDetails?.middleName === null
                ? userData?.individualDetails?.firstName
                    .split("")
                    .map((letter, index) => (
                      <Text
                        style={[
                          styles,
                          {
                            backgroundColor: "#CCCCCC",
                            width: "13px",
                            textAlign: "center",
                          },
                        ]}
                      >
                        {letter.toUpperCase()}
                      </Text>
                    ))
                : userData?.individualDetails?.firstName
                    .concat(
                      userData?.individualDetails?.middleName,
                      userData?.individualDetails?.lastName
                    )
                    .split("")
                    .map((letter, index) => (
                      <Text
                        style={[
                          styles,
                          {
                            backgroundColor: "#CCCCCC",
                            width: "13px",
                            textAlign: "center",
                          },
                        ]}
                      >
                        {letter.toUpperCase()}
                      </Text>
                    ))}
            </View>
          }
        />
        <Tablebox
          content1={<Text>देवनागरी (Name in Nepali)</Text>}
          content2={
            <Text>{userData?.individualDetails?.clientNameNepali}</Text>
          }
        />
        <Tablebox
          content1={<Text>जन्म मिति (Date of Birth)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "30px" },
              ]}
            >
              <Text>बि. सं. (B.S.): {userData?.individualDetails?.dob}</Text>
              <Text>
                इ. सं (A.D.):{" "}
                {/* {dateConverter(userData?.individualDetails?.dob, "BS_AD")} */}
              </Text>
            </View>
          }
        />
        <Tablebox
          content1={<Text>लिङ्ग (Gender)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "35px" },
              ]}
            >
              <RadioButton
                label1="पुरुष (Male)"
                checked={
                  userData?.individualDetails?.gender === "M" ? true : false
                }
              />
              <RadioButton
                label1="महिला (Female)"
                checked={
                  userData?.individualDetails?.gender === "F" ? true : false
                }
              />
              <RadioButton
                label1="अन्य (Others)"
                checked={
                  userData?.individualDetails?.gender === "O" ? true : false
                }
              />
            </View>
          }
        />
        <Tablebox
          content1={<Text>राष्ट्रियता (Nationality)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "35px" },
              ]}
            >
              <RadioButton
                label1="नेपाली (Nepalese)"
                checked={userData?.individualDetails?.isNrn ? false : true}
              />
              <RadioButton
                label1="अन्य (Others) खुलाउने (if any)"
                checked={userData?.individualDetails?.isNrn ? true : false}
              />
            </View>
          }
        />

        <Tablebox
          content1={<Text>नागरिकता नं. (Citizenship No.)</Text>}
          content2={<Text>{userData?.individualDetails?.citizenshipNo}</Text>}
        />
        <Tablebox
          content1={<Text>जारी जिल्ला (Issued District)</Text>}
          content2={<Text>{userData?.individualDetails?.issuedDistrict}</Text>}
        />
        <Tablebox
          content1={<Text>जारी मिति (Issued Date)</Text>}
          content2={<Text>{userData?.individualDetails?.issuedDate}</Text>}
        />
        <Tablebox
          content1={<Text>हितग्राही खाता नं. (Beneficiary ID No.)</Text>}
          content2={<Text>{userData?.user?.boid}</Text>}
        />
        <Tablebox
          content1={<Text>स्थायी लेखा नं. (PAN No.)</Text>}
          content2={<Text>{userData?.individualDetails?.panNo}</Text>}
        />

        {userData?.individualDetails?.isNrn && (
          <>
            <Tablebox
              content1={
                <Text>
                  गैरआवासिय नेपालीको हकमा परिचयपत्र {"\n"} Identification
                  No.(Incase of NRN)
                </Text>
              }
              content2={<Text>{userData?.individualDetails?.nrnNo}</Text>}
            />
            <Tablebox
              content1={
                <Text>
                  गैरआवासिय नेपालीको हकमा परिचयपत्र {"\n"} Identification
                  No.(Incase of NRN)
                </Text>
              }
              content2={<Text>{userData?.individualDetails?.nrn_address}</Text>}
            />
          </>
        )}
      </View>
    </>
  );
};

export default BasicInfoPdf;
