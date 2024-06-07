const { Resend } = require("resend");

async function sendEmailMessage(req, productId) {
  const resend = new Resend(process.env.RESEND_APIKEY);
  const response = await resend.emails.send({
    from: `${process.env.RESEND_API_DOMAIN}`,
    to: [`${req.body.client.email}`],
    bcc: [`${process.env.MY_EMAIL}`],
    subject: "Purchase confirmation",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html dir="ltr" lang="en">
          <head>
          <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
          <meta name="x-apple-disable-message-reformatting" />
          </head>
          <body
          style="
            background-color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
          "
          >
          <table
            align="center"
            width="100%"
            border="0"
            cellpadding="0"
            cellspacing="0"
            role="presentation"
            style="max-width: 37.5em"
          >
            <tbody>
              <tr style="width: 100%">
                <td>
                  <table
                    align="center"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="padding: 30px 20px"
                  >
                    <tbody>
                      <tr>
                        <td style="text-align: center">
                          <h1 style="font-size: 1.5rem; font-weight: bold; margin: 0">
                            Thank you for trusting Veloster!
                          </h1>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    width="100%"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                    style="
                      border: 1px solid rgba(0, 0, 0, 0.1);
                      border-radius: 3px;
                      overflow: hidden;
                    "
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                          >
                            <tbody style="width: 100%">
                              <tr style="width: 100%">
                                <td style="text-align: center">
                                  <img
                                    src="https://res.cloudinary.com/dygktir99/image/upload/f_auto,q_auto/qz4by7efbal2glnc9txz"
                                    style="
                                      display: block;
                                      outline: none;
                                      border: none;
                                      text-decoration: none;
                                      border-radius: 20%;
                                      margin: 20px auto;
                                    "
                                    width="100"
                                    height="100"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="padding: 20px; padding-bottom: 0"
                          >
                            <tbody style="width: 100%">
                              <tr style="width: 100%">
                                <td
                                  data-id="__react-email-column"
                                  style="padding: 10px 20px"
                                >
                                  <p
                                    style="
                                      font-size: 16px;
                                      line-height: 24px;
                                      text-align: center;
                                      margin: 0;
                                    "
                                  >
                                    We are preparing your order
                                  </p>
                                  <p
                                    style="
                                      font-size: 18px;
                                      line-height: 24px;
                                      text-align: left;
                                      font-weight: bold;
                                      margin: 20px 0;
                                    "
                                  >
                                    Order ID ${1232332}
                                  </p>
                                  <div
                                    style="
                                      background: #ebebeb;
                                      border-radius: 10px;
                                      padding: 10px;
                                      margin: 10px 0;
                                    "
                                  >
                                    <h3 style="font-size: 18px; margin-top: 0">
                                      Purchase Info
                                    </h3>
                                    <p style="margin: 5px 0">
                                      <b>Model:</b> ${
                                        req.body.paymentInfo.carsName
                                      }
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Price:</b> ${
                                        req.body.paymentInfo.price
                                      }
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Quantity:</b>
                                      ${req.body.paymentInfo.quantity}
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Delivery:</b> ${
                                        req.body.paymentInfo.fee
                                      }
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Fee:</b> ${req.body.paymentInfo.fee}
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Payment Method:</b>
                                      ${req.body.paymentInfo.method}
                                    </p>
                                  </div>
                                  <div
                                    style="
                                      background: #ebebeb;
                                      border-radius: 10px;
                                      padding: 10px;
                                      margin: 10px 0;
                                    "
                                  >
                                    <h3 style="font-size: 18px; margin-top: 0">
                                      Recipient Information
                                    </h3>
                                    <p style="margin: 5px 0">
                                      <b>Name:</b> ${req.body.client.name}
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Phone:</b> ${req.body.client.phone}
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Email:</b> ${req.body.client.email}
                                    </p>
                                    <p style="margin: 5px 0">
                                      <b>Address:</b> ${req.body.client.address}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table
                            align="center"
                            width="100%"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            role="presentation"
                            style="padding: 20px; padding-top: 0"
                          >
                            <tbody style="width: 100%">
                              <tr style="width: 100%">
                                <td
                                  colspan="2"
                                  data-id="__react-email-column"
                                  style="text-align: center; width: 100%;"
                                >
                                  <center>
                                    <a 
                                    href="https://wa.me/+5521989024326?text=Hello, my name is ${
                                      req.body.client.name
                                    }! I would like to know more about my order! Order ID: ${productId}"
                                      style="
                                        line-height: 100%;
                                        text-decoration: none;
                                        display: inline-block;
                                        max-width: 100%;
                                        background-color: #5f0505;
                                        border-radius: 6px;
                                        color: #fff;
                                        font-weight: bold;
                                        border: 1px solid rgba(0, 0, 0, 0.1);
                                        cursor: pointer;
                                        padding: 12px 30px;
                                        text-align: center;
                                      "
                                      target="_blank"
                                    >
                                      <span
                                        ><!--[if mso
                                          ]><i
                                            style="
                                              letter-spacing: 30px;
                                              mso-font-width: -100%;
                                              mso-text-raise: 18;
                                            "
                                            hidden
                                            >&nbsp;</i
                                          ><!
                                        [endif]--></span
                                      >
                                      <span
                                        style="
                                          max-width: 100%;
                                          display: inline-block;
                                          line-height: 120%;
                                          mso-padding-alt: 0px;
                                          mso-text-raise: 9px;
                                        "
                                        >View Order</span
                                      >
                                      <span
                                        ><!--[if mso
                                          ]><i
                                            style="
                                              letter-spacing: 30px;
                                              mso-font-width: -100%;
                                            "
                                            hidden
                                            >&nbsp;</i
                                          ><!
                                        [endif]--></span
                                      >
                                    </a>
                                  </center>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    style="
                      font-size: 12px;
                      line-height: 24px;
                      margin: 16px 0;
                      text-align: center;
                      color: rgba(0, 0, 0, 0.7);
                    "
                  >
                    © 2024 | Veloster Inc 2023, Capitol Hill, Salt Lake City, UT, USA
                  </p>
                </td>
              </tr>
            </tbody>
      </table>
      </body>
      </html>

     `,
  });

  return response;
}

module.exports = sendEmailMessage;
