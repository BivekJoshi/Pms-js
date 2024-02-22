import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const CorporateTmsKyc = () => {
  const componentRef = useRef();
  return (
    <div className="container dpkyc">
      <div
        className="bg-white text-dark p-md-3  dpkyc"
        style={{ fontSize: "13.5px !important" }}
      >
        <div className="d-flex justify-content-end mb-2">
          {/* {' '} */}
          {/* <NewIndividualKyc
          imageURL={mapImage}
          userData={userData}
          extraInfo={extraInfo}
        /> */}
          <ReactToPrint
          // trigger={(a) => <CIcon name={'cilPrint'} size={'xl'} style={{ cursor: 'pointer' }} />}
          trigger={() => (
            <LocalPrintshopIcon />
          )}
          content={() => componentRef.current}
          documentTitle="download.pdf"
          // pageStyle="print"
          // pageStyle='@page { margin: minimum }'
          copyStyles
          contentStyle={{
            marginTop: "500px",
          }}
        />
        </div>
        <div className="kyc-page" id="pdf" ref={componentRef}>
          {/* Header */}
          <section className="container pb-1 pb-print-1">
            {/* <!-- Header section --> */}
            <header className="text-center" style={{ position: "relative" }}>
              <h2 className="">अनुसूची १२</h2>
              <p className="">(विनिमय २० संग सम्बन्धित)</p>
              <h2 className="text-decoration-underline ">
                कम्पनी वा संस्थाको परिचय विवरण
              </h2>
              <h3 className=" text-decoration-underline ">
                DETAILS OF COMPANY OF INSTITUTION
              </h3>
            </header>
          </section>
          {/* OfficialUse */}
          <section className="pb-1">
            <div className="container">
              <div>
                <div className="text-center kyc-secondary-header">
                  कार्यालय प्रयोजनका लागि मात्र (For official use only)
                </div>

                  <div className="row m-0 p-0">
                    <div className="col-4 col-md-4 col-lg-4 border center-y ">
                      <div>
                        आवेदन नं. (App No.):
                        {/* {userData?.user?.submissionNo} */}
                      </div>
                    </div>

                    <div className="col-4 col-md-4 col-lg-4 border ">
                      <div>
                        <div></div>
                        <div>
                          संकेत नं. (Ref Number):
                          {/* {userData?.user?.referenceNumber} */}
                        </div>
                      </div>
                    </div>

                    <div className="col-4 col-md-4 col-lg-4 border ">
                      <div>
                        <div>
                          मिति (Date):
                          {/* {user?.submittedDate} */}
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              {/* {userData?.user?.nature === "TMS" && ( */}
              <div className="container">
                <div className="row">
                  <div className="col-12  p-1 border border center-y">
                    कम्पनी वा संस्थाको हितग्राही खाता नं. (Company's BOID No.):
                    {/* {userData?.user?.boid && userData?.user?.boid} */}
                  </div>
                </div>
              </div>
              {/* )} */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p
                    className="my-2 mt-4"
                    style={{ fontSize: "15px", fontWeight: "600" }}
                  >
                    तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ । आफूसंग
                    सरोकार नभएको विवरण उल्लेख गर्ने कोठामा तेर्सो धर्को तानिदिनु
                    होला ।
                  </p>

                  <p
                    className="mb-4"
                    style={{ fontSize: "18px", fontWeight: "600" }}
                  >
                    Please complete all details and strike out the
                    non-applicable fields/boxes.
                  </p>
                  {/* <!-- Row htmlFor name of stock broker --> */}
                  <div className="d-flex" style={{ gap: "16px" }}>
                    <div className="">
                      निक्षेप सदस्यको नाम (Name of Depository Participant) :
                    </div>
                    <p className="dotted-underline">
                      {/* {user?.dpDetails && user?.dpDetails?.dpName} */}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <div>
                      <p>शाखा (Branch) :</p>
                    </div>
                    <div>
                      <p className="dotted-underline">
                        {/* {user?.branch && user?.branch?.branchName} */}
                      </p>
                    </div>
                  </div>
                  {/* <!-- Row htmlFor branch --> */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-2 col-md-2 col-lg-2 center-y ">
                  <div>
                    <div>खाताको किसिम :</div>
                    <div className="text-inline">Types of Account:</div>
                  </div>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                        //   checked={!individualDetail?.isNrn}
                      />
                      <div className="m-2">
                        {" "}
                        <div>राफसाफ</div>
                        <div>Clearing</div>
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                        //   checked={individualDetail?.isNrn}
                      />
                      <div className="m-2">
                        {" "}
                        <div>हितग्राही</div>
                        <div>Beneficial Owner</div>
                      </div>
                    </div>
                    <div className="col-4 d-flex">
                      <input
                        type="checkbox"
                        readOnly
                        htmlFor="typeOfAccount"
                        //   checked={
                        //     individualDetail?.individualAccountType === "FIG"
                        //   }
                      />
                      <div className="m-2">
                        {" "}
                        <div>अन्य</div>
                        <div>Others</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ClientDetails */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              कम्पनीको थप विवरण (Details of Company)
            </h2>

              <div className="row m-0 p-0">
                {/* <!-- ! name row --> */}
                <div className="col-6 border center-y ">
                  <div>
                    हितग्राही कम्पनीको नाम (Name of Beneficial Owner Company)
                  </div>
                </div>

                <div className="col-6 border center-y text-uppercase">
                  <div className="letter-box-container">
                    {/* {corporateDetails?.companyName?.toUpperCase()}{" "} */}
                  </div>
                </div>
                <div className="col-6 border center-y ">
                  <div>
                    पहिलो आधिकारीक प्रतिनिधिको नाम (Name of First Authorized
                    Person)
                  </div>
                </div>

                <div className="col-6  border center-y   ">
                  {/* <div>{userData?.corporateBodDetails?.fcpName}</div> */}
                </div>
                <div className="col-6 border center-y ">
                  <div>
                    दोश्रो आधिकारीक प्रतिनिधिको नाम (Name of Second Authorized
                    Person)
                  </div>
                </div>

                <div className="col-6  border center-y   ">
                  {/* <div>{userData?.corporateBodDetails?.scpName}</div> */}
                </div>

                <div className="col-6 border center-y ">
                  <div>
                    तेस्रो आधिकारीक प्रतिनिधिको नाम (Name of Third Authorized
                    Person)
                  </div>
                </div>

                <div className="col-6  border center-y   ">
                  {/* <div>{userData?.corporateBodDetails?.trdName}</div> */}
                </div>
                <div className="col-6 border center-y ">
                  <div>
                    प्रमुख आधिकारीक प्रतिनिधिको नाम(Chief Operating
                    Officer&apos;s Name)
                  </div>
                </div>

                <div className="col-6  border center-y   ">
                  {/* {corporateDetails?.companyCeoName?.toUpperCase()}*/}
                </div>
                <div className="col-6 border center-y ">
                  <div>कम्पनी सचिवको नाम (Company Secretary&apos;s Name)</div>
                </div>

                <div className="col-6  border center-y   ">
                  {/* <div>{userData?.companySecretaryName?.fcpName}</div> */}
                </div>
                {/* <!-- ! date of birth --> */}
                <div className="col-4 border  center-y">
                  कम्पनी स्थापना मिति (Date of Incorporation)
                </div>

                <div className="col-8 border">
                  <div className="row  ">
                    <div className="col-6">
                      <div className="">
                        <label className="form-check-label" htmlFor="bs">
                          बि. सं. (B.S.):
                        </label>
                        {/* {userData?.corporateDetails?.incorporationDate &&
                          corporateDetails?.incorporationDate} */}
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="">
                        <label className="form-check-label" htmlFor="ad">
                          इ. सं (A.D.):{" "}
                        </label>
                        {/*{dateConverter(
                          corporateDetails?.incorporationDate,
                          "BS_AD"
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- ! gender --> */}
                <div className="col-4 border center-y ">
                  कम्पनीको किसिम (Types of Company)
                </div>

                <div className="col-8 border d-flex  gap-4">
                  {/* <!-- <form action="" className="d-flex justify-content-center align-items-center gap-4"> --> */}
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="male">
                      प्राइभेट लि. <br /> (Pvt. Ltd.)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input "
                      //   checked={corporateDetails?.companyType === "PVT"}
                      readOnly
                    />
                  </div>

                  <div className="form-check">
                    <label className="form-check-label" htmlFor="female">
                      पब्लिक लि. <br /> (Public Ltd.)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      //                             checked={corporateDetails?.companyType === "PUB"}
                      readOnly
                    />
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="female">
                      सरकारी स्वामित्व भएको <br /> (Govt. Owned)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      //  checked={corporateDetails?.companyType === "GOV"}
                      readOnly
                    />
                  </div>
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="others"
                      style={{ paddingLeft: "8px" }} //Check default padding missing in classname
                    >
                      अन्य (Others)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      readOnly
                      //  checked={corporateDetails?.companyType === "OTHER"}
                    />
                  </div>
                  {/* <!-- </form> --> */}
                </div>
                <div className="col-4 border  center-y">
                  कम्पनी दर्ता भएको देश (Country of Registration)
                </div>

                <div className="col-8 border d-flex  gap-4">
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="male">
                      नेपाल <br /> (Nepal)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input "
                      // checked={corporateDetails?.countryReg === "Nepal"}
                      readOnly
                    />
                  </div>

                  <div className="form-check">
                    <label className="form-check-label" htmlFor="female">
                      अन्य (नेपाल बाहेक अन्य देश भएमा उल्लेख गर्ने) <br />{" "}
                      (thers(Please mention if other than Nepal))
                      {/* <span className="input-semi-dotted">
                          {corporateDetails?.countryReg !== "Nepal"
                            ? corporateDetails?.countryReg
                            : ""}
                        </span> */}
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      //  {corporateDetails?.countryReg !== "Nepal"}
                      readOnly
                    />
                  </div>
                </div>
              </div>
          </section>
          {/* Details of Company */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              कम्पनीको थप विवरण (Details of Company)
            </h2>

            <div className="container">
              <div className="row ">
                {/* <!-- ! name row --> */}
                <div className="col-6 border center-y ">
                  <div>दर्ता गर्ने कार्यालय (Registration Office) </div>
                </div>
                <div className="col-6 border center-y text-uppercase">
                  <div className="letter-box-container">
                    {/*{corporateDetails?.registrationOffice?.toUpperCase()}*/}
                  </div>
                </div>

                <div className="col-6 border center-y ">
                  <div>दर्ता नं. ( Registration No.)</div>
                </div>
                <div className="col-6  border center-y   ">
                  {/* {corporateDetails?.registrationNo}*/}
                </div>

                <div className="col-6 border center-y ">
                  <div>दर्ता मिति. (Registration Date.)</div>
                </div>
                <div className="col-6  border center-y   ">
                  {/*  {corporateDetails?.registrationDate}*/}
                </div>

                <div className="col-6 border center-y ">
                  <div>स्थायी लेखा नं. (PAN No.)</div>
                </div>
                <div className="col-6  border center-y   ">
                  {/* {corporateDetails?.panNo}*/}
                </div>

                <div className="col-6 border center-y ">
                  मूल्य अभिबृद्धि कर दर्ता नं. (VAT Registration No)
                </div>
                <div className="col-6  border center-y   ">
                  {/* <div>{userData?.companySecretaryName?.fcpName}</div>   {corporateDetails?.vatRegistration && corporateDetails?.vatRegistration}*/}
                </div>

                <div className="col-6 border center-y ">
                  <div>
                    सहायक कम्पनी भएमा मुख्य कम्पनीको नाम र ठेगाना ( Name and
                    Address of Main Company in case of Subsidiary Company
                    Office)
                  </div>
                </div>
                <div className="col-6 border center-y text-uppercase">
                  <div className="letter-box-container">
                    {/* {corporateDetails?.isSubsidiary === true
                          ? corporateDetails?.mainCompanyName
                          : ""}, {corporateDetails?.isSubsidiary === true
                          ? userData?.corporateDetails?.address
                          : ""}*/}
                  </div>
                </div>

                <div className="col-6 border center-y ">
                  <div>
                    कम्पनीको व्‍यवसायको किसिम (Types of business of the company)
                  </div>
                </div>
                <div className="col-6  border center-y   ">
                  {/* {corporateDetails?.businessType &&
                        corporateDetails?.businessType === "MANU"
                          ? "Manufacturing"
                          : corporateDetails?.businessType === "SEV"
                          ? "Service Oriented"
                          : ""}{" "}*/}
                </div>

                <div className="col-6 border center-y ">
                  <div>कार्य क्षेत्र (Area of Work)</div>
                </div>
                <div className="col-6  border center-y   ">
                  {/*{corporateDetails?.workArea}*/}
                </div>

                <div className="col-6 border center-y ">
                  <div>धितोपत्र बजारमा सूचीकरण भए / नभएको (Listed Yes/No)</div>
                </div>
                <div className="col-6  border center-y   ">
                  {/*  {corporateDetails?.isListed ? "Yes" : "No"}*/}
                </div>

                <div className="col-6 border center-y ">
                  <div>सूचीकरण मिति (SEBON Registration Date)</div>
                </div>
                <div className="col-6  border center-y   ">
                  {/*  {corporateDetails?.listingDate}*/}
                </div>

                <div className="col-6 border center-y ">
                  नेपाल राष्ट्र बैंकमा दर्ता भएको भए दर्ता नं. (NRB Registration
                  No.)
                </div>
                <div className="col-6  border center-y   ">
                  {/*{corporateDetails?.nrbRegistration &&
                          corporateDetails?.nrbRegistration}{" "}*/}
                </div>

                <div className="col-6 border center-y ">
                  नेपाल राष्ट्र बैंकको स्वीकृत मिति. (NRB Approval Date.)
                </div>
                <div className="col-6  border center-y   ">
                  {/*{corporateDetails?.nrbApproval &&
                          corporateDetails?.nrbApproval}*/}
                </div>
              </div>
            </div>
          </section>
          {/* Company current Address */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              कम्पनीको हालको ठेगाना (Current Address of Company){" "}
            </h2>

            <div className="container">
              <div className="row">
                {/* <!-- Country --> */}
                <div className="col-6 col-md-3 border center-y ">
                  देश (Country)
                </div>

                <div className="col-6 col-md-3 border center-y">
                  {/* {currentAddressDetails?.[0]?.country} */}
                </div>

                {/* <!-- Province --> */}
                <div className="col-6 col-md-3 border center-y ">
                  प्रदेश (Province)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.province
                            : userData.addressDetails?.[0]?.province} */}
                </div>

                {/* <!-- Pality --> */}
                <div className="col-6 border center-y">
                  गा.पा. / न.पा. / उ.म.न.पा / म.न.पा. (Rural Municipality /
                  Municipality / Sub Metropolitan city / Metropolitan city )
                </div>
                <div className=" col-6 border-start-0 center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.municipality
                            : userData.addressDetails?.[0]?.municipality}*/}
                </div>

                {/* <!-- ! District --> */}
                <div className="col-6 col-md-2 border center-y">
                  जिल्ला (District)
                </div>
                <div className="col-6 col-md-3 border center-y text-capitalize">
                  {/*   {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.district
                            : userData.addressDetails?.[0]?.district} */}
                </div>

                {/* <!-- ! Ward Nol --> */}
                <div className="col-6 col-md-2 border center-y ">
                  वडा नं. (Ward No.)
                </div>
                <div className="col-6 col-md-1 border center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.wordNo
                            : userData.addressDetails?.[0]?.wordNo}*/}
                </div>

                {/* <!-- Tole --> */}
                <div className="col-6 col-md-2 border center-y">टोल (Tole)</div>
                <div className="col-6 col-md-2 border text-capitalize center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.tole
                            : userData.addressDetails?.[0]?.tole}*/}
                </div>

                {/* <!-- Telephone --> */}

                <div className="col-6 col-md-3 border center-y ">
                  टेलिफोन नं. (Telephone No.)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.telephoneNo
                            : userData.addressDetails?.[0]?.telephoneNo}*/}
                </div>
                {/* <!-- Telephone --> */}

                <div className="col-6 col-md-3 border center-y ">
                  मोबाईल नं. (Mobile No.)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.mobileNo
                            : userData.addressDetails?.[0]?.mobileNo}*/}
                </div>

                {/* <!-- email --> */}
                <div className="col-6 col-md-3 border  center-y">
                  इमेल (Email)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/* {userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.email
                            : userData.addressDetails?.[0]?.email}*/}
                </div>

                {/* <!-- Website --> */}
                <div className="col-6 col-md-3 border center-y ">
                  वेबसाइट (Website)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/*{userData.addressDetails?.[0]
                            ?.perAndCurAddressSame === false
                            ? currentAddressDetails?.[0]?.website
                            : userData.addressDetails?.[0]?.website} */}
                </div>
              </div>
            </div>
          </section>
          {/* Map values in this section wit lat and long */}
          <section
            className="container mt-2"
            // key={currentAddressDetails}
          >
            <b>हाल बसोबास रहेको स्थानको नक्सा (Location map)</b>
            <div
              className="location-map border d-flex flex-column justify-content-between mb-3"
              style={{ height: "10cm" }}
              // ref={mapRef}
              // key={currentAddressDetails}
            >
              {/* <KycMap
              latitude={
                currentAddressDetails && currentAddressDetails[0]?.latitude
                  ? currentAddressDetails[0]?.latitude
                  : 0
              }
              longitude={
                currentAddressDetails && currentAddressDetails[0]?.longitude
                  ? currentAddressDetails[0]?.longitude
                  : 0
              }
            /> */}
              <div className="row mt-2">
                <div className="col-6 text-capitalize">
                  latitude :{" "}
                  {/* {currentAddressDetails && currentAddressDetails[0]?.latitude
                  ? currentAddressDetails[0]?.latitude
                  : "0"} */}
                </div>
                <div className="col-6 text-capitalize text-end">
                  longitude :{" "}
                  {/* {currentAddressDetails && currentAddressDetails[0]?.longitude
                  ? currentAddressDetails[0]?.longitude
                  : 0} */}
                </div>
              </div>
            </div>
          </section>
          {/* Permanent Address */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              कम्पनीको हालको ठेगाना (Current Address of Company){" "}
            </h2>

            <div className="container">
              <div className="row">
                {/* <!-- Country --> */}
                <div className="col-6 col-md-3 border center-y ">
                  देश (Country)
                </div>

                <div className="col-6 col-md-3 border center-y">
                  {/* {currentAddressDetails?.[0]?.country} */}
                </div>

                {/* <!-- Province --> */}
                <div className="col-6 col-md-3 border center-y ">
                  प्रदेश (Province)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0].province
                          : userData.addressDetails?.[0]?.province} */}
                </div>

                {/* <!-- Pality --> */}
                <div className="col-6 border center-y">
                  गा.पा. / न.पा. / उ.म.न.पा / म.न.पा. (Rural Municipality /
                  Municipality / Sub Metropolitan city / Metropolitan city )
                </div>
                <div className=" col-6 border-start-0 center-y">
                  {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0].municipality
                          : userData.addressDetails?.[0]?.municipality}*/}
                </div>

                {/* <!-- ! District --> */}
                <div className="col-6 col-md-2 border center-y">
                  जिल्ला (District)
                </div>
                <div className="col-6 col-md-3 border center-y text-capitalize">
                  {/*{userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0].district
                          : userData.addressDetails?.[0]?.district} */}
                </div>

                {/* <!-- ! Ward Nol --> */}
                <div className="col-6 col-md-2 border center-y ">
                  वडा नं. (Ward No.)
                </div>
                <div className="col-6 col-md-1 border center-y">
                  {/*{userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0]?.wordNo
                          : userData.addressDetails?.[0]?.wordNo}*/}
                </div>

                {/* <!-- Tole --> */}
                <div className="col-6 col-md-2 border center-y">टोल (Tole)</div>
                <div className="col-6 col-md-2 border text-capitalize center-y">
                  {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0].tole
                          : userData.addressDetails?.[0]?.tole}*/}
                </div>

                {/* <!-- Telephone --> */}

                <div className="col-6 col-md-3 border center-y ">
                  टेलिफोन नं. (Telephone No.)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/*{userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0].telephoneNo
                          : userData.addressDetails?.[0]?.telephoneNo}*/}
                </div>
                {/* <!-- Mobile --> */}

                <div className="col-6 col-md-3 border center-y ">
                  मोबाईल नं. (Mobile No.)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/*{userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0].mobileNo
                          : userData.addressDetails?.[0]?.mobileNo}*/}
                </div>

                {/* <!-- email --> */}
                <div className="col-6 col-md-3 border  center-y">
                  इमेल (Email)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/* {userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0]?.email
                          : userData.addressDetails?.[0]?.email}*/}
                </div>

                {/* <!-- Website --> */}
                <div className="col-6 col-md-3 border center-y ">
                  वेबसाइट (Website)
                </div>
                <div className="col-6 col-md-3 border center-y">
                  {/*{userData.addressDetails?.[0]?.perAndCurAddressSame ===
                        false
                          ? permanentAddressDetails?.[0]?.website
                          : userData.addressDetails?.[0]?.website} */}
                </div>
              </div>
            </div>
          </section>
          {/* (Branch/Number Of Office And Main Branches/Office Location) */}
          <section className="container pb-1">
            <TableContainer>
              <Table className="kyc-table m-0 border">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className="text-center kyc-secondary-header"
                      colSpan={7}
                      style={{ color: "white !important" }}
                    >
                      शाखा/कार्यालय संख्या र मुख्य शाखा / कार्यालयहरु रहेको
                      स्थान
                      <br />
                      <br />
                      (Branch/Number of Office and Main Branches/Office
                      Location)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow style={{ backgroundColor: "#d4d4d4" }}>
                    <TableCell className="kyc-th border fs13">
                      क्र.सं.
                      <br />
                      S.N.
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      क्षेत्र
                      <br />
                      Area
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      मुख्य शाखा /कार्यालय
                      <br />
                      Main Branch/Office
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      ठेगाना
                      <br />
                      Address
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      टेलिफोन नं.
                      <br />
                      Telephone No
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      मोबाईल नं.
                      <br />
                      Mobile No.
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      सम्पर्क व्यक्ति
                      <br />
                      Contact Person
                    </TableCell>
                  </TableRow>
                  {/* {userData?.branchDetails?.length > 0 ? (
                    userData.branchDetails.map((d, index) => (
                      <TableRow key={d.id}>
                        <TableCell className="kyc-tr border fs13" height="30px">
                          {index + 1}
                        </TableCell>
                        <TableCell className="kyc-tr borde fs13r">{d?.area}</TableCell>
                        <TableCell className="kyc-tr border fs13">{d.mainBranch}</TableCell>
                        <TableCell className="kyc-tr border fs13">{d.address}</TableCell>
                        <TableCell className="kyc-tr border fs13">
                          {d.telephoneNo}
                        </TableCell>
                        <TableCell className="kyc-tr border fs13">{d.mobileNo}</TableCell>
                        <TableCell className="kyc-tr border fs13">
                          {d.contactPerson}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : ( */}
                  <TableRow>
                    <TableCell
                      className="kyc-tr border"
                      height="30px"
                      colSpan={7}
                    ></TableCell>
                  </TableRow>
                  {/* )} */}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
          {/* BankDetails */}
          <section className="container pb-1">
            <div className="text-center kyc-secondary-header">
              बैंक खाताको विवरण(bank account details)
            </div>

            <div className="container">
              <div className="row">
                {/* <!-- types of bank account --> */}
                <div className="col-6 col-md-5 border">
                  बैंक खाताको किसिम (Types of Bank Account)
                </div>

                <div className="col-6 col-md-7 border d-flex justify-content gap-4">
                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="saving_account"
                    >
                      बचत खाता
                    </label>
                    <label
                      className="form-check-label"
                      htmlFor="saving_account"
                    >
                      &nbsp; (Saving Account)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="saving_account"
                      name="account_type"
                      //   checked={userData.bankDetails?.accountType === "S"}
                    />
                  </div>

                  <div className="form-check">
                    <label
                      className="form-check-label"
                      htmlFor="current_account"
                    >
                      चल्ती खाता
                    </label>
                    <label
                      className="form-check-label"
                      htmlFor="current_account"
                    >
                      &nbsp;(Current Account)
                    </label>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="current_account"
                      name="account_type"
                      //   checked={userData.bankDetails?.accountType === "C"}
                    />
                  </div>
                </div>

                {/* <!-- ! bank account number --> */}
                <div className="col-6 col-md-5 border center-y ">
                  <div className="text-capitalize">
                    बैंक खाता नं. (bank account number)
                  </div>
                </div>

                <div className="col-6 col-md-7 border center-y">
                  {/*   {userData.bankDetails?.accountNumber} */}
                </div>

                {/* <!-- ! name and address of bank --> */}
                <div className="col-6 col-md-5 border  center-y">
                  <div>बैंक खाताभएको बैंकको नाम (Name of Bank)</div>
                </div>

                <div className="col-6 col-md-7 border center-y text-capitalize">
                  {/* {bankList &&
                  bankList?.data?.find(
                    (d) => d.value === userData.bankDetails?.bankName
                  )?.label}
                {", "} */}
                </div>
                <div className="col-6 col-md-5 border  center-y">
                  <div>बैंक खाताभएको बैंकको ठेगाना (Address of Bank)</div>
                </div>

                <div className="col-6 col-md-7 border center-y text-capitalize">
                  {/* {userData.bankDetails?.branchAddress} */}
                </div>
              </div>
            </div>
          </section>
          {/* (Details Of Directors,CEO, And Authorised Account Operators) */}
          <section className="container pb-1 mt-4">
            <p>
              (तीनवटा भन्दा बढी भएका छुट्टै विवरण पेश गर्न सकिने छ / Separate
              details can be submitted in case of more than three.)
            </p>
            <TableContainer>
              <Table className="kyc-table border">
                <TableHead>
                  <TableRow>
                    <TableCell
                      className="text-center kyc-secondary-header"
                      colSpan={12}
                    >
                      संचालक, कार्यालय प्रमुख र खाता संचालकहरुको विवरण <br />
                      <br />
                      (Details of Directors,CEO, and Authorised Account
                      Operators)
                    </TableCell>
                  </TableRow>
                  <TableRow style={{ backgroundColor: "#d4d4d4" }}>
                    <TableCell className="kyc-th border p2">
                      क्र.सं.
                      <br />
                      S.N.
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      नाम/थर
                      <br />
                      Name/ Surname
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      पद
                      <br />
                      Designation
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      पति/पत्नीको नाम
                      <br />
                      Spouse&apos;s Name
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      बुवाको नाम
                      <br />
                      Father&apos;s Name
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      बाजेको नाम
                      <br />
                      Grandfather&apos;s Name
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      स्थायी ठेगाना
                      <br />
                      Permanent Address
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      हालको ठेगाना
                      <br />
                      Current Address
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      टेलिफोन नं.
                      <br />
                      Tel No.
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      मोबाइल नं.
                      <br />
                      Mobile No
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      इमेल
                      <br />
                      Email
                    </TableCell>
                    <TableCell className="kyc-th border p2">
                      प्यान नं.
                      <br />
                      PAN
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {userData?.corporateBodDetails?.detail.length > 0 ? (
                    userData?.corporateBodDetails?.detail.map((bod, index) => (
                      <TableRow key={index}>
                        <TableCell  className="kyc-td border p2">{index + 1}.</TableCell>
                        <TableCell  className="kyc-td border p2">{`${bod?.firstName} ${bod?.lastName}`}</TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod.designation?.toUpperCase()}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.spouseName}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.fatherName}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.grandFather}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.permanentAddress}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.currentAddress}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.telephoneNo}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">
                          {bod?.mobileNo}
                        </TableCell>
                        <TableCell  className="kyc-td border p2">{bod?.email}</TableCell>
                        <TableCell  className="kyc-td border p2">{bod?.panNo}</TableCell>
                      </TableRow>
                    ))
                  ) : ( */}
                  <TableRow>
                    <TableCell
                      className="kyc-tr border"
                      height="30px"
                      colSpan={12}
                    ></TableCell>
                  </TableRow>
                  {/* )} */}
                </TableBody>
              </Table>
            </TableContainer>
          </section>
          {/* Authorizes Person */}
          <section className="container pb-1 mt-4">
            <TableContainer>
              <Table className="kyc-table border">
                <TableHead style={{ backgroundColor: "#d4d4d4" }}>
                  <TableRow className="kyc-tr">
                    <TableCell className="kyc-th border"></TableCell>
                    <TableCell className="kyc-th border fs13">
                      पहिलो आधिकारीक व्यक्ति <br /> First Authorizes Person
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      दोश्रो आधिकारीक व्यक्ति <br /> Second Authorizes Person
                    </TableCell>
                    <TableCell className="kyc-th border fs13">
                      तेस्रो आधिकारीक व्यक्ति <br /> Third Authorizes Person
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className="kyc-td text-start border p2 fs13">
                      नाम /Name
                    </TableCell>
                    <TableCell className="kyc-td text-start border">
                      {/* {userData?.corporateBodDetails?.fcpName} */}
                    </TableCell>
                    <TableCell className="kyc-td text-start border">
                      {/* {userData?.corporateBodDetails?.scpName} */}
                    </TableCell>
                    <TableCell className="kyc-td text-start border">
                      {/* {userData?.corporateBodDetails?.trdName} */}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="kyc-td text-start border p2 fs13">
                      पद /Designation
                    </TableCell>
                    <TableCell className="kyc-td text-start border">
                      {/* {userData?.corporateBodDetails?.fcpDesignation} */}
                    </TableCell>
                    <TableCell className="kyc-td text-start border">
                      {/* {userData?.corporateBodDetails?.scpDesignation} */}
                    </TableCell>
                    <TableCell className="kyc-td text-start border">
                      {/* {userData?.corporateBodDetails?.trdDesignation} */}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="kyc-td text-start border p2 fs13">
                      {" "}
                      हस्ताक्षर /Signature
                    </TableCell>
                    <TableCell className="kyc-td text-start border"></TableCell>
                    <TableCell className="kyc-td text-start border"></TableCell>
                    <TableCell className="kyc-td text-start border"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      className="kyc-td text-start border p2 fs13"
                      height={"150px"}
                    >
                      पासपोर्ट साइजको फोटो <br /> Passport size photo
                    </TableCell>
                    <TableCell className="kyc-td border text-center fs13">
                      फोटो
                      <br />
                      Photo
                    </TableCell>
                    <TableCell className="kyc-td border text-center fs13">
                      फोटो
                      <br />
                      Photo
                    </TableCell>
                    <TableCell className="kyc-td border text-center fs13">
                      फोटो
                      <br />
                      Photo
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </section>
          {/* संलग गनुर पने कागजात */}
          <section className="container pb-1 mt-4">
            <Typography
              variant="h5"
              mb={2}
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              संलग गनुर पने कागजात
            </Typography>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "48%" }}>
                <Typography
                  variant="body1"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  धितोपत कारोवारको समनमा तपिशल बमोिजमको सघोषणा गदरछु ।
                </Typography>
                <Typography variant="body1">
                  १. कम्पनी / संस्थाले धितोपत्र खरिदका लागि प्रयोग गर्ने रकम
                  सम्पत्ती शुद्धिकरण सम्बन्धि प्रचलित कानुन विपरित आर्जन गरेको
                  हुने छैन ।
                </Typography>
                <Typography variant="body1">
                  २. कम्पनी / संस्था धितोपत्रमा गरिएको लगानीमा निहित जोखिमको
                  सम्बन्धमा जानकारी छ ।
                </Typography>
                <Typography variant="body1">
                  ३. कम्पनी/संस्थाले खरिद गरेका धितोपत्रहरु वापतको भुक्तानी लिने
                  दिने कार्य तोकिएको समय भित्र गर्ने छु ।
                </Typography>
                <Typography variant="body1">
                  ४. धितोपत्र सम्बन्धि तथा अन्य प्रचलित नियम कानूनहरुको पालना
                  गरिने छ ।
                </Typography>
                <Typography variant="body1">
                  ५. कम्पनी / संस्था कर्जा सूचना केन्द्रको कालो सूचीमा रहेको छैन
                  ।
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body1"
                  style={{ fontSize: "14px", fontWeight: "bold" }}
                >
                  धितोपत्र कारोवार गर्न ग्राहक परिचय विवरण भर्ने सम्बन्धमा
                  संचालक समितिको निर्णय ।
                </Typography>
                <Typography variant="body1">
                  १. कम्पनी / संस्था दर्ता प्रमाणपत्रको प्रतिलिपि ।
                </Typography>
                <Typography variant="body1">
                  २. कम्पनी / संस्थाको स्थायी लेखा नं. प्रबन्धपत्र तथा
                  नियमावलीको प्रतिलिपि ।
                </Typography>
                <Typography variant="body1">
                  ३. धितोपत्र कारोवार गर्न ग्राहक परिचय विवरण भर्ने सम्बन्धमा
                  संचालक समितिको निर्णय ।
                </Typography>
                <Typography variant="body1">
                  ४. कुनै नियमनकारी निकायबाट अनुमतिपत्र प्राप्त गरेको भएमा सोको
                  प्रतिलिपि ।
                </Typography>
                <Typography variant="body1">
                  ५. कर चुक्ता / दाखिला प्रमाणपत्र ।
                </Typography>
                <Typography variant="body1">
                  ६. अख्तियार प्राप्त व्यक्तिको फोटो तथा नागरिकता प्रमाणपत्रको
                  प्रतिलिपि ।
                </Typography>
              </div>
            </div>
          </section>
          {/* <!-- ! htmlFor office use only --> */}
          <section className="container pb-1 mt-4">
            <div>
              <div className="text-center kyc-secondary-header">
                कार्यालयको प्रयोजनको लागि (For Official Use)
              </div>

              <div className="border row p-2 m-0">
                <div className="col-4 col-md-4">
                  <h3>रुजु गर्ने</h3>

                  {/* <p>नाम थर: {userData?.user?.verifiedBy}</p> */}

                  <p>पद:</p>

                  <p>हस्ताक्षर:</p>

                  {/* <p>मिति: {userData?.user?.verifiedDate}</p> */}
                </div>
                <div className="col-4 col-md-4">
                  <div className="center-y">
                    <div className="office-stamp border p-4 center-xy">
                      <p
                        className="text-center"
                        style={{ marginBottom: "9rem" }}
                      >
                        कार्यालयको छाप
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-center mt-2 "
                    style={{ marginLeft: "-7.5rem" }}
                  >
                    कार्यालयको नाम:{" "}
                    {/* <b>{orgData !== undefined && orgData?.name}</b> */}
                  </p>
                </div>

                <div className="col-4 col-md-4">
                  <h3>प्रमाणित गर्ने</h3>

                  {/* <p>नाम थर:{userData?.user?.approvedBy}</p> */}

                  <p>पद:</p>

                  <p>हस्ताक्षर:</p>

                  {/* <p>मिति:{userData?.user?.approvedDate}</p> */}
                </div>
              </div>
            </div>
          </section>
          {/* KYCAGGREMENT */}
          <section className="container" style={{ fontSize: "14px" }}>
            {/* <!-- Header section --> */}
            <header className="text-center">
              <p>
                <b>
                  (धितोपत्र कारोबार सञ्चालन विनियमावली २०७५ को विनियम १० संग
                  सम्बन्धित )
                </b>
              </p>

              <p>
                <b>(कारोवार सदस्य र ग्राहक बिचको सम्झौतापत्र )</b>
              </p>
            </header>
            <div className="my-2">
              <p className="mx-3 text-start aggrement-content">
                कम्पनी रजिस्ट्रारको कार्यलयमा दर्ता भई नेपाल धितोपत्र बोर्डबाट
                धितोपत्र दलाल ब्यवसायीको इजाजत प्राप्त गरी नेपाल स्टक एक्सचेञ्ज
                लिमिटेडको कारोबार सदस्य रहेको स्थित कार्यालय रहेको{" "}
                {/* <b>{orgData && orgData?.address}</b> */}
                मा रजिस्टर्ड कार्यालय भएको
                {/* {orgData && " " + orgData?.name} */}
                (उप्रान्त प्रथम पक्ष भनिनेछ)
                {}
              </p>
              <p className="text-center">
                <b>तथा</b>
              </p>
              <p>
                प्रथम पक्ष मार्फत धितोपत्रको कारोबार गर्न / अनलाईन सुबिधा प्रयोग
                गर्ने ग्राहक संकेत नम्बर .................. हितग्राही खाता
                न&nbsp;
                {/* {user?.dematNo ? user?.dematNo : "..............."} रहेको प्रदेश{" "}
                {permanentAddressDetails?.[0]?.province
                  ? permanentAddressDetails?.[0]?.province
                  : "................"}{" "} */}
                {/* अञ्चल ......... */}
                जिल्ला{" "}
                {/* {permanentAddressDetails?.[0]?.district
                  ? permanentAddressDetails?.[0]?.district
                  : "....................."}{" "} */}
                गा।पार न।पार उ।प।न।पा{" "}
                {/* {permanentAddressDetails?.[0]?.municipality
                  ? permanentAddressDetails?.[0]?.municipality
                  : "...................."}{" "} */}
                वडा{" "}
                {/* {permanentAddressDetails?.[0]?.wordNo
                  ? permanentAddressDetails?.[0]?.wordNo
                  : "..................."}{" "} */}
                स्थायी ठेगाना भई हाल{" "}
                {/* {currentAddressDetails?.[0]?.tole
                  ? currentAddressDetails?.[0]?.tole
                  : "............."}{" "} */}
                स्थानमा बसोबास गर्ने श्री{" "}
                {/* {memberList?.["grandfather"]
                  ? memberList?.["grandfather"]
                  : "................."}{" "} */}
                को नाती/नातीनी बुहारी, श्री{" "}
                {/* {memberList?.["father"]
                  ? memberList?.["father"]
                  : ".................."}{" "} */}
                को छोरा / छोरी वर्ष&nbsp;
                {/* {individualDetail?.dob && currentAge()}&nbsp; को श्री{" "}
                {user?.name ? user?.name : "............."} <b>वा</b> ग्राहक */}
                संकेत नम्बर (युनिक क्लाईन्ट कोड)............................
                रहेको .......................... कार्यालयमा दर्ता भई रजिस्टर्ड
                कार्यालय .............................. मा भएको श्री
                .........................................................................
                ले (उप्रान्त दोस्रो पक्ष भनिने र सो शब्दले विषय वा प्रसंगले
                अन्यथा अर्थ लगाएकोमा बाहेक निजका उत्तराधिकारी र / वा कानुनी
                प्रतिनिधि समेत लाई जनाउने), बीच नेप्सेको कारोबार प्रणालीबाट
                कारोबार हुने विधि र आपैmले कारोबार गर्ने सम्बन्धमा दोस्रो पक्ष
                सँग आवश्यक ज्ञान रहेको मानी यो सम्झौता (उप्रान्त सम्झौता भनिने
                छ) सम्पन्न भएको छ ।
              </p>
              <br />
              <p>
                <b>
                  यस सम्झौताका पक्षहरु निम्नलिखित शर्तहरु पालना गर्न मञ्जुर छन्
                  ः
                </b>
              </p>
              <p>
                १. प्रचालित धितोपत्र ऐन, नियम, विनियम, कार्यविधि तथा नेपाल
                राष्ट्र बैंक, बिमा समिति, नेपाल धितोपत्र बार्डे, नेपाल स्टक
                एक्सचेन्ज लिमिटेड, सिडिएस एन्ड क्लियरिङ लिमिटेड लगायतका नियमक
                निकायले समय समयमा जारी गरेका निर्देशिका, परिपत्र र निर्देशन
                समेतलाई यसै सम्झौतामा उल्लेख भए सरह मानी सम्झौताका पक्षहरुले
                सोको पालना गर्न मञ्जुर गर्दछन् ।{" "}
              </p>
              <p>
                २. दोस्रो पक्षले यस सम्झौता गर्दाको वखत वा यस भन्दा अघि प्रथम
                पक्षलाई दिएको सूचना, दोस्रो पक्षको ग्राहक परिचय विवरण (केवाइसी)
                मा भरेको विवरणमा कुनै फेरवदल भए, फेरबदल भएको ७ कार्य दिनभित्र
                प्रथम पक्षलाई जानकारी दिई आफ्नो पहिचान तथा खाताका विवरणहरु
                अद्यावधिक गराउन मञ्जुर गर्दछ ।{" "}
              </p>
              <p>
                ३. दोस्रो पक्ष धितोपत्रको कारोबार गर्न कानून बमोजिम अयोग्य
                ठहरिने कनु ै अवस्था उत्पन्न भई कारवाहीमा परेमा, आर्थिक रुपमा टाट
                पल्टिएमा, विघटनमा गएमा, दामासाहीमा परेमा वा कर्जा सूचना
                केन्द्रको कालो सूचीमा परेमा वा अन्य कुनै कारणले कानूनत आर्थिक
                कारोवार गर्न असमर्थ भएमा प्रथम पक्षलाई तुरुन्त जानकारी दिन
                मञ्जुर गर्दछ ।
              </p>
              <p>
                ४. दोस्रो पक्षले यस सम्झौतामा उल्लेख गरेको वा ग्राहक परिचय विवरण
                (केवाइसी) मा उल्लेख भएको इमेल ठेगाना वा मोबाइल नम्बरमा दोस्रो
                पक्षले प्रयोग गर्ने युजरनेम तथा पासवर्ड प्रथम पक्षले उपलब्ध
                गराउने छ । प्रथम पक्षले उपलब्ध गराएको वा सो पश्चात दोस्रो पक्षले
                परिर्वतन गरेको युजरनेम वा पासवर्ड का ेगोपनियता कायम गर्ने र
                आफ्नो नियन्त्रणमा राख्ने दायित्व दोस्रो पक्षको हुनेछ ।
              </p>
              <p>
                ५. दोश्रो पक्षले बिक्री कारोवार गर्दा मौज्दातमा धितोपत्र रहेको
                वा रहने कुनै एक हीतग्राही खाता प्रथम पक्षलाई उपलब्ध गराउने छ । र
                उक्त खाता अन्य धितोपत्र कारोवार सदस्यलाइ दिने छैन । यदी एउटै
                खाता अन्य धितोपत्र कारोवार सदस्यलाई दिइ हुने जोखिको जिम्मेवारी
                दोश्रो पक्ष ले लिने छ ।
              </p>
              <p>
                ६. दोस्रो पक्षलाई दिइएको युजरनेमबाट भएगरेको सम्पूर्ण
                कारोबारहरुको दायित्व बहन गर्ने तथा सो को समयमा राफसाफ गर्ने
                जिम्मेवारी दोस्रो पक्षको हुनेछ ।
              </p>
              <p>
                ७. दोस्रो पक्षलाइ प्रदान गरीएको युजरनेमको प्रयोग गरी सिर्जना
                हुने दायित्व तथा सम्झौतारत पक्ष र नेप्से समेतको सम्पत्तिमा कुनै
                हानी नोक्सानी भएमा सो प्रति दोस्रो पक्ष जिम्मेवार हुनेछ ।
              </p>
              <p>
                ८. दोस्रो पक्षले आफ्ना ेयुजरनेम प्रयोग गरी वा प्रथम पक्षलाई आदेश
                दिई बिक्री भएका धितोपत्रहरुको निर्देशन पूर्जी जारी गर्नुपर्ने
                दायित्व दोस्रो पक्षको हुनेछ । यसरी बिक्री भएको धितोपत्रको
                हस्तान्तरण दोस्रो पक्षले टिं१ को १२ बजे भित्र प्रथम पक्षको
                राफसाफ खातामा जम्मा गर्न नसकी उक्त कारोवारको राफसाफ हुन नसकेमा
                सो बाट सिर्जित सम्पूर्ण दायित्व दोस्रो पक्षले वहन गर्नुपर्नेछ ।
              </p>
              <p>
                ९. दोस्रो पक्षले धितोपत्र बिक्री गरिसकेपछि सो धितोपत्रको आधार
                मूल्य प्रथम पक्षलाई राफसाफ समयको १ (एक) दिन पूर्व नै उपलब्ध
                गराउनु पर्नेछ । आधार मूल्य समयमा उपलव्ध नगराएमा, फर्जी वा गलत
                आधार मूल्यका कारण उत्पन्न हुने कानूनी तथा आर्थिक दायित्च वा हानी
                नोक्सानी दोस्रो पक्षले व्यहोर्नु पर्नेछ ।
              </p>
              <p>
                १०. दोस्रो पक्षले बिक्रि गरेको धितोपत्रको कारोबारमा लाग्ने कर,
                शुल्क, दस्तुर तथा अन्य प्रणालीगत शुल्कहरु तथा प्रथम पक्षले
                धितोपत्र खरीद बिक्री सम्वन्धमा थप सुविधा प्रदान गरेमा लाग्ने थप
                स्वीकृत दस्तुर कट्टा गरी बाँकी रकम मात्र प्रथम पक्षले दोस्रो
                पक्षलाई भुक्तानी गर्नेछ ।
              </p>
              <p>
                ११. दोस्रो पक्षले खरीद आदेश प्रणालीमा प्रविष्ट गर्दा प्रथम
                पक्षले तोकेको कारोबार लिमिटको सीमाभित्र रही गर्नु पर्नेछ ।
                दोस्रो पक्षले प्रथम पक्षलाई अग्रिम रुपमा बुझाएको रकमको ४ (चार)
                गुणा सम्म कारोबार लिमिट प्राप्त गर्न सक्नेछ । उक्त कारोबार सीमा
                दोस्रो पक्षले बुझाएको रकमको चार गुणा भन्दा बढी हनु ेछैन ।
              </p>
              <p>
                ११.१ दोस्रो पक्षले प्रथम पक्षलै अग्रिम रुपमा बुझाएको रकमको
                दोस्रो पक्षले खरिद गर्ने धितोपत्रबाट सिर्जना हुने कुल दायित्व
                रकममा समायोजन हुनेछ।
              </p>
              <p>
                ११.२ दोश्रो पक्षले धितोपत्रखरिद गरेवापत सिर्जना हुने कुल दायित्व
                रकममा प्रथमपक्षलाई अग्रिम रुपमा बुझाएको रकम तथा दोस्रो पक्षले
                धितोपत्र बिक्रो गरि प्रथमपक्षसंग भुक्तानी लिन बाकी भए सो समेत
                समायोजन गरि बाकी रहेको दायित्व रकम कारोबारको राफसाफ हुनु भन्दा
                पहिले प्रथमपक्षलाई दोस्रो पक्षले भुक्तानी गर्नुपर्नेछ।
              </p>
              <p>
                ११.३ दोस्रो पक्षले प्रथमपक्षलाई तिर्नु पर्ने रकम कारोबार राफसाफ
                हुनुपुर्व भुक्तानी गर्न नसकेमा दोस्रो पक्षको नाममा खरिद भएको
                धितोपत्र प्रथमपक्षले बिक्रि गर्न सक्नेछ। तर दोस्रो पक्षले
                प्रथमपक्षसंग रकम तिर्ने समय माग गरेमा प्रथमपक्षले आफ्नो अनुकुलता
                हेरी दोस्रो पक्षले खरिद गरेको धितोपत्रको रकम भुक्तानी गर्न
                निश्चित समय दिन सक्नेछ।
              </p>
              <p>
                ११.४ सर्त न ११.३ बमोजिम दोस्रो पक्षको कारोबार राफसाफ गर्न उपयोग
                भएको प्रथमपक्षको रकममा दोस्रो पक्षलाई दिएको थप निश्चित समयावधि
                सम्ममा दोस्रो पक्षले तिर्नुपर्ने बाकी रकम प्रथम पक्षलाई उपलब्ध
                नगराए सम्मको वा दोस्रो पक्षको धितोपत्र बिक्रि गरि प्रथम पक्षलाई
                रकम प्राप्त नभएसम्मको समयावधिमा प्रथ पक्षले व्यहोर्नु परेको
                वास्तविक लागत थप गरि हुन आउने दायित्व दोस्रो पक्षले प्रथम
                पक्षलाई भुक्तानी गर्नु पर्नेछ वा दोस्रो पक्षलाई प्रथम पक्षले
                दिनुपर्ने हिसाबमा कट्ट गर्न सक्नेछ।
              </p>
              <p>
                ११.५ दोस्रो पक्षले प्रथम पक्षलाई बुझाएको अग्रिम रकममा दोस्रो
                पक्षले खरिद गर्ने धितोपत्रको राफसाफ नभएसम्मको अवधिसम्म प्रथम
                पक्षको राफसाफ खातामा रहदा प्रथम पक्षले बैंकबाट प्राप्त गर्ने
                प्रतिफल ९खुद ब्याज० दोस्रो दोस्रो पक्षबता माग भए आएमा फिर्ता दिन
                सक्ने छ।
              </p>
              <p>
                ११.६ प्रथम पक्षले दोस्रो पक्षसंग लिनु पर्ने दायित्व रकमको लागत
                गणना तथा निर्धारण गर्दा प्रथम पक्षले बाणिज्य बैंकबाट ऋण लिदा
                आफुले तिर्नु पर्ने ब्याजदरमा सेवा सुल्क वापत बर्सिक ४ प्रतिशत
                बिन्दुले लागत थप गरि दायित्व निर्धारण गरिनेछ।
              </p>
              <p>
                ११.७ प्रथम पक्षले दोस्रो पक्षलाई धितोपत्र बिक्रि वापतको भुक्तानी
                दिनुपर्ने अवस्थामा कबु बाहिरको परिस्थिथि सिर्जना भै भुक्तानी
                रोकिन गएमा तत्कालिन समयमा वाणिज्य बैंकहरुले आफ्ना ग्राहकलाई बचत
                खातामा दिने ब्याज रकम थप गरि भुक्तानी रकम उपलब्द गराउने छ।
              </p>
              <p>
                १२. दोस्रो पक्षले कारोबार सीमाका लागि प्रथम पक्षलाई बुझाउने सबै
                किसिमका भुक्तानी चेक वा अन्य बिद्युतीय माध्यमबाट गर्नुपर्नेछ ।
              </p>
              <p>
                १३. दोस्रो पक्षले कारोबार प्रयोजनका लागि प्रथम पक्षलाई उपलब्ध
                गराएको रकम तथा धितोपत्र कारोवार राफसाफ प्रयोजनमा मात्र प्रयोग
                गर्नुपर्नेछ ।
              </p>
              <p>
                १४. दुवै पक्षको आपसी सहमतिमा दोस्रो पक्षले प्रथम पक्षलाई यस्तो
                कारोबार सीमाको लागि आवश्यक अग्रिम भुक्तानी बैंक ग्यारेन्टी तथा
                कारोवारयोग्य धितोपत्रहरुको माध्यमबाट पनि गर्न सक्ने छ । यस्तो
                धरौटी दोश्रो पक्षले आफनो दायीत्व समयमा भुक्तानी नगरेमा प्रथम
                पक्षले दोस्रो पक्षलाई जानकारी दिई नगदमा परिणत गर्न सक्ने छ ।
              </p>
              <p>
                १५. कारोबार सीमा गणना प्रयोजनको लागि कारोबारयोग्य धितोपत्रको
                मूल्यांकन बजार मूल्यको बढीमा ७० प्रतिशत सम्म गर्न सकिने छ ।
                धितोपत्र तथा धितोपत्र बजारमा हुने सम्भावित जोखिमलाई मध्यनजर गरी
                प्रथम पक्षले दोस्रो पक्षलाई उपलब्ध गराएको कारोबार सीमा दोस्रो
                पक्षलाई जानकारी गराई फेरबदल गर्न सक्नेछ ।
              </p>
              <p>
                १६. खरीद कारोबारपछि बाँकी रहेको रकम खरिद बिल बमोजिम दोस्रो
                पक्षले टिं १ भित्रमा प्रथम पक्षको खातामा जम्मा हुने गरी प्रथम
                पक्षलाई उपलब्ध गराउनु पर्नेछ । यसरी रकम उपलब्ध गराउदा अग्रिम
                भुक्तानी रकममा उपलब्ध गराएको भए सो रकम समायोजन गर्ने सुविधा
                दोस्रो पक्षलाई हुनेछ ।
              </p>
              <p>
                १७. खरिद कारोबार पश्चात दोस्रो पक्षले राफसाफ समय भित्रमा आफ्नो
                दायित्व पुरा नगरेमा टिं३ मा प्रथम पक्षले दोस्रो पक्षलाई जानकारी
                गराई दोस्रो पक्षकै नाममा खरिद गरिएको तथा जमानतमा लिइएको धितोपत्र
                बिक्री, वैक जमानतबाट रकम र सो को लागत बापतको सोधभर्ना र नपुग रकम
                कानून बमोजिम असुल उपर गरि लिन सक्नेछ ।
              </p>
              <p>
                १८. दोस्रो पक्षको धितोपत्र बिक्री गरि प्रथम पक्षको लेना रकम
                असुलउपर गरी रकम बाँकी रहेमा दोस्रो पक्षको अग्रिम भुक्तानी सम्मको
                रकम दोस्रो पक्षलाई फिर्ता गरी थप रकम बाँकि रहन गए धितोपत्र
                कारोबार सञ्चालन विनियमावली, २०७५ मा तोकिए बमोजिम हुनेछ ।
              </p>
              <p>
                १९. दोस्रो पक्षले खरीद गरेको धितोपत्र खरिदबाट सिर्जित दायित्वहरु
                पुरा गरेपछि वा कारोवारको राफसाफको दिन मध्ये जुन पछी हुन्छ सो को
                भोलिपल्ट ग्राहकको निक्षेप खातामा प्रथम पक्षले धितोपत्र
                हस्तान्तरण गर्नु पर्नेछ ।
              </p>
            </div>
          </section>
          <section className="container" style={{ fontSize: "14px" }}>
            <div className="row">
              <p>
                २०. दोस्रो पक्षका ेनामवाट कारोवार भए पश्चात दोस्रो पक्षको मृत्यु
                भएमा, दामासाहीमा परेमा, मगज बिग्रिएमा वा अन्य कुनै कारणवाट
                दोस्रो पक्षको नामवाट भएका कारोवारको राफसाफ हुन नसक्ने स्थिति
                सिर्जना भएमा उक्त कारोबारको राफसाफको जिम्मेवारी निज वा निजको
                कानूनी उत्तराधिकारीको हुनेछ । कानुनी उत्तराधिकारीवाट पनि राफसाफ
                हुन नसकेमा प्रचलित कानून बमोजिम हुनेछ ।
              </p>
              <p>
                २१. नियमक निकायहरुबाट कारोबारहरु रद्द भएमा वा रद्द गर्ने आदेश
                प्राप्त भएमा सो कारोवारहरु स्वतः रद्द हुनेछन । सो का ेदायित्व
                प्रथम पक्षले बहन गर्ने छैन ।
              </p>
              <p>
                २२. दोस्रो पक्ष नावालक वा कानूनतः पक्षको रुपमा करार गर्न अयोग्य
                देखिएमा निजको संरक्षक वा प्रतिनिधिले यो सम्झौता गर्न सक्नेछ ।
              </p>
              <p>
                २३. प्रथम पक्षको काबु बाहिरको परिस्थितिको कारणबाट उत्पन्न हुने
                कुनै पनि दायित्वमा प्रथम पक्ष जिम्मेवार हुने छैन ।
              </p>
              <p>
                २४. दोस्रो पक्षले आफ्नो कारोवारको निम्ति आदेश दिन लिखित मञ्जुरी
                दिई प्रतिनिधि नियुक्ति गर्न सक्ने छ सो प्रतिनिधिवाट भएका
                सम्पूर्ण कारोबारहरु निज दोस्रो पक्षले नै गरेसरह मान्य हुनेछ ।
              </p>
              <p>
                २५. धितोपत्रमा गरीने लगानीमा जोखिम हुन्छ भन्ने कुरामा दोस्रो
                पक्ष जानकार रहेको मानिनेछ र सो जोखिमबाट सिर्जित हुने हानी
                नोक्सानी प्रति दोस्रो पक्षनै जिम्मेवार रहनेछ ।
              </p>
              <p>
                २६. दोस्रो पक्षले निम्न लिखित माध्यमवाट कारोबार आदेश दिन सक्ने छ
                :<br /> &emsp;&emsp;क. स्वयं उपस्थित भई लिखित आदेश
                ।&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                ख. टेलिफोन
                ........................................................
                <br />
                &emsp;&nbsp;&nbsp;&nbsp; ग. मोबाइलफोन{" "}........................................................
                {/* {user?.phoneNo ? user?.phoneNo : "..................."} */}
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                घ. इमेल ........................................................
                {/*  {user?.email ? user?.email : ".................."} */}
                <br />
                &emsp;&nbsp;&nbsp; ङ. दोश्रो पक्ष्यको उजरनेम
                ....................................................
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;
                च. प्रथम पक्षको वेभसाइट
                .........................................
                <br />
                &emsp;&nbsp;&nbsp; छ. अन्य बिद्युतीय माध्यम
                .........................................................
                <br />
                <br />
                प्रथम पक्षले उल्लिखित माध्यमबाट आएका आदेशहरुलाई मात्र वैधानिक
                मान्यता दिई प्राथमिकताका आधारमा कारोबार प्रणालीमा आदेश प्रविष्टी
                गर्नेछ । नियम अनुसार उक्त आदेशहरुको सुरक्षित रेकर्डिङ्ग तथा
                भण्डारण प्रथम पक्षले गर्न सक्नेछ ।
              </p>
              <p>
                २७. दोस्रो पक्षको मार्जिन कारोवार सुविधा उपयोग गर्ने भएमा सो
                सम्बन्धी सर्त तथा सुविधाहरु सम्बन्धित नियममा तोकिए बमोजिम हुनेछ
                ।
              </p>
              <p>
                २८. दोस्रो पक्षले धितोपत्र कारोवार गर्दा उक्त धितोपत्र कारोवार
                गर्न प्रचलित कानुन वमोजिम आफु योग्य रहेको र सो धितोपत्रमा आफुले
                कानून बमोजिम धारण गर्न सक्ने सीमा भित्र रहि खरीद आदेश प्रविष्ट
                गर्नु पर्ने छ । सो नगरेबाट सिर्जित परिणाम तथा दायित्व दोस्रो
                पक्षको हुनेछ ।
              </p>
              <p>
                २९. प्रचलित नीति नियममा उल्लेख भएअनुसार वा सम्बन्धित निकायहरुबाट
                धितोपत्रको कारोबारको श्रोतको जानकारी गराउन आवश्यक रहेमा उक्त
                जानकारी कारोबार राफसाफ समयाबधीभित्र प्रथम पक्षलाई बुझाउन
                दोस्रोपक्ष मञ्जुर गर्दछ । दोस्रो पक्षले प्रचलित कानुन बमोजिम
                अवैधानिक नठहरीने रकमहरु मात्र धितोपत्रमा लगानी गर्नुपर्ने छ ।
              </p>
              <p>
                ३०. पक्षहरुबिच आपसि सहमतीमा एक महिनाको अग्रिम सूचना दिई यो
                सम्झौता रद्द गर्न सकिनेछ । सम्झौता रद्द गर्नु पूर्व पक्षहरुले
                आ–आफ्नो दायित्व पुरा गरेको हुनु पर्नेछ ।
              </p>
              <p>
                ३१. प्रचलित कानून बमोजिम प्रथम पक्षले व्यवसाय सञ्चालनका लागि
                प्राप्त गरेको इजाजत, अनुमतिपत्र, सदस्यता खारेज भइ कारोबार गर्न
                अयोग्य भएमा यो सम्झौता स्वतः खारेज हुनेछ । यसरी सम्झौता खारेज भए
                पनि बाँकी बक्यौता फछ्र्यौट गर्नुपर्ने दायित्व दुवै पक्षको हुनेछ
                ।
              </p>
              <p>
                ३२. यस सम्झौताअनुसार प्रथम पक्षले दिने अथवा आवश्यक हुने कुनै पनि
                जनाउ वा सञ्चार तोकिएको माध्यमबाट दोस्रो पक्षको अद्यावधिक
                ठेगानामा पठाए पश्चात दोस्रो पक्षले जानकारी पाए सरह हनु ेछ ।
              </p>
              <p>
                ३३. सम्झौताका दुवै पक्षहरुले नेप्से अनलाइन कारोबार प्रणालीमा
                क्षति पु¥याउने कुनै पनि कार्य गर्ने छैनन् ।
              </p>
              <p>
                ३४. प्रथम पक्षले प्रचलित कानूनमा उल्लेख भएको अवस्थामा बाहेक
                दोस्रो पक्षको गोपनीयता कायम गर्नेछ ।
              </p>
              <p>
                ३५. पक्षहरुका बीचमा उत्पन्न हुनसक्ने विवाद तथा मतभिन्नताहरुको
                समाधान सकेसम्म आपसी सहमतिमा निराकरण गरिनेछ । आपसी सहमतीबाट
                समाधान गर्न नसकेमा धितोपत्र कारोबार सञ्चालन विनियमावली, २०७५ मा
                तोकिए बमोजिम बमोजिम हुनेछ ।
              </p>
              <p>
                ३६. दोस्रो पक्षले अनलाईन कारोबार सुविधा, एसएमएस सुबिधा लगायतका
                अन्य सुबिधा उपयोग गरे बापत तोकिएको शुल्क तिर्न मञ्जुर गर्दछ ।
                दोस्रो पक्षले उल्लिखित सुबिधाहरु प्राप्त गर्न हरेक आर्थिक बर्षमा
                नविकरण शुल्क तिर्नुपर्नेछ ।
              </p>
              <p>
                ३७. यो सम्झौतामा उल्लेख तथा व्याख्या नभएका विषय प्रचलित नेपाल
                कानूनद्वारा नियमन तथा व्याख्या हुनेछ ।
              </p>
              <p>
                ३८. कारोबार राफसाफ चक्र तथा अन्य नियम कानुन तथा निर्देशन
                परिवर्तन भएमा परिवर्तनको हद सम्म यस सम्झौतामा लेखिएका शर्तहरु
                स्वतस् परिवर्तन हुनेछ।
              </p>
              <p>
                ३९. यो सम्झौता दुवै पक्षले हस्ताक्षर गरेको मितिबाट
                .............................. सम्म कायम रहने छ र दुवै पक्षको
                सहमतीबाट सम्झौता पुनः नविकरण हुन सक्नेछ ।
              </p>
              <p>
                ४०. यो सम्झौता राम्ररी पढी, बुझी दुवै पक्ष हस्ताक्षर गर्न मञ्जुर
                गर्दछौं ।
              </p>
              <div className="col-6 col-md-6 col-sm-12">
                <h4 className="aggrement-header">सम्झौताका प्रथम पक्ष </h4>
                <p></p>
                {/* <p>व्यक्तिको नाम: {"  " + orgData && orgData?.name}</p> */}
                <p>दस्तखत: </p>
                <p>कम्पनीको छाप : </p>
              </div>
              <div className="col-6 col-md-6 col-sm-12">
                <h4 className="aggrement-header">
                  सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार प्राप्त){" "}
                </h4>
                {/* <p>व्यक्तिको नाम: {userData?.user?.name}</p> */}
                <p>दस्तखत: </p>
                <p>कम्पनीको छाप : </p>
                <div className="row my-4 justify-content-between">
                  <div
                    className="col-4 text-center text-capitalize border"
                    style={{ width: "10cm" }}
                  >
                    <div>
                      <div>
                        <p>औंठाछाप (Thumb Print)</p>
                      </div>
                    </div>

                    <div className="row col-6" style={{ width: "10cm" }}>
                      <div className="col-6 center-xy border">
                        <div style={{ height: "200px" }}>
                          {" "}
                          <p>दायाँ (right)</p>
                          {/* {userData?.clientDocument?.rightThumb &&
                            extraInfo && (
                              <img
                                width={"150px"}
                                height={"200px"}
                                src={
                                  getPicCoresPorxyURL() +
                                  userData?.clientDocument?.rightThumb
                                }
                              />
                            )} */}
                        </div>
                      </div>
                      <div className="col-6 center-xy border">
                        <div style={{ height: "200px" }}>
                          {" "}
                          <p>बायाँ (left)</p>
                          {/* {userData?.clientDocument?.leftThumb && extraInfo && (
                            <img
                              width={"150px"}
                              height={"200px"}
                              src={
                                getPicCoresPorxyURL() +
                                userData?.clientDocument?.leftThumb
                              }
                            />
                          )} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-2">
              <div className="row">
                <div className="col-6">
                  <p>साक्षी</p>
                  <p>१ ............................................ </p>
                </div>
                <div className="col-6">
                  <p>साक्षी</p>
                  <p>२ ............................................ </p>
                </div>
              </div>
              ईति सम्बत
              {/* {userData?.user?.approvedDate &&
                "  " + ADToBS(userData?.user?.approvedDate).split("-")[0] + " "}
              साल{" "}
              {userData?.user?.approvedDate &&
                "  " +
                  ADToBS(userData?.user?.approvedDate).split("-")[1] +
                  " "}{" "}
              महिना{" "}
              {userData?.user?.approvedDate &&
                "  " +
                  ADToBS(userData?.user?.approvedDate).split("-")[2] +
                  " "}{" "} */}
              गते रोज .................................शुभम्{" "}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CorporateTmsKyc;
