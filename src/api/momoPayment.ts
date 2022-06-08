import { toast } from "react-toastify";
import axios from "axios";

const REQUEST_BODY = {
  partnerCode: "MOMOX8O920220608",
  requestType: "captureWallet",
  ipnUrl: "http://localhost:4000/project/momo-payment",
  redirectUrl: "http://localhost:3000",
  orderId: "MM1540456472575",
  amount: 150000,
  lang: "vi",
  orderInfo: "Donate payment",
  requestId: "MM1540456472575",
  extraData: "",
  signature: "66f1e9088bfb1075433fb0a443fc485aafcda1ea3c2e99ee391e55495348036d",
};

const MOMO_ENDPOINT =
  "https://test-payment.momo.vn/gw_payment/transactionProcessor";
export const momoPayment = async () => {
  try {
    return await axios.post(
      `${MOMO_ENDPOINT}`,
      { ...REQUEST_BODY },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err: any) {
    toast.error(err);
  }
};
