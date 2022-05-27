import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
export default function FeaturedInfo() {
  return (
    <div class="featured">
      <div className="featuredItem shadow">
        <span className="featuredTitle">Users</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
          <TrendingDownIcon className="featuredIcon negative" />
             -11.4 
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
      <div className="featuredItem shadow">
        <span className="featuredTitle">Notice</span>
        <div className="featureMoneyContainer">
          <span className="featuredMoney">$4,415</span>
            
          <span className="featuredMoneyRate">
          <TrendingUpIcon className="featuredIcon " /> +2.4
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>
     
    </div>
  );
}
