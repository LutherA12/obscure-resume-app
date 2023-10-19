import "./features.styles.scss";
import { Feature } from "../../components/componentExports";
import {
  FeaturesInfo,
  FeaturesDataOG,
} from "../../simpleConstants/simpleConstants";

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">{FeaturesInfo.heading}</h1>
        <p>{FeaturesInfo.subtext}</p>
      </div>

      <div className="gpt3__features-container">
        {FeaturesDataOG.map((featuresDataNG) => {
          return (
            <Feature
              title={featuresDataNG.title}
              text={featuresDataNG.text}
              key={Math.random()}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
