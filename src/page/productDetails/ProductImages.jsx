export default function ProductImages({ product }) {
  return (
    <div className="imgs-item w-[40%] m-auto">
      <div className="big-image">
        <img
          id="big-img"
          src={product.images[0]}
          alt={`${product.title}-image`}
          className="w-auto max-h-112.5 my-0 mx-auto "
        />
      </div>

      <div className="sm-image flex justify-between items-center cursor-pointer">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.title}-image-${index}`}
            className="w-[24%]! bg-gray-300 rounded py-2 max-h-45 object-cover  mt-10"
            onClick={() => (document.getElementById("big-img").src = img)}
          />
        ))}
      </div>
    </div>
  );
}
