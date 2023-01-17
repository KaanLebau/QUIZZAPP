import { FaLinux, FaDocker, FaDatabase, FaCode } from "react-icons/fa";
import DataWidget from "../../widgets/dataWidget/DataWidget";
import RateWidget from "../../widgets/rateWidget/RateWidget";

import "./topicCardView.scss";

function TopicCardView(props) {
  return (
    <div className="topicCard">
      <div className="top">
        <div className="diff">
          <label htmlFor="" className="info">
            Easy
          </label>
          <RateWidget
            info={"Succes Rate"}
            data={
              (
                props.topic.easy.pass /
                (props.topic.easy.pass + props.topic.easy.failed)
              ).toFixed(2) * 100
            }
            noData={isNaN(
              props.topic.easy.pass /
                (props.topic.easy.pass + props.topic.easy.failed)
            )}
          />
          <RateWidget
            info={"Question Rate"}
            data={
              (
                props.topic.easy.correct /
                (props.topic.easy.correct +
                  props.topic.easy.wrong +
                  props.topic.easy.noAnswer)
              ).toFixed(2) * 100
            }
            noData={isNaN(
              props.topic.easy.correct /
                (props.topic.easy.correct +
                  props.topic.easy.wrong +
                  props.topic.easy.noAnswer)
            )}
          />
          <DataWidget
            info={"Total number of questions"}
            data={
              props.topic.easy.correct +
              props.topic.easy.wrong +
              props.topic.easy.noAnswer
            }
            noData={isNaN(
              props.topic.easy.correct +
                props.topic.easy.wrong +
                props.topic.easy.noAnswer
            )}
          />
        </div>
        <div className="diff">
          <label htmlFor="" className="info">
            Medium
          </label>
          <RateWidget
            info={"Succes Rate"}
            data={
              (
                props.topic.medium.pass /
                (props.topic.medium.pass + props.topic.medium.failed)
              ).toFixed(2) * 100
            }
            noData={isNaN(
              props.topic.medium.pass /
                (props.topic.medium.pass + props.topic.medium.failed)
            )}
          />
          <RateWidget
            info={"Question Rate"}
            data={
              (
                props.topic.medium.correct /
                (props.topic.medium.correct +
                  props.topic.medium.wrong +
                  props.topic.medium.noAnswer)
              ).toFixed(2) * 100
            }
            noData={isNaN(
              props.topic.medium.correct /
                (props.topic.medium.correct +
                  props.topic.medium.wrong +
                  props.topic.medium.noAnswer)
            )}
          />
          <DataWidget
            info={"Total number of questions"}
            data={
              props.topic.medium.correct +
              props.topic.medium.wrong +
              props.topic.medium.noAnswer
            }
            noData={false}
          />
        </div>
        <div className="diff">
          <label htmlFor="" className="info">
            Hard
          </label>
          <RateWidget
            info={"Succes Rate"}
            data={
              (
                props.topic.hard.pass /
                (props.topic.hard.pass + props.topic.hard.failed)
              ).toFixed(2) * 100
            }
            noData={isNaN(
              props.topic.medium.pass /
                (props.topic.hard.pass + props.topic.hard.failed)
            )}
          />
          <RateWidget
            info={"Question Rate"}
            data={
              (
                props.topic.hard.correct /
                (props.topic.hard.correct +
                  props.topic.hard.wrong +
                  props.topic.hard.noAnswer)
              ).toFixed(1) * 100
            }
            noData={isNaN(
              (
                props.topic.hard.correct /
                (props.topic.hard.correct +
                  props.topic.hard.wrong +
                  props.topic.hard.noAnswer)
              ).toFixed(2) * 100
            )}
          />
          <DataWidget
            info={"Total number of questions"}
            data={
              props.topic.hard.correct +
              props.topic.hard.wrong +
              props.topic.hard.noAnswer
            }
            noData={false}
          />
        </div>
      </div>
      <div className="bottom">
        <h1>{props.topic.easy.category}</h1>
        <h2></h2>
      </div>
    </div>
  );
}

export default TopicCardView;
