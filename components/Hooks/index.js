/**
 *
 * MIT License
 *
 * Copyright 2021 Shogun, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
 * OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  isBefore,
  isEqual,
} from "date-fns";
import * as React from "react";

/**
 * @returns {{scrollX: number, scrollY: number}}
 */
const useWindowScrollPositions = () => {
  const [scrollPosition, setPosition] = React.useState({
    scrollX: 0,
    scrollY: 0,
  });

  React.useEffect(() => {
    const updatePosition = () => {
      setPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

/** @type {number | undefined} */
let cachedHeaderHeight;

/**
 * @returns {number | undefined}
 */
export const useHeaderHeight = () => {
  /** @type [number | undefined, (height: number) => void] */
  const [headerHeight, setHeaderHeight] = React.useState();
  const { scrollY } = useWindowScrollPositions();

  React.useLayoutEffect(() => {
    const height =
      cachedHeaderHeight + scrollY ||
      document.getElementById("headerWrap")?.clientHeight + scrollY ||
      0;

    setHeaderHeight(height);
  }, [scrollY]);

  return headerHeight;
};

/**
 * @param {string} startsAt
 * @param {string} endsAt
 *
 * @returns {[number, number, number]}
 */
export const useTimerDifference = (startsAt, endsAt) => {
  return React.useMemo(() => {
    const [startsAtHours, startsAtMinutes] = startsAt?.split(":") || [];
    const startsAtDate = new Date();

    startsAtDate.setHours(
      !Number.isNaN(Number(startsAtHours)) ? Number(startsAtHours) : 0,
      !Number.isNaN(Number(startsAtMinutes)) ? Number(startsAtMinutes) : 0,
      0,
      0
    );

    const [endsAtHours, endsAtMinutes] = endsAt?.split(":") || [];
    const endsAtDate = new Date();

    endsAtDate.setHours(
      !Number.isNaN(Number(endsAtHours)) ? Number(endsAtHours) : 0,
      !Number.isNaN(Number(endsAtMinutes)) ? Number(endsAtMinutes) : 0,
      0,
      0
    );

    const currentDate = new Date();

    if (
      (isBefore(currentDate, endsAtDate) || isEqual(currentDate, endsAtDate)) &&
      (isBefore(startsAtDate, currentDate) ||
        isEqual(startsAtDate, currentDate))
    ) {
      return [
        differenceInHours(endsAtDate, currentDate),
        differenceInMinutes(endsAtDate, currentDate) % 60,
        differenceInSeconds(endsAtDate, currentDate) % 60,
      ];
    } else {
      return [0, 0, 0];
    }
  }, [startsAt, endsAt]);
};
