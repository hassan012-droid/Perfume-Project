function Products() {
    return (
        <section className="products" id="products">
            <h2>Our Perfumes</h2>
            <div className="product-container">
                <div className="product-card">
                    <div className="perfume-image">🎀</div>
                    <h3>Royal Rose</h3>
                    <p>Elegant floral fragrance.</p>
                    <h4>₦15,000</h4>
                    <button>Buy Now</button>
                </div>
                <div className="product-card">
                    <div className="perfume-image">✨</div>
                    <h3>Golden Oud</h3>
                    <p>Rich and luxurios fragrance.</p>
                    <h4>₦20,000</h4>
                    <button>Buy Now</button>
                </div>
                <div className="product-card">
                    <div className="perfume-image">🧩</div>
                    <h3> Fresh Mist</h3>
                    <p>Fresh and refreshing scent.</p>
                    <h4>₦12,000</h4>
                    <button>Buy Now</button>
                </div>
            </div>
        </section>
    );
}
export default Products;