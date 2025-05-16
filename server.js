const { execSync } = require("child_process");
const port = process.env.PORT || 3000;

try {
  // Usa next start con la porta corretta
  execSync(`npx next start -p ${port}`, { stdio: "inherit" });
} catch (err) {
  console.error("Failed to start Next.js:", err);
  process.exit(1);
}
