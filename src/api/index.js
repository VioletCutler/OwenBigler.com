export async function apiHealth() {
  try {
    const response = await fetch(`http://localhost:1337/api/health`);
    console.log("API response :", response);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchImages() {
    try {
        const response = await fetch(`http://localhost:1337/api/images`, {
            headers : {
                'Content-Type': 'application/json'
            }
        })
        const { images } = await response.json();
        return images
    }
    catch(error) {
        console.error(error);
    }
}