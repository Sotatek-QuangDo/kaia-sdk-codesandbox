import { Link } from "react-router";
import { RouteGroup } from "../../config/routesConfig";

type Props = {
  group: RouteGroup;
};

const RouteGroupBox = ({ group }: Props) => {
  return (
    <div className="box-button-router">
      <h3>{group.title}</h3>
      {group.routes.map((r) => (
        <div key={r.path}>
          <Link to={r.path}>{r.label}</Link>
        </div>
      ))}
    </div>
  );
};

export default RouteGroupBox;
