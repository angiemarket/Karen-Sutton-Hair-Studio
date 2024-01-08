import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { UserContext } from "../../contexts/user.context";

import Loading from "../../components/loading/loading.component";
import Footer from "../../components/footer/footer.component";

import "./account-history.styles.scss";

const AccountHistoryPage = () => {
  const [orderHistory, setOrderHistory] = useState([
    {
      orderId: uuidv4(),
      dateCreated: new Date().toLocaleDateString(),
      paymentStatus: "Paid",
      total: 35,
    },
  ]);
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);

    const redirectIfNotAuth = async () => {
      navigate("/");
    };

    // const timer = setTimeout(() => {}, 2000);

    // if (!currentUser?.email) {
    //   redirectIfNotAuth();
    // }

    // return () => clearTimeout(timer);
  }, [currentUser]);

  const columns = ["Order ID", "Date", "Payment Status", "Total", ""];

  if (!currentUser) return <Loading />;

  return (
    <>
      <div className="account-history-page">
        <div className="manage-store-container">
          <h1>Account History</h1>
          <div className="email-container">
            <p className="email">{currentUser?.email}</p>
          </div>

          {orderHistory.length > 0 ? (
            <div className="table">
              <div className="thead">
                {columns?.map((column, i) => (
                  <div key={i}>{column}</div>
                ))}
              </div>
              {orderHistory?.map((order) => (
                <div className="tbody" key={order.orderId}>
                  <div className="order-id">{order.orderId}</div>
                  <div>{order.dateCreated}</div>
                  <div>{order.paymentStatus}</div>
                  <div className="price">${order.total}.00</div>
                  <div className="link">See details</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-container">
              <h2>You have not made any purchases yet</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountHistoryPage;
