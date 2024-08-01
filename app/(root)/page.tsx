import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";
import RightSidebar from "@/components/RightsideBar";

const Home = () => {
  const loggedIn = {
    firstName: "Jacob",
    lastName: "Kahn",
    email: "yankikahn@gmail.com",
  };
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.firstName || "Guest"}
              subtext="Access and manage your account and transactions."
            />

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            />
          </header>
          RECENT TRANSACTIONS
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[]} />
      </section>
    </div>
  );
};

export default Home;
