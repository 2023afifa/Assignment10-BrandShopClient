const BrandName = () => {
    
    const handleBrandName = e => {
        e.preventDefault();
        const form = e.target;
        const brandname = form.brandname.value;
        const image = form.image.value;

        const newBrandName = { brandname, image };

        fetch("http://localhost:5000/brands", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBrandName)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="m-20">
            <form onSubmit={handleBrandName}>
                <input type="text" name="brandname" placeholder="Brand" id="" className="border-2 mb-2" /><br />
                <input type="text" name="image" placeholder="Image" id="" className="border-2 mb-2" /><br />
                <input type="submit" value="Add Brand" /><br />
            </form>
        </div>
    );
};

export default BrandName;