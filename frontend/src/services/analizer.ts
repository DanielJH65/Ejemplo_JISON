export const fetchAnalize = async ({ input }: { input: string }) => {
  const res = await fetch("http://localhost:3001/interpreter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input,
    }),
  });
  const data = await res.json();
  const { console } = data;
  return console;
};
