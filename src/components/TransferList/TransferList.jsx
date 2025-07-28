import { useState } from "react";
import "./TransferList.css";

const TransferList = () => {
  const [leftList, setLeftList] = useState([
    {
      key: "angular",
      Label: "Angular",
      checked: true,
    },
    {
      key: "solid",
      Label: "Solid JS",
      checked: false,
    },
    {
      key: "vue",
      Label: "Vue",
      checked: false,
    },
  ]);
  const [rightList, setRightList] = useState([
    {
      key: "svelte",
      Label: "Svelte JS",
      checked: false,
    },
    {
      key: "react",
      Label: "React",
      checked: false,
    },
  ]);

  const handleLeftListCheckboxChange = (il) => {
    setLeftList((prevCheckboxes) =>
      prevCheckboxes.map((item, i) =>
        i === il ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleRightListCheckboxChange = (ir) => {
    setRightList((prevCheckboxes) =>
      prevCheckboxes.map((item, i) =>
        i === ir ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const leftToRightCheckedTransfer = () => {
    const checkedList = [];
    const unCheckedList = [];

    leftList.forEach((ll) => {
      if (ll.checked) {
        checkedList.push(ll);
      } else {
        unCheckedList.push(ll);
      }
    });

    setLeftList(unCheckedList);
    setRightList((preList) => [
      ...preList,
      ...checkedList.map((cl) => ({ ...cl, checked: false })),
    ]);

    console.log({ leftList, rightList });
  };

  return (
    <div className="transfer-list">
      <div className="transfer-list-header">
        Javascript Libraries and Frameworks
      </div>
      <div className="transfer-list-main">
        <div className="left-list list-wrapper">
          <ul>
            {leftList.map((ll, il) => {
              return (
                <li key={`${ll.key}`}>
                  {" "}
                  <input
                    type="checkbox"
                    id={ll.key}
                    checked={ll.checked}
                    onChange={() => handleLeftListCheckboxChange(il)}
                  />{" "}
                  <label htmlFor={ll.key}>{ll.Label}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list-actions">
          <button className="action" onClick={leftToRightCheckedTransfer}>{">"}</button>
          <button className="action">{">>"}</button>
          <button className="action">{"<"}</button>
          <button className="action" >{"<<"}</button>
        </div>
        <div className="right-list list-wrapper">
          <ul>
            {rightList.map((ll, ir) => {
              return (
                <li key={ll.key}>
                  {" "}
                  <input
                    type="checkbox"
                    id={ll.key}
                    checked={ll.checked}
                    onChange={() => handleRightListCheckboxChange(ir)}
                  />{" "}
                  <label htmlFor={ll.key}>{ll.Label}</label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
