/** @format */

/**
 * Transforms an object into a form url encoded string
 * @param obj object containing data to transform
 * @returns string representation of the encoded object
 */
export function toFormUrlEncoded(obj: any): string {
  console.log(obj);

  let x = Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");

  console.log(x);

  return x;
}
