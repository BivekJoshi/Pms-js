import {
  Grid,
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
import DpMeroShare from "../DpMeroShare";
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
            trigger={() => <LocalPrintshopIcon />}
            content={() => componentRef.current}
            documentTitle="download.pdf"
            // pageStyle="print"
            // pageStyle='@page { margin: minimum }'
            copyStyles
            contentStyle={{
              marginTop: "0px",
            }}
          />
        </div>
        <div className="kyc-page mt-4" id="pdf" ref={componentRef}>
          {/* Header */}
          <section className="container pb-1">
            {/* <!-- Header section --> */}
            <header className="text-center" style={{ position: "relative" }}>
              <h2 className="">अनुसूची १२</h2>
              <p className="">(विनिमय २० संग सम्बन्धित)</p>
              <h2 className="text-decoration-underline fs18">
                प्राकृतिक व्यक्ति बाहेक अन्य संस्थाको हितग्राही खाता खोल्ने
                निवेदन
              </h2>
              <h3 className=" text-decoration-underline fs18">
                ACCOUNT OPENING FORM FOR CORPORATE BENEFICIAL OWNER
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
              <div className="row m-0 p-0">
                <div className="col-12  p-1 border border center-y">
                  कम्पनी वा संस्थाको हितग्राही खाता नं. (Company's BOID No.):
                  {/* {userData?.user?.boid && userData?.user?.boid} */}
                </div>
              </div>
              {/* )} */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p
                    className="my-2 mt-4 fs13"
                    style={{ fontSize: "15px", fontWeight: "600" }}
                  >
                    तल उल्लेखित सम्पूर्ण विवरण राम्रोसंग भर्नु पर्नेछ । आफूसंग
                    सरोकार नभएको विवरण उल्लेख गर्ने कोठामा तेर्सो धर्को तानिदिनु
                    होला ।
                  </p>

                  <p
                    className="mb-3 fs13"
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
                <div className="col-2 center-y ">
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
              <div className="col-7 border center-y ">
                <div>
                  हितग्राही कम्पनीको नाम (Name of Beneficial Owner Company)
                </div>
              </div>

              <div className="col-5 border center-y text-uppercase">
                <div className="letter-box-container">
                  {/* {corporateDetails?.companyName?.toUpperCase()}{" "} */}
                </div>
              </div>
              <div className="col-7 border center-y ">
                <div>
                  पहिलो आधिकारीक प्रतिनिधिको नाम (Name of First Authorized
                  Person)
                </div>
              </div>

              <div className="col-5  border center-y   ">
                {/* <div>{userData?.corporateBodDetails?.fcpName}</div> */}
              </div>
              <div className="col-7 border center-y ">
                <div>
                  दोश्रो आधिकारीक प्रतिनिधिको नाम (Name of Second Authorized
                  Person)
                </div>
              </div>

              <div className="col-5  border center-y   ">
                {/* <div>{userData?.corporateBodDetails?.scpName}</div> */}
              </div>

              <div className="col-7 border center-y ">
                <div>
                  तेस्रो आधिकारीक प्रतिनिधिको नाम (Name of Third Authorized
                  Person)
                </div>
              </div>

              <div className="col-5  border center-y   ">
                {/* <div>{userData?.corporateBodDetails?.trdName}</div> */}
              </div>
              <div className="col-7 border center-y ">
                <div>
                  प्रमुख आधिकारीक प्रतिनिधिको नाम(Chief Operating Officer&apos;s
                  Name)
                </div>
              </div>

              <div className="col-5  border center-y   ">
                {/* {corporateDetails?.companyCeoName?.toUpperCase()}*/}
              </div>
              <div className="col-7 border center-y ">
                <div>कम्पनी सचिवको नाम (Company Secretary&apos;s Name)</div>
              </div>

              <div className="col-5  border center-y   ">
                {/* <div>{userData?.companySecretaryName?.fcpName}</div> */}
              </div>
              {/* <!-- ! date of birth --> */}
              <div className="col-6 border  center-y">
                कम्पनी स्थापना मिति (Date of Incorporation)
              </div>

              <div className="col-6 border">
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

              <div className="col-8 border d-flex  gap-2">
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

            <div className="row m-0 p-0">
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

              <div className="col-7 col-md-6 border center-y ">
                <div>
                  सहायक कम्पनी भएमा मुख्य कम्पनीको नाम र ठेगाना ( Name and
                  Address of Main Company in case of Subsidiary Company Office)
                </div>
              </div>
              <div className="col-5 col-md-6 border center-y text-uppercase">
                <div className="letter-box-container">
                  {/* {corporateDetails?.isSubsidiary === true
                          ? corporateDetails?.mainCompanyName
                          : ""}, {corporateDetails?.isSubsidiary === true
                          ? userData?.corporateDetails?.address
                          : ""}*/}
                </div>
              </div>

              <div className="col-7 col-md-6 border center-y ">
                <div>
                  कम्पनीको व्‍यवसायको किसिम (Types of business of the company)
                </div>
              </div>
              <div className="col-5 col-md-6 border center-y   ">
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
          </section>
          {/* Company current Address */}
          <section className="container pb-1">
            <h2 className="text-center kyc-secondary-header">
              कम्पनीको हालको ठेगाना (Current Address of Company){" "}
            </h2>
            <div className="row m-0 p-0">
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

            <div className="row m-0 p-0">
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

            <div className="row m-0 p-0">
              {/* <!-- types of bank account --> */}
              <div className="col-6 col-md-5 border">
                बैंक खाताको किसिम (Types of Bank Account)
              </div>

              <div className="col-6 col-md-7 border d-flex justify-content gap-4">
                <div className="form-check">
                  <label className="form-check-label" htmlFor="saving_account">
                    बचत खाता
                  </label>
                  <label className="form-check-label" htmlFor="saving_account">
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
                  <label className="form-check-label" htmlFor="current_account">
                    चल्ती खाता
                  </label>
                  <label className="form-check-label" htmlFor="current_account">
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
              <div className="col-6 border">
                <div className="text-start">
                  निक्षेप सदस्यले हितग्राहिको खातामा भएको घटबढ स्वचालित रुपमा
                  गराउने/नगराउने (Standing Instruction for the automatic
                  transactions)
                </div>
              </div>
              <div
                className="col-6 border border center-y"
                style={{ gap: "1rem" }}
              >
                <div className="d-flex" style={{ gap: ".51rem" }}>
                  <input
                    type="radio"
                    readOnly
                    // checked={
                    //   userData?.boStatement
                    //     ?.isStandingInstructionForAutomaticTxn
                    // }
                  />
                  <div>गराउने (Yes)</div>
                </div>
                <div className="d-flex" style={{ gap: ".51rem" }}>
                  <input
                    type="radio"
                    readOnly
                    // checked={
                    //   !userData?.boStatement
                    //     ?.isStandingInstructionForAutomaticTxn
                    // }
                  />
                  <div>नगराउने (No)</div>
                </div>
              </div>
              {/* Account Statement */}
              <div className="col-4 border">
                <div className="text-start">
                  खाताको विवरण प्राप्त गर्ने (Account Statement)
                </div>
              </div>
              <div className="col-8 border center-y " style={{ gap: "1rem" }}>
                <div className="d-flex" style={{ gap: ".51rem" }}>
                  <input
                    type="radio"
                    readOnly
                    // checked={
                    //   userData?.boStatement?.accountStatementPeriod ===
                    //   "DAILY"
                    // }
                  />
                  <div>दैनिक (Daily)</div>
                </div>
                <div className="d-flex">
                  <input
                    type="radio"
                    readOnly
                    // checked={
                    //   userData?.boStatement?.accountStatementPeriod ===
                    //   "WEEKLY"
                    // }
                  />
                  <div className="m-2">
                    <div>साप्ताहिक (Weekly)</div>
                  </div>
                </div>
                <div className="d-flex">
                  <input
                    type="radio"
                    readOnly
                    // checked={
                    //   userData?.boStatement?.accountStatementPeriod ===
                    //   "15DAYS"
                    // }
                  />
                  <div className="m-2">
                    <div>पाक्षिक (15 days)</div>
                  </div>
                </div>
                <div className="d-flex">
                  <input
                    type="radio"
                    readOnly
                    // checked={
                    //   userData?.boStatement?.accountStatementPeriod ===
                    //   "MONTHLY"
                    // }
                  />
                  <div className="m-2">
                    <div>मासिक (Monthly)</div>
                  </div>
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
          {/* DPAGGREMENT */}
          <section className="container pb-5" >
            {/* <!-- Header section --> */}
            <header className="text-center">
              <h4 className=""> अनुसूची - १५ </h4>
              <p>(विनियम २० को उपविनियम ३ संग सम्बन्धित )</p>
              <p>(निक्षेप सदस्य र हितग्राही व्यक्ति वा संस्थाबीचको सम्झौता)</p>
            </header>
            <div className="mt-4 mb-0">
              <p className=" text-start aggrement-content mb-0">
                {/* {orgData?.address ? ( */}
                <span className="dotted-underline mt-3">
                  {/* {orgData?.address} */}
                </span>
                {/* ) : ( */}
                "..........................."
                {/* )}{" "} */}
                स्थित कार्यालय रहेको
                {/* {orgData !== undefined ? ( */}
                <span className="dotted-underline mt-3">
                  {/* {orgData?.name} */}
                </span>
                {/* ) : ( */}
                "..........................."
                {/* )} */}
                (वैधानिक अस्तित्व भएको निकायको विवरण) (यसपछि "सदस्य" भनिएको )
                प्रथम पक्ष र{/* {currentAddressDetails ? ( */}
                <span
                  className="dotted-underline mt-3"
                  style={{ textTransform: "capitalize" }}
                >
                  {/* {currentAddressDetails[0].province}{" "}
                    {currentAddressDetails[0]?.district} */}
                </span>
                {/* ) : ( */}
                "............................."
                {/* )}{" "} */}
                स्थित कार्यालय रहेको
                {/* {corporateDetails?.companyName ? ( */}
                <span className="dotted-underline mt-3">
                  {/* {corporateDetails?.companyName} */}
                </span>
                {/* ) : ( */}
                "............................."
                {/* )} */}
                (वैधानिक अस्तित्व भएको निकायको विवरण ) यसपछि ("हितग्राही" भनिएको
                ) दोस्रो पक्ष बीच देहायको शर्तहरु पालना गर्ने सहमतिसाथ यो
                सम्झौता गरिएको छ |
              </p>
            </div>
            <body className="body2" >
              <h6 className="aggrement-header">१.सामान्य प्रावधान </h6>
              <p className="mx-3 text-start  aggrement-content">
                {" "}
                यस सम्झौताका पक्षहरु धितोपत्रको केन्द्रिय निक्षेप सेवा नियमावली
                , २०६८ को व्यवस्था र सिडिएससिले समयसमयमा जारी गरेका विनियमलाई
                यसै सम्झौतामा उल्लेख भए सरह र यसै सम्झौताको हिस्साको रुपमा पालना
                गर्न सहमत छौ।{" "}
              </p>{" "}
              <h6 className="aggrement-header">२.रकम असुल उपर </h6>
              <p className="mx-3 text-start  aggrement-content">
                हितग्राही सदस्यलाई तिर्नुपर्ने रकम तोकिएको मितिभित्र बुझाउनु
                पर्नेछ ।
              </p>{" "}
              <h6 className="aggrement-header">
                ३.खाताको फाँटबारी (स्टेटमेन्ट){" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                सदस्यले अनलाइन मार्फत हितग्राहीलाई निजको खाताको फाँटबारी हेर्ने
                सुबिधा प्रदान गर्नेछ ।साथै हितग्राहीले आफ्नो धितोपत्रको फाँटबारी
                भौतिक रुपमा प्राप्त गर्न अनुरोध गरेमा सदस्यले सो समेत प्रदान
                गर्न सक्नेछ। तर यस अवधिमा कुनै कारोबार नभएमा खाताको फाँटबारी
                दिनु पर्ने छैन ।
              </p>{" "}
              <h6 className="aggrement-header">
                ४.विवरणमा भएका परिवर्तनहरुबारे हितग्राहीले सुचित गर्नुपर्ने{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                हितग्राहीले सुचित गरेको अवस्था बाहेक ,हितग्राहीले विवरणमा भएको
                परिवर्तन सदस्यलाई जानकारी नगराएको कारणबाट हितग्राहीलाई हुनसक्ने
                कुनै हानि उपर सदस्य उत्तरदायी वा जिम्मेवार हुनेछैन ।
              </p>{" "}
              <h6 className="aggrement-header">
                ५.हितग्राहीको दाबीप्रति निक्षेप सदस्य उत्तरदायी नहुने{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                सुरक्षणका लागि हितग्राहीको खाताबाट खर्च लेखिएको/क्रेडिट गरिएको
                तेस्रो पक्षका दाबी अदालत वा राजस्व निकायबाट तोकिएको वा माग भएको
                कुनै शुल्क,दस्तुर , कर प्रति सिडिएससि तथा सदस्य उत्तरदायी हुने
                छैन।न्जन
              </p>{" "}
              <h6 className="aggrement-header">
                ६.प्रत्येक हितग्राही निम्न कुरामा बिशेष रुपले जिम्मेवार हुनेछ{" "}
              </h6>
              <p className="mx-3 text-start  aggrement-content">
                (क)निक्षेप सदस्यसँग भएको सम्झौता र खाता खोल्दाका विवरणहरु तथा
                तथ्य सम्बन्धमा, <br />
                (ख )निक्षेप सदस्यसँग खाता खोल्दा पेश गरेको लिखतको आधिकारिकता र
                सत्यता सम्बन्धमा, <br />
                (ग )निक्षेप सदस्यबाट प्रत्येक कारोबार निर्देशन बमोजिम खाताबाट
                घटाएको र थपेको कुराको सुनिश्चित गर्ने, <br />
                (घ)हितग्राहीको खातामा भएको परिवर्तनका विवरण सम्बन्धमा जस्तै
                :ठेगाना ,बैंक विवरण स्थिति अख्तियारी ,आदेश मनोनयन दस्तखत आदि ,{" "}
                <br />
                (ङ्ग)कुनै पनि निष्काशित धितोपत्र खरिद गरेकोमा सो को सत्य विवरण।
              </p>{" "}
              <h6 className="aggrement-header">७.आधिकारिक प्रतिनिधि </h6>
              <p className="mx-3 text-start  aggrement-content">
                हितग्राही संगठित संस्था वा कानुनी व्यक्ति भएमा त्यस्तो संस्था वा
                व्यक्तिको तर्फबाट प्रतिनिधित्व गर्न अख्तियारप्राप्त व्यक्तिले
                सदस्यसँगको सम्झौता क्रियन्वित गर्नेछन ।प्रतिनिधिको हेरफेर वा
                अन्य कुनै किसिमको परिवर्तन भएमा हितग्राहीले सदस्यलाई तुरुन्त
                जानकारी गराउनेछ ।
              </p>{" "}
              <h6 className="aggrement-header">८.सम्झौता रद्ध गर्ने </h6>
              <p className="mx-3 text-start  aggrement-content">
                विनियमावली तथा संचालन निर्देशिकामा उल्लेख गरिएअनुसारका
                शर्तबन्देजको अधिनमा रही पक्षहरुले यो सम्झौता जुनसुकै समयमा रद्ध
                गर्न सक्नेछन ।कुनैपनि पक्षले सम्झौता रद्ध गरेमा हितग्राही को
                खातामा भएका धितोपत्रहरुलाई सोहि हितग्राहिको निर्देशन बमोजिम
                सदस्यले व्यवस्थापन गर्नेछ।
              </p>{" "}
              <h6 className="aggrement-header">९.काबु बाहिरको परिस्थिति </h6>
              <p className="mx-3 text-start  aggrement-content">
                यस सम्झौतामा वा विनियमावलीमा जुनसुकै कुरा लेखिएको भएतापनि आंधी
                ,तूफान ,बाढी,चटयांग ,भूइंचालो ,आगलागी ,बिस्फोटन वा दैवी प्रकोप
                ,युद्ध ,बिद्रोह ,क्रान्ति ,हुलदंगा ,निषेधाज्ञा ,नाकाबन्दी ,अवरोध
                ,दंगा,नागरिक कलह ,हड्ताल ,तालाबन्दी ,तोडफोड ,विध्वंश ,प्रणालीमा
                गडबडी ,अनाहक प्रवेश वा प्रतिकार गर्न नसकिने अन्य कुनै शक्ति वा
                बाध्यतालगायत काबु वा नियन्त्रणबाहिरका घटनाद्वारा यस सम्झौता
                अन्तर्गतको दायित्वमा कुनै कार्य सम्पादन नगरेको ,बिलम्ब गरेको वा
                उल्लङ्घन भएकोमा कुनै एक पक्षलाई हुन् गएको हानीनोक्शानी ,क्षतिको
                सोधभर्ना वा क्षतिपूर्ति दिन अर्को पक्ष उत्तरदायी हुने छैन ।
              </p>
              <h6 className="aggrement-header">१०.जनाउ </h6>
              <p className="mx-3 text-start  aggrement-content">
                यस सम्झौतामा दिईने अथवा आवश्यक हुने कुनै पनि जनाउ वा संचार लिखित
                रुपमा र प्रापकको हालसालको ठेगानामा नपठाएसम्म बन्धनकारी हुनेछैन ।
              </p>{" "}
              <h6 className="aggrement-header">११.विवादको समाधान </h6>
              <p className="mx-3 text-start  aggrement-content">
                पक्षहरुका बीचमा उत्पन्न हुन सक्ने विवाद तथा भिन्नताको सम्बन्धमा
                विनियमावलीमा तोकिएअनुसारको मध्यस्थता समितिको व्यवस्था यस
                सम्झौताका पक्षहरुलाई पनि लागू हुनेछ ।
              </p>{" "}
              <h6 className="aggrement-header">१२.नियमनकारी कानुन </h6>
              <p className="mx-3 text-start  aggrement-content">
                यो सम्झौता प्रचलित नेपालको कानुनद्वारा नियमन तथा व्याख्या हुनेछ।
              </p>
            </body>
            <footer className="my-3">
              <div className="row">
                <div className="col-6 ">
                  <h4 className="aggrement-header">सम्झौताका प्रथम पक्ष</h4>
                  <p></p>
                  <p>व्यक्तिको नाम:</p>
                  <p>दस्तखत: </p>
                  <p>कम्पनीको छाप : </p>
                </div>
                <div className="col-6 ">
                  <h4 className="aggrement-header">
                    सम्झौताका दोस्रो पक्ष (हितग्राहिको तर्फबाट अधिकार प्राप्त)
                  </h4>
                  {/* <p>व्यक्तिको नाम: {corporateDetails?.companyName}</p> */}
                  <p>दस्तखत: </p>
                  <p>कम्पनीको छाप : </p>
                </div>
              </div>
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
              <div className="my-2">
                ईति सम्बत .........................साल
                ........................... महिना
                ..................................गते रोज
                .................................शुभम्
              </div>
            </footer>
          </section>
          <section className="container pb-5">
            <DpMeroShare
            // applicantName={userData?.user?.name}
            // email={userData.user?.email}
            // mobileNo={userData.user?.phoneNo}
            // dpId={userData.user?.dpDetails?.dpId}
            // boid={userData.user?.boid}
            // addressDetails={permanentAddressDetails?.[0]}
            // date={userData.user?.submittedDate}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default CorporateTmsKyc;
