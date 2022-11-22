import { useState } from "react"
import axios from "axios";

export const useShopping = () => {
  const [list, setList] = useState([]);

	const getShopping = () => {
		axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products').then(res => setList(res?.data))

	}

	return {getShopping, list}
}
