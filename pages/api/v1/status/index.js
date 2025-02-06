import database from "infra/database";

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1;");
  res.status(200).json({ data: result.rows });
}

export default status;
