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
  
  
  const styles = StyleSheet.create({
    tableborder: {
      margin: 0,
      border: "1 solid #DEE2E6",
      padding: 2,
      fontSize: 9,
    },
    paragraphText: {
      fontSize: 9,
      fontWeight: "extrabold",
    },
    highlight: {
      fontSize: 11,
    },
  });
  
  const TermsCondition = [
    {
      term: "१. मेरो शेयर सेवा केवल व्यक्तिगत प्रयोजनको लागि मात्र हो । यो सेवा अन्य कसैलाई हस्तान्तरण गरिने छैन ।",
    },
    {
      term: "२. ग्राहकले मेरो शेयर सेवासँग सम्बन्धीत बिद्दुतीय कारोबारको लागि दिएको सुरक्षित गोप्यनाम,पासवोर्ड,पिन आदि जानकारीको गोपनीयता कायम गर्नेछ र यी जानकारीहरु कुनै पनि अवस्थामा कसैलाई कहिले पनि दिने छैन ।",
    },
    {
      term: "३. यदि आफ्ना गोप्य पासवोर्ड नम्बर पिन हराएको वा सो को जानकारीहरु कतै कोही असम्बन्धित व्यक्तिको जानकारमा आएको थाहा भएमा तुरुन्त आफ्नो निक्षेप सदस्यलाई जानकारी गराई रद्ध गराउनु पर्ने र परिवर्तन गराउनु पर्नेछ ।",
    },
    {
      term: "४. मेरो शेयर मार्फत गरिएका सम्पूर्ण कारोबारको जिम्मेवारी ग्राहक स्वयंको हुनेछ ।",
    },
    {
      term: "५. मेरो शेयरको प्रयोग सधैं सिडिएससिको प्रचलित नियम र विनियमको आधारमा रहने छ ।",
    },
    {
      term: "६. प्राबिधिक कारणले सेवा अवरुद्ध हुन गई ग्राहकलाई हुन गएको असुविधा, क्षति वा हानी नोक्सानीको लागि निक्षेप सदस्य/सिडिएससि कुनै पनि किसिमले जिम्मेवार हुने छैन ।",
    },
    {
      term: "७. यो निवेदन निक्षेप सदस्य/सिडिएससिको स्वीकृत आवश्यक पर्नेछ । निक्षेप सदस्य/सिडिएससिसँग कुनै कारणले नखुलाई आफ्नो स्वविवेकमा निवेदन अस्विकृत गर्ने अधिकार रहने छ ।",
    },
  ];
  const RequestFormPdf = ({ userData }) => {
    return (
      <>
        <View style={[{ marginTop: "18px" }]}>
          <Text style={[styles.paragraphText, { textAlign: "center" }]}>
            <Text style={styles.highlight}>"मेरो शेयर"</Text> को सेवा लिनको लागि
            निवेदन फारम
          </Text>
          <View style={[{ margin: "16px" }]} />
          <Text style={[styles.paragraphText, { textAlign: "right" }]}>
            मिति: .........................
          </Text>
          <Text style={[styles.paragraphText]}>श्री प्रमुख ज्यु</Text>
          {/* <Text style={[styles.paragraphText]}>{orgData?.name}</Text>
          <Text style={[styles.paragraphText]}>{orgData?.address}</Text> */}
          <View style={[{ margin: "8px" }]} />
          <Text
            style={[
              styles.paragraphText,
              { textAlign: "center", fontWeight: "extrabold" },
            ]}
          >
            विषय : <Text style={styles.highlight}>"मेरो शेयर"</Text> को सेवा
            प्रदान गरिदिने सम्बन्धमा ।
          </Text>
          <Text style={[styles.paragraphText]}>महोदय,</Text>
          <Text style={[styles.paragraphText]}>
            म/हामीले त्यस लि. मा खोलेको हितग्राही खाता सम्बन्धी विवरण इन्टरनेट
            मार्फत हेर्न तथा "मेरो शेयर" मा उपलब्ध सम्पुर्ण सेवाहरु प्रयोग गर्न
            चाहेकोले उक्त्त सेवा प्रदान गरिदिनु हुन हार्दिक अनुरोध गर्दछु/गर्दछौँ
            ।
          </Text>
        </View>
        <View
          style={[
            styles,
            { width: "100%", display: "flex", flexDirection: "row" },
          ]}
        >
          <View style={[styles.tableborder, { width: "40%" }]}>
            <Text>निवेदकको नाम/थर (Applicant's Name/Surname)</Text>
          </View>
          <View style={[styles.tableborder, { width: "60%" }]}>
            <Text>
              {userData?.individualDetails?.firstName}{" "}
              {userData?.individualDetails?.middleName}{" "}
              {userData?.individualDetails?.lastName}
            </Text>
          </View>
        </View>
  
        <View
          style={[
            styles,
            { width: "100%", display: "flex", flexDirection: "row" },
          ]}
        >
          <View style={[styles.tableborder, { width: "40%" }]}>
            <Text>देवनागरी (Name in Nepali)</Text>
          </View>
          <View style={[styles.tableborder, { width: "60%" }]}>
            <Text>{userData?.individualDetails?.clientNameNepali}</Text>
          </View>
        </View>
  
        <View
          style={[
            styles,
            { width: "100%", display: "flex", flexDirection: "row" },
          ]}
        >
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>DP ID</Text>
          </View>
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>{userData?.user?.dpDetails?.dpId}</Text>
          </View>
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>Client ID</Text>
          </View>
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text></Text>
          </View>
        </View>
  
        <View
          style={[
            styles,
            { width: "100%", display: "flex", flexDirection: "row" },
          ]}
        >
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>Email</Text>
          </View>
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>{userData?.user?.email}</Text>
          </View>
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>Mobile No.</Text>
          </View>
          <View style={[styles.tableborder, { width: "25%" }]}>
            <Text>{userData?.user?.phoneNo}</Text>
          </View>
        </View>
  
        <View
          style={[
            styles,
            { width: "100%", display: "flex", flexDirection: "row" },
          ]}
        >
          <View style={[styles.tableborder, { width: "19%" }]}>
            <Text>Address</Text>
          </View>
          <View style={[{ width: "100%" }]}>
            <View style={[{ display: "flex", flexDirection: "row" }]}>
              <View style={[styles.tableborder, { width: "33.33%" }]}>
                <Text>Province</Text>
              </View>
              <View style={[styles.tableborder, { width: "33.33%" }]}>
                <Text>District</Text>
              </View>
              <View style={[styles.tableborder, { width: "33.33%" }]}>
                <Text>Municipality</Text>
              </View>
            </View>
            <View
              style={[{ display: "flex", flexDirection: "row", height: "40px" }]}
            >
              <View style={[styles.tableborder, { width: "33.33%" }]}>
                <Text>{userData?.addressDetails[0]?.province}</Text>
              </View>
              <View style={[styles.tableborder, { width: "33.33%" }]}>
                <Text>{userData?.addressDetails[0]?.district}</Text>
              </View>
              <View style={[styles.tableborder, { width: "33.33%" }]}>
                <Text>{userData?.addressDetails[0]?.municipality}</Text>
              </View>
            </View>
          </View>
        </View>
  
        <View>
          <View style={[{ margin: "10px" }]} />
          <Text
            style={[
              styles.paragraphText,
              { textAlign: "center", textDecoration: "underline" },
            ]}
          >
            <Text style={styles.highlight}>"मेरो शेयर"</Text> को सेवा सम्बन्धी
            नियम तथा शर्तहरु
          </Text>
          {TermsCondition.map((data, index) => {
            const termParts = data.term.split("मेरो शेयर");
            return (
              <Text style={styles.paragraphText} key={index}>
                {termParts.map((part, partIndex) => (
                  <React.Fragment key={partIndex}>
                    {partIndex > 0 && (
                      <Text style={styles.highlight}>मेरो शेयर</Text>
                    )}
                    {part}
                  </React.Fragment>
                ))}
              </Text>
            );
          })}
        </View>
        <View style={[{ margin: "10px" }]} />
        <Text style={[styles.paragraphText, { textDecoration: "underline" }]}>
          उद्घोषण
        </Text>
        <Text style={[styles.paragraphText]}>
          म/हामी माथि उल्लेखित सम्पूर्ण विवरण साँचो रहेको घोषणा गर्दछु/गर्दछौ ।यदि
          उल्लेखित विवरणहरुमा कुनै कारणबस गलत भएको अथवा गलत प्रमाणित भएको अवस्थामा
          त्यसबाट सिर्जना हुने सम्पूर्ण परिस्थितिको जिम्मेवार म/हामी स्वयं हुने
          छु/छौ।साथै माथि उल्लेखित मोबाइल नम्बर तथा इमेल मेरो/हाम्रो व्यक्तिगत
          प्रयोजनका लागि प्रयोग हुनेछ तथा मेरो शेयरको सेवाका लागि सिडिएससिबाट
          प्रदान गरिने LOGIN ID तथा Password हरु उल्लेखित मोबाइल नम्बर वा इमेल
          ठेगानामा प्राप्त गर्न मेरो / हाम्रो मन्जुरी छ ।मेरो शेयरको सेवा उपभोग
          गर्ने सम्बन्धमा सिडिएससिद्वारा जारी गरिएका यस सेवासंग सम्बन्धित माथि
          उल्लेख गरिएका सम्पूर्ण नियम,सर्तहरु राम्ररी पढि बुझी स्वीकार
          गर्दछु/गर्दछौ ।
        </Text>
        <View
          style={[
            styles,
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "52px",
            },
          ]}
        >
          <View
            style={[
              { display: "flex", flexDirection: "column", alignItems: "center" },
            ]}
          >
            <Text style={[{ marginBottom: "3px" }]}>_______________</Text>
            <Text
              style={[
                styles.paragraphText,
                { textDecoration: "overline", textAlign: "center" },
              ]}
            >
              आधिकारिक दस्तखत
            </Text>
          </View>
          <View
            style={[
              { display: "flex", flexDirection: "column", alignItems: "center" },
            ]}
          >
            <Text style={[{ marginBottom: "3px" }]}>_______________</Text>
            <Text
              style={[
                styles.paragraphText,
                { textDecoration: "overline", textAlign: "center" },
              ]}
            >
              मिति
            </Text>
          </View>
        </View>
      </>
    );
  };
  
  export default RequestFormPdf;
  