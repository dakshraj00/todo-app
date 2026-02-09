import pool from '../../Database/db_connect.js';
import bcrypt from 'bcrypt'
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existing_user = await pool.query(
      'SELECT id FROM public.users WHERE email=$1',
      [email]
    );

    if (existing_user.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashed_password = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users (username, email, password_hash)
       VALUES ($1, $2, $3)`,
      [username, email, hashed_password] 
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
