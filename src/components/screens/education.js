import PropTypes from "prop-types";
import React from "react";

import {config} from "../../configs/config";
import useAPI from "../../hooks/useAPI";
import BasicDisplay from "../common/basicDisplay";
import NoData from "../common/nodata";
import OneLinerHeader from "../common/oneLinerHeader";

const Education = (props) => {
  const { data, loading, error, time } = useAPI(config.endpoints.EDUCATION);

  if (loading) return <NoData text={config.messages.PLZ_WAIT+', '+data.length} />;
  if (error) return <NoData text={config.messages.ERROR} />;

  return (
    <div>
      <OneLinerHeader title={props.title} />
      <BasicDisplay list={data}  time={time}/>
    </div>
  );
};
Education.propTypes = {
  title: PropTypes.string.isRequired,
};
export default React.memo(Education);
