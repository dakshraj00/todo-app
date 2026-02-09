import express from 'express'
import pool from '../Database/db_connect.js'

const router = express.Router()

router.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()')
    res.json({
      success: true,
      postgresTime: result.rows[0]
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
