export async function fetchImages() {
    try {
        console.log('line 3')
        const response = await fetch(`../../images`, {
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