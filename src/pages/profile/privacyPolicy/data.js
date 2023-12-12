import { head } from "lodash";
 
export const policyData = [
  {
    id: 1,
    title: "Information We Collect",
    subTitle: "We may collect the following types of information: ",
    desc: [
      {
        head: "Personal Information",
        description:
          "This includes your name, email address, contact number, and other identifiable information provided voluntarily when you register or use our PMS. ",
      },
      {
        head: "Financial Information",
        description:
          "We may collect information about your financial assets, investment preferences, and transaction history to provide portfolio management services. ",
      },
    ],
    descOnly: null,
  },
  {
    id: 2,
    title: "How We Use Your Information",
    subTitle: "We use the collected information for the following purposes:  ",
    desc: [
      {
        head: "Providing Services",
        description:
          "To provide portfolio management services, including investment advice, asset allocation, and performance analysis. ",
      },
      {
        head: "Communication",
        description:
          "To communicate with you about your account, updates, and important notifications.",
      },
      {
        head: "Improvement",
        description:
          "To improve our services, user experience, and customer support based on your feedback. ",
      },
    ],
    descOnly: null,
  },
  {
    id: 3,
    title: "Information Sharing",
    subTitle: "We do not sell, trade, or otherwise transfer your personal or financial information to outside parties. However, we may share your information with trusted third parties who assist us in operating our PMS, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. ",
    desc: null,
    descOnly:
      "",
  },
  {
    id: 4,
    title: "Data Security",
    subTitle: "We implement a variety of security measures to maintain the safety of your personal and financial information. We use encryption, firewalls, and regular security reviews to safeguard your data. ",
    desc: null,
    descOnly:
      "",
  },
  {
    id: 4,
    title: "Your Choices",
    subTitle: "You can review and edit your personal information at any time by logging into your account. If you wish to delete your account, please contact us at e-mail: dgtrade.io tel: +01000.",
    desc: null,
    descOnly:
      "",
  },
];