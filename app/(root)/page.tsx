import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

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
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123.5 }, { currentBalance: 500.0 }]}
        />
      </section>
    </div>
  );
};

export default Home;
