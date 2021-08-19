import React, { useEffect, useState } from "react";

import "./Dashboard.css";

import ActivityBarChart from "../../components/ActivitiesCharts/ActivityBarChart";
import AverageSessionsCharts from "../../components/AverageSessionsCharts/AverageSessionsCharts";
import InfoCard from "../../components/InfoCard/InfoCard";
import PerformancesCharts from "../../components/PerformancesCharts/PerformancesCharts";
import ScoringCharts from "../../components/ScoringCharts/ScoringCharts";

import CalorieIcon from "../../assets/dashboard-icons/calorie-icon.svg";
import CarbIcon from "../../assets/dashboard-icons/carb-icon.svg";
import FatIcon from "../../assets/dashboard-icons/fat-icon.svg";
import ProteinIcon from "../../assets/dashboard-icons/protein-icon.svg";

import { getUserMainData } from "../../services/userService";

/**
 * Main page Dashboard
 * @param {Object} props look for match between path and URL
 */
function Dashboard(props) {
  const getId = props.match.params.id;
  const parseId = parseInt(getId, 10);

  const [currentUser, setCurrentUser] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (parseId !== undefined) {
      getUserMainData(parseId).then((userInformation) => {
        setIsError(!userInformation);
        setCurrentUser(userInformation);
      });
    }
  }, [parseId]);

  return (
    <div className="dashboard">
      {currentUser ? (
        <>
          <h1 className="dashboard__title">
            Bonjour <span className="dashboard__user-name">{currentUser.userInfos.firstName}</span>
          </h1>
          <h2 className="dashboard__subtitle"> Félicitation! vous avez explosé vos objectifs hier 👏</h2>
          <main className="dashboard__contain">
            <section className="dashboard__all-graph">
              <ActivityBarChart userId={parseId} />
              <div className="dashboard__mini-graph">
                <AverageSessionsCharts userId={parseId} />
                <PerformancesCharts userId={parseId} />
                <ScoringCharts userId={parseId} />
              </div>
            </section>
            <aside className="dashboard__card-information">
              <InfoCard
                src={CalorieIcon}
                title="Calories"
                data={`${currentUser.keyData.calorieCount}kcal`}
                type="Calories"
              />
              <InfoCard
                src={ProteinIcon}
                title="Protéines"
                data={`${currentUser.keyData.proteinCount}g`}
                type="Protéines"
              />
              <InfoCard
                src={CarbIcon}
                title="Glucides"
                data={`${currentUser.keyData.carbohydrateCount}g`}
                type="Glucides"
              />
              <InfoCard src={FatIcon} title="Lipides" data={`${currentUser.keyData.lipidCount}g`} type="Lipides" />
            </aside>
          </main>
        </>
      ) : isError ? (
        <span className="dashboard__error">Error : Aucune Correspondance d'utilisateur trouvée</span>
      ) : null}
    </div>
  );
}

export default Dashboard;
