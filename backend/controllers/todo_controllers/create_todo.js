import pool from "../../Database/db_connect.js";

export const createtodo=async(req,res)=>{
    const {title}=req.body
    const user_id=req.user.id

    try {
        const result=await pool.query(
            `insert into todos (user_id,title)
            values ($1,$2)
            returning *`,
            [user_id,title]
        );
        res.status(201).json(result.rows[0]);
 
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'server error'})
    }
}