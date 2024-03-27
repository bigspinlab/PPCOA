import React from 'react';
import { useScreenSize } from './useScreenSize';

export const useDraggable = (containerRef: React.RefObject<HTMLDivElement>) => {
  const { isLargeAndUp } = useScreenSize();

  const handleMouseDown = React.useCallback(
    (e: React.MouseEvent) => {

      const ele = containerRef.current;
      if (!ele) {
        return;
      }
      const startPos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY
      };

      const handleMouseMove = (e: MouseEvent) => {
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        ele.scrollTop = startPos.top - dy;
        ele.scrollLeft = startPos.left - dx;
        updateCursor(ele);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        resetCursor(ele);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [containerRef]
  );

  const handleTouchStart = React.useCallback(
    (e: React.TouchEvent) => {

      const ele = containerRef.current;
      if (!ele) {
        return;
      }
      const touch = e.touches[0];
      const startPos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: touch.clientX,
        y: touch.clientY
      };

      const handleTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const dx = touch.clientX - startPos.x;
        const dy = touch.clientY - startPos.y;
        ele.scrollTop = startPos.top - dy;
        ele.scrollLeft = startPos.left - dx;
        updateCursor(ele);
      };

      const handleTouchEnd = () => {
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        resetCursor(ele);
      };

      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    },
    [containerRef]
  );

  const updateCursor = (ele: HTMLDivElement) => {
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
  };

  const resetCursor = (ele: HTMLDivElement) => {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
  };

  if (!isLargeAndUp) {
    return {
      handleMouseDown: undefined,
      handleTouchStart: undefined
    };
  }

  return {
    handleMouseDown,
    handleTouchStart
  };
};
