import pool from "../../Database/db_connect.js";
export const gettodo=async(req,res)=>{
    const userId=req.user.id
    try {
        const result = await pool.query(
      'SELECT * FROM todos WHERE user_id = $1 ORDER BY created_at DESC',
      [userId]
    );
    res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}