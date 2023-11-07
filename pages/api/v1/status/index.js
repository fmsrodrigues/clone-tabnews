import database from "../../../../infra/database"

async function status(req, res) {
  const result = await database.query("SELECT 1 + 1 as sum;")
  console.log(result.rows)
  return res.status(200).send({ message: "Running..." })
}

export default status