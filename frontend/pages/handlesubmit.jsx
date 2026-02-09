import axios from "axios"
import { useNavigate } from "react-router-dom"
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault()

  if (password !== confirmPassword) {
    alert("Passwords do not match")
    return
  }

  try {
    const response = await axios.post(
      "http://localhost:8000/auth/register",
      {
        name,
        email,
        password,
      }
    )

    console.log("Backend says:", response.data)

    alert("Registered successfully")
    navigate("/login")
  } catch (error) {
    console.error(error.response?.data || error.message)
    alert("Registration failed")
  }
}
