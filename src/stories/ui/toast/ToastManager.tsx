/**
 * oop class
 */

import React from "react";
import ReactDOM from "react-dom";
import Toast, { ToastProps } from "./Toast";

interface ToastOptions {
  id?: string;
  title: string;
  content: string;
  duration?: number;
}

export class ToastManager {
  private containerRef: HTMLDivElement;
  private toasts: ToastProps[] = [];

  constructor() {
    // body의 자식 컴포넌트로 토스트 돔 구성
    const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    const toastContainer = document.createElement("div") as HTMLDivElement;
    toastContainer.id = "toast-container-main";
    body.insertAdjacentElement("beforeend", toastContainer);
    // 돔 삽입
    this.containerRef = toastContainer;
    // 액션을 줄 토스트 돔의 ref 지정
  }

  public show(options: ToastOptions): void {
    const toastId = Math.random().toString(36).substr(2, 9);
    const toast: ToastProps = {
      id: toastId,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId),
      // 아이디값이 입력안됬다면 랜덤적인 아이디값으로 클릭으로 인한 토스트제거시 픽
    };
    this.toasts = [toast, ...this.toasts];
    // 기존의 떠있을수 있는 토스트를 유지하고 삽입
    this.render();
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    this.render();
  }

  private render(): void {
    const toastsList = this.toasts.map((toastProps: ToastProps) => (
      <Toast key={toastProps.id} {...toastProps} />
    ));
    ReactDOM.render(toastsList, this.containerRef);
  }
}

export const toast = new ToastManager();
