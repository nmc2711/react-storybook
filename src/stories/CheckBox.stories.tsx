import React, { useState, useEffect, useCallback } from "react";
import CheckBox from "./ui/CheckBox";

export default {
  title: "Custom-UI/Checkbox",
  component: CheckBox,
};

export const Default = () => {
  const [check, setCheck] = useState<boolean>(false);

  const changeCheckStatus = useCallback(() => {
    const checked = !check;

    setCheck(checked);
  }, [check]);

  return <CheckBox status={check} callback={changeCheckStatus} />;
};

export const MultipleCheckBox = () => {
  type exampleType = {
    id: number;
    checked: boolean;
    value: string;
  };

  const initData: Array<exampleType> = [
    { id: 1, checked: false, value: "one" },
    { id: 2, checked: false, value: "two" },
    { id: 3, checked: false, value: "three" },
    { id: 4, checked: false, value: "four" },
  ];

  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [example, setExample] = useState<Array<exampleType>>(initData);

  const allCheckCallback = () => {
    const checked = allCheck === true ? false : true;

    const copyForAllCheck = [...example];

    // change for check state

    copyForAllCheck.map((item) => {
      item.checked = !item.checked;
    });

    setAllCheck(checked);

    setExample(copyForAllCheck);
  };

  const multifulCheckCallback = (value: any) => {
    if (value !== undefined) {
      // 해당 체크박스 value
      const thisCheckbox = example.find((ex) => ex.value === value);
      // 해당 체크 박스를 제외한 나머지 항목
      const otherCheckbox = example.filter((ex) => ex.value != value);

      if (thisCheckbox !== undefined) {
        const multipleCheck = [
          ...otherCheckbox,
          { id: thisCheckbox.id, checked: !thisCheckbox.checked, value: value },
        ];

        multipleCheck.sort(function (a, b) {
          return a.id < b.id ? -1 : 1;
        });

        let allState = true;

        for (let index = 0; index < multipleCheck.length; index++) {
          if (multipleCheck[index].checked === false) allState = false;
        }
        setAllCheck(allState);

        setExample([...multipleCheck]);
      }
    }
  };

  return (
    <>
      <div>
        <div>all checkbox</div>
        <div>
          <CheckBox status={allCheck} callback={allCheckCallback} />
        </div>
        <div>checkbox</div>
      </div>
      {example.map((data, idx) => {
        const { checked } = data;
        return (
          <CheckBox
            key={`checkbox-${idx}`}
            status={checked}
            callback={() => multifulCheckCallback(data.value)}
          />
        );
      })}
    </>
  );
};

export const CheckSize = () => {
  const [check, setCheck] = useState<boolean>(false);

  const changeCheckStatus = useCallback(() => {
    const checked = check === true ? false : true;
    setCheck(checked);
  }, [check]);

  return <CheckBox status={check} callback={changeCheckStatus} size={50} />;
};

export const BackgroundColor = () => {
  const [check, setCheck] = useState<boolean>(false);

  const changeCheckStatus = useCallback(() => {
    const checked = check === true ? false : true;
    setCheck(checked);
  }, [check]);

  return (
    <CheckBox status={check} callback={changeCheckStatus} bgColor="#fff000" />
  );
};

export const LabelControl = () => {
  const [check, setCheck] = useState<boolean>(false);

  const changeCheckStatus = useCallback(() => {
    const checked = check === true ? false : true;
    setCheck(checked);
  }, [check]);

  return (
    <CheckBox
      status={check}
      callback={changeCheckStatus}
      label={{ text: "라벨테스트", id: "labeltest", position: "right" }}
    />
  );
};
