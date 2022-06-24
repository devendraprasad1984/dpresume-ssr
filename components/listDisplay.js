import React, { useEffect, useState } from "react";
import styles from "../styles/common.module.scss";
import getFromApi from "../apis/get";

const ListDisplay = ({ url, list }) => {
  const [pageData, setPageData] = useState([]);
  useEffect(() => {
    if (!url) return;
    getFromApi(url, (res) => {
      setPageData(res);
    });
  }, [url]);

  if (!pageData && url !== undefined) return null;
  if (pageData.length === 0 && url !== undefined) return null;

  const displayLines = (line, id) => {
    return (
      <li
        className={styles.bottomLine}
        key={`line-${id}`}
        dangerouslySetInnerHTML={{ __html: line }}
      ></li>
    );
  };

  return (
    <ul className={styles.ul}>
      {pageData.map((line, id) => {
        return displayLines(line, id);
      })}
      {list &&
        list?.length > 0 &&
        list?.map((line, id) => {
          return displayLines(line, id);
        })}
    </ul>
  );
};

export default ListDisplay;
