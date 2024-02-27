import {
  Document,
  Page,
  Text,
  StyleSheet,
  Image,
  View,
  Font,
} from "@react-pdf/renderer";
import React, { useState } from "react";
// import dateConverter from "../../../../helpers/DateConverter";
import { RadioButton, Checkbox } from "../ReuseStyle/CheckboxComponent";
// import PermanentAddressInfoPdf from "./PermanentAddressPdf";
//   import { ADToBS } from "bikram-sambat-js";

const styles = StyleSheet.create({
  text: {
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    width: "110px",
    height: "90px",
  },
  header: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "black",
    fontSize: "12px",
    padding: "5px",
  },
  boldText: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "4px 0px",
  },
  semiBoldText: {
    fontSize: "10px",
    fontWeight: "bold",
  },
  paragraphTextHeader: {
    fontSize: "12px",
    textAlign: "center",
  },
  paragraphText: {
    fontSize: 8,
  },
  tableborder: {
    margin: "0px",
    border: "1px solid #DEE2E6",
    padding: "2px",
  },
});

const BasicInfoCoPdf = ({ userData }) => {
  // const corporateDetails = userData && userData?.corporateDetails;
  // const corporateBodDetails = userData && userData?.corporateBodDetails;
//   const { user } = userData && userData;
  const [currentDate] = useState(new Date());

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
          { width: width1 ? width1 : "50%", margin: "0px" },
        ]}
      >
        {content1}
      </View>
      {content2 && (
        <View
          style={[
            styles.tableborder,
            styles.paragraphText,
            { width: width2 ? width2 : "50%", margin: "0px" },
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
            marginTop: "20px",
          },
        ]}
      >
        <View style={[styles, { textAlign: "center", width: "100%" }]}>
          <Text
            style={[styles.text, { marginBottom: "2px", fontSize: "14px" }]}
          >
            अनुसूची १२
          </Text>
          <Text style={styles.paragraphTextHeader}>
            (विनियम २० संग सम्बन्धित)
          </Text>
          <Text style={[styles.boldText, { textDecoration: "underline" }]}>
            {userData?.user?.nature === "DP"
              ? "( प्राकृतिक व्यक्ति बाहेक अन्य संस्थाको हितग्राही खाता खोल्ने निवेदन)"
              : "(कम्पनी वा संस्थाको परिचय विवरण)"}
          </Text>
          <Text
            style={[
              styles.boldText,
              { textDecoration: "underline", marginBottom: "12px" },
            ]}
          >
            {userData?.user?.nature === "DP"
              ? "ACCOUNT OPENING FORM FOR CORPORATE BENEFICIAL OWNER"
              : "DETAILS OF COMPANY OF INSTITUTION"}
          </Text>
        </View>
        {/* <View>
              <Image src={imageUrl} style={styles.image} />
            </View> */}
      </View>

      <View style={[styles]}>
        <Text style={styles.header}>
          कार्यालय प्रयोजनका लागि मात्र (For Official Use Only)
        </Text>
        <View>
          <Tablebox
            content1={
              <Text>आवेदन नं. (App No.):- {userData?.user?.submissionNo}</Text>
            }
            content2={<Text>संकेत नम्बर (Ref Number):-</Text>}
            content3={
              <Text>
                {/* मिति (Date):- {ADToBS(currentDate.toLocaleDateString())} */}
              </Text>
            }
            width1="33.33%"
            width2="33.33%"
            width3="33.33%"
          />
          {userData?.user?.nature === "TMS" && (
            <Tablebox
              content1={
                <Text>
                  कम्पनी वा संस्थाको हितग्राही खाता नं. (Company's BOID No.):
                </Text>
              }
              content2={userData?.user?.boid && userData?.user?.boid}
              width1="100%"
            />
          )}
        </View>
      </View>

      <Text style={[styles.semiBoldText, { marginTop: "10px" }]}>
        तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ | आफुसंग सरोकार नभएको
        विवरण उल्लेख गर्ने कोठामा तेर्सो धर्को तानिदिनु होला |
      </Text>
      <Text style={[styles.semiBoldText, { margin: "5px 0px 10px" }]}>
        Please complete all details and strike out the non-applicable
        fields/boxes.
      </Text>
      <View
        style={[
          styles,
          { display: "flex", flexDirection: "row", marginBottom: "3px" },
        ]}
      >
        <Text style={styles.paragraphText}>
          निक्षेप सदस्यको नाम (Name of Depository Participant) :{" "}
        </Text>
        <Text
          style={[styles.paragraphText, { borderBottom: "1px dotted black" }]}
        >
          {/* {user?.dpDetails && user?.dpDetails?.dpName} */}
        </Text>
      </View>
      <View
        style={[
          styles,
          { display: "flex", flexDirection: "row", marginBottom: "3px" },
        ]}
      >
        <Text style={styles.paragraphText}>शाखा (Branch) : </Text>
        <Text
          style={[styles.paragraphText, { borderBottom: "1px dotted black" }]}
        >
          {" "}
          {/* {user?.branch && user?.branch?.branchName} */}
        </Text>
      </View>
      {/*-----------------------For Checkbox-------------------------------------*/}
      <View style={[styles.paragraphText, { marginBottom: "7px" }]}>
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
            label1="राफसाफ"
            label2="Clearing"
            //   checked={corporateDetails?.corporateAccountType === "CLR" ?? true}
          />
          <Checkbox
            label1="हितग्राही"
            label2="Beneficial Owner"
            //   checked={corporateDetails?.corporateAccountType === "BNO" ?? true}
          />
          <Checkbox
            label1="अन्य"
            label2="Others"
            //   checked={corporateDetails?.corporateAccountType === "OTR" ?? true}
          />
        </View>
      </View>
      {/*-----------------------For Checkbox-------------------------------------*/}

      <Text style={styles.header}>ग्राहकको विवरण (Client Details)</Text>
      <View>
        <Tablebox
          content1={
            <Text>
              हितग्राही कम्पनीको नाम (Name of Beneficial Owner Company)
            </Text>
          }
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              {/* <Text>{corporateDetails?.companyName?.toUpperCase()}</Text> */}
            </View>
          }
        />

        <Tablebox
          content1={
            <Text>
              पहिलो आधिकारीक प्रतिनिधिको नाम (Name of First Authorized Person)
            </Text>
          }
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              {/* <Text>{corporateBodDetails?.fcpName?.toUpperCase()}</Text> */}
            </View>
          }
        />

        <Tablebox
          content1={
            <Text>
              दोश्रो आधिकारीक प्रतिनिधिको नाम (Name of Second Authorized Person)
            </Text>
          }
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              {/* <Text>{corporateBodDetails?.scpName.toUpperCase()}</Text> */}
            </View>
          }
        />

        <Tablebox
          content1={
            <Text>
              तेस्रो आधिकारीक प्रतिनिधिको नाम (Name of Third Authorized Person)
            </Text>
          }
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              {/* <Text>{corporateBodDetails?.trdName?.toUpperCase()}</Text> */}
            </View>
          }
        />

        <Tablebox
          content1={
            <Text>
              प्रमुख आधिकारीक प्रतिनिधिको नाम (Chief Operating Officer's Name)
            </Text>
          }
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              {/* <Text> {corporateDetails?.companyCeoName?.toUpperCase()}</Text> */}
            </View>
          }
        />
        <Tablebox
          content1={<Text>कम्पनी सचिवको नाम (Company Secretary's Name)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              <Text>
                {/* {corporateDetails?.companySecretaryName?.toUpperCase()} */}
              </Text>
            </View>
          }
        />

        <Tablebox
          content1={<Text>कम्पनी स्थापना मिति (Date of Incorporation)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "60px" },
              ]}
            >
              <Text>
                बि. सं.( B.S.):{" "}
                {/* {corporateDetails?.incorporationDate &&
                    corporateDetails?.incorporationDate} */}
              </Text>
              <Text>
                इ. सं.( A.D.):{" "}
                {/* {dateConverter(corporateDetails?.incorporationDate, "BS_AD")} */}
              </Text>
            </View>
          }
        />
        <Tablebox
          width1="35%"
          width2="65%"
          content1={<Text>कम्पनीको किसिम (Types of Company)</Text>}
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              <RadioButton
                label1={"प्राइभेट लि. Pvt. Ltd."}
                label2={"Pvt. Ltd."}
                //   checked={corporateDetails?.companyType === "PVT"}
              />
              <RadioButton
                label1={"पब्लिक लि."}
                label2={"Public Ltd."}
                //   checked={corporateDetails?.companyType === "PUB"}
              />
              <RadioButton
                label1={"सरकारी स्वामित्व भएको"}
                label2={"Govt. Owned"}
                //   checked={corporateDetails?.companyType === "GOV"}
              />
              <RadioButton
                label1={"अन्य"}
                label2={"Others"}
                //   checked={corporateDetails?.companyType === "OTHER"}
              />
            </View>
          }
        />

        <Tablebox
          content1={
            <Text>कम्पनी दर्ता भएको देश (Country of Registration)</Text>
          }
          content2={
            <View
              style={[
                styles,
                { display: "flex", flexDirection: "row", gap: "5px" },
              ]}
            >
              <RadioButton
                label1={"नेपाल"}
                label2={"Nepal"}
                //   checked={corporateDetails?.countryReg === "Nepal"}
              />
              <RadioButton
                label1={"अन्य (नेपाल बाहेक अन्य देश भएमा उल्लेख गर्ने)"}
                label2={"Others (Please mention if other than Nepal)"}
                //   checked={corporateDetails?.countryReg !== "Nepal"}
              />
            </View>
          }
        />
      </View>
      <View>
        <Text style={[styles, { marginTop: "5px", fontSize: "8px" }]}>
          बोर्ड संचालक समितिको मिति २०७४|११|२१ को निर्णय बमोजिम संशोधन गरिएको |
        </Text>
      </View>
    </>
  );
};

export default BasicInfoCoPdf;
