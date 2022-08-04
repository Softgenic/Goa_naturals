import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./style.css";
import { TextField, InputAdornment, InputLabel } from "@mui/material";
import LockTwoToneIcon from "@mui/icons-material/LockTwoTone";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
const Index = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [verify, setVerify] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let email = searchParams.get("email");
    let verifyLink = searchParams.get("verificationLink");

    const requestParams = {
      email: email,
      verifyLink: verifyLink,
    };

    axios
      .post("http://localhost:5000/api/verifyEmail", requestParams)
      .then((response) => {
        if (response && response.status === 200) {
          console.log(response.data);
          if (response.data) {
            const data = response.data;
            alert(data.message);
            if (data.status === true) {
              setVerify(true);
            }
            //navigate("/");
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.status) {
          console.log(error.response.data.status);
        }
      });
  };

  return (
    <body className="body-sec">
      <div className="head-text">
        We're thrilled to have you here! Get ready to dive into your new
        account.
      </div>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td bgcolor="#FFA73B" align="center">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              className="table-sec1"
            >
              <tr>
                <td align="center" valign="top" className="table1-td-1">
                  {" "}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#FFA73B" align="center" className="table1-td-2">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              className="table-sec2"
            >
              <tr>
                <td
                  bgcolor="#ffffff"
                  align="center"
                  valign="top"
                  className="table2-td-1"
                >
                  <h1 className="welcome-text">Welcome!</h1>{" "}
                  <img
                    src=" https://img.icons8.com/clouds/100/000000/handshake.png"
                    width="125"
                    height="120"
                    className="welcome-img"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" className="table1-td-2">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              className="table-sec2"
            >
              {!verify && (
                <tr>
                  <td bgcolor="#ffffff" align="left" className="table3-td-1">
                    <p className="greeting-text">
                      We're excited to have you get started. First, you need to
                      confirm your account. Just press the button below.
                    </p>
                  </td>
                </tr>
              )}
              <tr>
                <td bgcolor="#ffffff" align="left">
                  <table
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <tr>
                      <td
                        bgcolor="#ffffff"
                        align="center"
                        className="table4-td-1"
                      >
                        <table border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td
                              align="center"
                              className="table5-td-1"
                              bgcolor="#FFA73B"
                            >
                              {verify && <div> Your email is verified...</div>}
                              {!verify && (
                                <button
                                  className="confirm-btn"
                                  onClick={handleSubmit}
                                >
                                  Confirm Account
                                </button>
                              )}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              {!verify && (
                <>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      className="table-main-td-3"
                    >
                      <p className="greeting-text">
                        If that doesn't work, contact us from the following link
                        in your browser:
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      className="table-main-td-4"
                    >
                      <p className="greeting-text">
                        <a href="#" target="_blank" className="contact-lnk">
                          http://localhost:3000/Contact-Us
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      className="table-main-td-5"
                    >
                      <p className="greeting-text">
                        If you have any questions, just reply to the
                        email&mdash;
                        <span className="contact-lnk">
                          goanatural2222@gmail.com
                        </span>
                        , we're always happy to help out.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      bgcolor="#ffffff"
                      align="left"
                      className="table-main-td-6"
                    >
                      <p className="greeting-text">
                        Cheers,
                        <br />
                        Goa Natural Team
                      </p>
                    </td>
                  </tr>
                </>
              )}
            </table>
          </td>
        </tr>
        <tr>
          <td bgcolor="#f4f4f4" align="center" className="table-main-td-7">
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              className="table-sec6"
            >
              <tr>
                <td bgcolor="#FFECD1" align="center" className="table6-td-1">
                  <h2 className="head-help">Need more help?</h2>
                  <p className="greeting-text">
                    <a href="#" target="_blank" className="help-lnk">
                      We&rsquo;re here to help you out
                    </a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        {/* <tr>
          <td
            bgcolor="#f4f4f4"
            align="center"
            className="padding: 0px 10px 0px 10px;"
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="100%"
              className="max-width: 600px;"
            >
              <tr>
                <td
                  bgcolor="#f4f4f4"
                  align="left"
                  className="padding: 0px 30px 30px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;"
                >
                  {" "}
                  <br />
                  <p className="margin: 0;">
                    If these emails get annoying, please feel free to{" "}
                    <a
                      href="#"
                      target="_blank"
                      className="color: #111111; font-weight: 700;"
                    >
                      unsubscribe
                    </a>
                    .
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr> */}
      </table>
    </body>
  );
};

export default Index;
