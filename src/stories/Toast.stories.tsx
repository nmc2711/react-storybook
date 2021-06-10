import React, { useState, useEffect, useCallback } from "react";
import { toast } from "./ui/toast/ToastManager";

export default {
  title: "Custom-UI/Toast",
};

export const Default = () => {
  return (
    <button
      onClick={() =>
        toast.show({
          title: "토스트제목영역",
          content: "토스트컨텐츠영역",
          duration: 3000,
        })
      }
    >
      토스트보기
    </button>
  );
};
