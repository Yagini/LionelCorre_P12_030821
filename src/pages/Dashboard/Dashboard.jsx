import React from "react";
//import { useParams } from "react-router";
import ActivityBarChart from "../../components/ActivitiesCharts/ActitivityBarChart";
import InfoCard from "../../components/InfoCard/InfoCard";
import AverageSessionsCharts from "../../components/AverageSessionsCharts/AverageSessionsCharts";
import PerformancesCharts from "../../components/PerformancesCharts/PerformancesCharts";
import ScoringCharts from "../../components/ScoringCharts/ScoringCharts";

import CalorieIcon from "../../assets/dashboard-icons/calorie-icon.svg";
import CarbIcon from "../../assets/dashboard-icons/carb-icon.svg";
import FatIcon from "../../assets/dashboard-icons/fat-icon.svg";
import ProteinIcon from "../../assets/dashboard-icons/protein-icon.svg";

import "./Dashboard.css";
import { USER_MAIN_DATA } from "../../datas/data";

function Dashboard(props) {
  const getId = props.match.params.id;
  const parseId = parseInt(getId, 10);
  const currentUser = USER_MAIN_DATA.find((user) => user.id === parseId);
  const { userInfos, keyData } = currentUser;

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">
        Bonjour <span className="dashboard__user-name">{userInfos.firstName}</span>
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
          <InfoCard src={CalorieIcon} title="Calories" data={`${keyData.calorieCount}kcal`} type="Calories" />
          <InfoCard src={ProteinIcon} title="Protéines" data={`${keyData.proteinCount}g`} type="Protéines" />
          <InfoCard src={CarbIcon} title="Glucides" data={`${keyData.carbohydrateCount}g`} type="Glucides" />
          <InfoCard src={FatIcon} title="Lipides" data={`${keyData.lipidCount}g`} type="Lipides" />
        </aside>
      </main>
    </div>
  );
}

export default Dashboard;
