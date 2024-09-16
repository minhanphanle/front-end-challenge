/**
 * SPA Client Side Routing and content swapping
 */

export async function fetchData() {
  const path = "starter-code/data.json";

  try {
    const res = await fetch(path);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (err) {
    console.error(error.message);
  }
}
