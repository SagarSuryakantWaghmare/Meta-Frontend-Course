import React, { useState } from 'react';

function FeedBackForm() {
    const [ratingValue, setRatingValue] = useState(10);

    const handleChange = (e) => {
        setRatingValue(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Your feedback is sent to the cook! \nRating: ${ratingValue} 🌟`);
    };

    return (
        <>
            <div style={{
                backgroundColor: "#ffd700",
                color: "#4b4b4b",
                padding: "20px",
                textAlign: "center",
                borderRadius: "10px"
            }}>
                <h1>Feedback Form</h1>
                <p>We value your feedback! Please rate your experience below. 🌟</p>
            </div>
            <div style={{
                margin: "20px auto",
                maxWidth: "400px",
                padding: "20px",
                border: "2px solid #4b4b4b",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
            }}>
                <div style={{ marginBottom: "15px", textAlign: "center" }}>
                    <label
                        htmlFor="rating"
                        style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "#4b4b4b"
                        }}
                    >
                        Rating 🌟: {ratingValue}
                    </label>
                </div>
                <input
                    type="range"
                    id="rating"
                    onChange={handleChange}
                    max={10}
                    min={0}
                    value={ratingValue}
                    style={{
                        width: "100%",
                        margin: "10px 0",
                        accentColor: "#ffbf00"
                    }}
                />
                <button
                    onClick={handleSubmit}
                    style={{
                        width: "100%",
                        padding: "10px 15px",
                        backgroundColor: "#ffbf00",
                        color: "#4b4b4b",
                        border: "none",
                        borderRadius: "5px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "all 0.3s"
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#e6ac00")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#ffbf00")}
                >
                    Submit Feedback
                </button>
            </div>
        </>
    );
}

export default FeedBackForm;
