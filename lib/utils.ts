import { type ClassValue, clsx } from 'clsx';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

export const getImageUrl = (
  id: number | string,
  width: string | number = 326,
  height: string | number = 142,
): string => {
  return `https://via.assets.so/game.png?id=${id}&q=95&w=${width}&h=${height}&fit=cover`;
};

export function camelToSnake(obj: any): any {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => camelToSnake(item));
  }

  const snakeObj: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = key.replace(
        /[A-Z]/g,
        (letter) => `_${letter.toLowerCase()}`,
      );
      snakeObj[snakeKey] = camelToSnake(obj[key]);
    }
  }
  return snakeObj;
}
export const snakeToCamel = (data: any): any => {
  const convertToCamelCase = (input: any): any => {
    if (Array.isArray(input)) {
      return input.map((item) => convertToCamelCase(item));
    } else if (typeof input === 'object' && input !== null) {
      const converted: any = {};
      Object.keys(input).forEach((key) => {
        const camelKey = key.replace(/([-_][a-z])/g, (group) =>
          group.toUpperCase().replace('-', '').replace('_', ''),
        );
        converted[camelKey] = convertToCamelCase(input[key]);
      });
      return converted;
    }
    return input;
  };

  return convertToCamelCase(data);
};

export function getFormattedDateFromTimestamp(timestamp: string, locale = 'en-US') {
  try {
    // Create a Date object from the timestamp
    const date = new Date(timestamp);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error('Invalid timestamp');
    }

    // Use Intl.DateTimeFormat to format the date
    const options: Record<string, string> = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

    return formattedDate;
  } catch (error: any) {
    console.error(`Error formatting date: ${error.message}`);
    return null;
  }
}
