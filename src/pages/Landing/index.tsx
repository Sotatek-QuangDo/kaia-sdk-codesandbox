import { ReactElement } from "react";
import { sections } from "../../config/routesConfig";
import RouteGroupBox from "./RouteGroupBox";

const Index = (): ReactElement => {
  return (
    <div className="box-router">
      {sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <div className="box-container">
            {section.groups.map((group) => (
              <RouteGroupBox key={group.title} group={group} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
