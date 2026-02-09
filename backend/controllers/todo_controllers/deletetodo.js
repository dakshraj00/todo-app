import pool from "../../Database/db_connect.js";
export const deleteTodo = async (req, res) => {

  const userId = req.user.id;
  const todoId = req.params.id;

  try {
    const result = await pool.query(
      'DELETE FROM todos WHERE id = $1 AND user_id = $2 RETURNING *',
      [todoId, userId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    
    res.json({ message: "Todo deleted" });
   
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
