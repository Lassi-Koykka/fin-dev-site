import type { ApiData } from "types"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
	return await fetch("http://localhost:5050").then(async res => (await res.json()) as ApiData)
}
