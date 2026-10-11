export function submitLanding(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email.includes("fail")) {
        reject(new Error("Simulated failure"));
        return;
      }

      resolve({ ok: true });
    }, 1500);
  });
}
