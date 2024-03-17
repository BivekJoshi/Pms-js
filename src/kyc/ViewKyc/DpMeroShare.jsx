import React from "react";
import dateConverter from "../../utility/dateConverter";

const DpMeroShare = (props) => {
  const orgData = props.orgData;
  const clientId = props.boid?.toString()?.slice(-8);
  const addressDetails = props.addressDetails;
  const bsDate = dateConverter(props.date, "AD_BS");
  return (
    <section className="meroShare">
      <header className="text-center">
        <p>
          <b>"मेरो शेयर"</b> को सेवा लिनको लागि निवेदन फारम
        </p>
        <div className="d-flex flex-row" style={{ marginLeft: "72%" }}>
          <p>
            मिति:
            {/* {bsDate} */}
          </p>
        </div>
        <div className="text-start">
          <p>
            {" "}
            श्री प्रमुख ज्यु <br />
            {orgData !== undefined && orgData?.name} <br />
            {orgData !== undefined && orgData?.address}{" "}
          </p>
        </div>
        <div>
          <p>
            {" "}
            <b> विषय : "मेरो शेयर" को सेवा प्रदान गरिदिने सम्बन्धमा । </b>{" "}
          </p>
        </div>
        <div className="text-start">
          <p>महोदय,</p>
        </div>
      </header>
      <body style={{ backgroundColor: "white" }}>
        <p>
          म/हामीले त्यस लि. मा खोलेको हितग्राही खाता सम्बन्धी विवरण इन्टरनेट
          मार्फत हेर्न तथा <b>"मेरो शेयर"</b> मा उपलब्ध सम्पुर्ण सेवाहरु प्रयोग
          गर्न चाहेकोले उक्त्त सेवा प्रदान गरिदिनु हुन हार्दिक अनुरोध
          गर्दछु/गर्दछौँ ।{" "}
        </p>

        <div className="container">
          <div className="row">
            <div className="col-4 border center-y ">
              <div>निवेदकको नाम/थर (Applicant's Name/Surname)</div>
            </div>
            <div className="col-8 border d-flex align-items-end">
              <div className="text-uppercase " style={{ fontWeight: "600" }}>
                {props.applicantName}
              </div>
            </div>
            <div className="col-4 border center-y ">
              <div>देवनागरी (Name in Nepali)</div>
            </div>
            <div className="col-8 border d-flex align-items-end">
              <div className="text-uppercase  " style={{ fontWeight: "600" }}>
                {props.nepaliname}
              </div>
            </div>
            <div className="col-3 border center-y ">
              <div>DP ID</div>
            </div>
            <div
              className="col-3 border center-y "
              style={{ fontWeight: "600" }}
            >
              130{props.dpId}
            </div>
            <div className="col-3 border center-y ">
              <div>Client ID</div>
            </div>
            <div
              className="col-3 border center-y "
              style={{ fontWeight: "600" }}
            >
              {clientId}
            </div>
            <div className="col-3 border center-y ">
              {" "}
              <div>Email</div>
            </div>
            <div
              className="col-3 border center-y "
              style={{ fontWeight: "600" }}
            >
              <div>{props.email}</div>
            </div>
            <div className="col-3 border  ">
              <div>Mobile No.</div>
            </div>
            <div className="col-3 border m-0  " style={{ fontWeight: "600" }}>
              <div>{props.mobileNo}</div>
              <div>{props.officeContact}</div>
            </div>
            <div className="col-3 border m-0   ">
              <div>Office No.</div>
            </div>
            <div className="col-3 border m-0  " style={{ fontWeight: "600" }}>
              <div>{props.officeContact}</div>
            </div>
            <div className="col-3 border  ">
              <div>Residence No.</div>
            </div>
            <div className="col-md-3 border " style={{ fontWeight: "600" }}>
              <div>{props.residenceContact}</div>
            </div>
            <div className="col-2 col-md-2 border center-y ">
              {" "}
              <div>Address</div>
            </div>
            <div className=" row col-10 col-md-10 m-0 p-0 ">
              <div className="col-4 col-md-4 border m-0  p-0 text-center">
                <div>Province </div>
              </div>
              <div className="col-4 col-md-4 border p-0 text-center">
                <div>District </div>
              </div>
              <div className="col-4 col-md-4 border p-0 text-center">
                <div>Municipality</div>
              </div>
              <div
                className="col-4 col-md-4 border m-0  p-0 text-center "
                style={{ fontWeight: "600" }}
              >
                <div>{addressDetails?.province}</div>
              </div>
              <div
                className="col-4 col-md-4 border p-0 text-center "
                style={{ fontWeight: "600" }}
              >
                <div>{addressDetails?.district}</div>
              </div>
              <div
                className="col-4 col-md-4 border p-0 text-center "
                style={{ fontWeight: "600" }}
              >
                <div>
                  {addressDetails?.municipality + "-" + addressDetails?.wordNo}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2">
          <div className="text-center text-decoration-underline">
            <b className="mt-5">
              <p>"मेरो शेयर" को सेवा सम्बन्धी नियम तथा शर्तहरु</p>
            </b>
          </div>
          <div className="text-start">
            <p>
              १. <b>मेरो शेयर</b> सेवा केवल व्यक्तिगत प्रयोजनको लागि मात्र हो ।
              यो सेवा अन्य कसैलाई हस्तान्तरण गरिने छैन ।
              <br />
              २. ग्राहकले <b>मेरो शेयर</b> सेवासँग सम्बन्धीत बिद्दुतीय कारोबारको
              लागि दिएको सुरक्षित गोप्यनाम,पासवोर्ड,पिन आदि जानकारीको गोपनीयता
              कायम गर्नेछ र यी जानकारीहरु कुनै पनि अवस्थामा कसैलाई कहिले पनि
              दिने छैन ।
              <br />
              ३. यदि आफ्ना गोप्य पासवोर्ड नम्बर पिन हराएको वा सो को जानकारीहरु
              कतै कोही असम्बन्धित व्यक्तिको जानकारमा आएको थाहा भएमा तुरुन्त
              आफ्नो निक्षेप सदस्यलाई जानकारी गराई रद्ध गराउनु पर्ने र परिवर्तन
              गराउनु पर्नेछ ।
              <br />
              ४. <b>मेरो शेयर</b> मार्फत गरिएका सम्पूर्ण कारोबारको जिम्मेवारी
              ग्राहक स्वयंको हुनेछ ।
              <br />
              ५. <b>मेरो शेयर</b>को प्रयोग सधैं सिडिएससिको प्रचलित नियम र
              विनियमको आधारमा रहने छ ।
              <br />
              ६. प्राबिधिक कारणले सेवा अवरुद्ध हुन गई ग्राहकलाई हुन गएको
              असुविधा, क्षति वा हानी नोक्सानीको लागि निक्षेप सदस्य/सिडिएससि कुनै
              पनि किसिमले जिम्मेवार हुने छैन ।
              <br />
              ७. यो निवेदन निक्षेप सदस्य/सिडिएससिको स्वीकृत आवश्यक पर्नेछ ।
              निक्षेप सदस्य/सिडिएससिसँग कुनै कारणले नखुलाई आफ्नो स्वविवेकमा
              निवेदन अस्विकृत गर्ने अधिकार रहने छ ।
              <br />
              ८. ग्राहकलाई सुचित गरी वा नगरी यो सुबिधा नवीकरण गर्ने, रद्ध गर्ने
              वा फिर्ता लिने अधिकार निक्षेप सदस्य/सिडिएससि रहने छ ।
            </p>
            <p className="text-decoration-underline">
              <b>उद्घोषण</b>
            </p>
            <p>
              म/हामी माथि उल्लेखित सम्पूर्ण विवरण साँचो रहेको घोषणा
              गर्दछु/गर्दछौ ।यदि उल्लेखित विवरणहरुमा कुनै कारणबस गलत भएको अथवा
              गलत प्रमाणित भएको अवस्थामा त्यसबाट सिर्जना हुने सम्पूर्ण
              परिस्थितिको जिम्मेवार म/हामी स्वयं हुने छु/छौ।साथै माथि उल्लेखित
              मोबाइल नम्बर तथा इमेल मेरो/हाम्रो व्यक्तिगत प्रयोजनका लागि प्रयोग
              हुनेछ तथा मेरो शेयरको सेवाका लागि सिडिएससिबाट प्रदान गरिने LOGIN
              ID तथा Password हरु उल्लेखित मोबाइल नम्बर वा इमेल ठेगानामा प्राप्त
              गर्न मेरो / हाम्रो मन्जुरी छ ।मेरो शेयरको सेवा उपभोग गर्ने
              सम्बन्धमा सिडिएससिद्वारा जारी गरिएका यस सेवासंग सम्बन्धित माथि
              उल्लेख गरिएका सम्पूर्ण नियम,सर्तहरु राम्ररी पढि बुझी स्वीकार
              गर्दछु/गर्दछौ ।
            </p>
            <div className="row mt-5">
              <div className="col-6 text-start">
                <div
                  style={{
                    borderBottom: "1px solid #000",
                    width: "25%",
                    // marginTop: "1.5rem",
                  }}
                ></div>
                <p>आधिकारिक दस्तखत </p>
              </div>
              <div className="col-6 text-start">
                {props.date ? (
                  <div style={{ borderBottom: "1px solid #000", width: "25%" }}>
                    {bsDate}
                  </div>
                ) : (
                  <div
                    style={{ borderBottom: "1px solid #000", width: "25%" }}
                  ></div>
                )}

                <p>मिति</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </section>
  );
};

export default DpMeroShare;
